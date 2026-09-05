// Marvin Night City Home - generated bundle
// Do not reorder modules without testing.


/* ===== 00-core.js ===== */
const NC=(s,r=document)=>r.querySelector(s);
class MarvinNightCityCard extends HTMLElement{
  constructor(){super();this.attachShadow({mode:'open'});this._built=false;this._last={};}
  setConfig(c){this.config=c||{};if(!this._built)this._build();}
  set hass(h){this._hass=h;if(!this._built)this._build();this._update();}
  getCardSize(){return 11;}
  getGridOptions(){return {columns:12,rows:'auto'};}
  _s(id){return this._hass?.states?.[id];}
  _n(id,attr){const x=attr?this._s(id)?.attributes?.[attr]:this._s(id)?.state;const n=Number(x);return Number.isFinite(n)?n:null;}
  _txt(sel,v){const e=NC(sel,this.shadowRoot);if(e&&e.textContent!==String(v))e.textContent=String(v);}
  _nav(path){history.pushState(null,'',path);window.dispatchEvent(new Event('location-changed'));}
  _more(entity){this.dispatchEvent(new CustomEvent('hass-more-info',{detail:{entityId:entity},bubbles:true,composed:true}));}
  _fmtTime(raw){if(!raw)return '—';const d=new Date(raw);return Number.isNaN(d.getTime())?'—':d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});}
  _build(){this._built=true;this.shadowRoot.innerHTML=`
<style>
:host{display:block;--cyan:#26bfff;--pink:#ff4fd8;--yellow:#fcee0a;--green:#39ff88;--ink:#020814;color:#edfaff;font-family:var(--paper-font-body1_-_font-family,system-ui)}*{box-sizing:border-box}button{font:inherit;color:inherit;-webkit-tap-highlight-color:transparent}.root{position:relative;isolation:isolate;overflow:hidden;padding:6px;border-radius:13px;background:radial-gradient(circle at 8% 0%,rgba(38,191,255,.20),transparent 34%),radial-gradient(circle at 94% 8%,rgba(255,79,216,.15),transparent 38%),linear-gradient(145deg,#010308,#040a1b 48%,#1d0d26 78%,#321728);border:1px solid rgba(38,191,255,.44);box-shadow:0 0 20px rgba(38,191,255,.14),inset 0 0 28px rgba(38,191,255,.04)}
.root:before{content:'';position:absolute;inset:-18%;z-index:-1;pointer-events:none;background:repeating-linear-gradient(90deg,transparent 0 17px,rgba(38,191,255,.05) 17px 19px,transparent 19px 31px,rgba(255,79,216,.045) 31px 34px,transparent 34px 51px,rgba(252,238,10,.035) 51px 53px);animation:pxwash 13s linear infinite;transform:translate3d(-18%,0,0)}
.root:after{content:'';position:absolute;left:-12%;top:-30%;width:124%;height:34%;z-index:20;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(38,191,255,.025),rgba(255,255,255,.09),rgba(255,79,216,.035),transparent);animation:scanwash 8s linear infinite;transform:translate3d(0,-30%,0)}
@keyframes pxwash{to{transform:translate3d(18%,0,0)}}@keyframes scanwash{to{transform:translate3d(0,420%,0)}}@keyframes sweep{0%,12%{transform:translate3d(-150%,0,0);opacity:0}18%{opacity:.8}70%{transform:translate3d(430%,0,0);opacity:.28}71%,100%{transform:translate3d(430%,0,0);opacity:0}}@keyframes pulse{50%{opacity:1;transform:scale(1.08)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes spinR{to{transform:rotate(-360deg)}}@keyframes stripe{to{background-position:22px 0}}@keyframes ticker{to{transform:translate3d(calc(-50% - 18px),0,0)}}@keyframes glitch{0%,88%,100%{transform:translateX(0)}90%{transform:translateX(1px)}92%{transform:translateX(-1px)}}@keyframes avatar{0%,15%{background-position:0 0}16%,31%{background-position:-36px 0}32%,47%{background-position:-72px 0}48%,63%{background-position:-108px 0}64%,79%{background-position:-144px 0}80%,100%{background-position:-180px 0}}@keyframes doorMove{50%{transform:translateY(-4px)}}
.surface{position:relative;overflow:hidden;border-radius:10px;background:linear-gradient(132deg,rgba(2,9,24,.98),rgba(4,27,52,.96) 58%,rgba(22,7,31,.97));border:1px solid rgba(38,191,255,.62);box-shadow:0 0 12px rgba(38,191,255,.20),inset 0 0 18px rgba(38,191,255,.05);clip-path:polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,9px 100%,0 calc(100% - 9px))}.surface>.edge{position:absolute;z-index:5;left:0;top:0;width:22%;height:2px;background:linear-gradient(90deg,transparent,var(--yellow),#fff7c2,var(--yellow),transparent);box-shadow:0 0 8px rgba(252,238,10,.75);animation:sweep 5.6s linear infinite;pointer-events:none}.tap{cursor:pointer}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:6px}.header{grid-column:1/-1;min-height:42px;display:grid;grid-template-columns:minmax(90px,1fr) auto;align-items:center;padding:4px 6px 4px 4px;background:linear-gradient(106deg,#fcee0a 0 35%,#ffb000 37%,#ff4fd8 43%,#17051f 54%,#050914);border-color:rgba(252,238,10,.9)}.headtitle{font-size:12px;font-weight:950;letter-spacing:.08em;color:#071018;animation:glitch 5.7s step-end infinite}.headtitle b{color:#7d0057}.chips{display:flex;gap:3px}.chip{min-width:39px;height:29px;display:grid;place-items:center;align-content:center;background:linear-gradient(145deg,rgba(255,79,216,.24),rgba(18,5,30,.98));border-top:1px solid rgba(252,238,10,.84);font-variant-numeric:tabular-nums}.chip small{font-size:6px;font-weight:950;letter-spacing:.12em;color:var(--yellow)}.chip b{font-size:10px;color:var(--c,var(--cyan));text-shadow:0 0 7px var(--c,var(--cyan))}
.marvin{grid-column:1/-1;min-height:58px;display:grid;grid-template-columns:42px 1fr;grid-template-rows:20px 1fr;grid-template-areas:'av top' 'av msg';gap:2px 7px;padding:5px 8px}.marvin:before,.thermo:before{content:'';position:absolute;top:0;bottom:0;left:0;width:32%;background:linear-gradient(90deg,transparent,rgba(252,238,10,.08),rgba(255,255,255,.20),rgba(255,79,216,.07),transparent);animation:sweep 4.4s linear infinite;pointer-events:none}.avatar{grid-area:av;align-self:center;width:36px;height:39px;display:grid;place-items:center;border:1px solid rgba(38,191,255,.55);background:linear-gradient(145deg,rgba(38,191,255,.12),rgba(255,79,216,.08));clip-path:polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px)}.avatar ha-icon{--mdc-icon-size:27px;color:#fcee0a;filter:drop-shadow(-1px 0 #26bfff) drop-shadow(1px 0 #ff4fd8) drop-shadow(0 0 6px rgba(252,238,10,.55))}.mtop{grid-area:top;display:flex;justify-content:space-between;gap:6px;align-items:center;min-width:0}.mlabel{font-size:9px;font-weight:950;letter-spacing:.12em;color:var(--yellow)}.mlabel b{color:var(--pink)}.proj{display:flex;gap:4px;font-size:8px;font-weight:900}.proj span{padding:2px 4px;border-top:1px solid rgba(255,79,216,.5);background:rgba(38,191,255,.05)}.msgwrap{grid-area:msg;overflow:hidden;align-self:center}.msg{font-size:12.5px;font-weight:680;white-space:nowrap;display:block;overflow:hidden;text-overflow:ellipsis}.msg.scroll{display:inline-flex;width:max-content;gap:36px;padding-right:36px;overflow:visible;text-overflow:clip;animation:ticker var(--dur,14s) linear infinite}.msg.scroll span{white-space:nowrap}
.battery{grid-column:span 7;min-height:118px;padding:8px;display:grid;grid-template-columns:72px minmax(0,1fr);gap:8px;align-items:center}.dial{--accent:#39ff88;width:66px;height:66px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(from -90deg,var(--accent) var(--deg,0deg),rgba(62,91,111,.16) 0);box-shadow:0 0 12px color-mix(in srgb,var(--accent) 55%,transparent),inset 0 0 9px color-mix(in srgb,var(--accent) 25%,transparent);position:relative;animation:pulse 3.2s ease-in-out infinite}.dial:before{content:'';position:absolute;inset:7px;border-radius:50%;background:radial-gradient(circle at 50% 35%,#17344a,#020811 70%);border:1px solid color-mix(in srgb,var(--accent) 30%,transparent)}.dialtext{z-index:1;text-align:center;font-variant-numeric:tabular-nums}.dialtext strong{font-size:23px}.dialtext small{display:block;font-size:7px;color:#8da9bd}.bdata{display:grid;gap:5px;min-width:0}.bhead,.flowhead{display:flex;justify-content:space-between;gap:5px;align-items:center}.bhead strong{font-size:13px;letter-spacing:.1em}.mode{font-size:7px;font-weight:950;padding:3px 5px;border:1px solid var(--modec,#57a6ff);color:var(--modec,#57a6ff)}.route{font-size:8px;font-weight:900;color:var(--flow,#7c8aa5)}.pwr{font-size:14px;font-weight:950;color:var(--flow,#7c8aa5);font-variant-numeric:tabular-nums}.slider{height:18px;position:relative;overflow:hidden;border:1px solid rgba(103,232,249,.3);background:linear-gradient(90deg,rgba(255,79,216,.1),#07101d 44%,#e8ffff 50%,#07101d 56%,rgba(57,255,136,.1))}.fill{position:absolute;top:3px;bottom:3px;width:var(--w,0);background:var(--fill,#7c8aa5);overflow:hidden}.fill:before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.12) 0 5px,rgba(255,255,255,.58) 6px 8px,transparent 9px 12px);animation:stripe .72s linear infinite}.battery.charge .fill{left:50%}.battery.discharge .fill{right:50%}.micro{display:grid;grid-template-columns:1.35fr .75fr .7fr .9fr;gap:4px}.micro div{border-top:1px solid rgba(115,169,194,.16);padding-top:3px}.micro small{display:block;font-size:6px;color:#7799af}.micro b{font-size:9px}
.thermo{grid-column:span 5;min-height:118px;padding:8px;display:grid;grid-template-columns:42px 1fr;align-items:center;gap:7px}.thermoIcon{width:38px;height:38px;display:grid;place-items:center;border:1px solid rgba(38,191,255,.55);clip-path:polygon(18% 0,100% 0,100% 72%,76% 100%,0 100%,0 22%);position:relative}.thermoIcon:before{content:'';position:absolute;inset:4px;border-radius:50%;border:1px solid rgba(113,244,255,.55);border-top-color:transparent;animation:spin 5.4s linear infinite}.thermoIcon ha-icon{color:var(--tc,var(--cyan));--mdc-icon-size:21px}.tinfo{display:grid;gap:6px}.tkick{font-size:7px;font-weight:950;letter-spacing:.12em;color:#73e8ff}.tread{display:flex;align-items:end;gap:6px}.temp{font-size:25px;font-weight:950}.tchip{font-size:7px;color:#79aeca;border-left:1px solid var(--cyan);padding-left:4px}.tchip b{font-size:9px;color:#bbf6ff}.trun{font-size:8px;color:var(--tc,var(--cyan));font-weight:950}.trun b{font-size:12px;margin-left:5px}
.weather{grid-column:span 5;min-height:92px;padding:8px}.whead{display:flex;justify-content:space-between}.wtitle{font-size:9px;font-weight:900;letter-spacing:.14em;color:#7ee8ff}.wtemp{font-size:18px;font-weight:900}.wnow{font-size:10px;color:#b8c8d8}.forecast{display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:7px}.frow{padding:4px;border:1px solid rgba(126,232,255,.14);background:rgba(6,20,34,.42);font-size:8px}.frow b{display:block;font-size:9px;color:#edfaff}.frow span{color:#75d9ff}
.counts{grid-column:span 7;min-height:92px;padding:7px;display:grid;grid-template-columns:32px 1fr;align-items:center;gap:5px}.ctitle{font-size:7px;text-align:center;color:#8aa6b8}.ctitle ha-icon{--mdc-icon-size:20px;color:var(--cyan)}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}.metric{padding:5px 3px;text-align:center;border:1px solid rgba(38,191,255,.18);background:rgba(38,191,255,.04)}.metric ha-icon{--mdc-icon-size:17px;color:var(--mc,var(--cyan))}.metric b{font-size:15px}.metric small{display:block;font-size:7px;color:var(--mc,var(--cyan))}
.garage{grid-column:1/-1;min-height:110px;padding:7px;display:grid;grid-template-columns:.88fr repeat(3,1fr);gap:5px}.gbrand,.door{position:relative;overflow:hidden;display:grid;place-items:center;border:1px solid rgba(38,191,255,.24);background:linear-gradient(155deg,rgba(2,14,23,.93),rgba(3,27,37,.88))}.gbrand{border-left:2px solid var(--green)}.ring{width:48px;height:48px;position:relative;display:grid;place-items:center}.ring:before,.ring:after{content:'';position:absolute;inset:1px;border:1px dashed var(--cyan);border-radius:50%;animation:spin 5.5s linear infinite}.ring:after{inset:7px;border-style:solid;border-color:var(--green) transparent var(--cyan);animation:spinR 2.5s linear infinite}.ring ha-icon{--mdc-icon-size:28px;color:#dffcff}.gstatus{font-size:7px;font-weight:950;color:var(--green)}.door{padding:5px}.portal{width:48px;height:42px;display:grid;place-items:center;position:relative;border:1px solid var(--dc,var(--green));clip-path:polygon(8px 0,100% 0,100% 34px,40px 100%,0 100%,0 8px)}.portal:before{content:'';position:absolute;left:3px;right:3px;top:0;height:2px;background:linear-gradient(90deg,transparent,var(--dc),#fff,transparent);animation:scanwash 2.5s linear infinite}.portal ha-icon{--mdc-icon-size:28px;color:var(--dc)}.door.moving .portal ha-icon{animation:doorMove .65s ease-in-out infinite alternate}.door.open .portal{box-shadow:0 0 11px rgba(38,191,255,.45)}.dname{font-size:8px;font-weight:950}.dstate{font-size:7px;font-weight:950;color:var(--dc)}.dlast{font-size:6.5px;color:#789ba8}
.lights{grid-column:1/-1;display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.light{min-height:48px;padding:5px 7px;border:none;text-align:left;display:grid;grid-template-columns:21px 1fr auto;align-items:center;gap:5px}.light ha-icon{--mdc-icon-size:20px;color:var(--cyan)}.light b{font-size:11px}.light small{font-size:8px;color:#8fd3e8}.light.on{border-color:var(--lc,var(--green));box-shadow:0 0 12px color-mix(in srgb,var(--lc,var(--green)) 25%,transparent),inset 0 0 15px color-mix(in srgb,var(--lc,var(--green)) 7%,transparent)}.light.on ha-icon,.light.on small{color:var(--lc,var(--green))}.light.action{background:linear-gradient(132deg,rgba(18,8,35,.99),rgba(40,10,55,.96));border-color:rgba(255,79,216,.55)}
@media(max-width:520px){.battery{grid-column:1/-1}.thermo{grid-column:span 7}.weather{grid-column:span 5}.counts{grid-column:1/-1}.garage{grid-template-columns:.8fr repeat(3,1fr)}.lights{grid-template-columns:repeat(3,1fr)}.chip.up{display:none}}@media(max-width:390px){.thermo,.weather{grid-column:1/-1}.lights{grid-template-columns:repeat(3,1fr)}.header{grid-template-columns:minmax(76px,1fr) auto}.chip{min-width:35px}.headtitle{font-size:10.5px}.garage{grid-template-columns:.72fr repeat(3,1fr)}.portal{width:42px}.dname{font-size:7px}}@media(prefers-reduced-motion:reduce){.root:before,.root:after,.edge,.marvin:before,.thermo:before,.avatar,.msg.scroll,.dial,.thermoIcon:before,.ring:before,.ring:after,.portal:before,.door.moving .portal ha-icon,.fill:before,.headtitle{animation:none!important}}

:host{--f-cyan:#26bfff;--f-pink:#ff4fd8;--f-yellow:#fcee0a;--f-green:#39ff88;--f-blue:#087dff}
.root{padding:6px!important;border-radius:13px!important;background:radial-gradient(circle at 9% 0%,rgba(38,191,255,.22),transparent 36%),radial-gradient(circle at 93% 8%,rgba(255,79,216,.15),transparent 39%),linear-gradient(145deg,#010308 0%,#040a1b 48%,#1d0d26 78%,#321728 100%)!important;border:1px solid rgba(38,191,255,.34)!important;box-shadow:0 0 20px rgba(38,191,255,.12),inset 0 0 24px rgba(38,191,255,.035)!important}
.surface{position:relative!important;overflow:hidden!important;border-radius:10px!important;background:linear-gradient(132deg,rgba(2,9,24,.99),rgba(4,27,52,.97) 58%,rgba(22,7,31,.98))!important;border:1px solid rgba(38,191,255,.78)!important;box-shadow:0 0 16px rgba(38,191,255,.34),0 0 23px rgba(255,79,216,.11),inset 0 0 23px rgba(38,191,255,.08)!important;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))!important;transform:none!important}
.surface:active{transform:translateY(1px)!important}
@keyframes f-edge-run{0%,12%{transform:translateX(-135%);opacity:0}17%{opacity:.95}68%{transform:translateX(470%);opacity:1}74%,100%{transform:translateX(470%);opacity:0}}
@keyframes f-corner{0%,86%,100%{filter:brightness(.82);opacity:.72}89%{filter:brightness(1.7);opacity:1}}
@keyframes f-fall-a{0%,20%{top:-34%;opacity:0}22%{opacity:.86}33%{top:112%;opacity:.18}34%,100%{top:112%;opacity:0}}
@keyframes f-fall-b{0%,23%{top:-28%;opacity:0}25%{opacity:.68}36%{top:112%;opacity:.12}37%,100%{top:112%;opacity:0}}
@keyframes f-fall-c{0%,26%{top:-38%;opacity:0}28%{opacity:.78}39%{top:112%;opacity:.14}40%,100%{top:112%;opacity:0}}
@keyframes f-h1{0%,42%,48%,100%{opacity:0;transform:translateX(-8%) scaleX(.22)}43%{opacity:.13;transform:translateX(2%) scaleX(.46)}44%{opacity:.34;transform:translateX(7%) scaleX(.92)}45%{opacity:.08;transform:translateX(-2%) scaleX(.63)}46%{opacity:.24;transform:translateX(11%) scaleX(.78)}47%{opacity:0;transform:translateX(18%) scaleX(.35)}}
@keyframes f-h2{0%,46%,52%,100%{opacity:0;transform:translateX(12%) scaleX(.18)}47%{opacity:.10;transform:translateX(-3%) scaleX(.52)}48%{opacity:.28;transform:translateX(5%) scaleX(.86)}49%{opacity:.06;transform:translateX(14%) scaleX(.38)}50%{opacity:.20;transform:translateX(-6%) scaleX(.72)}51%{opacity:0;transform:translateX(10%) scaleX(.3)}}
@keyframes f-chroma{0%,60%,67%,100%{transform:translate3d(0,0,0);text-shadow:inherit;filter:none}61%{transform:translate3d(1px,0,0);text-shadow:-2px 0 #ff4fd8,2px 0 #26bfff;filter:drop-shadow(-1px 0 rgba(255,79,216,.65)) drop-shadow(1px 0 rgba(38,191,255,.65))}62%{transform:translate3d(-1px,0,0);text-shadow:2px 0 #ff4fd8,-2px 0 #f0df54}63%{transform:translate3d(.5px,0,0);text-shadow:-1px 0 #26bfff,1px 0 #ff4fd8;filter:brightness(1.18)}66%{transform:translate3d(0,0,0);filter:none}}
.f-tracer{position:absolute;inset:0;pointer-events:none;z-index:7;overflow:hidden}.f-edge{position:absolute;left:0;top:0;width:22%;height:2px;background:linear-gradient(90deg,transparent,#f0df54 22%,#fff7c2 54%,#f0df54 84%,transparent);box-shadow:0 0 8px rgba(240,223,84,.90),0 0 14px rgba(240,223,84,.32);animation:f-edge-run 5.4s linear infinite}.f-corner{position:absolute;right:0;bottom:0;width:17px;height:7px;background:var(--f2,#ff4fd8);clip-path:polygon(42% 0,100% 0,100% 100%,0 100%);box-shadow:0 0 8px var(--f2,#ff4fd8);animation:f-corner 4.8s step-end infinite}.f-fall{position:absolute;width:1px;pointer-events:none;opacity:0;background:linear-gradient(180deg,transparent,#26bfff 24%,rgba(255,255,255,.92) 55%,#ff4fd8 78%,transparent);box-shadow:0 0 6px rgba(38,191,255,.75)}.f-fall.a{left:17%;height:34%;animation:f-fall-a var(--ft,7.2s) linear var(--fd,0s) infinite}.f-fall.b{left:53%;height:22%;width:2px;animation:f-fall-b var(--ft,7.2s) linear var(--fd,0s) infinite}.f-fall.c{left:84%;height:39%;animation:f-fall-c var(--ft,7.2s) linear var(--fd,0s) infinite}.f-h{position:absolute;left:3%;width:94%;height:1px;opacity:0;background:linear-gradient(90deg,transparent,#26bfff 18%,rgba(255,255,255,.64) 49%,#ff4fd8 76%,transparent);box-shadow:0 0 4px rgba(38,191,255,.42)}.f-h.h1{top:34%;animation:f-h1 var(--ft,7.2s) step-end var(--fd,0s) infinite}.f-h.h2{top:72%;animation:f-h2 var(--ft,7.2s) step-end var(--fd,0s) infinite}
.headtitle,.mlabel,.bhead strong,.pwr,.tkick,.temp,.wtitle,.wtemp,.metric b,.gstatus,.dname,.dstate,.light b,.light small{animation:f-chroma var(--ft,7.2s) step-end var(--fd,0s) infinite}
/* HEADER: faithful yellow/pink Foundation */
@keyframes f-head-scan{0%,14%{left:-34%;opacity:0}18%{opacity:.25}49%{opacity:.9}74%{left:112%;opacity:.16}75%,100%{left:112%;opacity:0}}
@keyframes f-head-pulse{0%,100%{filter:brightness(.82);transform:scale(.82)}50%{filter:brightness(1.4);transform:scale(1.12)}}
@keyframes f-chip-flare{0%,79%,100%{box-shadow:inset 0 0 7px rgba(255,79,216,.07)}81%{box-shadow:inset 0 0 9px rgba(252,238,10,.24),0 0 6px rgba(252,238,10,.25)}83%{box-shadow:inset 0 0 7px rgba(255,79,216,.16)}}
.header{background:linear-gradient(112deg,#fcee0a 0 36%,#ffb000 38%,#ff4fd8 43%,#17051f 54%,#050914 100%)!important;border:1px solid rgba(252,238,10,.94)!important;box-shadow:0 0 14px rgba(252,238,10,.30),0 0 20px rgba(255,79,216,.20),inset 0 0 0 1px rgba(255,255,255,.12)!important;border-left:3px solid #ff4fd8!important;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))!important}
.header:before{content:'';position:absolute;z-index:6;pointer-events:none;top:0;bottom:0;left:-34%;width:28%;background:linear-gradient(90deg,transparent,rgba(255,79,216,.10),rgba(255,79,216,.46),rgba(255,255,255,.82),rgba(38,191,255,.28),transparent);transform:skewX(-18deg);animation:f-head-scan 4.8s linear infinite}.header:after{content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:linear-gradient(90deg,#071018 0 34%,#ff4fd8 40%,#26bfff 68%,#fcee0a 88%,transparent 98%);box-shadow:0 0 8px rgba(255,79,216,.58)}.headtitle{color:#071018!important;font-weight:950!important;letter-spacing:.09em!important;text-shadow:1px 1px 0 rgba(255,255,255,.18)!important}.headtitle b{color:#7d0057!important}.chip{border-top:1px solid rgba(252,238,10,.88)!important;background:linear-gradient(145deg,rgba(255,79,216,.28),rgba(18,5,30,.98) 48%,color-mix(in srgb,var(--c,#26bfff) 14%,transparent))!important;clip-path:polygon(6px 0,100% 0,100% 100%,0 100%,0 6px)!important;animation:f-chip-flare 4.1s step-end infinite!important}.chip small{color:#fcee0a!important;text-shadow:0 0 6px rgba(252,238,10,.72)}
/* MARVIN */
@keyframes f-cyber-sweep{0%,12%{left:-42%;opacity:0}16%{opacity:.25}44%{opacity:.95}72%{left:116%;opacity:.18}73%,100%{left:116%;opacity:0}}
@keyframes f-signal{0%,100%{transform:rotate(45deg) scale(.72);background:#ff4fd8;box-shadow:0 0 4px #ff4fd8}48%{transform:rotate(45deg) scale(1.05);background:#fcee0a;box-shadow:0 0 9px #fcee0a,0 0 14px rgba(255,79,216,.55)}}
@keyframes f-yellow{0%,84%,100%{color:#fcee0a;text-shadow:0 0 6px rgba(252,238,10,.45)}86%{color:#fffbd0;text-shadow:0 0 4px #fff,0 0 13px #fcee0a}88%{color:#ff4fd8;text-shadow:0 0 9px #ff4fd8}90%{color:#fcee0a;text-shadow:0 0 11px #fcee0a}}
@keyframes f-glitch-line{0%,100%{transform:translateX(0) scaleX(.38);opacity:.65}36%{transform:translateX(34%) scaleX(.78);opacity:1}38%{transform:translateX(12%) scaleX(.2);opacity:.35}72%{transform:translateX(112%) scaleX(.52);opacity:.9}}
.marvin{background:linear-gradient(90deg,rgba(252,238,10,.055),transparent 18%),radial-gradient(circle at 86% 0%,rgba(255,79,216,.13),transparent 38%),linear-gradient(132deg,rgba(2,9,24,.99),rgba(4,27,52,.97) 58%,rgba(22,7,31,.98))!important;border-left:2px solid #fcee0a!important}.marvin:before{content:'';position:absolute;z-index:6;pointer-events:none;top:0;bottom:0;left:-42%;width:34%;background:linear-gradient(90deg,transparent,rgba(252,238,10,.035),rgba(252,238,10,.28),rgba(255,255,255,.62),rgba(255,79,216,.12),transparent);transform:skewX(-18deg);animation:f-cyber-sweep 4.2s linear infinite}.marvin:after{content:'';position:absolute;z-index:0;pointer-events:none;right:-5px;top:0;width:44px;height:100%;opacity:.16;background:repeating-linear-gradient(135deg,transparent 0 5px,#ff4fd8 5px 6px,transparent 6px 10px,#26bfff 10px 11px);clip-path:polygon(46% 0,100% 0,100% 100%,0 100%)}.avatar{filter:drop-shadow(0 3px 2px rgba(0,0,0,.42)) drop-shadow(0 0 5px rgba(38,191,255,.72)) drop-shadow(0 0 8px rgba(255,79,216,.28))!important}.mlabel{color:#fcee0a!important;animation:f-yellow 5.6s step-end infinite!important}.mlabel:before{content:'';display:inline-block;width:6px;height:6px;margin-right:5px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);animation:f-signal 1.5s ease-in-out infinite}.mlabel b{color:#ff4fd8!important;text-shadow:0 0 7px rgba(255,79,216,.85)}.proj span{clip-path:polygon(5px 0,100% 0,100% 100%,0 100%,0 5px);border-top:1px solid rgba(255,79,216,.65)!important;border-right:1px solid rgba(38,191,255,.34)!important;background:linear-gradient(110deg,rgba(255,79,216,.10),rgba(38,191,255,.055))!important}.msgwrap{position:relative;padding-top:3px}.msgwrap:before{content:'';position:absolute;left:0;top:0;width:48%;height:1px;transform-origin:left center;background:linear-gradient(90deg,#fcee0a,#ff4fd8 66%,transparent);box-shadow:0 0 5px rgba(252,238,10,.55);animation:f-glitch-line 3.2s steps(5,end) infinite}
/* BATTERY */
@keyframes f-core-scan{0%{transform:translateY(-135%)}100%{transform:translateY(420%)}}
@keyframes f-breathe{0%,100%{filter:brightness(.92)}50%{filter:brightness(1.28)}}
@keyframes f-march{from{background-position:0 0}to{background-position:24px 0}}
@keyframes f-slider-pulse{0%,100%{filter:brightness(.95);transform:rotate(45deg) scale(.92)}50%{filter:brightness(1.45);transform:rotate(45deg) scale(1.08)}}
.battery{background:radial-gradient(circle at 18% 50%,rgba(56,189,248,.20),transparent 34%),radial-gradient(circle at 82% 18%,rgba(168,85,247,.20),transparent 30%),radial-gradient(circle at 96% 92%,rgba(236,72,153,.17),transparent 27%),linear-gradient(145deg,rgba(4,9,28,.99),rgba(10,18,48,.98) 52%,rgba(31,11,45,.98))!important}.f-bgrid{position:absolute;inset:0;z-index:0;opacity:.42;pointer-events:none;background-image:linear-gradient(rgba(38,191,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(38,191,255,.045) 1px,transparent 1px);background-size:16px 16px;mask-image:linear-gradient(90deg,#000,transparent 82%)}.f-bscan{position:absolute;left:0;right:0;top:0;height:28%;z-index:5;pointer-events:none;opacity:.32;background:linear-gradient(180deg,transparent,rgba(120,246,255,.10),rgba(120,246,255,.42),transparent);animation:f-core-scan 4.6s linear infinite}.dial{box-shadow:0 0 11px color-mix(in srgb,var(--accent) 75%,transparent),0 0 28px color-mix(in srgb,var(--accent) 23%,transparent),inset 0 0 10px color-mix(in srgb,var(--accent) 38%,transparent)!important;animation:f-breathe 3.3s ease-in-out infinite!important}.dial:after{content:'';position:absolute;inset:2px;border-radius:50%;border:1px dashed rgba(224,252,255,.34)}.slider{background:repeating-linear-gradient(90deg,rgba(125,211,252,.16) 0 1px,transparent 1px 10%),linear-gradient(90deg,rgba(255,79,216,.11),rgba(7,13,29,.94) 43%,rgba(232,255,255,.14) 49.5%,rgba(232,255,255,.14) 50.5%,rgba(7,13,29,.94) 57%,rgba(57,255,136,.11))!important;box-shadow:inset 0 0 12px rgba(0,0,0,.92),0 0 8px rgba(34,211,238,.14)!important}.fill:before{animation:f-march .72s linear infinite!important}.battery.discharge .fill:before{animation-direction:reverse!important}.mode:before{content:'';display:inline-block;width:4px;height:4px;margin-right:4px;background:currentColor;box-shadow:0 0 7px currentColor;animation:f-breathe 1.8s ease-in-out infinite}
/* THERMOSTAT */
@keyframes f-thermo-sweep{0%{transform:translateX(-135%);opacity:0}12%{opacity:.9}52%{opacity:.45}100%{transform:translateX(235%);opacity:0}}
@keyframes f-thermo-pulse{0%,100%{opacity:.45;filter:drop-shadow(0 0 2px var(--tc,#26bfff))}50%{opacity:1;filter:drop-shadow(0 0 7px var(--tc,#26bfff))}}
@keyframes f-spin{to{transform:rotate(360deg)}}
.thermo{background:radial-gradient(circle at 11% 32%,rgba(38,191,255,.20),transparent 34%),linear-gradient(112deg,rgba(0,7,25,.99) 0%,rgba(0,31,73,.98) 54%,rgba(2,11,37,.99) 100%)!important;border:1px solid rgba(38,191,255,.70)!important;box-shadow:0 0 16px rgba(0,174,255,.30),inset 0 0 20px rgba(0,153,255,.15),inset 0 1px 0 rgba(139,250,255,.34)!important}.thermo:before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;opacity:.16;background:repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(67,220,255,.28) 4px)}.thermo:after{content:'';position:absolute;z-index:6;top:0;bottom:0;left:0;width:34%;pointer-events:none;background:linear-gradient(90deg,transparent,rgba(38,191,255,.20),rgba(126,249,255,.50),transparent);transform:skewX(-18deg);animation:f-thermo-sweep 3.4s ease-in-out infinite}.thermoIcon{background:linear-gradient(145deg,rgba(38,191,255,.22),rgba(4,61,152,.46))!important;box-shadow:inset 0 0 10px rgba(38,191,255,.48)!important}.thermoIcon:before{animation:f-spin 5.4s linear infinite!important}.thermoIcon ha-icon{filter:drop-shadow(0 0 5px var(--tc,#26bfff));animation:f-thermo-pulse 1.55s ease-in-out infinite}.tkick:before{content:'';display:inline-block;width:4px;height:4px;margin-right:4px;border-radius:50%;background:var(--tc,#26bfff);box-shadow:0 0 6px var(--tc,#26bfff);animation:f-thermo-pulse 1.2s ease-in-out infinite}
/* WEATHER: keep cleaner, atmospheric not another neon clone */
.weather{background:linear-gradient(145deg,rgba(10,27,43,.96),rgba(5,15,27,.98))!important;border-color:rgba(0,212,255,.32)!important;box-shadow:inset 0 0 18px rgba(0,190,255,.055),0 0 12px rgba(0,190,255,.10)!important}.weather:before{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 0 34%,rgba(38,191,255,.045) 48%,transparent 62%);animation:f-weather 8s ease-in-out infinite}@keyframes f-weather{0%,100%{transform:translateX(-25%);opacity:.25}50%{transform:translateX(35%);opacity:.65}}
/* COUNTS: surveillance identity */
.counts{background:linear-gradient(135deg,rgba(3,16,25,.99),rgba(5,19,35,.98) 55%,rgba(5,34,30,.96))!important;border-color:rgba(74,222,128,.45)!important}.counts:before{content:'';position:absolute;right:10px;top:50%;width:52px;height:52px;margin-top:-26px;border:1px solid rgba(74,222,128,.18);border-radius:50%;box-shadow:inset 0 0 12px rgba(74,222,128,.05);animation:f-spin 9s linear infinite}.counts:after{content:'';position:absolute;right:35px;top:10%;bottom:10%;width:1px;background:linear-gradient(transparent,#4ade80,transparent);opacity:.32;animation:f-radar 2.8s ease-in-out infinite}@keyframes f-radar{0%,100%{transform:translateX(-19px);opacity:.12}50%{transform:translateX(19px);opacity:.58}}.metric:nth-child(1){background:rgba(245,158,11,.07)!important;border-color:rgba(245,158,11,.20)!important}.metric:nth-child(2){background:rgba(96,165,250,.07)!important;border-color:rgba(96,165,250,.20)!important}.metric:nth-child(3){background:rgba(74,222,128,.07)!important;border-color:rgba(74,222,128,.20)!important}
/* GARAGE */
@keyframes f-counter{to{transform:rotate(-360deg)}}
@keyframes f-gscan{0%{top:-18%;opacity:0}12%{opacity:.85}62%{opacity:.42}100%{top:112%;opacity:0}}
@keyframes f-gpulse{0%,100%{transform:scale(.96);filter:drop-shadow(0 0 4px var(--dc,#26bfff))}50%{transform:scale(1.07);filter:drop-shadow(0 0 10px var(--dc,#26bfff))}}
@keyframes f-bars{0%,100%{opacity:.24;transform:scaleX(.55)}50%{opacity:.78;transform:scaleX(1)}}
.garage{background:radial-gradient(circle at 8% 50%,rgba(57,255,136,.13),transparent 28%),radial-gradient(circle at 88% 0%,rgba(38,191,255,.13),transparent 38%),repeating-linear-gradient(135deg,rgba(38,191,255,.025) 0 1px,transparent 1px 8px),linear-gradient(128deg,rgba(1,10,18,.99),rgba(2,23,33,.98) 58%,rgba(0,39,43,.97))!important;border-color:rgba(38,191,255,.46)!important}.gbrand{background:linear-gradient(160deg,rgba(1,15,24,.88),rgba(0,54,58,.24))!important;border-left:2px solid #39ff88!important;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))}.ring:before{animation:f-spin 5.5s linear infinite!important}.ring:after{animation:f-counter 2.4s linear infinite!important}.ring ha-icon{filter:drop-shadow(0 0 5px #26bfff);animation:f-gpulse 1.75s ease-in-out infinite}.portal{background:radial-gradient(circle at 50% 52%,color-mix(in srgb,var(--dc,#39ff88) 20%,transparent),transparent 58%),linear-gradient(145deg,rgba(1,10,18,.96),rgba(4,24,34,.88))!important;box-shadow:inset 0 0 10px color-mix(in srgb,var(--dc,#39ff88) 12%,transparent),0 0 6px color-mix(in srgb,var(--dc,#39ff88) 28%,transparent)!important}.portal:before{animation:f-gscan 2.45s linear infinite!important}.door.open .portal ha-icon{animation:f-gpulse 1.18s ease-in-out infinite}.door.moving .portal ha-icon{animation:doorMove .68s ease-in-out infinite alternate!important}
/* LIGHTS: original character returns via different accent families */
.light{background:linear-gradient(135deg,color-mix(in srgb,var(--lc,#26bfff) 6%,transparent),rgba(15,23,42,.10)),linear-gradient(132deg,rgba(2,9,24,.99),rgba(4,27,52,.97) 58%,rgba(22,7,31,.98))!important}.light:nth-child(1){--f2:#39ff88}.light:nth-child(2){--f2:#ff4fd8}.light:nth-child(3){--f2:#f0df54}.light:nth-child(4){--f2:#26bfff}.light:nth-child(5){--f2:#39ff88}.light:nth-child(6){--f2:#ff4fd8}.light:nth-child(7){--f2:#26bfff}.light.action{--f2:#ff4fd8;background:linear-gradient(132deg,rgba(18,8,35,.99),rgba(40,10,55,.96))!important}.light.on{border-color:var(--lc)!important;box-shadow:0 0 15px color-mix(in srgb,var(--lc) 34%,transparent),0 0 22px rgba(38,191,255,.16),inset 0 0 18px color-mix(in srgb,var(--lc) 7%,transparent)!important}.light.on ha-icon,.light.on small{color:var(--lc)!important;filter:drop-shadow(0 0 8px color-mix(in srgb,var(--lc) 82%,transparent))}
@media(prefers-reduced-motion:reduce){.f-edge,.f-corner,.f-fall,.f-h,.headtitle,.mlabel,.bhead strong,.pwr,.tkick,.temp,.wtitle,.wtemp,.metric b,.gstatus,.dname,.dstate,.light b,.light small,.header:before,.chip,.marvin:before,.msgwrap:before,.dial,.f-bscan,.fill:before,.thermo:after,.thermoIcon:before,.thermoIcon ha-icon,.tkick:before,.weather:before,.counts:before,.counts:after,.ring:before,.ring:after,.ring ha-icon,.portal:before,.door .portal ha-icon{animation:none!important}}

/* Consolidated Foundation renderer: remove legacy renderer-wide washes and duplicate edge. */
.root:before,.root:after{display:none!important}
.surface>.edge{display:none!important}

/* MARVIN FOUNDATION DATA COLOR PASS v1 */
:host{--data-green:#39ff88;--data-blue:#26bfff;--data-pink:#ff4fd8}
#ram{color:var(--data-blue)!important;text-shadow:0 0 3px #e9feff,0 0 9px var(--data-blue),0 0 18px rgba(38,191,255,.58)!important}
#up{color:var(--data-pink)!important;text-shadow:0 0 3px #ffe7fb,0 0 9px var(--data-pink),0 0 17px rgba(255,79,216,.54)!important}
#margin,#morning{color:var(--data-green)!important;text-shadow:0 0 3px #eafff0,0 0 8px var(--data-green),0 0 16px rgba(57,255,136,.55)!important}
#soc,#usable{color:var(--data-green)!important;text-shadow:0 0 4px rgba(234,255,240,.9),0 0 10px rgba(57,255,136,.72)!important}
#today{color:var(--data-blue)!important;text-shadow:0 0 8px rgba(38,191,255,.7)!important}
#ev{color:var(--data-pink)!important;text-shadow:0 0 8px rgba(255,79,216,.72)!important}
#bms{color:var(--data-green)!important;text-shadow:0 0 8px rgba(57,255,136,.68)!important}
#pwr{color:var(--flow,var(--data-blue))!important;text-shadow:0 0 9px color-mix(in srgb,var(--flow,var(--data-blue)) 72%,transparent)!important}
#temp,#wtemp{color:var(--data-blue)!important;text-shadow:0 0 3px #e7fbff,0 0 10px var(--data-blue),0 0 18px rgba(38,191,255,.48)!important}
#set,#runtime{color:var(--data-pink)!important;text-shadow:0 0 9px rgba(255,79,216,.75)!important}
#rh{color:var(--data-green)!important;text-shadow:0 0 9px rgba(57,255,136,.72)!important}
.forecast .frow:nth-child(1) span{color:var(--data-blue)!important;text-shadow:0 0 6px rgba(38,191,255,.5)}
.forecast .frow:nth-child(2) span{color:var(--data-pink)!important;text-shadow:0 0 6px rgba(255,79,216,.48)}
.metric:nth-child(1) b,.metric:nth-child(1) small{color:var(--data-pink)!important;text-shadow:0 0 8px rgba(255,79,216,.78)!important}
.metric:nth-child(2) b,.metric:nth-child(2) small{color:var(--data-blue)!important;text-shadow:0 0 8px rgba(38,191,255,.78)!important}
.metric:nth-child(3) b,.metric:nth-child(3) small{color:var(--data-green)!important;text-shadow:0 0 8px rgba(57,255,136,.75)!important}
.door:nth-child(2) .dlast{color:var(--data-pink)!important}
.door:nth-child(3) .dlast{color:var(--data-blue)!important}
.door:nth-child(4) .dlast{color:var(--data-green)!important}

/* MARVIN BOTTOM NEON RAIL PASS v1 */
.lights .light:nth-child(1){--lc:#ff4fd8!important}.lights .light:nth-child(2){--lc:#39ff88!important}.lights .light:nth-child(3){--lc:#26bfff!important}.lights .light:nth-child(4){--lc:#39ff88!important}.lights .light:nth-child(5){--lc:#ff4fd8!important}.lights .light:nth-child(6){--lc:#26bfff!important}.lights .light:nth-child(7){--lc:#39ff88!important}.lights .light:nth-child(8){--lc:#26bfff!important}.lights .light:nth-child(9){--lc:#ff4fd8!important}
.lights .light{position:relative!important;border-color:color-mix(in srgb,var(--lc) 38%,rgba(255,255,255,.08))!important;background:linear-gradient(145deg,color-mix(in srgb,var(--lc) 10%,transparent),rgba(2,9,24,.98) 48%,rgba(12,5,23,.98))!important;box-shadow:inset 0 0 13px color-mix(in srgb,var(--lc) 8%,transparent),0 0 7px color-mix(in srgb,var(--lc) 14%,transparent)!important}
.lights .light:after{content:'';position:absolute;z-index:6;left:7px;right:7px;bottom:0;height:2px;background:linear-gradient(90deg,transparent,var(--lc) 18%,var(--lc) 82%,transparent);box-shadow:0 0 5px var(--lc),0 0 10px color-mix(in srgb,var(--lc) 55%,transparent);opacity:.52;pointer-events:none}
.lights .light ha-icon{color:color-mix(in srgb,var(--lc) 66%,#607787)!important;filter:drop-shadow(0 0 5px color-mix(in srgb,var(--lc) 42%,transparent))!important}
.lights .light b{color:#eafaff!important;text-shadow:0 0 5px color-mix(in srgb,var(--lc) 28%,transparent)!important}.lights .light small{color:color-mix(in srgb,var(--lc) 63%,#7896a6)!important;text-shadow:0 0 5px color-mix(in srgb,var(--lc) 30%,transparent)!important}.lights .light.on{border-color:var(--lc)!important;background:linear-gradient(145deg,color-mix(in srgb,var(--lc) 25%,transparent),rgba(2,12,27,.98) 52%,color-mix(in srgb,var(--lc) 12%,rgba(20,4,28,.98)))!important;box-shadow:0 0 8px color-mix(in srgb,var(--lc) 88%,transparent),0 0 19px color-mix(in srgb,var(--lc) 48%,transparent),inset 0 0 19px color-mix(in srgb,var(--lc) 17%,transparent)!important}.lights .light.on:after{height:3px;opacity:1;box-shadow:0 0 7px var(--lc),0 0 15px var(--lc)}.lights .light.on ha-icon{color:var(--lc)!important;filter:drop-shadow(0 0 3px #fff) drop-shadow(0 0 8px var(--lc)) drop-shadow(0 0 14px var(--lc))!important}.lights .light.on small{color:var(--lc)!important;text-shadow:0 0 6px var(--lc),0 0 12px color-mix(in srgb,var(--lc) 75%,transparent)!important}.lights .light.action{border-color:var(--lc)!important}

/* GARAGE DEGRADED + BOTTOM MOTION RESTORE v1 */
.gbrand.g-degraded{border-color:#ff335f!important;border-left-color:#ff335f!important;box-shadow:inset 0 0 16px rgba(255,51,95,.13),0 0 10px rgba(255,51,95,.28)!important}.gbrand.g-degraded .gstatus{color:#ff335f!important;text-shadow:0 0 3px #ffe8ed,0 0 8px #ff335f,0 0 16px rgba(255,0,72,.72)!important}.gbrand.g-degraded .ring:before{border-color:#ff335f!important;box-shadow:0 0 8px rgba(255,51,95,.8)!important}.gbrand.g-degraded .ring:after{border-color:#ff335f transparent #ff7291!important}.gbrand.g-degraded .ring ha-icon{color:#ff335f!important;filter:drop-shadow(0 0 3px #ffe5eb) drop-shadow(0 0 9px #ff335f) drop-shadow(0 0 16px rgba(255,0,72,.72))!important}.lights .light b,.lights .light small{animation:f-chroma var(--ft,7.2s) step-end var(--fd,0s) infinite!important;will-change:transform,filter}.lights .light.on ha-icon{animation:f-thermo-pulse 1.55s ease-in-out infinite}.lights .light:after{animation:f-h1 var(--ft,7.2s) step-end var(--fd,0s) infinite}@media(prefers-reduced-motion:reduce){.lights .light b,.lights .light small,.lights .light.on ha-icon,.lights .light:after{animation:none!important}}

/* HEADER UPTIME + BATTERY CORE MARK v1 */
.header .chip.up{display:grid!important}@media(max-width:520px){.header{grid-template-columns:minmax(76px,1fr) auto!important}.chips{gap:2px!important}.chip{min-width:34px!important;padding-inline:2px!important}.chip.person{min-width:40px!important}}@media(max-width:365px){.header{grid-template-columns:minmax(67px,1fr) auto!important;padding-right:3px!important}.headtitle{font-size:9.5px!important;letter-spacing:.045em!important}.chip{min-width:31px!important;height:27px!important}.chip.person{min-width:37px!important}.chip small{font-size:5.5px!important}.chip b{font-size:9px!important}}
@keyframes battery-core-fill{0%,12%{background-position:120% 0;filter:brightness(.78)}48%{filter:brightness(1.45)}78%,100%{background-position:-45% 0;filter:brightness(.92)}}@keyframes battery-core-jolt{0%,82%,100%{transform:translateX(0);clip-path:inset(0)}84%{transform:translateX(1px);clip-path:inset(0 0 58% 0)}86%{transform:translateX(-1px);clip-path:inset(42% 0 0 0)}88%{transform:translateX(0);clip-path:inset(0)}}@keyframes battery-terminal{0%,100%{opacity:.42;box-shadow:0 0 4px #39ff88}50%{opacity:1;box-shadow:0 0 7px #39ff88,0 0 13px rgba(57,255,136,.72)}}.battery-mark{display:inline-flex!important;align-items:center;gap:6px;position:relative;min-width:0;color:#eafaff!important}.battery-glyph{position:relative;display:inline-block;width:27px;height:14px;flex:0 0 27px;border:1px solid #26bfff;clip-path:polygon(0 0,23px 0,23px 3px,27px 3px,27px 11px,23px 11px,23px 14px,0 14px);box-shadow:0 0 7px rgba(38,191,255,.65),inset 0 0 5px rgba(38,191,255,.22)}.battery-glyph:after{content:'';position:absolute;right:0;top:4px;width:3px;height:6px;background:#39ff88;animation:battery-terminal 1.2s ease-in-out infinite}.battery-glyph i{position:absolute;inset:3px 6px 3px 3px;background:linear-gradient(90deg,#ff4fd8 0 26%,#26bfff 42% 66%,#39ff88 82% 100%);background-size:220% 100%;box-shadow:0 0 6px rgba(38,191,255,.72);animation:battery-core-fill 2.7s linear infinite}.battery-word{position:relative;font-size:12px;font-weight:950;letter-spacing:.12em;color:#eafaff;text-shadow:-1px 0 rgba(255,79,216,.58),1px 0 rgba(38,191,255,.72),0 0 7px rgba(38,191,255,.35);animation:battery-core-jolt 4.8s step-end infinite}.battery-word:after{content:'';position:absolute;left:0;right:0;bottom:-3px;height:1px;background:linear-gradient(90deg,#fcee0a,#ff4fd8 48%,#26bfff 76%,transparent);box-shadow:0 0 5px rgba(255,79,216,.58)}@media(prefers-reduced-motion:reduce){.battery-glyph:after,.battery-glyph i,.battery-word{animation:none!important}}

/* HEADER STABILITY + BLACK CAMERA CHASSIS v1 */
.header>.f-tracer{display:none!important}.header{isolation:isolate;backface-visibility:hidden;transform:translateZ(0)}.counts{background:radial-gradient(circle at 8% 50%,rgba(255,35,108,.08),transparent 29%),linear-gradient(135deg,#010205 0%,#03060b 54%,#000204 100%)!important;border-color:rgba(255,79,216,.62)!important;border-left:3px solid #ff315f!important;box-shadow:5px 5px 0 rgba(0,0,0,.62),0 0 13px rgba(255,49,95,.19),inset 0 0 18px rgba(38,191,255,.035)!important}.counts .ctitle{color:#ff4fd8!important;text-shadow:0 0 4px #ff315f,0 0 10px rgba(255,49,95,.72)!important}.counts .ctitle ha-icon{color:#fcee0a!important;filter:drop-shadow(0 0 3px #fffbd0) drop-shadow(0 0 8px #fcee0a) drop-shadow(0 0 16px rgba(252,238,10,.88))!important}.counts .metric{background:linear-gradient(145deg,color-mix(in srgb,var(--mc) 8%,transparent),rgba(0,2,6,.96) 58%)!important}

/* CYBERPUNK CCTV SWEEP v3 CONTAINED */
@keyframes cctv-pan-v3{0%,12%{transform:rotate(-13deg)}42%,58%{transform:rotate(13deg)}88%,100%{transform:rotate(-13deg)}}@keyframes cctv-beam-v3{0%,12%{transform:rotate(-13deg);opacity:.18}42%,58%{transform:rotate(13deg);opacity:.65}48%{opacity:.95}88%,100%{transform:rotate(-13deg);opacity:.18}}@keyframes cctv-rec-v3{0%,48%{opacity:.3}49%,100%{opacity:1}}.counts{grid-template-columns:52px minmax(0,1fr)!important;gap:4px!important}.counts .ctitle{position:relative;overflow:hidden!important;isolation:isolate;min-height:72px;display:grid;place-content:center;border-right:1px solid rgba(252,238,10,.18)}.counts .ctitle ha-icon{--mdc-icon-size:31px!important;position:relative;z-index:3;color:#fcee0a!important;transform-origin:50% 72%;animation:cctv-pan-v3 4.6s ease-in-out infinite!important;filter:drop-shadow(0 0 3px #fffbd0) drop-shadow(0 0 8px #fcee0a) drop-shadow(0 0 13px rgba(252,238,10,.62))!important;will-change:transform}.counts .ctitle>div{position:relative;z-index:4;margin-top:4px;font-size:6px;letter-spacing:.1em}.counts .ctitle:before{content:'● REC';position:absolute;z-index:4;left:5px;top:5px;font:950 5px/1 monospace;letter-spacing:.08em;color:#ff315f;text-shadow:0 0 5px #ff315f;animation:cctv-rec-v3 1.1s step-end infinite}.counts .ctitle:after{content:'';position:absolute;z-index:1;left:25px;top:34px;width:28px;height:26px;transform-origin:0 0;clip-path:polygon(0 0,100% 67%,70% 100%,0 12%);background:linear-gradient(110deg,rgba(252,238,10,.28),rgba(252,238,10,.055) 62%,transparent 78%);border-top:1px solid rgba(252,238,10,.66);animation:cctv-beam-v3 4.6s ease-in-out infinite;pointer-events:none}.counts .metrics{gap:3px!important}.counts .metric{padding:4px 2px!important}.counts .metric ha-icon{--mdc-icon-size:16px!important}.counts .metric b{font-size:14px!important}.counts .metric small{font-size:6px!important}@media(max-width:365px){.counts{grid-template-columns:48px minmax(0,1fr)!important}.counts .ctitle ha-icon{--mdc-icon-size:28px!important}}@media(prefers-reduced-motion:reduce){.counts .ctitle ha-icon,.counts .ctitle:before,.counts .ctitle:after{animation:none!important}}
</style>
<div class="root"><div class="grid">
  <div class="header surface tap" data-nav="/dashboard-directory"><i class="edge"></i><div class="headtitle">MARVIN<b>://HOME</b></div><div class="chips"><div class="chip" style="--c:#fcee0a"><small>RAM</small><b id="ram">—</b></div><div class="chip up"><small>UP</small><b id="up">—</b></div><div class="chip"><small>P1</small><b id="ry">—</b></div><div class="chip"><small>P2</small><b id="rb">—</b></div></div></div>
  <div class="marvin surface tap" data-more="sensor.energy_director_reason"><i class="edge"></i><div class="avatar" aria-hidden="true"><ha-icon icon="mdi:robot-industrial"></ha-icon></div><div class="mtop"><div class="mlabel">MARVIN<b>://SAYS</b></div><div class="proj"><span>MRGN <b id="margin">—</b></span><span>AM <b id="morning">—</b></span></div></div><div class="msgwrap"><div id="msg" class="msg">—</div></div></div>
  <div id="battery" class="battery surface tap" data-nav="/energy"><i class="edge"></i><div id="dial" class="dial"><div class="dialtext"><strong id="soc">—%</strong><small><b id="usable">—</b> kWh</small></div></div><div class="bdata"><div class="bhead"><strong class="battery-mark"><span class="battery-glyph" aria-hidden="true"><i></i></span><span class="battery-word">BATTERY</span></strong><span id="mode" class="mode">—</span></div><div class="flowhead"><span id="route" class="route">STANDBY</span><span id="pwr" class="pwr">0.0 kW</span></div><div class="slider"><span id="fill" class="fill"></span></div><div class="micro"><div><small>TODAY</small><b id="today">—</b></div><div><small>EV</small><b id="ev">—</b></div><div><small>BMS</small><b id="bms">—</b></div><div><small>TEMP</small><b id="btemp">—</b></div></div></div></div>
  <div id="thermo" class="thermo surface tap" data-more="climate.t10_plus_thermostat"><i class="edge"></i><div class="thermoIcon"><ha-icon id="ticon" icon="mdi:thermostat"></ha-icon></div><div class="tinfo"><div class="tkick">THERMOSTAT // HOME</div><div class="tread"><span id="temp" class="temp">—°</span><span class="tchip">SET <b id="set">—°</b></span><span class="tchip">RH <b id="rh">—%</b></span></div><div class="trun"><span id="taction">LINK</span><b id="runtime">—</b></div></div></div>
  <div class="weather surface tap" data-more="weather.forecast_home"><i class="edge"></i><div class="whead"><div><div class="wtitle">WEATHER</div><div id="wnow" class="wnow">—</div></div><div id="wtemp" class="wtemp">—</div></div><div id="forecast" class="forecast"></div></div>
  <div class="counts surface tap" data-nav="/marvin-home/cameras"><i class="edge"></i><div class="ctitle"><ha-icon icon="mdi:cctv"></ha-icon><div>TODAY</div></div><div class="metrics"><div class="metric" style="--mc:#f59e0b"><ha-icon icon="mdi:paw"></ha-icon><b id="animals">0</b><small id="animalsT">—</small></div><div class="metric" style="--mc:#60a5fa"><ha-icon icon="mdi:account"></ha-icon><b id="people">0</b><small id="peopleT">—</small></div><div class="metric" style="--mc:#4ade80"><ha-icon icon="mdi:car"></ha-icon><b id="vehicles">0</b><small id="vehiclesT">—</small></div></div></div>
  <div class="garage surface"><i class="edge"></i><div class="gbrand"><div style="font-size:7px;font-weight:950">GARAGE://NET</div><div class="ring"><ha-icon icon="mdi:garage-variant"></ha-icon></div><div id="gstatus" class="gstatus">—</div></div>${['west','center','east'].map(x=>`<div id="door-${x}" class="door tap" data-more="cover.${x}_door"><div class="portal"><ha-icon icon="mdi:garage-variant"></ha-icon></div><div class="dname">${x.toUpperCase()}</div><div class="dstate">—</div><div class="dlast">LAST —</div></div>`).join('')}</div>
  <div id="lights" class="lights"></div>
</div></div>`;
this.shadowRoot.querySelectorAll('.surface:not(.header)').forEach((el,i)=>{el.style.setProperty('--ft',(7.1+(i%6)*.31).toFixed(2)+'s');el.style.setProperty('--fd',(-.7-(i%8)*.63).toFixed(2)+'s');const d=document.createElement('div');d.className='f-tracer';d.innerHTML='<div class="f-edge"></div><i class="f-fall a"></i><i class="f-fall b"></i><i class="f-fall c"></i><b class="f-h h1"></b><b class="f-h h2"></b><div class="f-corner"></div>';el.appendChild(d);});const foundationBattery=this.shadowRoot.querySelector('.battery');if(foundationBattery)foundationBattery.insertAdjacentHTML('afterbegin','<div class="f-bgrid"></div><div class="f-bscan"></div>');this.shadowRoot.addEventListener('click',e=>{const t=e.target.closest('[data-nav],[data-more],[data-light],[data-script]');if(!t)return;if(t.dataset.nav)this._nav(t.dataset.nav);else if(t.dataset.more)this._more(t.dataset.more);else if(t.dataset.light)this._hass?.callService('light','toggle',{entity_id:t.dataset.light});else if(t.dataset.script)this._hass?.callService('script','turn_on',{entity_id:t.dataset.script});});
}
  _marvin(){const s=this._s('sensor.energy_director_reason');let c=(s?.state||'').trim();c=c.replace(/^Possible move to [^;]+;\s*maintaining .*? during the stability test\.\s*/i,'');const tech=s?.attributes?.technical_reason||'';if(/^[^;]+;\s*margin\s+[-+]?\d+(?:\.\d+)?\s*kWh,\s*morning\s+SOC\s+[-+]?\d+(?:\.\d+)?%\.?$/i.test(tech.trim())&&c){let a=(c.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g)||[c]).map(x=>x.trim()).filter(Boolean);const redundant=x=>(/[-+]?\d+(?:\.\d+)?\s*kwh\b/i.test(x)&&/\b(margin|spare|surplus|reserve)\b/i.test(x))||(/[-+]?\d+(?:\.\d+)?\s*%/.test(x)&&/\b(morning|soc|state of charge|projected|expected|by morning)\b/i.test(x));while(a.length>1&&redundant(a[0]))a.shift();c=a.join(' ')||c;}return c||'No comment. A rare and suspicious event.';}
  _update(){if(!this._hass)return;const ram=this._n('sensor.system_monitor_memory_usage');this._txt('#ram',ram===null?'—':Math.round(ram)+'%');const up=this._s('sensor.system_monitor_uptime')?.state;let us='—';if(up){const ms=Date.now()-new Date(up).getTime();if(Number.isFinite(ms)&&ms>=0){const d=Math.floor(ms/86400000),h=Math.floor(ms%86400000/3600000);us=d?`${d}D${h}H`:`${h}H`;}}this._txt('#up',us);for(const [id,sel] of [['person.person_one','#ry'],['person.person_two','#rb']]){const st=this._s(id)?.state||'unknown',el=NC(sel,this.shadowRoot);const v=st==='home'?'HOME':st==='not_home'?'AWAY':'—';if(el){el.textContent=v;el.parentElement.style.setProperty('--c',st==='home'?'#39ff88':st==='not_home'?'#ff4fd8':'#fcee0a');}}
const margin=this._n('sensor.energy_director_energy_margin'),morning=this._n('sensor.energy_director_projected_morning_soc');this._txt('#margin',margin===null?'—':margin.toFixed(1)+' kWh');this._txt('#morning',morning===null?'—':Math.round(morning)+'%');const msg=this._marvin(),me=NC('#msg',this.shadowRoot);if(me&&this._last.msg!==msg){this._last.msg=msg;const scroll=msg.length>44;me.className='msg'+(scroll?' scroll':'');me.style.setProperty('--dur',Math.min(22,Math.max(10,msg.length*.16))+'s');me.replaceChildren(Object.assign(document.createElement('span'),{textContent:msg}));if(scroll)me.append(Object.assign(document.createElement('span'),{textContent:msg,ariaHidden:'true'}));}
const soc=Math.max(0,Math.min(100,this._n('sensor.growatt_battery_battery_soc')??0)),bp=Math.max(-9.9,Math.min(9.9,this._n('sensor.growatt_battery_battery_power')??0)),mag=Math.abs(bp),idle=mag<.05,charging=!idle&&bp>0,accent=soc>=70?'#39ff88':soc>=30?'#26bfff':soc>=20?'#ffd319':'#ff335f',flow=idle?'#7c8aa5':charging?'#39ff88':'#ff4fd8',bat=NC('#battery',this.shadowRoot);bat.classList.toggle('charge',charging);bat.classList.toggle('discharge',!idle&&!charging);bat.style.setProperty('--flow',flow);const dial=NC('#dial',this.shadowRoot);dial.style.setProperty('--accent',accent);dial.style.setProperty('--deg',Math.max(1,soc*3.6)+'deg');this._txt('#soc',Math.round(soc)+'%');this._txt('#usable',Math.max(0,(soc-10)*.16).toFixed(1));this._txt('#pwr',idle?'0.0 kW':`${bp>0?'+':''}${bp.toFixed(1)} kW`);this._txt('#route',idle?'STANDBY':charging?'PV → BATTERY':'BATTERY → HOME');const fill=NC('#fill',this.shadowRoot);fill.style.setProperty('--w',idle?'0%':Math.max(6,mag/9.9*50)+'%');fill.style.setProperty('--fill',flow);const modeRaw=this._s('input_select.energy_director_active_mode')?.state||'Unknown',mc={Normal:'#57a6ff',Conservation:'#ffd166',Abundant:'#35ff9a',Storm:'#c46cff',Outage:'#ff477e',Fault:'#ff365f'}[modeRaw]||'#7b91a7',mode=NC('#mode',this.shadowRoot);mode.textContent=({Conservation:'CONSERVE'}[modeRaw]||modeRaw).toUpperCase();mode.style.setProperty('--modec',mc);const today=this._n('sensor.growatt_load_load_energy_today');this._txt('#today',today===null?'—':today.toFixed(1)+' kWh');const evs=this._s('sensor.growatt_thor_ev_charger_status')?.state||'',eva=this._n('number.growatt_thor_ev_charger_max_current'),evp=this._n('sensor.energy_director_ev_power');this._txt('#ev',/charging/i.test(evs)||(evp??0)>20?(eva===null?'ON':Math.round(eva)+'A'):'OFF');const bw=this._n('sensor.growatt_battery_bms_warning'),be=this._n('sensor.growatt_battery_bms_error'),bs=this._n('sensor.growatt_battery_bms_status');this._txt('#bms',bw===null&&be===null&&bs===null?'—':((bw??0)!==0||(be??0)!==0)?'ALERT':'OK');const bt=this._s(this.config?.battery_temp_entity||'sensor.growatt_battery_battery_temperature')||this._s('sensor.growatt_battery_battery_temp'),btr=Number(bt?.state),btu=String(bt?.attributes?.unit_of_measurement||'').toLowerCase(),btf=Number.isFinite(btr)?(btu.includes('f')?btr:btr*9/5+32):null;let bth=null;if(btf!==null){if(btf<=32)bth=210;else if(btf<50)bth=210-(btf-32)*(25/18);else if(btf<86)bth=185-(btf-50)*(65/36);else if(btf<95)bth=120-(btf-86)*(60/9);else if(btf<104)bth=60-(btf-95)*(30/9);else if(btf<113)bth=30-(btf-104)*(30/9);else bth=0;}const btc=bth===null?'#7c8aa5':`hsl(${Math.round(bth)} 100% 62%)`,bte=NC('#btemp',this.shadowRoot);this._txt('#btemp',btf===null?'—':Math.round(btf)+'°F');if(bte){bte.style.color=btc;bte.style.textShadow=btf===null?'none':`0 0 7px ${btc}`;if(bte.parentElement)bte.parentElement.style.borderTopColor=btf===null?'rgba(115,169,194,.16)':btc;}
const cl=this._s('climate.t10_plus_thermostat'),a=cl?.attributes||{},act=a.hvac_action||'unknown',tc={cooling:'#26bfff',heating:'#ffb000',idle:'#4da3ff',off:'#607aa0'}[act]||'#4da3ff',th=NC('#thermo',this.shadowRoot);th.style.setProperty('--tc',tc);this._txt('#temp',Number.isFinite(Number(a.current_temperature))?Math.round(Number(a.current_temperature))+'°':'—');this._txt('#set',Number.isFinite(Number(a.temperature))?Math.round(Number(a.temperature))+'°':'—');this._txt('#rh',Number.isFinite(Number(a.current_humidity))?Math.round(Number(a.current_humidity))+'%':'—');this._txt('#taction',({cooling:'COOLING',heating:'HEATING',idle:'STANDBY',off:'OFFLINE'}[act]||'LINK'));NC('#ticon',this.shadowRoot)?.setAttribute('icon',act==='cooling'?'mdi:snowflake-thermometer':act==='heating'?'mdi:fire':'mdi:thermostat');const rt=this._n('sensor.hvac_runtime_today');if(rt===null)this._txt('#runtime','—');else{const m=Math.max(0,Math.round(rt*60));this._txt('#runtime',m<60?m+'m':`${Math.floor(m/60)}h ${m%60}m`);}
const w=this._s('weather.forecast_home'),labels={'clear-night':'Clear',cloudy:'Cloudy',fog:'Fog',hail:'Hail',lightning:'Storms','lightning-rainy':'Storms',partlycloudy:'Partly cloudy',pouring:'Heavy rain',rainy:'Rain',snowy:'Snow','snowy-rainy':'Wintry mix',sunny:'Sunny',windy:'Windy','windy-variant':'Windy'};this._txt('#wnow',labels[w?.state]||w?.state||'Weather');this._txt('#wtemp',Number.isFinite(Number(w?.attributes?.temperature))?Math.round(Number(w.attributes.temperature))+'°':'—');const fr=NC('#forecast',this.shadowRoot),raw=this._s('input_text.weather_next_two_hours')?.state||'[]';if(this._last.fr!==raw){this._last.fr=raw;let rows=[];try{rows=JSON.parse(raw)}catch{}fr.innerHTML=rows.slice(0,2).map(x=>{const d=new Date(x.d),time=Number.isNaN(d.getTime())?'—':d.toLocaleTimeString([],{hour:'numeric'}),det=[Number.isFinite(Number(x.t))?Math.round(Number(x.t))+'°':'',x.p!=null&&Number.isFinite(Number(x.p))?Math.round(Number(x.p))+'% rain':''].filter(Boolean).join(' · ');return `<div class="frow"><b>${time} · ${labels[x.c]||x.c||'Updating'}</b><span>${det}</span></div>`}).join('')||'<div class="frow"><span>Forecast updating…</span></div>';}
for(const [id,n,t] of [['counter.camera_animals_today','#animals','#animalsT'],['counter.camera_people_today','#people','#peopleT'],['counter.camera_vehicles_today','#vehicles','#vehiclesT']]){const s=this._s(id),v=Number(s?.state);this._txt(n,Number.isFinite(v)?v:0);this._txt(t,Number.isFinite(v)&&v>0?this._fmtTime(s?.last_changed):'—');}
const ds=['west','center','east'].map(x=>this._s(`cover.${x}_door`)?.state||'unknown'),open=ds.filter(x=>x==='open'||x==='opening').length,moving=ds.some(x=>x==='opening'||x==='closing'),off=ds.filter(x=>x==='unknown'||x==='unavailable').length;this._txt('#gstatus',open?`${open} OPEN`:moving?'DOORS MOVING':off?`${off} OFFLINE`:'ALL SEALED');const gb=NC('.gbrand',this.shadowRoot);if(gb)gb.classList.toggle('g-degraded',off>0);['west','center','east'].forEach((x,i)=>{const st=ds[i],d=NC(`#door-${x}`,this.shadowRoot),offline=st==='unknown'||st==='unavailable',isopen=st==='open',ismove=st==='opening'||st==='closing',dc=offline?'#647b89':isopen||ismove?'#26bfff':'#39ff88';d.classList.toggle('open',isopen);d.classList.toggle('moving',ismove);d.style.setProperty('--dc',dc);d.querySelector('.dstate').textContent=offline?'OFFLINE':st==='closed'?'SEALED':st.toUpperCase();d.querySelector('ha-icon').setAttribute('icon',offline?'mdi:garage-alert':isopen||ismove?'mdi:garage-open-variant':'mdi:garage-variant');const raw=this._s(`input_datetime.${x}_door_last_opened`)?.state;d.querySelector('.dlast').textContent='LAST '+(raw?this._fmtTime(raw.replace(' ','T')):'—');});this._lights();}
  _lights(){const defs=[['Kitchen','light.kitchen_main_lights','mdi:countertop-outline','#39ff88'],['Foyer','light.front_foyer_main_lights','mdi:door-open','#ff4fd8'],['Front','light.front_porch_overhead_light','mdi:coach-lamp','#f0df54'],['Back','light.exterior_back_porch_lights','mdi:outdoor-lamp','#26bfff'],['Office','light.office_main_lights','mdi:desk-lamp','#39ff88'],['Master','light.master_bedroom_main_lights','mdi:bed-king-outline','#ff4fd8'],['Outside','light.outside_camera_lights','mdi:spotlight-beam','#26bfff']];const sig=defs.map(x=>{const s=this._s(x[1]);return `${x[1]}:${s?.state}:${s?.attributes?.brightness??''}`}).join('|');if(sig===this._last.lights)return;this._last.lights=sig;const box=NC('#lights',this.shadowRoot);box.innerHTML=defs.map(([name,id,icon,c])=>{const s=this._s(id),on=s?.state==='on',b=Number(s?.attributes?.brightness),lab=s?.state==='unavailable'?'OFFLINE':on?(Number.isFinite(b)?Math.round(b/255*100)+'%':'ON'):'OFF';return `<button class="light surface tap ${on?'on':''}" style="--lc:${c}" data-light="${id}"><ha-icon icon="${icon}"></ha-icon><b>${name}</b><small>${lab}</small></button>`}).join('')+`<button class="light surface tap action" data-nav="/marvin-home/lights"><ha-icon icon="mdi:lightbulb-group"></ha-icon><b>Lights</b><small>OPEN</small></button><button class="light surface tap action" data-script="script.tray_cyberpunk_motion"><ha-icon icon="mdi:motion-play-outline"></ha-icon><b>Cyber</b><small>RUN</small></button>`;}
}
if(!customElements.get('marvin-night-city-card'))customElements.define('marvin-night-city-card',MarvinNightCityCard);window.customCards=window.customCards||[];if(!window.customCards.some(x=>x.type==='marvin-night-city-card'))window.customCards.push({type:'marvin-night-city-card',name:'Marvin Night City',description:'Foundation-faithful single-render Night City Home dashboard'});

