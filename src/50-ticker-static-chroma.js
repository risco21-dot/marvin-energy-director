// Marvin ticker permanent chromatic fringe v1.
// Static paint only: keeps the existing transform-based ticker animation.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinTickerStaticChromaV1) return;
  Card.prototype.__marvinTickerStaticChromaV1 = true;
  const inject = (card) => {const root = card.shadowRoot;if (!root || root.querySelector('#marvin-ticker-static-chroma-v1')) return;const style = document.createElement('style');style.id = 'marvin-ticker-static-chroma-v1';style.textContent = `.msg .nc-body{color:#effdff!important;text-shadow:-1px 0 0 rgba(38,191,255,.62),1px 0 0 rgba(255,79,216,.52),0 0 3px rgba(216,251,255,.22)!important}.msg .nc-time{text-shadow:-1px 0 0 rgba(38,191,255,.48),1px 0 0 rgba(255,79,216,.42),0 0 6px rgba(252,238,10,.62)!important}.msg .nc-agent{text-shadow:-1px 0 0 rgba(252,238,10,.34),1px 0 0 rgba(255,79,216,.48),0 0 6px rgba(38,191,255,.62)!important}.msg .nc-slash,.msg .nc-colon{text-shadow:-1px 0 0 rgba(38,191,255,.48),1px 0 0 rgba(252,238,10,.34),0 0 6px rgba(255,79,216,.58)!important}.msg,.msg.scroll,.msg.scroll>span{filter:none!important}`;root.appendChild(style);};
  const originalBuild = Card.prototype._build;Card.prototype._build = function() {originalBuild.call(this);inject(this);};const originalUpdate = Card.prototype._update;Card.prototype._update = function() {originalUpdate.call(this);inject(this);};
});
