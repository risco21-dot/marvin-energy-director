// Marvin ticker speed normalization v1.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinTickerSpeedV1) return;
  Card.prototype.__marvinTickerSpeedV1 = true;
  const originalUpdate = Card.prototype._update;
  Card.prototype._update = function() {originalUpdate.call(this);const msg = this.shadowRoot?.querySelector('#msg');if (!msg || !msg.classList.contains('scroll')) return;const line = msg.querySelector(':scope > span');const len = (line?.textContent || msg.textContent || '').trim().length;const dur = Math.min(32, Math.max(16, len * 0.24));msg.style.setProperty('--dur', `${dur.toFixed(1)}s`);};
});