/* ===== 10-hardware-weather.js ===== */
// Marvin planning, alert colors, performance tuning, and Night City hardware patch.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinHardwarePerfPatch) return;
  Card.prototype.__marvinHardwarePerfPatch = true;

  const originalN = Card.prototype._n;
  Card.prototype._n = function(id, attr) {
    if (!attr && id === 'sensor.energy_director_energy_margin') id = 'sensor.marvin_planning_energy_margin';
    if (!attr && id === 'sensor.energy_director_projected_morning_soc') id = 'sensor.marvin_planning_morning_soc';
    return originalN.call(this, id, attr);
  };

  Card.prototype._marvin = function() {
    const state = (this._s('sensor.marvin_stable_reason')?.state || '').trim();
    return state || 'No comment. A rare and suspicious event.';
  };

  const hardwareCss = `
.headtitle{animation:glitch 8.4s step-end infinite!important}
.mlabel,.bhead strong,.pwr,.tkick,.temp,.wtitle,.wtemp,.metric b,.gstatus,.dname,.dstate,.light b,.light small{animation:none!important}
.f-corner,.chip,.dial,.thermoIcon ha-icon,.tkick:before,.light.on ha-icon,.lights .light:after{animation:none!important}
.weather:before{animation:none!important;opacity:.34!important}.lights .light b,.lights .light small{will-change:auto!important}.f-fall.b,.f-fall.c,.f-h.h2{display:none!important}.f-fall.a,.f-h.h1,.header:before,.marvin:before,.f-bscan,.fill:before,.thermo:after,.counts:after,.door .portal:before{will-change:transform,opacity}.dial{filter:none!important}.light.on ha-icon{filter:drop-shadow(0 0 3px #fff) drop-shadow(0 0 8px var(--lc))!important}
@keyframes marvin-fall-full{0%,20%{transform:translate3d(0,-34%,0);opacity:0}22%{opacity:.86}33%{transform:translate3d(0,116%,0);opacity:.18}34%,100%{transform:translate3d(0,116%,0);opacity:0}}
.f-tracer{overflow:hidden!important}.f-fall.a{left:17%!important;top:0!important;height:100%!important;width:1px!important;transform:translate3d(0,-34%,0);animation:marvin-fall-full var(--ft,7.2s) linear var(--fd,0s) infinite!important;background:linear-gradient(180deg,transparent 0%,#26bfff 24%,rgba(255,255,255,.92) 55%,#ff4fd8 78%,transparent 100%) top/100% 34% no-repeat!important;box-shadow:none!important}.f-fall.b,.f-fall.c{display:none!important}
@keyframes cam-net-pan{0%,12%{transform:rotate(-10deg)}42%,58%{transform:rotate(10deg)}88%,100%{transform:rotate(-10deg)}}@keyframes cam-rec-blink{0%,47%{opacity:.28}48%,100%{opacity:1}}@keyframes cam-signal-pulse{0%,100%{opacity:.26;transform:scaleY(.55)}50%{opacity:.9;transform:scaleY(1)}}@keyframes cam-scan-slide{0%{background-position:-22px 0}100%{background-position:22px 0}}
.counts .ctitle>ha-icon{display:none!important}.counts .ctitle:before,.counts .ctitle:after{display:none!important}.cam-netrunner{position:relative;z-index:3;width:43px;height:35px;margin:1px auto 0;transform-origin:50% 72%;animation:cam-net-pan 5.2s ease-in-out infinite;will-change:transform;isolation:isolate}.cam-net-frame{position:absolute;inset:3px 2px 4px;clip-path:polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px);border:1px solid rgba(252,238,10,.74);background:linear-gradient(90deg,rgba(252,238,10,.08),transparent 24% 76%,rgba(38,191,255,.08)),repeating-linear-gradient(180deg,transparent 0 4px,rgba(38,191,255,.045) 4px 5px),#020407}.cam-net-frame:before{content:'';position:absolute;inset:4px;border-left:1px solid rgba(252,238,10,.7);border-right:1px solid rgba(38,191,255,.42);background:linear-gradient(90deg,#fcee0a,transparent 7px) left top/11px 1px no-repeat,linear-gradient(270deg,#26bfff,transparent 7px) right bottom/11px 1px no-repeat;opacity:.76}.cam-net-eye{position:absolute;z-index:3;left:13px;top:10px;width:17px;height:12px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);border:1px solid #fcee0a;background:#050807}.cam-net-eye:before{content:'';position:absolute;left:5px;top:3px;width:5px;height:5px;border-radius:50%;background:#fcee0a;box-shadow:0 0 5px rgba(252,238,10,.88)}.cam-net-eye:after{content:'';position:absolute;left:-8px;top:5px;width:32px;height:1px;background:linear-gradient(90deg,transparent,#26bfff 24%,#dffcff 50%,#26bfff 76%,transparent);background-size:22px 100%;animation:cam-scan-slide 1.9s linear infinite;opacity:.82}.cam-net-beam{position:absolute;z-index:1;left:28px;top:17px;width:17px;height:16px;clip-path:polygon(0 0,100% 55%,70% 100%,0 22%);background:linear-gradient(110deg,rgba(38,191,255,.28),rgba(38,191,255,.055) 62%,transparent 82%);border-top:1px solid rgba(38,191,255,.68);opacity:.58;pointer-events:none}.cam-rec{position:absolute;z-index:5;left:4px;top:4px;font:950 5px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.06em;color:#ff315f;text-shadow:0 0 4px rgba(255,49,95,.9);animation:cam-rec-blink 1.15s step-end infinite}.cam-bars{position:absolute;z-index:5;right:4px;top:5px;height:8px;display:flex;align-items:end;gap:1px}.cam-bars i{display:block;width:2px;background:#26bfff;transform-origin:50% 100%;animation:cam-signal-pulse 1.8s ease-in-out infinite}.cam-bars i:nth-child(1){height:3px}.cam-bars i:nth-child(2){height:5px;animation-delay:.18s}.cam-bars i:nth-child(3){height:8px;animation-delay:.36s}
@keyframes counter-scan{0%{background-position:0 -10px,0 0,0 0}100%{background-position:0 34px,0 0,0 0}}@keyframes counter-tick{0%,84%,100%{opacity:.28;transform:scaleX(.55)}86%{opacity:.95;transform:scaleX(1)}88%{opacity:.42;transform:scaleX(.7)}}
.counts .metrics{gap:4px!important}.counts .metric{position:relative;overflow:hidden;isolation:isolate;padding:4px 2px 5px!important;clip-path:polygon(5px 0,100% 0,100% calc(100% - 5px),calc(100% - 5px) 100%,0 100%,0 5px);border:1px solid color-mix(in srgb,var(--mc) 46%,rgba(255,255,255,.10))!important;background:linear-gradient(180deg,color-mix(in srgb,var(--mc) 15%,transparent),transparent 10px) top/100% 10px no-repeat,repeating-linear-gradient(180deg,rgba(222,250,255,.045) 0 1px,transparent 1px 5px),linear-gradient(145deg,color-mix(in srgb,var(--mc) 10%,transparent),rgba(0,2,6,.97) 58%)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.025),inset 0 0 8px color-mix(in srgb,var(--mc) 10%,transparent)!important}.counts .metric:before,.counts .metric:after{content:'';position:absolute;z-index:2;pointer-events:none;width:8px;height:8px;border-color:var(--mc);border-style:solid;opacity:.82}.counts .metric:before{left:3px;top:3px;border-width:1px 0 0 1px}.counts .metric:after{right:3px;bottom:3px;border-width:0 1px 1px 0}.counts .metric ha-icon{--mdc-icon-size:15px!important;position:relative;z-index:3;display:grid;place-items:center;width:23px;height:23px;margin:0 auto 2px;color:var(--mc)!important;border:1px solid color-mix(in srgb,var(--mc) 72%,transparent);clip-path:polygon(5px 0,100% 0,100% calc(100% - 5px),calc(100% - 5px) 100%,0 100%,0 5px);background:linear-gradient(180deg,color-mix(in srgb,var(--mc) 18%,transparent),transparent 60%),repeating-linear-gradient(180deg,rgba(255,255,255,.07) 0 1px,transparent 1px 4px),rgba(0,0,0,.48)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.035),0 0 6px color-mix(in srgb,var(--mc) 30%,transparent)!important;animation:counter-scan 2.4s linear infinite!important;will-change:background-position}.counts .metric b{position:relative;z-index:3;display:block;margin-top:1px;font:950 15px/1 ui-monospace,SFMono-Regular,Menlo,monospace!important;letter-spacing:.02em;color:var(--mc)!important;text-shadow:0 0 3px rgba(255,255,255,.70),0 0 8px color-mix(in srgb,var(--mc) 82%,transparent)!important}.counts .metric b:before{content:'[';margin-right:1px;color:color-mix(in srgb,var(--mc) 64%,#dffcff);font-size:8px;vertical-align:2px}.counts .metric b:after{content:']';margin-left:1px;color:color-mix(in srgb,var(--mc) 64%,#dffcff);font-size:8px;vertical-align:2px}.counts .metric small{position:relative;z-index:3;display:block!important;margin-top:3px;padding-top:2px;border-top:1px solid color-mix(in srgb,var(--mc) 24%,transparent);font:800 5.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace!important;letter-spacing:.08em;color:color-mix(in srgb,var(--mc) 74%,#a9bbc4)!important;text-shadow:0 0 5px color-mix(in srgb,var(--mc) 42%,transparent)!important}.counts .metric small:before{content:'// ';color:color-mix(in srgb,var(--mc) 55%,#dffcff)}.counts .metric:nth-child(1){--mc:#ff9d16!important}.counts .metric:nth-child(2){--mc:#26bfff!important}.counts .metric:nth-child(3){--mc:#39ff88!important}.counts .metric:nth-child(1) ha-icon{filter:drop-shadow(0 0 2px rgba(255,238,189,.88)) drop-shadow(0 0 6px rgba(255,126,0,.62))!important}.counts .metric:nth-child(2) ha-icon{filter:drop-shadow(0 0 2px rgba(225,250,255,.88)) drop-shadow(0 0 7px rgba(38,191,255,.68))!important}.counts .metric:nth-child(3) ha-icon{filter:drop-shadow(0 0 2px rgba(225,255,236,.86)) drop-shadow(0 0 7px rgba(57,255,136,.66))!important}.counts .metric:nth-child(1):before{animation:counter-tick 7.4s step-end infinite}.counts .metric:nth-child(2):before{animation:counter-tick 7.4s step-end 2.2s infinite}.counts .metric:nth-child(3):before{animation:counter-tick 7.4s step-end 4.4s infinite}
.thermoIcon{border-color:rgba(38,191,255,.88)!important;background:linear-gradient(145deg,rgba(38,191,255,.24),rgba(4,61,152,.52))!important;box-shadow:inset 0 0 10px rgba(38,191,255,.54),0 0 7px rgba(38,191,255,.34)!important}.thermoIcon ha-icon{color:#26bfff!important;filter:drop-shadow(0 0 2px rgba(231,251,255,.95)) drop-shadow(0 0 7px rgba(38,191,255,.82))!important;animation:none!important}
@keyframes battery-core-fill{0%{background-position:120% 0}100%{background-position:-60% 0}}@keyframes battery-terminal{0%,100%{opacity:.42}50%{opacity:1}}.battery-glyph{border-color:#26bfff!important;box-shadow:0 0 5px rgba(38,191,255,.68),0 0 9px rgba(57,255,136,.24),inset 0 0 5px rgba(38,191,255,.22)!important}.battery-glyph i{background:linear-gradient(90deg,#26bfff 0 48%,#62f7d0 62%,#39ff88 82% 100%)!important;background-size:220% 100%!important;box-shadow:0 0 5px rgba(38,191,255,.62),0 0 7px rgba(57,255,136,.30)!important}.battery-glyph:after{background:#39ff88!important;box-shadow:0 0 5px rgba(57,255,136,.82)!important}.battery-word{animation:none!important}
@keyframes garage-net-scan{0%{transform:translate3d(0,-140%,0);opacity:0}14%{opacity:.2}48%{opacity:.82}78%{opacity:.24}100%{transform:translate3d(0,350%,0);opacity:0}}@keyframes garage-net-bars{0%,100%{opacity:.24;transform:scaleY(.5)}50%{opacity:.9;transform:scaleY(1)}}.gbrand .ring>ha-icon{display:none!important}.garage-net-node{--gn:#39ff88;position:relative;width:44px;height:38px;isolation:isolate;color:var(--gn)}.gbrand.g-degraded .garage-net-node{--gn:#ff335f}.garage-net-frame{position:absolute;inset:3px 2px 2px;clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);border:1px solid color-mix(in srgb,var(--gn) 72%,#26bfff);background:repeating-linear-gradient(180deg,transparent 0 4px,color-mix(in srgb,var(--gn) 7%,transparent) 4px 5px),linear-gradient(145deg,#01070b,#021419 58%,#010407)}.garage-net-frame:before{content:'';position:absolute;inset:4px;border-left:1px solid color-mix(in srgb,var(--gn) 70%,transparent);border-right:1px solid rgba(38,191,255,.4);background:linear-gradient(90deg,var(--gn),transparent 8px) left top/11px 1px no-repeat,linear-gradient(270deg,#26bfff,transparent 8px) right bottom/11px 1px no-repeat;opacity:.72}.garage-net-glyph{position:absolute;z-index:3;left:13px;top:9px;width:18px;height:18px;display:grid;place-items:center;color:var(--gn)}.garage-net-glyph ha-icon{--mdc-icon-size:17px!important;color:var(--gn)!important;filter:none!important}.garage-net-scan{position:absolute;z-index:4;left:6px;right:6px;top:0;height:20%;background:linear-gradient(180deg,transparent,rgba(38,191,255,.22),#26bfff,rgba(255,255,255,.78),transparent);animation:garage-net-scan 2.7s linear infinite;pointer-events:none}.garage-net-bars{position:absolute;z-index:5;right:4px;bottom:5px;height:8px;display:flex;align-items:end;gap:1px}.garage-net-bars i{width:2px;background:var(--gn);transform-origin:50% 100%;animation:garage-net-bars 2s ease-in-out infinite}.garage-net-bars i:nth-child(1){height:3px}.garage-net-bars i:nth-child(2){height:5px;animation-delay:.2s}.garage-net-bars i:nth-child(3){height:8px;animation-delay:.4s}.garage-net-accent{position:absolute;z-index:5;left:4px;bottom:5px;width:8px;height:1px;background:#fcee0a;box-shadow:8px 0 0 #ff4fd8;opacity:.72}.gbrand.g-degraded .garage-net-accent{background:#ff335f;box-shadow:8px 0 0 rgba(255,51,95,.45)}
@keyframes door-net-scan{0%{transform:translate3d(0,-145%,0);opacity:0}12%{opacity:.20}46%{opacity:.78}76%{opacity:.30}100%{transform:translate3d(0,390%,0);opacity:0}}@keyframes door-net-panel{0%{transform:translate3d(0,0,0);opacity:.84}100%{transform:translate3d(0,-3px,0);opacity:1}}.door .portal{overflow:hidden!important;isolation:isolate;border-color:var(--dc,#39ff88)!important;background:repeating-linear-gradient(180deg,rgba(210,252,255,.055) 0 1px,transparent 1px 5px),linear-gradient(90deg,color-mix(in srgb,var(--dc,#39ff88) 10%,transparent),transparent 22% 78%,color-mix(in srgb,var(--dc,#39ff88) 10%,transparent)),linear-gradient(155deg,#02070c 0%,#03111b 54%,#010407 100%)!important;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--dc,#39ff88) 20%,transparent),inset 0 0 9px color-mix(in srgb,var(--dc,#39ff88) 13%,transparent),0 0 6px color-mix(in srgb,var(--dc,#39ff88) 34%,transparent)!important}.door .portal:before{content:''!important;position:absolute!important;z-index:1!important;left:3px!important;right:3px!important;top:0!important;height:24%!important;background:linear-gradient(180deg,transparent,color-mix(in srgb,var(--dc,#39ff88) 25%,transparent),var(--dc,#39ff88),rgba(255,255,255,.86),transparent)!important;box-shadow:none!important;animation:door-net-scan 2.8s linear infinite!important}.door .portal:after{content:'';position:absolute;z-index:1;inset:4px;pointer-events:none;border-left:1px solid color-mix(in srgb,var(--dc,#39ff88) 52%,transparent);border-right:1px solid color-mix(in srgb,var(--dc,#39ff88) 28%,transparent);background:linear-gradient(90deg,var(--dc,#39ff88),transparent 6px) left 3px top 3px/9px 1px no-repeat,linear-gradient(270deg,var(--dc,#39ff88),transparent 6px) right 3px bottom 3px/9px 1px no-repeat;opacity:.58}.door .portal>.garage-core-3d{display:none!important}.door .portal>ha-icon{display:block!important;position:relative;z-index:2;--mdc-icon-size:28px!important;color:var(--dc,#39ff88)!important;opacity:.84;filter:drop-shadow(0 0 2px rgba(235,255,248,.80)) drop-shadow(0 0 6px color-mix(in srgb,var(--dc,#39ff88) 82%,transparent))!important;animation:none!important}.door.open .portal,.door.moving .portal{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--dc,#26bfff) 30%,transparent),inset 0 0 11px color-mix(in srgb,var(--dc,#26bfff) 19%,transparent),0 0 8px color-mix(in srgb,var(--dc,#26bfff) 52%,transparent)!important}.door.open .portal>ha-icon{opacity:1}.door.moving .portal>ha-icon{animation:door-net-panel .72s ease-in-out infinite alternate!important}.door:not(.open):not(.moving) .portal{filter:none!important}.door:not(.open):not(.moving) .portal>ha-icon{opacity:.78}@media(max-width:365px){.cam-netrunner{width:39px;transform-origin:50% 72%}.garage-net-node{transform:scale(.92)}.door .portal>ha-icon{--mdc-icon-size:25px!important}.counts .metric ha-icon{width:21px;height:21px}.counts .metric b{font-size:14px!important}}@media(prefers-reduced-motion:reduce){.cam-netrunner,.cam-rec,.cam-net-eye:after,.cam-bars i,.garage-net-scan,.garage-net-bars i,.door .portal:before,.door.moving .portal>ha-icon,.f-fall.a,.counts .metric ha-icon,.counts .metric:before{animation:none!important}}
`;
  const garageMarkup = () => `<div class="garage-net-node" aria-hidden="true"><div class="garage-net-frame"></div><span class="garage-net-glyph"><ha-icon icon="mdi:garage-variant"></ha-icon></span><i class="garage-net-scan"></i><span class="garage-net-bars"><i></i><i></i><i></i></span><i class="garage-net-accent"></i></div>`;
  const decorateHardware = (card) => {const root = card.shadowRoot;if (!root) return;if (!root.querySelector('#marvin-hardware-perf-style')) {const style = document.createElement('style');style.id = 'marvin-hardware-perf-style';style.textContent = hardwareCss;root.appendChild(style);}const camera = root.querySelector('.counts .ctitle');if (camera) {camera.querySelectorAll('.cctv3d').forEach((node) => node.remove());if (!camera.querySelector('.cam-netrunner')) camera.insertAdjacentHTML('afterbegin','<div class="cam-netrunner" aria-hidden="true"><div class="cam-net-frame"></div><i class="cam-net-eye"></i><i class="cam-net-beam"></i><span class="cam-rec">● REC</span><span class="cam-bars"><i></i><i></i><i></i></span></div>');}const brandRing = root.querySelector('.gbrand .ring');if (brandRing) {brandRing.querySelectorAll('.garage-core-3d').forEach((node) => node.remove());if (!brandRing.querySelector('.garage-net-node')) brandRing.insertAdjacentHTML('beforeend', garageMarkup());}root.querySelectorAll('.door .portal .garage-core-3d').forEach((node) => node.remove());};
  const originalUpdate = Card.prototype._update;
  Card.prototype._update = function() {originalUpdate.call(this);decorateHardware(this);const margin = originalN.call(this, 'sensor.marvin_planning_energy_margin');const morning = originalN.call(this, 'sensor.marvin_planning_morning_soc');const red = '#ff335f';const green = '#39ff88';const paint = (selector, color) => {const el = this.shadowRoot?.querySelector(selector);if (!el) return;el.style.setProperty('color', color, 'important');el.style.setProperty('text-shadow', `0 0 3px #fff, 0 0 9px ${color}, 0 0 18px ${color}`, 'important');};paint('#margin', margin !== null && margin < 0 ? red : green);paint('#morning', morning !== null && morning < 20 ? red : green);['west','center','east'].forEach((name) => {const state = this._s(`cover.${name}_door`)?.state || 'unknown';if (state !== 'unknown' && state !== 'unavailable') return;const door = this.shadowRoot?.querySelector(`#door-${name}`);if (door) door.style.setProperty('--dc', '#b44b5a');});};
});

