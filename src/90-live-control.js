// Marvin Live Control battery-mode indicator v2.
// Mirrors the actual Marvin Live Control entity icon (mdi:robot-industrial).
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinLiveControlIndicatorV2) return;
  Card.prototype.__marvinLiveControlIndicatorV2 = true;

  const css = `
    .battery .mode-cluster{display:inline-flex;align-items:center;gap:4px;margin-left:auto;white-space:nowrap}
    .battery .live-control{
      width:19px;height:19px;display:grid;place-items:center;flex:0 0 19px;
      border:1px solid rgba(255,51,95,.42);background:rgba(255,51,95,.055);
      clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);
      color:#8a5360;box-shadow:inset 0 0 6px rgba(255,51,95,.06);
    }
    .battery .live-control ha-icon{--mdc-icon-size:13px;color:currentColor;filter:drop-shadow(0 0 3px currentColor)}
    .battery .live-control.on{
      color:#39ff88;border-color:rgba(57,255,136,.74);background:rgba(57,255,136,.09);
      box-shadow:0 0 6px rgba(57,255,136,.34),inset 0 0 7px rgba(57,255,136,.10);
    }
    .battery .live-control.off{color:#ff335f;border-color:rgba(255,51,95,.58)}
    @media(max-width:365px){.battery .mode-cluster{gap:3px}.battery .live-control{width:17px;height:17px;flex-basis:17px}.battery .live-control ha-icon{--mdc-icon-size:12px}}
  `;

  const ensure = (card) => {
    const root = card.shadowRoot;
    const head = root?.querySelector('.battery .bhead');
    const mode = root?.querySelector('.battery #mode');
    if (!root || !head || !mode) return null;

    root.querySelector('#marvin-live-control-style-v1')?.remove();
    if (!root.querySelector('#marvin-live-control-style-v2')) {
      const style = document.createElement('style');
      style.id = 'marvin-live-control-style-v2';
      style.textContent = css;
      root.appendChild(style);
    }

    let cluster = head.querySelector('.mode-cluster');
    if (!cluster) {
      cluster = document.createElement('span');
      cluster.className = 'mode-cluster';
      mode.parentNode.insertBefore(cluster, mode);
      cluster.appendChild(mode);
    }

    let live = cluster.querySelector('.live-control');
    if (!live) {
      live = document.createElement('span');
      live.id = 'live-control-icon';
      live.className = 'live-control off';
      cluster.insertBefore(live, mode);
    }
    live.innerHTML = '<ha-icon icon="mdi:robot-industrial"></ha-icon>';
    return live;
  };

  const paint = (card) => {
    const live = ensure(card);
    if (!live) return;
    const on = card._s('input_boolean.energy_director_live')?.state === 'on';
    live.classList.toggle('on', on);
    live.classList.toggle('off', !on);
    live.setAttribute('aria-label', `Marvin Live Control ${on ? 'On' : 'Off'}`);
    live.title = `Marvin Live Control: ${on ? 'ON' : 'OFF'}`;
  };

  const originalBuild = Card.prototype._build;
  Card.prototype._build = function() {
    originalBuild.call(this);
    paint(this);
  };

  const originalUpdate = Card.prototype._update;
  Card.prototype._update = function() {
    originalUpdate.call(this);
    paint(this);
  };

  const hassDescriptor = Object.getOwnPropertyDescriptor(Card.prototype, 'hass');
  const originalSet = hassDescriptor?.set;
  if (originalSet) {
    Object.defineProperty(Card.prototype, 'hass', {
      configurable: true,
      enumerable: hassDescriptor.enumerable,
      get: hassDescriptor.get,
      set(hass) {
        const before = this._hass?.states?.['input_boolean.energy_director_live'];
        originalSet.call(this, hass);
        const after = hass?.states?.['input_boolean.energy_director_live'];
        if (before !== after) paint(this);
      }
    });
  }
});
