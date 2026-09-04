// Marvin battery center marker v8 + unified SECURITY://NET visual chassis.
// Performance-safe: one-time DOM grouping, static panel styling, no camera-pan animation.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinBatterySecurityIdentityV8) return;
  Card.prototype.__marvinBatterySecurityIdentityV8 = true;

  const css = `
    /* BATTERY PANEL: darker left chassis + green energy identity. */
    .battery{
      border-left:2px solid #39ff88!important;
      background:
        linear-gradient(90deg,rgba(0,0,0,.70) 0%,rgba(0,0,0,.48) 16%,rgba(0,0,0,.22) 34%,rgba(0,0,0,.06) 52%,transparent 64%),
        repeating-linear-gradient(180deg,rgba(57,255,136,.075) 0 1px,transparent 1px 8px),
        radial-gradient(circle at 24% 48%,rgba(57,255,136,.15),transparent 34%),
        linear-gradient(145deg,rgba(3,8,20,.99) 0%,rgba(7,21,42,.99) 48%,rgba(24,10,39,.98) 100%)!important;
    }

    /* THERMOSTAT PANEL: stronger electric-blue chassis identity. */
    .thermo{
      border-left:2px solid #26bfff!important;
      border-color:rgba(38,191,255,.78)!important;
      background:
        repeating-linear-gradient(180deg,rgba(38,191,255,.065) 0 1px,transparent 1px 8px),
        radial-gradient(circle at 15% 38%,rgba(38,191,255,.27),transparent 36%),
        linear-gradient(112deg,rgba(0,5,18,.99) 0%,rgba(0,31,82,.99) 52%,rgba(2,12,42,.99) 100%)!important;
    }

    /* Battery zero-flow reference. */
    .battery .slider{isolation:isolate!important}
    .battery .slider:before{
      content:'';position:absolute;z-index:8;left:50%;top:50%;width:8px;height:8px;
      transform:translate3d(-50%,-50%,0) rotate(45deg);background:#fcee0a;border:1px solid #fffbd0;
      box-shadow:-1px 1px 0 rgba(38,191,255,.42),1px -1px 0 rgba(255,79,216,.38),0 0 4px rgba(252,238,10,.56);
      pointer-events:none;backface-visibility:hidden;
    }
    .battery .slider:after{
      content:'';position:absolute;z-index:9;left:50%;top:50%;width:2px;height:2px;
      transform:translate3d(-50%,-50%,0);background:#fff;pointer-events:none;
    }

    /* UNIFIED NETRUNNER SECURITY CHASSIS */
    .security-net{
      grid-column:span 7;position:relative;display:grid;grid-template-columns:1fr;grid-template-rows:18px auto auto;
      gap:0;min-width:0;overflow:hidden;isolation:isolate;contain:paint;
      border:1px solid rgba(252,238,10,.56);border-left:3px solid #fcee0a;border-radius:10px;
      clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
      background:
        linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.38) 22%,transparent 52%),
        repeating-linear-gradient(180deg,rgba(38,191,255,.028) 0 1px,transparent 1px 7px),
        radial-gradient(circle at 10% 22%,rgba(252,238,10,.12),transparent 25%),
        radial-gradient(circle at 76% 12%,rgba(38,191,255,.11),transparent 30%),
        radial-gradient(circle at 94% 82%,rgba(255,79,216,.09),transparent 27%),
        linear-gradient(135deg,#010205 0%,#020811 48%,#07151a 76%,#100717 100%);
      box-shadow:0 0 12px rgba(252,238,10,.12),0 0 18px rgba(38,191,255,.08),inset 0 0 20px rgba(38,191,255,.035);
    }
    .security-net:after{
      content:'';position:absolute;z-index:12;left:0;top:0;width:22%;height:2px;pointer-events:none;
      background:linear-gradient(90deg,transparent,#fcee0a 18%,#fffbd0 48%,#26bfff 68%,#ff4fd8 84%,transparent);
      box-shadow:0 0 7px rgba(252,238,10,.60);animation:f-edge-run 5.4s linear infinite;
    }
    .security-net-head{
      position:relative;z-index:4;display:flex;align-items:center;gap:6px;padding:0 7px;
      border-bottom:1px solid rgba(38,191,255,.24);
      background:linear-gradient(90deg,rgba(252,238,10,.16),rgba(38,191,255,.07) 45%,rgba(255,79,216,.05) 72%,transparent);
      font:950 6px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.12em;color:#fcee0a;
    }
    .security-net-head b{font-size:5.5px;color:#26bfff;text-shadow:0 0 5px rgba(38,191,255,.52)}
    .security-net-head i{margin-left:auto;width:28px;height:2px;background:linear-gradient(90deg,#fcee0a 0 25%,#26bfff 25% 50%,#ff4fd8 50% 75%,#39ff88 75%);opacity:.82}

    /* Surveillance node stays fixed. Internal scan/REC telemetry remains alive. */
    .security-net .cam-netrunner{animation:none!important;transform:none!important;will-change:auto!important}

    /* Vehicle telemetry is magenta. Green is reserved for secure/closed access states. */
    .security-net .counts .metric:nth-child(3){--mc:#ff4fd8!important}
    .security-net .counts .metric:nth-child(3) ha-icon{
      color:#ff4fd8!important;
      filter:drop-shadow(0 0 2px rgba(255,232,249,.90)) drop-shadow(0 0 7px rgba(255,79,216,.70))!important;
    }

    /* Camera activation times now match the larger security chassis. */
    .security-net .counts .metric small{
      font-size:8px!important;
      line-height:1.12!important;
      margin-top:4px!important;
      padding-top:3px!important;
      letter-spacing:.045em!important;
      color:color-mix(in srgb,var(--mc) 86%,#dffcff)!important;
    }

    /* Existing camera + garage become nodes inside one chassis instead of separate cards. */
    .security-net>.counts,.security-net>.garage{
      grid-column:1/-1!important;border:0!important;border-radius:0!important;clip-path:none!important;
      box-shadow:none!important;background:transparent!important;margin:0!important;
    }
    .security-net>.counts>.f-tracer,.security-net>.garage>.f-tracer{display:none!important}

    .security-net>.counts{
      min-height:68px!important;padding:4px 6px 5px!important;gap:5px!important;
      grid-template-columns:56px minmax(0,1fr)!important;
      border-bottom:1px solid rgba(252,238,10,.18)!important;
      background:linear-gradient(90deg,rgba(252,238,10,.035),transparent 28%,rgba(38,191,255,.025) 72%,rgba(255,79,216,.03))!important;
    }
    .security-net .counts .ctitle{min-height:56px!important;border-right:1px solid rgba(252,238,10,.24)!important}
    .security-net .cam-netrunner{margin-top:0!important}
    .security-net .counts .metric{background:linear-gradient(145deg,color-mix(in srgb,var(--mc) 9%,transparent),rgba(0,2,6,.86) 62%)!important}

    .security-net>.garage{
      min-height:92px!important;padding:5px!important;gap:4px!important;
      grid-template-columns:.76fr repeat(3,1fr)!important;
      background:linear-gradient(90deg,rgba(57,255,136,.025),transparent 22%,rgba(38,191,255,.025) 68%,rgba(255,79,216,.025))!important;
    }
    .security-net .gbrand,.security-net .door{
      background:linear-gradient(155deg,rgba(0,0,0,.40),rgba(2,14,20,.50))!important;
      border-color:rgba(38,191,255,.18)!important;
    }
    .security-net .gbrand{border-left:1px solid #fcee0a!important}
    .security-net .gbrand>div:first-child{color:#fcee0a!important;letter-spacing:.08em;text-shadow:0 0 5px rgba(252,238,10,.42)}
    .security-net .gstatus{font-size:6px!important}
    .security-net .door{border-top:1px solid color-mix(in srgb,var(--dc,#39ff88) 36%,transparent)!important}
    .security-net .dname{color:#dffcff!important}

    @media(max-width:520px){.security-net{grid-column:1/-1!important}}
    @media(max-width:365px){
      .security-net>.counts{grid-template-columns:50px minmax(0,1fr)!important;padding-inline:4px!important}
      .security-net>.garage{grid-template-columns:.70fr repeat(3,1fr)!important;padding:4px!important;gap:3px!important}
      .security-net-head{padding-inline:5px!important;gap:4px!important}.security-net-head i{width:22px}
      .security-net .counts .metric small{font-size:7px!important;letter-spacing:.025em!important}
    }
    @media(prefers-reduced-motion:reduce){.security-net:after{animation:none!important}}
  `;

  const ensureSecurityNet = (card) => {
    const root = card.shadowRoot;
    if (!root) return;
    const counts = root.querySelector('.counts');
    const garage = root.querySelector('.garage');
    if (!counts || !garage) return;

    let shell = root.querySelector('.security-net');
    if (!shell) {
      shell = document.createElement('div');
      shell.className = 'security-net';
      shell.innerHTML = '<div class="security-net-head"><span>SECURITY://NET</span><b>PERIMETER BUS</b><i aria-hidden="true"></i></div>';
      counts.parentNode.insertBefore(shell, counts);
      shell.append(counts, garage);
    } else {
      if (counts.parentNode !== shell) shell.appendChild(counts);
      if (garage.parentNode !== shell) shell.appendChild(garage);
    }

    const garageLabel = garage.querySelector('.gbrand>div:first-child');
    if (garageLabel && garageLabel.textContent !== 'ACCESS://DOORS') garageLabel.textContent = 'ACCESS://DOORS';
  };

  const inject = (card) => {
    const root = card.shadowRoot;
    if (!root) return;
    ensureSecurityNet(card);
    root.querySelector('#marvin-battery-singularity-v1')?.remove();
    root.querySelector('#marvin-battery-singularity-v2')?.remove();
    root.querySelector('#marvin-battery-singularity-v3')?.remove();
    root.querySelector('#marvin-battery-center-diamond-v4')?.remove();
    root.querySelector('#marvin-battery-center-diamond-v5')?.remove();
    root.querySelector('#marvin-battery-security-identity-v6')?.remove();
    root.querySelector('#marvin-battery-security-identity-v7')?.remove();
    if (root.querySelector('#marvin-battery-security-identity-v8')) return;
    const style = document.createElement('style');
    style.id = 'marvin-battery-security-identity-v8';
    style.textContent = css;
    root.appendChild(style);
  };

  const originalBuild = Card.prototype._build;
  Card.prototype._build = function() {
    originalBuild.call(this);
    inject(this);
  };

  const originalUpdate = Card.prototype._update;
  Card.prototype._update = function() {
    originalUpdate.call(this);
    inject(this);
  };
});