/* WEATHER CYBER NODE v1: condition-aware icon + live HA-local HUD time. */
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');if (!Card || Card.prototype.__marvinWeatherCyberPatchV1) return;Card.prototype.__marvinWeatherCyberPatchV1 = true;
  const weatherCss = `
@keyframes wx-scan{0%{transform:translate3d(0,-150%,0);opacity:0}15%{opacity:.18}48%{opacity:.78}78%{opacity:.22}100%{transform:translate3d(0,390%,0);opacity:0}}@keyframes wx-bars{0%,100%{opacity:.24;transform:scaleY(.48)}50%{opacity:.9;transform:scaleY(1)}}@keyframes wx-tear{0%,88%,100%{transform:translate3d(0,0,0)}90%{transform:translate3d(1px,0,0)}92%{transform:translate3d(-1px,0,0)}}
.weather{background:radial-gradient(circle at 12% 45%,color-mix(in srgb,var(--wx,#26bfff) 11%,transparent),transparent 34%),repeating-linear-gradient(180deg,rgba(126,232,255,.025) 0 1px,transparent 1px 6px),linear-gradient(145deg,#06131f,#030913 68%,#02060d)!important;border-color:color-mix(in srgb,var(--wx,#26bfff) 42%,rgba(38,191,255,.28))!important;box-shadow:inset 0 0 18px color-mix(in srgb,var(--wx,#26bfff) 7%,transparent),0 0 10px color-mix(in srgb,var(--wx,#26bfff) 14%,transparent)!important}.weather .whead{display:grid!important;grid-template-columns:38px minmax(0,1fr) auto!important;gap:6px!important;align-items:center!important}.weather-net-node{position:relative;width:36px;height:36px;isolation:isolate;color:var(--wx,#26bfff)}.weather-net-frame{position:absolute;inset:1px;clip-path:polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px);border:1px solid color-mix(in srgb,var(--wx,#26bfff) 72%,#dffcff);background:repeating-linear-gradient(180deg,transparent 0 4px,color-mix(in srgb,var(--wx,#26bfff) 7%,transparent) 4px 5px),linear-gradient(145deg,#01070d,#04121b 60%,#010407)}.weather-net-frame:before{content:'';position:absolute;inset:4px;border-left:1px solid color-mix(in srgb,var(--wx,#26bfff) 65%,transparent);border-right:1px solid rgba(255,79,216,.30);background:linear-gradient(90deg,var(--wx,#26bfff),transparent 7px) left top/10px 1px no-repeat,linear-gradient(270deg,#ff4fd8,transparent 7px) right bottom/10px 1px no-repeat;opacity:.7}.weather-net-glyph{position:absolute;z-index:3;left:8px;top:8px;--mdc-icon-size:20px!important;color:var(--wx,#26bfff)!important;filter:drop-shadow(0 0 2px rgba(230,252,255,.85)) drop-shadow(0 0 6px color-mix(in srgb,var(--wx,#26bfff) 62%,transparent))!important;animation:wx-tear 8.8s step-end infinite}.weather-net-scan{position:absolute;z-index:4;left:5px;right:5px;top:0;height:22%;background:linear-gradient(180deg,transparent,color-mix(in srgb,var(--wx,#26bfff) 24%,transparent),var(--wx,#26bfff),rgba(255,255,255,.82),transparent);animation:wx-scan 3.1s linear infinite;pointer-events:none}.weather-net-bars{position:absolute;z-index:5;right:4px;bottom:4px;height:7px;display:flex;align-items:end;gap:1px}.weather-net-bars i{display:block;width:2px;background:var(--wx,#26bfff);transform-origin:50% 100%;animation:wx-bars 2.1s ease-in-out infinite}.weather-net-bars i:nth-child(1){height:2px}.weather-net-bars i:nth-child(2){height:4px;animation-delay:.18s}.weather-net-bars i:nth-child(3){height:7px;animation-delay:.36s}.weather .wtitle{color:#dffcff!important;font-family:ui-monospace,SFMono-Regular,Menlo,monospace!important;font-size:7px!important;letter-spacing:.15em!important}.weather .wtitle:after{content:' // ATMOS';color:var(--wx,#26bfff);text-shadow:0 0 5px color-mix(in srgb,var(--wx,#26bfff) 55%,transparent)}.weather .wnow{font:850 9px/1.15 ui-monospace,SFMono-Regular,Menlo,monospace!important;color:color-mix(in srgb,var(--wx,#26bfff) 68%,#dffcff)!important;margin-top:2px}.wx-meta{display:flex;gap:5px;align-items:center;margin-top:3px;font:800 5.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em;color:#789eaf}.wx-meta span{color:#ff4fd8}.wx-time{color:#fcee0a;text-shadow:0 0 5px rgba(252,238,10,.55);font-weight:950}.weather .wtemp{font:950 20px/1 ui-monospace,SFMono-Regular,Menlo,monospace!important;color:var(--wx,#26bfff)!important;text-shadow:0 0 3px rgba(230,252,255,.82),0 0 8px color-mix(in srgb,var(--wx,#26bfff) 64%,transparent)!important;align-self:start;margin-top:2px}.weather .forecast{gap:4px!important;margin-top:6px!important}.weather .frow{position:relative;overflow:hidden;padding:4px 5px!important;clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);border-color:rgba(38,191,255,.18)!important;background:linear-gradient(145deg,rgba(38,191,255,.055),rgba(2,8,14,.72))!important}.weather .frow:first-child{border-left:2px solid #26bfff!important}.weather .frow:nth-child(2){border-left:2px solid #ff4fd8!important}.weather .frow b{font-family:ui-monospace,SFMono-Regular,Menlo,monospace!important;font-size:7px!important;letter-spacing:.035em}.weather .frow span{font-family:ui-monospace,SFMono-Regular,Menlo,monospace!important;font-size:6px!important}@media(max-width:365px){.weather .whead{grid-template-columns:34px minmax(0,1fr) auto!important}.weather-net-node{transform:scale(.9);transform-origin:left center}.weather .wtemp{font-size:18px!important}}@media(prefers-reduced-motion:reduce){.weather-net-glyph,.weather-net-scan,.weather-net-bars i{animation:none!important}}
`;
  const ensureWeatherNode = (card) => {const root = card.shadowRoot;const weather = root?.querySelector('.weather');const head = weather?.querySelector('.whead');if (!weather || !head) return;if (!root.querySelector('#marvin-weather-cyber-style-v1')) {const style = document.createElement('style');style.id = 'marvin-weather-cyber-style-v1';style.textContent = weatherCss;root.appendChild(style);}if (!head.querySelector('.weather-net-node')) head.insertAdjacentHTML('afterbegin','<div class="weather-net-node" aria-hidden="true"><div class="weather-net-frame"></div><ha-icon class="weather-net-glyph" icon="mdi:weather-partly-cloudy"></ha-icon><i class="weather-net-scan"></i><span class="weather-net-bars"><i></i><i></i><i></i></span></div>');const info = head.querySelector(':scope > div:not(.weather-net-node):not(.wtemp)');if (info && !info.querySelector('.wx-meta')) info.insertAdjacentHTML('beforeend','<div class="wx-meta"><span>WX://LIVE</span><b class="wx-time">--:--</b></div>');};
  const stateMap = {'sunny':['mdi:weather-sunny','#fcee0a'],'clear-night':['mdi:weather-night','#a855f7'],'partlycloudy':['mdi:weather-partly-cloudy','#26bfff'],'cloudy':['mdi:weather-cloudy','#56c8ff'],'fog':['mdi:weather-fog','#8cbad1'],'hail':['mdi:weather-hail','#7ee8ff'],'lightning':['mdi:weather-lightning','#ff4fd8'],'lightning-rainy':['mdi:weather-lightning-rainy','#ff4fd8'],'pouring':['mdi:weather-pouring','#26bfff'],'rainy':['mdi:weather-rainy','#26bfff'],'snowy':['mdi:weather-snowy','#b8f4ff'],'snowy-rainy':['mdi:weather-snowy-rainy','#8ce8ff'],'windy':['mdi:weather-windy','#39ff88'],'windy-variant':['mdi:weather-windy-variant','#39ff88']};
  const weatherLabels = {'clear-night':'Clear',cloudy:'Cloudy',fog:'Fog',hail:'Hail',lightning:'Storms','lightning-rainy':'Storms',partlycloudy:'Partly cloudy',pouring:'Heavy rain',rainy:'Rain',snowy:'Snow','snowy-rainy':'Wintry mix',sunny:'Sunny',windy:'Windy','windy-variant':'Windy'};
  const originalUpdate = Card.prototype._update;
  Card.prototype._update = function() {originalUpdate.call(this);ensureWeatherNode(this);const weather = this.shadowRoot?.querySelector('.weather');if (!weather) return;const state = this._s('weather.forecast_home')?.state || 'unknown';const [icon,color] = stateMap[state] || ['mdi:weather-partly-cloudy','#26bfff'];weather.style.setProperty('--wx',color);weather.querySelector('.weather-net-glyph')?.setAttribute('icon',icon);const tz = this._hass?.config?.time_zone;const clock = weather.querySelector('.wx-time');if (clock) {const opts = {hour:'numeric',minute:'2-digit'};if (tz) opts.timeZone = tz;clock.textContent = new Date().toLocaleTimeString([],opts);}const raw = this._s('input_text.weather_next_two_hours')?.state || '[]';const sig = `${raw}|${tz || ''}`;if (this._last.wxForecastTz !== sig) {this._last.wxForecastTz = sig;const fr = this.shadowRoot?.querySelector('#forecast');if (fr) {let rows = [];try { rows = JSON.parse(raw); } catch {}fr.innerHTML = rows.slice(0,2).map(x => {const d = new Date(x.d);const opts = {hour:'numeric'};if (tz) opts.timeZone = tz;const time = Number.isNaN(d.getTime()) ? '—' : d.toLocaleTimeString([],opts);const det = [Number.isFinite(Number(x.t)) ? Math.round(Number(x.t))+'°' : '',x.p != null && Number.isFinite(Number(x.p)) ? Math.round(Number(x.p))+'% rain' : ''].filter(Boolean).join(' · ');return `<div class="frow"><b>${time} · ${weatherLabels[x.c] || x.c || 'Updating'}</b><span>${det}</span></div>`;}).join('') || '<div class="frow"><span>Forecast updating…</span></div>';}}};
});

/* ===== 20-preview-chroma-ticker.js ===== */
// Night City Preview-style chromatic slice system + hourly Marvin terminal ticker.
// Hero header tear + four staggered low-cost micro tears. No animated filters/blur.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinPreviewChromaPatchV4) return;
  Card.prototype.__marvinPreviewChromaPatchV4 = true;
  Card.prototype._marvin = function() {const hourly = (this._s('input_text.marvin_hourly_briefing')?.state || '').trim();if (hourly && !['unknown','unavailable','none'].includes(hourly.toLowerCase())) return hourly;const stable = (this._s('sensor.marvin_stable_reason')?.state || '').trim();return stable || 'No comment. A rare and suspicious event.';};
  const addGhosts = (el, delay) => {if (!el || el.querySelector(':scope > .nc-chroma-ghost')) return;el.classList.add('nc-chroma-accent');el.style.setProperty('--nc-delay', `${delay}s`);const text = el.textContent.trim();const cyan = document.createElement('span');const pink = document.createElement('span');cyan.className = 'nc-chroma-ghost nc-cyan';pink.className = 'nc-chroma-ghost nc-pink';cyan.textContent = text;pink.textContent = text;cyan.setAttribute('aria-hidden','true');pink.setAttribute('aria-hidden','true');el.append(cyan,pink);};
  const decorateTicker = (card) => {const root = card.shadowRoot;const msg = root?.querySelector('#msg');if (!msg) return;const make = (cls, text) => {const el = document.createElement('span');el.className = cls;el.textContent = text;return el;};msg.querySelectorAll(':scope > span').forEach((line) => {if (line.dataset.ncTicker === '1') return;const raw = line.textContent || '';const m = raw.match(/^(\d{2}:\d{2})\s+\/\/\s+MARVIN\s+::\s+(.*)$/);if (!m) return;line.replaceChildren(make('nc-time', m[1]), document.createTextNode(' '),make('nc-slash', '//'), document.createTextNode(' '),make('nc-agent', 'MARVIN'), document.createTextNode(' '),make('nc-colon', '::'), document.createTextNode(' '),make('nc-body', m[2]));line.dataset.ncTicker = '1';});};
  const inject = (card) => {const root = card.shadowRoot;if (!root) return;const title = root.querySelector('.headtitle');if (title) title.dataset.glitch = 'MARVIN://HOME';addGhosts(root.querySelector('.mlabel'), 0.0);addGhosts(root.querySelector('.battery-word'), 2.6);addGhosts(root.querySelector('.tkick'), 5.2);addGhosts(root.querySelector('.gbrand > div:first-child'), 7.8);if (root.querySelector('#marvin-preview-chroma-style-v4')) return;const style = document.createElement('style');style.id = 'marvin-preview-chroma-style-v4';style.textContent = `
.msgwrap{position:relative!important;padding:3px 7px 3px 8px!important;border-left:2px solid #26bfff!important;border-right:1px solid rgba(255,79,216,.22)!important;background:linear-gradient(90deg,rgba(38,191,255,.09),rgba(2,8,18,.36) 42%,rgba(255,79,216,.035) 100%)!important;box-shadow:inset 0 0 10px rgba(38,191,255,.055)!important;clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,0 100%)!important}.msgwrap:after{content:'';position:absolute;inset:0;pointer-events:none;z-index:0;background:repeating-linear-gradient(180deg,transparent 0 3px,rgba(38,191,255,.035) 3px 4px);opacity:.45}.msg{position:relative;z-index:1;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace!important;font-size:11.4px!important;font-weight:720!important;letter-spacing:.015em!important;color:#dffcff!important;text-shadow:0 0 5px rgba(38,191,255,.22)!important}.msg.scroll>span{display:inline-block!important}.msg .nc-time{color:#fcee0a!important;font-weight:950!important;text-shadow:0 0 6px rgba(252,238,10,.72)!important}.msg .nc-slash,.msg .nc-colon{color:#ff4fd8!important;font-weight:950!important;text-shadow:0 0 6px rgba(255,79,216,.68)!important}.msg .nc-agent{color:#26bfff!important;font-weight:950!important;letter-spacing:.08em!important;text-shadow:0 0 7px rgba(38,191,255,.76)!important}.msg .nc-body{color:#dffcff!important;text-shadow:0 0 4px rgba(38,191,255,.22)!important}
.headtitle{position:relative!important;display:inline-block!important;isolation:isolate!important;white-space:nowrap!important;animation:marvin-preview-base 7.1s step-end infinite!important;will-change:transform}.headtitle:before,.headtitle:after{content:attr(data-glitch);position:absolute;inset:0 auto auto 0;width:100%;height:100%;pointer-events:none;opacity:0;white-space:nowrap;font:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}.headtitle:before{z-index:-1;color:#26bfff;text-shadow:1px 0 #26bfff;animation:marvin-preview-cyan 7.1s step-end infinite!important}.headtitle:after{z-index:2;color:#ff4fd8;text-shadow:-1px 0 #fcee0a;animation:marvin-preview-magenta 7.1s step-end infinite!important}
@keyframes marvin-preview-base{0%,76%,84%,100%{transform:translate3d(0,0,0)}77%{transform:translate3d(1px,0,0)}78%{transform:translate3d(-1px,0,0)}79%{transform:translate3d(2px,0,0)}80%{transform:translate3d(0,0,0)}81%{transform:translate3d(-1px,0,0)}82%{transform:translate3d(1px,0,0)}83%{transform:translate3d(0,0,0)}}
@keyframes marvin-preview-cyan{0%,76%,84%,100%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(0 0 100% 0)}77%{opacity:.92;transform:translate3d(3px,0,0);clip-path:inset(0 0 58% 0)}78%{opacity:.72;transform:translate3d(-2px,0,0);clip-path:inset(52% 0 18% 0)}79%{opacity:1;transform:translate3d(4px,0,0);clip-path:inset(68% 0 0 0)}80%{opacity:.48;transform:translate3d(-3px,0,0);clip-path:inset(18% 0 54% 0)}81%{opacity:.86;transform:translate3d(2px,0,0);clip-path:inset(43% 0 34% 0)}82%{opacity:.32;transform:translate3d(-1px,0,0);clip-path:inset(0 0 72% 0)}83%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(0 0 100% 0)}}
@keyframes marvin-preview-magenta{0%,76%,84%,100%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(100% 0 0 0)}77%{opacity:.58;transform:translate3d(-3px,0,0);clip-path:inset(63% 0 0 0)}78%{opacity:1;transform:translate3d(3px,0,0);clip-path:inset(20% 0 56% 0)}79%{opacity:.62;transform:translate3d(-4px,0,0);clip-path:inset(0 0 66% 0)}80%{opacity:.94;transform:translate3d(2px,0,0);clip-path:inset(55% 0 22% 0)}81%{opacity:.42;transform:translate3d(-2px,0,0);clip-path:inset(30% 0 45% 0)}82%{opacity:.78;transform:translate3d(3px,0,0);clip-path:inset(72% 0 0 0)}83%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(100% 0 0 0)}}
.nc-chroma-accent{position:relative!important;isolation:isolate!important}.nc-chroma-ghost{position:absolute;left:0;top:0;z-index:3;width:max-content;height:100%;pointer-events:none;white-space:nowrap;opacity:0;font:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;will-change:transform,opacity}.nc-chroma-ghost.nc-cyan{color:#26bfff;text-shadow:1px 0 #26bfff;animation:nc-micro-cyan 10.8s step-end var(--nc-delay,0s) infinite!important}.nc-chroma-ghost.nc-pink{color:#ff4fd8;text-shadow:-1px 0 #fcee0a;animation:nc-micro-pink 10.8s step-end var(--nc-delay,0s) infinite!important}
@keyframes nc-micro-cyan{0%,84%,90%,100%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(0 0 100% 0)}85%{opacity:.70;transform:translate3d(2px,0,0);clip-path:inset(0 0 62% 0)}86%{opacity:.52;transform:translate3d(-1px,0,0);clip-path:inset(48% 0 22% 0)}87%{opacity:.82;transform:translate3d(3px,0,0);clip-path:inset(67% 0 0 0)}88%{opacity:.38;transform:translate3d(-2px,0,0);clip-path:inset(18% 0 58% 0)}89%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(0 0 100% 0)}}
@keyframes nc-micro-pink{0%,84%,90%,100%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(100% 0 0 0)}85%{opacity:.46;transform:translate3d(-2px,0,0);clip-path:inset(64% 0 0 0)}86%{opacity:.78;transform:translate3d(2px,0,0);clip-path:inset(22% 0 55% 0)}87%{opacity:.48;transform:translate3d(-3px,0,0);clip-path:inset(0 0 70% 0)}88%{opacity:.72;transform:translate3d(1px,0,0);clip-path:inset(58% 0 18% 0)}89%{opacity:0;transform:translate3d(0,0,0);clip-path:inset(100% 0 0 0)}}
@media(prefers-reduced-motion:reduce){.headtitle,.headtitle:before,.headtitle:after,.nc-chroma-ghost{animation:none!important;will-change:auto!important}}
`;root.appendChild(style);};
  const originalBuild = Card.prototype._build;Card.prototype._build = function() {originalBuild.call(this);inject(this);};
  const originalUpdate = Card.prototype._update;Card.prototype._update = function() {originalUpdate.call(this);inject(this);decorateTicker(this);};
});

/* ===== 30-thermal-store.js ===== */
// Marvin thermostat thermal-storage telemetry patch.
// Adds only a compact readout to the existing Night City thermostat panel.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinThermalStorePatchV1) return;
  Card.prototype.__marvinThermalStorePatchV1 = true;
  const css = `.tstored{display:flex;align-items:baseline;gap:4px;min-width:0;padding-top:3px;border-top:1px solid rgba(38,191,255,.20);font:900 6.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em;color:#fcee0a}.tstored b{font-size:10px;letter-spacing:.02em;color:#26bfff;text-shadow:0 0 3px rgba(231,251,255,.88),0 0 8px rgba(38,191,255,.72);white-space:nowrap}.tstored small{margin-left:auto;font:800 5.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.04em;color:#ff4fd8;white-space:nowrap;text-shadow:0 0 5px rgba(255,79,216,.42)}.tstored.active b{color:#39ff88;text-shadow:0 0 3px #eafff0,0 0 8px rgba(57,255,136,.78)}@media(max-width:365px){.tstored{font-size:6px}.tstored b{font-size:9px}.tstored small{font-size:5px}}`;
  const ensure = (card) => {const root = card.shadowRoot;const info = root?.querySelector('.thermo .tinfo');if (!root || !info) return;if (!root.querySelector('#marvin-thermal-store-style-v1')) {const style = document.createElement('style');style.id = 'marvin-thermal-store-style-v1';style.textContent = css;root.appendChild(style);}if (!info.querySelector('.tstored')) info.insertAdjacentHTML('beforeend','<div class="tstored"><span>MARVIN STORED</span><b id="thermalStored">—</b><small id="thermalRuntime">— EXTRA</small></div>');};
  const paint = (card) => {ensure(card);const root = card.shadowRoot;const row = root?.querySelector('.tstored');if (!row) return;const stored = Number(card._s('sensor.marvin_ac_thermal_battery_today')?.state);const runtime = Number(card._s('sensor.marvin_extra_cooling_runtime_today')?.state);const active = card._s('binary_sensor.marvin_extra_cooling_active')?.state === 'on';const storedEl = root.querySelector('#thermalStored');const runtimeEl = root.querySelector('#thermalRuntime');if (storedEl) storedEl.textContent = Number.isFinite(stored) ? `${stored.toFixed(1)} kWh` : '—';if (runtimeEl) runtimeEl.textContent = Number.isFinite(runtime) ? `${runtime.toFixed(1)}h EXTRA` : '— EXTRA';row.classList.toggle('active', active);};
  const originalBuild = Card.prototype._build;Card.prototype._build = function() {originalBuild.call(this);ensure(this);};
  const originalUpdate = Card.prototype._update;Card.prototype._update = function() {originalUpdate.call(this);paint(this);};
});

/* ===== 40-permanent-chroma-edge.js ===== */
// Marvin permanent chromatic edge fringe v1.
// Static only: crisp white icon core with cyan/magenta edge separation.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinPermanentChromaEdgeV1) return;
  Card.prototype.__marvinPermanentChromaEdgeV1 = true;
  const css = `.garage-net-glyph ha-icon{color:#f4feff!important;filter:drop-shadow(-1.15px 0 0 rgba(38,191,255,.78)) drop-shadow(1.15px 0 0 rgba(255,79,216,.72)) drop-shadow(0 0 3px rgba(235,253,255,.48)) drop-shadow(0 0 6px color-mix(in srgb,var(--gn,#39ff88) 40%,transparent))!important}.gbrand.g-degraded .garage-net-glyph ha-icon{color:#fff7fa!important;filter:drop-shadow(-1.1px 0 0 rgba(38,191,255,.55)) drop-shadow(1.25px 0 0 rgba(255,49,95,.92)) drop-shadow(0 0 4px rgba(255,232,238,.48)) drop-shadow(0 0 7px rgba(255,49,95,.48))!important}.lights .light ha-icon{color:#f5feff!important;filter:drop-shadow(-1.05px 0 0 rgba(38,191,255,.64)) drop-shadow(1.05px 0 0 rgba(255,79,216,.58)) drop-shadow(0 0 2.5px rgba(236,253,255,.40)) drop-shadow(0 0 5px color-mix(in srgb,var(--lc,#26bfff) 24%,transparent))!important}.lights .light.on ha-icon{color:#ffffff!important;filter:drop-shadow(-1.25px 0 0 rgba(38,191,255,.82)) drop-shadow(1.25px 0 0 rgba(255,79,216,.76)) drop-shadow(0 0 3px rgba(255,255,255,.66)) drop-shadow(0 0 7px color-mix(in srgb,var(--lc,#26bfff) 64%,transparent))!important}.lights .light.action ha-icon{color:#fffaff!important;filter:drop-shadow(-1.15px 0 0 rgba(38,191,255,.74)) drop-shadow(1.15px 0 0 rgba(255,79,216,.78)) drop-shadow(0 0 3px rgba(255,255,255,.50)) drop-shadow(0 0 6px rgba(255,79,216,.34))!important}`;
  const inject = (card) => {const root = card.shadowRoot;if (!root || root.querySelector('#marvin-permanent-chroma-edge-v1')) return;const style = document.createElement('style');style.id = 'marvin-permanent-chroma-edge-v1';style.textContent = css;root.appendChild(style);};
  const originalBuild = Card.prototype._build;Card.prototype._build = function() {originalBuild.call(this);inject(this);};const originalUpdate = Card.prototype._update;Card.prototype._update = function() {originalUpdate.call(this);inject(this);};
});

/* ===== 50-ticker-static-chroma.js ===== */
// Marvin ticker permanent chromatic fringe v1.
// Static paint only: keeps the existing transform-based ticker animation.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinTickerStaticChromaV1) return;
  Card.prototype.__marvinTickerStaticChromaV1 = true;
  const inject = (card) => {const root = card.shadowRoot;if (!root || root.querySelector('#marvin-ticker-static-chroma-v1')) return;const style = document.createElement('style');style.id = 'marvin-ticker-static-chroma-v1';style.textContent = `.msg .nc-body{color:#effdff!important;text-shadow:-1px 0 0 rgba(38,191,255,.62),1px 0 0 rgba(255,79,216,.52),0 0 3px rgba(216,251,255,.22)!important}.msg .nc-time{text-shadow:-1px 0 0 rgba(38,191,255,.48),1px 0 0 rgba(255,79,216,.42),0 0 6px rgba(252,238,10,.62)!important}.msg .nc-agent{text-shadow:-1px 0 0 rgba(252,238,10,.34),1px 0 0 rgba(255,79,216,.48),0 0 6px rgba(38,191,255,.62)!important}.msg .nc-slash,.msg .nc-colon{text-shadow:-1px 0 0 rgba(38,191,255,.48),1px 0 0 rgba(252,238,10,.34),0 0 6px rgba(255,79,216,.58)!important}.msg,.msg.scroll,.msg.scroll>span{filter:none!important}`;root.appendChild(style);};
  const originalBuild = Card.prototype._build;Card.prototype._build = function() {originalBuild.call(this);inject(this);};const originalUpdate = Card.prototype._update;Card.prototype._update = function() {originalUpdate.call(this);inject(this);};
});

/* ===== 60-ticker-speed.js ===== */
// Marvin ticker speed normalization v1.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinTickerSpeedV1) return;
  Card.prototype.__marvinTickerSpeedV1 = true;
  const originalUpdate = Card.prototype._update;
  Card.prototype._update = function() {originalUpdate.call(this);const msg = this.shadowRoot?.querySelector('#msg');if (!msg || !msg.classList.contains('scroll')) return;const line = msg.querySelector(':scope > span');const len = (line?.textContent || msg.textContent || '').trim().length;const dur = Math.min(32, Math.max(16, len * 0.24));msg.style.setProperty('--dur', `${dur.toFixed(1)}s`);};
});

/* ===== 70-perf-coordinator.js ===== */
// Marvin renderer performance coordinator v4.
// Preserves all visuals/actions. Adds panel-local updates for high-frequency state,
// batches DOM work, keeps wall clocks live, pauses invisible work, and limits repaint scope.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinPerfCoordinatorV4) return;
  Card.prototype.__marvinPerfCoordinatorV4 = true;

  const batteryIds = new Set(['sensor.growatt_battery_battery_soc','sensor.growatt_battery_battery_power','input_select.energy_director_active_mode','sensor.growatt_load_load_energy_today','sensor.growatt_thor_ev_charger_status','number.growatt_thor_ev_charger_max_current','sensor.energy_director_ev_power','sensor.growatt_battery_bms_warning','sensor.growatt_battery_bms_error','sensor.growatt_battery_bms_status']);
  const lightIds = new Set(['light.kitchen_main_lights','light.front_foyer_main_lights','light.front_porch_overhead_light','light.exterior_back_porch_lights','light.office_main_lights','light.master_bedroom_main_lights','light.outside_camera_lights']);
  const headerIds = new Set(['sensor.system_monitor_memory_usage','sensor.system_monitor_uptime','person.person_one','person.person_two']);
  const cameraIds = new Set(['counter.camera_animals_today','counter.camera_people_today','counter.camera_vehicles_today']);
  const thermalIds = new Set(['sensor.marvin_ac_thermal_battery_today','sensor.marvin_extra_cooling_runtime_today','binary_sensor.marvin_extra_cooling_active']);
  const fullOnlyIds = ['sensor.marvin_planning_energy_margin','sensor.marvin_planning_morning_soc','input_text.marvin_hourly_briefing','sensor.marvin_stable_reason','climate.t10_plus_thermostat','sensor.hvac_runtime_today','weather.forecast_home','input_text.weather_next_two_hours','cover.west_door','cover.center_door','cover.east_door','input_datetime.west_door_last_opened','input_datetime.center_door_last_opened','input_datetime.east_door_last_opened'];
  const watched = [...headerIds, ...batteryIds, ...fullOnlyIds, ...cameraIds, ...lightIds, ...thermalIds];
  const partialIds = new Set([...headerIds, ...batteryIds, ...cameraIds, ...lightIds, ...thermalIds]);
  const perfNow = () => (globalThis.performance?.now ? performance.now() : Date.now());
  const intersects = (changed, set) => changed.some(id => set.has(id));
  const node = (card, sel) => {const cache = card.__marvinNodeCache || (card.__marvinNodeCache = new Map());let el = cache.get(sel);if (!el || el.getRootNode() !== card.shadowRoot) {el = card.shadowRoot?.querySelector(sel) || null;if (el) cache.set(sel, el);}return el;};
  Card.prototype._txt = function(sel, value) {const text = String(value);const el = node(this, sel);if (el && el.textContent !== text) el.textContent = text;};
  const baseBuild = Card.prototype._build;
  Card.prototype._build = function() {baseBuild.call(this);if (this.shadowRoot?.querySelector('#marvin-perf-coordinator-v4')) return;const style = document.createElement('style');style.id = 'marvin-perf-coordinator-v4';style.textContent = `.surface,.counts .metric,.slider,.msgwrap{contain:paint}.msg.scroll{will-change:transform!important;backface-visibility:hidden!important}@keyframes marvin-stripe-composite-v4{from{transform:translate3d(-12px,0,0)}to{transform:translate3d(12px,0,0)}}.fill:before{inset:0 -24px!important;animation:marvin-stripe-composite-v4 .72s linear infinite!important;will-change:transform!important}.battery.discharge .fill:before{animation-direction:reverse!important}.counts:before{animation:none!important;will-change:auto!important}@media(prefers-reduced-motion:reduce){.fill:before{animation:none!important;will-change:auto!important}.msg.scroll{will-change:auto!important}}:host(.marvin-perf-paused) *,:host(.marvin-perf-paused) *::before,:host(.marvin-perf-paused) *::after{animation-play-state:paused!important}`;this.shadowRoot.appendChild(style);};
  const hassDescriptor = Object.getOwnPropertyDescriptor(Card.prototype, 'hass');
  const originalHassSetter = hassDescriptor?.set;if (!originalHassSetter) return;
  const takeSnapshot = (card, hass) => {const refs = card.__marvinPerfRefs || (card.__marvinPerfRefs = new Map());const changed = [];for (const id of watched) {const next = hass?.states?.[id];if (refs.get(id) !== next) changed.push(id);refs.set(id, next);}const tz = hass?.config?.time_zone || '';if (card.__marvinPerfTz !== tz) {card.__marvinPerfTz = tz;changed.push('@timezone');}return changed;};
  const refreshCheapClock = (card) => {if (!card._hass || !card.shadowRoot || document.hidden || card.__marvinPerfVisible === false) return;const tz = card._hass.config?.time_zone;const tzKey = tz || '__local__';if (!card.__marvinClockFormatter || card.__marvinClockFormatterTz !== tzKey) {const opts = { hour: 'numeric', minute: '2-digit' };if (tz) opts.timeZone = tz;card.__marvinClockFormatter = new Intl.DateTimeFormat([], opts);card.__marvinClockFormatterTz = tzKey;}const clock = node(card, '.wx-time');if (clock) {const value = card.__marvinClockFormatter.format(new Date());if (clock.textContent !== value) clock.textContent = value;}const up = card._hass.states?.['sensor.system_monitor_uptime']?.state;if (up) {const ms = Date.now() - new Date(up).getTime();if (Number.isFinite(ms) && ms >= 0) {const d = Math.floor(ms / 86400000);const h = Math.floor((ms % 86400000) / 3600000);card._txt('#up', d ? `${d}D${h}H` : `${h}H`);}}};
  const refreshHeader = (card) => {const ram = card._n('sensor.system_monitor_memory_usage');card._txt('#ram', ram === null ? '—' : Math.round(ram) + '%');for (const [id, sel] of [['person.person_one','#ry'],['person.person_two','#rb']]) {const st = card._s(id)?.state || 'unknown';const el = node(card, sel);const value = st === 'home' ? 'HOME' : st === 'not_home' ? 'AWAY' : '—';if (el && el.textContent !== value) el.textContent = value;const color = st === 'home' ? '#39ff88' : st === 'not_home' ? '#ff4fd8' : '#fcee0a';if (el?.parentElement && el.parentElement.style.getPropertyValue('--c') !== color) el.parentElement.style.setProperty('--c', color);}refreshCheapClock(card);};
  const refreshBattery = (card) => {const soc = Math.max(0, Math.min(100, card._n('sensor.growatt_battery_battery_soc') ?? 0));const bp = Math.max(-9.9, Math.min(9.9, card._n('sensor.growatt_battery_battery_power') ?? 0));const mag = Math.abs(bp);const idle = mag < .05;const charging = !idle && bp > 0;const accent = soc >= 70 ? '#39ff88' : soc >= 30 ? '#26bfff' : soc >= 20 ? '#ffd319' : '#ff335f';const flow = idle ? '#7c8aa5' : charging ? '#39ff88' : '#ff4fd8';const bat = node(card, '#battery');if (bat) {bat.classList.toggle('charge', charging);bat.classList.toggle('discharge', !idle && !charging);if (bat.style.getPropertyValue('--flow') !== flow) bat.style.setProperty('--flow', flow);}const dial = node(card, '#dial');if (dial) {if (dial.style.getPropertyValue('--accent') !== accent) dial.style.setProperty('--accent', accent);const deg = Math.max(1, soc * 3.6) + 'deg';if (dial.style.getPropertyValue('--deg') !== deg) dial.style.setProperty('--deg', deg);}card._txt('#soc', Math.round(soc) + '%');card._txt('#usable', Math.max(0, (soc - 10) * .16).toFixed(1));card._txt('#pwr', idle ? '0.0 kW' : `${bp > 0 ? '+' : ''}${bp.toFixed(1)} kW`);card._txt('#route', idle ? 'STANDBY' : charging ? 'PV → BATTERY' : 'BATTERY → HOME');const fill = node(card, '#fill');if (fill) {const width = idle ? '0%' : Math.max(6, mag / 9.9 * 50) + '%';if (fill.style.getPropertyValue('--w') !== width) fill.style.setProperty('--w', width);if (fill.style.getPropertyValue('--fill') !== flow) fill.style.setProperty('--fill', flow);}const modeRaw = card._s('input_select.energy_director_active_mode')?.state || 'Unknown';const modeColor = {Normal:'#57a6ff',Conservation:'#ffd166',Abundant:'#35ff9a',Storm:'#c46cff',Outage:'#ff477e',Fault:'#ff365f'}[modeRaw] || '#7b91a7';const mode = node(card, '#mode');if (mode) {const text = ({Conservation:'CONSERVE'}[modeRaw] || modeRaw).toUpperCase();if (mode.textContent !== text) mode.textContent = text;if (mode.style.getPropertyValue('--modec') !== modeColor) mode.style.setProperty('--modec', modeColor);}const today = card._n('sensor.growatt_load_load_energy_today');card._txt('#today', today === null ? '—' : today.toFixed(1) + ' kWh');const evs = card._s('sensor.growatt_thor_ev_charger_status')?.state || '';const eva = card._n('number.growatt_thor_ev_charger_max_current');const evp = card._n('sensor.energy_director_ev_power');card._txt('#ev', /charging/i.test(evs) || (evp ?? 0) > 20 ? (eva === null ? 'ON' : Math.round(eva) + 'A') : 'OFF');const bw = card._n('sensor.growatt_battery_bms_warning');const be = card._n('sensor.growatt_battery_bms_error');const bs = card._n('sensor.growatt_battery_bms_status');card._txt('#bms', bw === null && be === null && bs === null ? '—' : ((bw ?? 0) !== 0 || (be ?? 0) !== 0) ? 'ALERT' : 'OK');};
  const refreshCameraCounters = (card) => {for (const [id, numberSel, timeSel] of [['counter.camera_animals_today','#animals','#animalsT'],['counter.camera_people_today','#people','#peopleT'],['counter.camera_vehicles_today','#vehicles','#vehiclesT']]) {const state = card._s(id);const value = Number(state?.state);card._txt(numberSel, Number.isFinite(value) ? value : 0);card._txt(timeSel, Number.isFinite(value) && value > 0 ? card._fmtTime(state?.last_changed) : '—');}};
  const refreshThermal = (card) => {const row = node(card, '.tstored');if (!row) return;const stored = Number(card._s('sensor.marvin_ac_thermal_battery_today')?.state);const runtime = Number(card._s('sensor.marvin_extra_cooling_runtime_today')?.state);const active = card._s('binary_sensor.marvin_extra_cooling_active')?.state === 'on';card._txt('#thermalStored', Number.isFinite(stored) ? `${stored.toFixed(1)} kWh` : '—');card._txt('#thermalRuntime', Number.isFinite(runtime) ? `${runtime.toFixed(1)}h EXTRA` : '— EXTRA');row.classList.toggle('active', active);};
  const isPaused = (card) => document.hidden || card.__marvinPerfVisible === false;
  const runFullRender = (card) => {card.__marvinPerfTimer = 0;card.__marvinPerfRaf = 0;if (isPaused(card)) {card.__marvinPerfDirty = true;return;}card.__marvinPerfDirty = false;card.__marvinPerfLastRender = perfNow();originalHassSetter.call(card, card._hass);refreshCheapClock(card);};
  const cancelPartial = (card) => {if (card.__marvinPartialTimer) {clearTimeout(card.__marvinPartialTimer);card.__marvinPartialTimer = 0;}if (card.__marvinPartialRaf) {cancelAnimationFrame(card.__marvinPartialRaf);card.__marvinPartialRaf = 0;}card.__marvinPartialChanges?.clear();};
  const queueFullRender = (card, urgent) => {cancelPartial(card);if (isPaused(card)) {card.__marvinPerfDirty = true;return;}if (card.__marvinPerfRaf) return;if (card.__marvinPerfTimer) {if (!urgent) return;clearTimeout(card.__marvinPerfTimer);card.__marvinPerfTimer = 0;}const elapsed = perfNow() - (card.__marvinPerfLastRender || 0);const minGap = urgent ? 100 : 5000;const wait = Math.max(0, minGap - elapsed);const armRaf = () => {card.__marvinPerfTimer = 0;if (card.__marvinPerfRaf) return;card.__marvinPerfRaf = requestAnimationFrame(() => runFullRender(card));};if (wait <= 1) armRaf();else card.__marvinPerfTimer = setTimeout(armRaf, wait);};
  const runPartial = (card) => {card.__marvinPartialTimer = 0;card.__marvinPartialRaf = 0;if (isPaused(card)) {card.__marvinPerfDirty = true;return;}const changed = [...(card.__marvinPartialChanges || [])];card.__marvinPartialChanges?.clear();card.__marvinPerfLastPartial = perfNow();if (intersects(changed, batteryIds)) refreshBattery(card);if (intersects(changed, headerIds)) refreshHeader(card);if (intersects(changed, cameraIds)) refreshCameraCounters(card);if (intersects(changed, thermalIds)) refreshThermal(card);if (intersects(changed, lightIds)) card._lights();};
  const queuePartial = (card, changed) => {if (isPaused(card)) {card.__marvinPerfDirty = true;return;}const set = card.__marvinPartialChanges || (card.__marvinPartialChanges = new Set());changed.forEach(id => set.add(id));if (card.__marvinPartialRaf || card.__marvinPartialTimer) return;const elapsed = perfNow() - (card.__marvinPerfLastPartial || 0);const wait = Math.max(0, 100 - elapsed);const armRaf = () => {card.__marvinPartialTimer = 0;if (card.__marvinPartialRaf) return;card.__marvinPartialRaf = requestAnimationFrame(() => runPartial(card));};if (wait <= 1) armRaf();else card.__marvinPartialTimer = setTimeout(armRaf, wait);};
  Object.defineProperty(Card.prototype, 'hass', {configurable: true,enumerable: hassDescriptor.enumerable,get: hassDescriptor.get,set(hass) {this._hass = hass;const changed = takeSnapshot(this, hass);if (!this.__marvinPerfInitialized) {this.__marvinPerfInitialized = true;this.__marvinPerfLastRender = perfNow();originalHassSetter.call(this, hass);refreshCheapClock(this);return;}if (changed.length && changed.every(id => partialIds.has(id))) queuePartial(this, changed);else if (changed.length) queueFullRender(this, true);else queueFullRender(this, false);}});
  const syncPauseState = (card) => {const paused = isPaused(card);card.classList.toggle('marvin-perf-paused', paused);if (!paused && card.__marvinPerfDirty) queueFullRender(card, true);if (!paused) refreshCheapClock(card);};
  const originalConnected = Card.prototype.connectedCallback;Card.prototype.connectedCallback = function() {originalConnected?.call(this);this.__marvinPerfVisible = true;if ('IntersectionObserver' in globalThis && !this.__marvinPerfObserver) {this.__marvinPerfObserver = new IntersectionObserver((entries) => {const entry = entries[0];this.__marvinPerfVisible = !!entry?.isIntersecting;syncPauseState(this);}, { threshold: 0.01 });this.__marvinPerfObserver.observe(this);}if (!this.__marvinPerfVisibilityHandler) {this.__marvinPerfVisibilityHandler = () => syncPauseState(this);document.addEventListener('visibilitychange', this.__marvinPerfVisibilityHandler, { passive: true });}if (!this.__marvinPerfClockTimer) this.__marvinPerfClockTimer = setInterval(() => refreshCheapClock(this), 30000);syncPauseState(this);};
  const originalDisconnected = Card.prototype.disconnectedCallback;Card.prototype.disconnectedCallback = function() {originalDisconnected?.call(this);if (this.__marvinPerfObserver) {this.__marvinPerfObserver.disconnect();this.__marvinPerfObserver = null;}if (this.__marvinPerfVisibilityHandler) {document.removeEventListener('visibilitychange', this.__marvinPerfVisibilityHandler);this.__marvinPerfVisibilityHandler = null;}if (this.__marvinPerfClockTimer) {clearInterval(this.__marvinPerfClockTimer);this.__marvinPerfClockTimer = 0;}if (this.__marvinPerfTimer) {clearTimeout(this.__marvinPerfTimer);this.__marvinPerfTimer = 0;}if (this.__marvinPerfRaf) {cancelAnimationFrame(this.__marvinPerfRaf);this.__marvinPerfRaf = 0;}cancelPartial(this);};
});

/* ===== 80-security-identity.js ===== */
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

/* ===== 90-live-control.js ===== */
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

/* ===== 99-perf-governor.js ===== */
// Marvin renderer performance governor v5.
// Preserves every current visual/action. Filters unrelated HA state churn before
// it reaches the existing renderer, while retaining a slow compatibility refresh.
customElements.whenDefined('marvin-night-city-card').then(() => {
  const Card = customElements.get('marvin-night-city-card');
  if (!Card || Card.prototype.__marvinPerfGovernorV5) return;
  Card.prototype.__marvinPerfGovernorV5 = true;

  const descriptor = Object.getOwnPropertyDescriptor(Card.prototype, 'hass');
  const originalSet = descriptor?.set;
  if (!originalSet) return;

  const watched = [
    'sensor.system_monitor_memory_usage',
    'sensor.system_monitor_uptime',
    'person.person_one',
    'person.person_two',
    'sensor.marvin_planning_energy_margin',
    'sensor.marvin_planning_morning_soc',
    'sensor.energy_director_energy_margin',
    'sensor.energy_director_projected_morning_soc',
    'sensor.marvin_stable_reason',
    'sensor.energy_director_reason',
    'input_text.marvin_hourly_briefing',
    'sensor.growatt_battery_battery_soc',
    'sensor.growatt_battery_battery_power',
    'input_select.energy_director_active_mode',
    'input_boolean.energy_director_live',
    'sensor.growatt_load_load_energy_today',
    'sensor.growatt_thor_ev_charger_status',
    'number.growatt_thor_ev_charger_max_current',
    'sensor.energy_director_ev_power',
    'sensor.growatt_battery_bms_warning',
    'sensor.growatt_battery_bms_error',
    'sensor.growatt_battery_bms_status',
    'climate.t10_plus_thermostat',
    'sensor.hvac_runtime_today',
    'sensor.marvin_ac_thermal_battery_today',
    'sensor.marvin_extra_cooling_runtime_today',
    'binary_sensor.marvin_extra_cooling_active',
    'weather.forecast_home',
    'input_text.weather_next_two_hours',
    'counter.camera_animals_today',
    'counter.camera_people_today',
    'counter.camera_vehicles_today',
    'cover.west_door',
    'cover.center_door',
    'cover.east_door',
    'input_datetime.west_door_last_opened',
    'input_datetime.center_door_last_opened',
    'input_datetime.east_door_last_opened',
    'light.kitchen_main_lights',
    'light.front_foyer_main_lights',
    'light.front_porch_overhead_light',
    'light.exterior_back_porch_lights',
    'light.office_main_lights',
    'light.master_bedroom_main_lights',
    'light.outside_camera_lights'
  ];

  const liveId = 'input_boolean.energy_director_live';
  const fallbackMs = 60000;

  const syncLiveOnly = (card, hass) => {
    const live = card.shadowRoot?.querySelector('.battery .live-control');
    if (!live) return;
    const on = hass?.states?.[liveId]?.state === 'on';
    live.classList.toggle('on', on);
    live.classList.toggle('off', !on);
    live.setAttribute('aria-label', `Live Control ${on ? 'On' : 'Off'}`);
    live.title = `Live Control: ${on ? 'ON' : 'OFF'}`;
  };

  const snapshot = (card, hass) => {
    const refs = card.__marvinGovernorRefs || (card.__marvinGovernorRefs = new Map());
    const changed = [];
    for (const id of watched) {
      const next = hass?.states?.[id];
      if (refs.get(id) !== next) changed.push(id);
      refs.set(id, next);
    }
    const tz = hass?.config?.time_zone || '';
    if (card.__marvinGovernorTz !== tz) {
      card.__marvinGovernorTz = tz;
      changed.push('@timezone');
    }
    return changed;
  };

  Object.defineProperty(Card.prototype, 'hass', {
    configurable: true,
    enumerable: descriptor.enumerable,
    get: descriptor.get,
    set(hass) {
      const first = !this.__marvinGovernorInitialized;
      const changed = snapshot(this, hass);
      this._hass = hass;

      if (first) {
        this.__marvinGovernorInitialized = true;
        this.__marvinGovernorFallbackAt = Date.now();
        originalSet.call(this, hass);
        return;
      }

      if (changed.length) {
        const stateChanges = changed.filter(id => id !== '@timezone');
        const liveOnly = stateChanges.length === 1 && stateChanges[0] === liveId && !changed.includes('@timezone');
        if (liveOnly) {
          syncLiveOnly(this, hass);
          return;
        }
        originalSet.call(this, hass);
        return;
      }

      const now = Date.now();
      if (now - (this.__marvinGovernorFallbackAt || 0) >= fallbackMs) {
        this.__marvinGovernorFallbackAt = now;
        originalSet.call(this, hass);
      }
    }
  });
});
