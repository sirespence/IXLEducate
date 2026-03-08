<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>atom OS</title>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500&family=Geist+Mono:wght@300;400&display=swap" rel="stylesheet">
<style>
/* ═══════════════════════════════════════════
   RESET & ROOT
═══════════════════════════════════════════ */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --void:#020408;
  --glass:rgba(255,255,255,.038);
  --glass-md:rgba(255,255,255,.06);
  --glass-hi:rgba(255,255,255,.10);
  --border:rgba(255,255,255,.07);
  --border-hi:rgba(255,255,255,.14);
  --ink:#e8f0ff;
  --ink2:rgba(232,240,255,.55);
  --ink3:rgba(232,240,255,.22);
  --ink4:rgba(232,240,255,.10);
  --blue:#5b9cf6;
  --blue2:rgba(91,156,246,.18);
  --blue3:rgba(91,156,246,.08);
  --green:#4ade80;
  --red:#f87171;
  --yellow:#fbbf24;
  --ease:cubic-bezier(.25,.46,.45,.94);
  --spring:cubic-bezier(.34,1.56,.64,1);
  --dock-h:72px;
  --bar-h:28px;
}
html,body{
  width:100%;height:100%;overflow:hidden;
  background:var(--void);
  font-family:'Geist',sans-serif;
  cursor:none;
  -webkit-font-smoothing:antialiased;
  user-select:none;
}

/* ═══════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════ */
#cursor{position:fixed;pointer-events:none;z-index:99999;top:0;left:0}
#cur-dot{
  width:5px;height:5px;background:var(--ink);border-radius:50%;
  transform:translate(-50%,-50%);
  box-shadow:0 0 5px rgba(255,255,255,.4);
  transition:transform .06s;
}
#cur-ring{
  position:absolute;width:26px;height:26px;
  border:1px solid rgba(255,255,255,.2);border-radius:50%;
  top:-13px;left:-13px;
  transition:width .18s var(--ease),height .18s var(--ease),
             top .18s var(--ease),left .18s var(--ease),
             border-color .18s,background .18s;
}
body.hov #cur-ring{width:40px;height:40px;top:-20px;left:-20px;border-color:rgba(91,156,246,.5);background:rgba(91,156,246,.04)}
body.click #cur-ring{width:18px;height:18px;top:-9px;left:-9px}
body.text-hov{cursor:text}
body.text-hov #cur-ring{display:none}
body.text-hov #cur-dot{width:2px;height:18px;border-radius:1px}

/* ═══════════════════════════════════════════
   SPACE BACKGROUND
═══════════════════════════════════════════ */
#bg{position:fixed;inset:0;z-index:0}
#bg canvas{position:absolute;inset:0}
#bg-grad{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse 60% 50% at 15% 10%, rgba(20,50,120,.12) 0%,transparent 100%),
    radial-gradient(ellipse 40% 60% at 85% 85%, rgba(10,30,90,.10) 0%,transparent 100%),
    radial-gradient(ellipse 30% 30% at 55% 45%, rgba(5,15,50,.08) 0%,transparent 100%);
  pointer-events:none;
}

/* ═══════════════════════════════════════════
   MENU BAR
═══════════════════════════════════════════ */
#menubar{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  height:var(--bar-h);
  display:flex;align-items:center;
  padding:0 16px;gap:4px;
  background:rgba(4,8,18,.72);
  backdrop-filter:blur(32px) saturate(2);
  -webkit-backdrop-filter:blur(32px) saturate(2);
  border-bottom:1px solid var(--border);
}
.mb-logo{
  font-size:13px;font-weight:300;letter-spacing:.5px;
  color:var(--ink2);margin-right:6px;
  display:flex;align-items:center;gap:5px;
}
.mb-logo span{color:var(--blue);font-weight:400}
.mb-items{display:flex;gap:1px;flex:1}
.mb-item{
  padding:3px 9px;border-radius:5px;
  font-size:11.5px;font-weight:300;letter-spacing:.2px;
  color:var(--ink3);cursor:pointer;
  transition:background .14s,color .14s;
  position:relative;
}
.mb-item:hover{background:var(--glass-md);color:var(--ink2)}
.mb-item.active-app{color:var(--ink);font-weight:400}
.mb-right{
  display:flex;align-items:center;gap:12px;margin-left:auto;
}
.mb-stat{
  font-family:'Geist Mono',monospace;
  font-size:10px;font-weight:300;letter-spacing:.3px;
  color:var(--ink3);
  display:flex;align-items:center;gap:4px;
}
.mb-stat .dot{width:4px;height:4px;border-radius:50%;background:var(--green);box-shadow:0 0 5px var(--green);animation:gpulse 3s ease-in-out infinite}
@keyframes gpulse{0%,100%{opacity:.5}50%{opacity:1}}
#mb-clock{
  font-family:'Geist Mono',monospace;
  font-size:10.5px;font-weight:300;letter-spacing:.5px;
  color:var(--ink2);
}
.mb-wifi{color:var(--ink3);font-size:10px}

/* ═══════════════════════════════════════════
   DESKTOP
═══════════════════════════════════════════ */
#desktop{
  position:fixed;
  top:var(--bar-h);left:0;right:0;
  bottom:var(--dock-h);
  z-index:10;
  overflow:hidden;
}

/* ═══════════════════════════════════════════
   WINDOWS
═══════════════════════════════════════════ */
.win{
  position:absolute;
  border-radius:14px;
  overflow:hidden;
  background:rgba(6,10,22,.82);
  backdrop-filter:blur(48px) saturate(1.8);
  -webkit-backdrop-filter:blur(48px) saturate(1.8);
  border:1px solid var(--border);
  border-top:1px solid var(--border-hi);
  box-shadow:
    0 0 0 .5px rgba(0,0,0,.7),
    0 32px 72px rgba(0,0,0,.75),
    0 12px 32px rgba(0,0,0,.55),
    0 0 80px rgba(91,156,246,.04);
  display:flex;flex-direction:column;
  transition:box-shadow .2s,opacity .25s var(--ease),transform .25s var(--ease);
  will-change:transform;
  min-width:420px;min-height:280px;
}
.win.opening{animation:winOpen .3s var(--spring) both}
.win.closing{animation:winClose .22s var(--ease) both}
.win.minimizing{animation:winMin .28s var(--ease) both}
.win.focused{
  border-color:rgba(255,255,255,.1);
  border-top-color:rgba(255,255,255,.2);
  box-shadow:
    0 0 0 .5px rgba(0,0,0,.7),
    0 48px 96px rgba(0,0,0,.82),
    0 16px 48px rgba(0,0,0,.6),
    0 0 100px rgba(91,156,246,.06);
}
@keyframes winOpen{from{opacity:0;transform:scale(.9) translateY(20px)}to{opacity:1;transform:none}}
@keyframes winClose{from{opacity:1;transform:none}to{opacity:0;transform:scale(.88) translateY(12px)}}
@keyframes winMin{from{opacity:1;transform:none}to{opacity:0;transform:scale(.5) translateY(60px)}}
.win.snap-tl{transition:all .25s var(--ease)}
.win.snap-tr{transition:all .25s var(--ease)}

/* Titlebar */
.win-tb{
  display:flex;align-items:center;
  height:40px;padding:0 12px;
  border-bottom:1px solid var(--border);
  flex-shrink:0;gap:10px;
  position:relative;
}
.win-tb.dragging{cursor:grabbing}
.tls{display:flex;gap:6px;align-items:center;flex-shrink:0}
.tl{
  width:12px;height:12px;border-radius:50%;cursor:pointer;
  transition:filter .14s,transform .1s;
  opacity:.85;
  position:relative;
}
.tl:hover{opacity:1;transform:scale(1.1)}
.tl-r{background:#ff5f57}.tl-y{background:#ffbd2e}.tl-g{background:#28c840}
.tl::after{
  content:'';position:absolute;inset:0;border-radius:50%;
  opacity:0;transition:opacity .14s;
  font-size:8px;display:flex;align-items:center;justify-content:center;
}
.win-title{
  position:absolute;left:50%;transform:translateX(-50%);
  font-size:11.5px;font-weight:400;letter-spacing:.3px;
  color:var(--ink2);pointer-events:none;white-space:nowrap;
}
.win-controls{margin-left:auto;display:flex;gap:4px}
.wc-btn{
  width:26px;height:22px;border-radius:5px;
  background:transparent;border:1px solid var(--border);
  color:var(--ink3);cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  font-size:9px;
  transition:background .14s,color .14s,border-color .14s;
}
.wc-btn:hover{background:var(--glass-md);color:var(--ink2);border-color:var(--border-hi)}

/* Resize handle */
.win-resize{
  position:absolute;bottom:0;right:0;width:16px;height:16px;
  cursor:se-resize;z-index:10;
  display:flex;align-items:flex-end;justify-content:flex-end;
  padding:3px;
}
.win-resize svg{opacity:.2;transition:opacity .14s}
.win-resize:hover svg{opacity:.5}

/* Window content */
.win-body{flex:1;overflow:hidden;position:relative;display:flex;flex-direction:column}

/* ═══════════════════════════════════════════
   DOCK
═══════════════════════════════════════════ */
#dock{
  position:fixed;bottom:8px;left:50%;transform:translateX(-50%);
  z-index:1000;
  display:flex;align-items:flex-end;gap:6px;
  padding:8px 14px;
  border-radius:18px;
  background:rgba(10,16,36,.72);
  backdrop-filter:blur(40px) saturate(2);
  -webkit-backdrop-filter:blur(40px) saturate(2);
  border:1px solid var(--border);
  border-top:1px solid var(--border-hi);
  box-shadow:0 8px 32px rgba(0,0,0,.6),0 2px 8px rgba(0,0,0,.4),0 0 0 .5px rgba(0,0,0,.5);
}
.dock-sep{
  width:1px;height:36px;
  background:var(--border);margin:0 2px;align-self:center;
}
.di{
  width:52px;height:52px;
  border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;position:relative;
  transition:transform .2s var(--spring);
  transform-origin:bottom center;
}
.di:hover{transform:scale(1.32) translateY(-8px)}
.di.neighbor{transform:scale(1.14) translateY(-3px)}
.di.active::after{
  content:'';position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);
  width:4px;height:4px;border-radius:50%;background:var(--ink3);
}
.di-icon{
  width:100%;height:100%;border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  transition:box-shadow .2s;
}
.di:hover .di-icon{box-shadow:0 8px 24px rgba(0,0,0,.5)}
.di-tooltip{
  position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);
  background:rgba(10,16,32,.92);
  border:1px solid var(--border-hi);
  border-radius:7px;padding:4px 10px;
  font-size:10.5px;font-weight:300;letter-spacing:.3px;
  color:var(--ink);white-space:nowrap;
  opacity:0;pointer-events:none;
  transition:opacity .14s;
  backdrop-filter:blur(16px);
  box-shadow:0 4px 16px rgba(0,0,0,.4);
}
.di:hover .di-tooltip{opacity:1}
.di-bounce{animation:diBounce .5s var(--spring)}
@keyframes diBounce{0%,100%{transform:scale(1)}40%{transform:scale(1.0) translateY(-22px)}70%{transform:scale(1.0) translateY(-8px)}}

/* ═══════════════════════════════════════════
   APP: FINDER / HOME
═══════════════════════════════════════════ */
#app-home .home-inner{padding:26px 28px 24px;overflow-y:auto;height:100%}
.home-hero{text-align:center;margin-bottom:24px}
.home-wordmark{
  font-size:56px;font-weight:100;letter-spacing:20px;text-indent:20px;
  color:var(--ink);display:block;line-height:1;
  animation:hpulse 7s ease-in-out infinite;
}
@keyframes hpulse{0%,100%{opacity:.88}50%{opacity:1}}
.home-badge{
  display:inline-flex;align-items:center;gap:7px;
  margin-top:10px;padding:4px 14px;
  border-radius:99px;background:var(--blue3);
  border:1px solid rgba(91,156,246,.15);
  font-size:9px;letter-spacing:2.5px;color:rgba(91,156,246,.55);
  text-transform:uppercase;
}
.badge-dot{width:4px;height:4px;border-radius:50%;background:var(--blue);box-shadow:0 0 6px var(--blue);animation:gpulse 2.4s ease-in-out infinite}
.home-div{height:1px;background:linear-gradient(90deg,transparent,var(--border) 25%,var(--border) 75%,transparent);margin:18px 0 16px}
#home-tw{
  font-size:11px;font-style:italic;font-weight:300;letter-spacing:.6px;
  color:var(--ink3);text-align:center;min-height:16px;margin-bottom:20px;
}
#home-tw::after{content:'|';color:rgba(91,156,246,.4);animation:blink 1s step-end infinite;margin-left:1px}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
/* Search */
.search-wrap{margin-bottom:20px}
.sfield{
  display:flex;align-items:center;
  background:rgba(255,255,255,.03);
  border:1px solid var(--border);border-top:1px solid var(--border-hi);
  border-radius:12px;overflow:hidden;
  transition:border-color .2s,box-shadow .2s,background .2s;
}
.search-wrap:focus-within .sfield{
  border-color:rgba(91,156,246,.28);
  border-top-color:rgba(91,156,246,.4);
  background:rgba(91,156,246,.03);
  box-shadow:0 0 0 3px rgba(91,156,246,.07);
}
.sico{padding:0 4px 0 14px;color:var(--ink3);display:flex;align-items:center;flex-shrink:0;transition:color .2s}
.search-wrap:focus-within .sico{color:rgba(91,156,246,.6)}
#home-search{
  flex:1;background:transparent;border:none;
  padding:12px 14px;
  font-family:'Geist',sans-serif;font-size:13.5px;font-weight:300;
  color:var(--ink);letter-spacing:.1px;
}
#home-search::placeholder{color:var(--ink3);font-style:italic}
#home-search:focus{outline:none}
.sbtn{
  margin:5px;padding:9px 22px;
  background:rgba(91,156,246,.14);border:1px solid rgba(91,156,246,.22);
  border-radius:8px;color:rgba(91,156,246,.9);
  font-family:'Geist',sans-serif;font-size:11.5px;font-weight:400;letter-spacing:.3px;
  cursor:pointer;flex-shrink:0;
  transition:background .16s,transform .1s;
}
.sbtn:hover{background:rgba(91,156,246,.22)}
.sbtn:active{transform:scale(.94)}
/* Tiles */
.sec-label{font-size:8.5px;letter-spacing:2.5px;text-transform:uppercase;color:var(--ink3);margin-bottom:10px}
.quick-tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:20px}
.qtile{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:8px;padding:16px 8px 12px;border-radius:12px;cursor:pointer;
  background:var(--glass);border:1px solid var(--border);border-top:1px solid var(--border-hi);
  transition:background .2s,border-color .2s,transform .22s var(--spring);
  position:relative;overflow:hidden;
}
.qtile::before{content:'';position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,.04),transparent);border-radius:12px 12px 0 0;pointer-events:none}
.qtile:hover{background:rgba(91,156,246,.065);border-color:rgba(91,156,246,.2);transform:translateY(-3px) scale(1.03)}
.qtile:active{transform:scale(.97)!important}
.qtile-label{font-size:9.5px;font-weight:300;letter-spacing:.5px;color:var(--ink3);text-transform:uppercase;transition:color .2s}
.qtile:hover .qtile-label{color:var(--ink2)}
/* Games strip */
.strip-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.strip-more{font-size:10px;color:rgba(91,156,246,.35);cursor:pointer;padding:2px 7px;border-radius:5px;transition:color .14s,background .14s}
.strip-more:hover{color:rgba(91,156,246,.7);background:rgba(91,156,246,.06)}
.hgstrip{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;-ms-overflow-style:none;scrollbar-width:none}
.hgstrip::-webkit-scrollbar{display:none}
.hgc{
  flex-shrink:0;width:120px;border-radius:10px;overflow:hidden;cursor:pointer;
  border:1px solid var(--border);background:var(--glass);
  transition:background .2s,border-color .2s,transform .22s var(--spring);
}
.hgc:hover{background:rgba(91,156,246,.065);border-color:rgba(91,156,246,.2);transform:translateY(-3px) scale(1.04)}
.hgc:active{transform:scale(.96)!important}
.gthumb{width:100%;height:58px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.gthumb::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 44%,rgba(0,0,0,.35) 100%)}
.ginfo{padding:6px 8px 8px}
.gname{font-size:9.5px;font-weight:400;letter-spacing:.2px;color:var(--ink2);margin-bottom:2px}
.gtag{font-size:7.5px;letter-spacing:.8px;text-transform:uppercase;color:rgba(91,156,246,.4)}

/* ═══════════════════════════════════════════
   APP: BROWSER
═══════════════════════════════════════════ */
.browser-chrome{
  display:flex;align-items:center;gap:6px;
  padding:8px 10px;
  border-bottom:1px solid var(--border);
  background:rgba(0,0,0,.18);
  flex-shrink:0;
}
.nav-btn{
  width:27px;height:27px;
  background:rgba(255,255,255,.04);border:1px solid var(--border);
  border-radius:7px;display:flex;align-items:center;justify-content:center;
  color:var(--ink2);cursor:pointer;flex-shrink:0;
  transition:background .14s,color .14s,transform .1s;
}
.nav-btn:hover{background:var(--glass-md);color:var(--ink)}
.nav-btn:active{transform:scale(.85)}
.url-bar-wrap{
  flex:1;display:flex;align-items:center;
  background:rgba(255,255,255,.04);border:1px solid var(--border);
  border-radius:8px;overflow:hidden;
  transition:border-color .18s,box-shadow .18s;
}
.url-bar-wrap:focus-within{border-color:rgba(91,156,246,.28);box-shadow:0 0 0 2px rgba(91,156,246,.06)}
.url-lock{padding:0 5px 0 9px;color:var(--ink3);display:flex;align-items:center;flex-shrink:0}
.url-input{
  flex:1;background:transparent;border:none;
  padding:6.5px 6px 6.5px 0;
  font-family:'Geist Mono',monospace;font-size:11px;font-weight:300;
  color:var(--ink2);letter-spacing:.05px;
}
.url-input:focus{outline:none}
.url-input::placeholder{font-family:'Geist',sans-serif;color:var(--ink3);font-style:italic}
.url-go{
  margin:3px;padding:5px 13px;
  background:rgba(91,156,246,.12);border:1px solid rgba(91,156,246,.18);
  border-radius:5px;color:rgba(91,156,246,.8);
  font-family:'Geist',sans-serif;font-size:10px;font-weight:400;letter-spacing:.3px;
  cursor:pointer;flex-shrink:0;transition:background .14s;
}
.url-go:hover{background:rgba(91,156,246,.2)}
.browser-tabs{
  display:flex;align-items:center;gap:2px;
  padding:4px 10px;border-bottom:1px solid var(--border);
  background:rgba(0,0,0,.12);min-height:32px;flex-shrink:0;
  overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none;
}
.browser-tabs::-webkit-scrollbar{display:none}
.btab{
  display:flex;align-items:center;gap:5px;
  padding:4px 10px;border-radius:7px;flex-shrink:0;
  font-size:10.5px;font-weight:300;letter-spacing:.2px;
  color:var(--ink3);cursor:pointer;max-width:160px;
  background:transparent;border:1px solid transparent;
  transition:background .14s,color .14s,border-color .14s;
}
.btab:hover{background:var(--glass);color:var(--ink2)}
.btab.active{background:var(--glass-md);color:var(--ink);border-color:var(--border)}
.btab-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:110px}
.btab-close{
  width:14px;height:14px;border-radius:50%;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  color:var(--ink3);transition:background .12s,color .12s;font-size:8px;
}
.btab-close:hover{background:rgba(248,113,113,.2);color:var(--red)}
.btab-new{
  width:26px;height:26px;border-radius:7px;
  background:var(--glass);border:1px solid var(--border);
  display:flex;align-items:center;justify-content:center;
  color:var(--ink3);cursor:pointer;flex-shrink:0;font-size:14px;
  transition:background .14s,color .14s;margin-left:2px;
}
.btab-new:hover{background:var(--glass-md);color:var(--ink2)}
.browser-viewport{flex:1;position:relative;background:#040810;overflow:hidden}
.browser-frame{width:100%;height:100%;border:none;display:none}
.browser-empty{
  position:absolute;inset:0;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;
}
.be-icon{
  width:40px;height:40px;border-radius:50%;
  border:1px solid var(--border);display:flex;align-items:center;justify-content:center;
  color:var(--ink3);
}
.be-text{font-size:12px;font-weight:300;letter-spacing:.5px;color:var(--ink3)}
.be-hint{font-size:8.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--ink4)}
/* new tab page inside browser */
.newtab{
  position:absolute;inset:0;background:rgba(4,7,18,.96);
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;
  padding:30px;
}
.newtab-time{font-size:52px;font-weight:100;letter-spacing:4px;color:var(--ink);line-height:1}
.newtab-date{font-size:11px;font-weight:300;letter-spacing:3px;color:var(--ink3);text-transform:uppercase}
.newtab-search{
  display:flex;align-items:center;
  background:rgba(255,255,255,.04);border:1px solid var(--border);border-top:1px solid var(--border-hi);
  border-radius:12px;overflow:hidden;width:440px;max-width:100%;
  transition:border-color .2s,box-shadow .2s;
}
.newtab-search:focus-within{border-color:rgba(91,156,246,.3);box-shadow:0 0 0 3px rgba(91,156,246,.07)}
.newtab-input{
  flex:1;background:transparent;border:none;
  padding:13px 16px;font-family:'Geist',sans-serif;
  font-size:14px;font-weight:300;color:var(--ink);
}
.newtab-input::placeholder{color:var(--ink3);font-style:italic}
.newtab-input:focus{outline:none}
.newtab-go{
  margin:5px;padding:9px 22px;
  background:rgba(91,156,246,.14);border:1px solid rgba(91,156,246,.2);
  border-radius:8px;color:rgba(91,156,246,.9);
  font-family:'Geist',sans-serif;font-size:12px;font-weight:400;
  cursor:pointer;transition:background .14s;
}
.newtab-go:hover{background:rgba(91,156,246,.24)}

/* ═══════════════════════════════════════════
   APP: GAMES
═══════════════════════════════════════════ */
.games-inner{padding:18px 18px 18px;overflow-y:auto;height:100%}
.games-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.games-title-txt{font-size:8.5px;letter-spacing:2.5px;text-transform:uppercase;color:var(--ink3)}
.games-count{font-size:9px;color:var(--ink4)}
.gg{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.gc{
  border-radius:10px;overflow:hidden;cursor:pointer;
  border:1px solid var(--border);background:var(--glass);
  transition:background .2s,border-color .2s,transform .22s var(--spring);
}
.gc:hover{background:rgba(91,156,246,.065);border-color:rgba(91,156,246,.2);transform:translateY(-3px) scale(1.03)}
.gc:active{transform:scale(.97)!important}
.gc-thumb{width:100%;height:62px;display:flex;align-items:center;justify-content:center;position:relative}
.gc-thumb::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 44%,rgba(0,0,0,.4) 100%)}
.gc-info{padding:6px 9px 9px}
.gc-name{font-size:10px;font-weight:400;letter-spacing:.2px;color:var(--ink2);margin-bottom:2px}
.gc-tag{font-size:7.5px;letter-spacing:.8px;text-transform:uppercase;color:rgba(91,156,246,.4)}

/* ═══════════════════════════════════════════
   APP: SETTINGS
═══════════════════════════════════════════ */
.settings-inner{display:flex;height:100%}
.settings-sidebar{
  width:160px;flex-shrink:0;
  border-right:1px solid var(--border);
  padding:12px 8px;
  display:flex;flex-direction:column;gap:2px;
}
.s-item{
  display:flex;align-items:center;gap:8px;
  padding:7px 10px;border-radius:8px;
  font-size:11.5px;font-weight:300;letter-spacing:.2px;
  color:var(--ink2);cursor:pointer;
  transition:background .14s,color .14s;
}
.s-item:hover{background:var(--glass-md);color:var(--ink)}
.s-item.active{background:var(--glass-hi);color:var(--ink)}
.s-item-icon{width:24px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.settings-content{flex:1;padding:20px;overflow-y:auto}
.s-section{margin-bottom:24px}
.s-section-title{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3);margin-bottom:12px}
.s-card{
  background:var(--glass);border:1px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:2px;
}
.s-row{
  display:flex;align-items:center;padding:11px 14px;
  border-bottom:1px solid var(--border);
  transition:background .14s;
}
.s-row:last-child{border-bottom:none}
.s-row:hover{background:rgba(255,255,255,.02)}
.s-row-label{font-size:12px;font-weight:300;letter-spacing:.2px;color:var(--ink2);flex:1}
.s-row-value{font-size:11px;color:var(--ink3);font-family:'Geist Mono',monospace}
.s-toggle{
  width:36px;height:20px;border-radius:10px;
  background:rgba(255,255,255,.12);border:1px solid var(--border);
  position:relative;cursor:pointer;
  transition:background .2s;flex-shrink:0;
}
.s-toggle.on{background:var(--blue)}
.s-toggle::after{
  content:'';position:absolute;top:2px;left:2px;
  width:14px;height:14px;border-radius:50%;background:white;
  transition:transform .2s var(--spring),box-shadow .2s;
  box-shadow:0 1px 4px rgba(0,0,0,.3);
}
.s-toggle.on::after{transform:translateX(16px)}
.s-input{
  background:rgba(255,255,255,.04);border:1px solid var(--border);
  border-radius:6px;padding:5px 10px;
  font-family:'Geist Mono',monospace;font-size:11px;
  color:var(--ink);width:200px;
}
.s-input:focus{outline:none;border-color:rgba(91,156,246,.3)}
.s-badge{
  padding:2px 8px;border-radius:5px;
  font-size:8.5px;letter-spacing:.6px;
  background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);
  color:var(--green);
}

/* ═══════════════════════════════════════════
   APP: TERMINAL
═══════════════════════════════════════════ */
.term-body{
  flex:1;overflow-y:auto;padding:14px 16px;
  font-family:'Geist Mono',monospace;font-size:12px;line-height:1.7;
  color:rgba(200,220,200,.85);
  background:#020705;
}
.term-body::-webkit-scrollbar{width:5px}
.term-body::-webkit-scrollbar-track{background:transparent}
.term-body::-webkit-scrollbar-thumb{background:rgba(255,255,255,.07);border-radius:3px}
.term-line{display:flex;gap:6px;flex-wrap:wrap;align-items:flex-start;margin-bottom:2px}
.term-prompt{color:rgba(74,222,128,.7);flex-shrink:0}
.term-cmd{color:rgba(180,220,255,.8)}
.term-out{color:rgba(160,200,180,.55);font-size:11.5px}
.term-input-row{display:flex;align-items:center;gap:6px;padding:8px 16px;border-top:1px solid var(--border);flex-shrink:0}
.term-input-prompt{font-family:'Geist Mono',monospace;font-size:12px;color:rgba(74,222,128,.7);flex-shrink:0}
.term-input{
  flex:1;background:transparent;border:none;
  font-family:'Geist Mono',monospace;font-size:12px;
  color:rgba(200,220,200,.9);
}
.term-input:focus{outline:none}

/* ═══════════════════════════════════════════
   LOADER OVERLAY
═══════════════════════════════════════════ */
#loader{
  position:fixed;inset:0;z-index:99998;
  display:flex;align-items:center;justify-content:center;
  background:rgba(2,4,8,.9);backdrop-filter:blur(28px);
  opacity:0;pointer-events:none;
  transition:opacity .3s var(--ease);
}
#loader.vis{opacity:1;pointer-events:all}
.ld-box{
  width:300px;border-radius:16px;padding:28px 24px 22px;text-align:center;
  background:rgba(6,10,22,.9);border:1px solid var(--border);border-top:1px solid var(--border-hi);
  box-shadow:0 40px 80px rgba(0,0,0,.6);
  animation:winOpen .3s var(--spring) both;
}
.ld-spin{width:44px;height:44px;margin:0 auto 16px;position:relative}
.ld-r{position:absolute;border-radius:50%;border:1px solid transparent;top:50%;left:50%}
.lr1{width:44px;height:44px;margin:-22px 0 0 -22px;border-top-color:rgba(91,156,246,.7);animation:spin 1.4s linear infinite}
.lr2{width:28px;height:28px;margin:-14px 0 0 -14px;border-top-color:rgba(91,156,246,.3);animation:spin 2.2s linear infinite reverse}
.lr3{width:10px;height:10px;margin:-5px 0 0 -5px;background:rgba(91,156,246,.8);border:none;border-radius:50%;animation:gpulse 1.4s ease-in-out infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.ld-title{font-size:15px;font-weight:200;letter-spacing:5px;color:var(--ink);margin-bottom:4px}
.ld-sub{font-size:10.5px;font-style:italic;font-weight:300;color:var(--ink3);letter-spacing:.5px;margin-bottom:14px;min-height:14px}
.ld-bar-wrap{width:100%;height:2px;background:rgba(255,255,255,.04);border-radius:2px;overflow:hidden;margin-bottom:8px}
#ld-bar{height:100%;width:0%;background:linear-gradient(90deg,rgba(50,120,255,.6),var(--blue));border-radius:2px;transition:width .3s var(--ease);box-shadow:0 0 8px rgba(91,156,246,.5)}
.ld-status{font-family:'Geist Mono',monospace;font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--ink4);min-height:12px;margin-bottom:14px}
.ld-cancel{background:none;border:1px solid var(--border);border-radius:7px;padding:6px 18px;font-family:'Geist',sans-serif;font-size:10.5px;letter-spacing:.5px;color:var(--ink3);cursor:pointer;transition:border-color .14s,color .14s}
.ld-cancel:hover{border-color:var(--border-hi);color:var(--ink2)}

/* ═══════════════════════════════════════════
   NOTIFICATION
═══════════════════════════════════════════ */
#notif-stack{position:fixed;top:calc(var(--bar-h) + 8px);right:12px;z-index:9990;display:flex;flex-direction:column;gap:6px}
.notif{
  width:280px;border-radius:12px;padding:12px 14px;
  background:rgba(8,12,26,.92);border:1px solid var(--border);border-top:1px solid var(--border-hi);
  backdrop-filter:blur(24px);box-shadow:0 8px 24px rgba(0,0,0,.5);
  animation:notifIn .3s var(--spring) both;
  display:flex;gap:10px;align-items:flex-start;
}
.notif.out{animation:notifOut .22s var(--ease) both}
@keyframes notifIn{from{opacity:0;transform:translateX(20px) scale(.95)}to{opacity:1;transform:none}}
@keyframes notifOut{from{opacity:1;transform:none}to{opacity:0;transform:translateX(20px) scale(.95)}}
.notif-icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.notif-text{flex:1}
.notif-title{font-size:11.5px;font-weight:400;color:var(--ink);margin-bottom:2px}
.notif-body{font-size:10.5px;font-weight:300;color:var(--ink2)}

/* ═══════════════════════════════════════════
   SCROLLBARS
═══════════════════════════════════════════ */
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,.07);border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.12)}
</style>
</head>
<body>

<!-- CANVAS BG -->
<div id="bg"><canvas id="stars"></canvas><div id="bg-grad"></div></div>

<!-- CURSOR -->
<div id="cursor"><div id="cur-ring"></div><div id="cur-dot"></div></div>

<!-- MENU BAR -->
<div id="menubar">
  <div class="mb-logo"><span>⬡</span> atom <span>OS</span></div>
  <div class="mb-items" id="mb-items">
    <div class="mb-item active-app" id="mb-app-name">Finder</div>
    <div class="mb-item" onclick="MB.file()">File</div>
    <div class="mb-item" onclick="MB.view()">View</div>
    <div class="mb-item" onclick="MB.go()">Go</div>
  </div>
  <div class="mb-right">
    <div class="mb-stat"><div class="dot"></div><span id="mb-proxy">proxy active</span></div>
    <div class="mb-stat">
      <svg width="12" height="10" viewBox="0 0 14 11" fill="currentColor" opacity=".5"><rect x="0" y="5" width="2.5" height="6" rx=".8"/><rect x="3.5" y="3" width="2.5" height="8" rx=".8"/><rect x="7" y="1" width="2.5" height="10" rx=".8"/><rect x="10.5" y="0" width="2.5" height="11" rx=".8" opacity=".4"/></svg>
    </div>
    <div id="mb-clock" class="mb-stat">--:--</div>
  </div>
</div>

<!-- DESKTOP -->
<div id="desktop" id="desktop"></div>

<!-- DOCK -->
<div id="dock">
  <div class="di" id="dock-home" onclick="AppMgr.open('home')">
    <div class="di-icon" style="background:linear-gradient(145deg,#1a2a4a,#0d1a30)">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 12L14 4L24 12V24H18V17H10V24H4V12Z" fill="rgba(91,156,246,.7)" stroke="rgba(91,156,246,.4)" stroke-width=".5"/></svg>
    </div>
    <div class="di-tooltip">Home</div>
  </div>
  <div class="di" id="dock-browser" onclick="AppMgr.open('browser')">
    <div class="di-icon" style="background:linear-gradient(145deg,#0d2035,#071528)">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="rgba(91,180,246,.6)" stroke-width="1.2"/><ellipse cx="14" cy="14" rx="4" ry="10" stroke="rgba(91,180,246,.4)" stroke-width="1"/><line x1="4" y1="14" x2="24" y2="14" stroke="rgba(91,180,246,.4)" stroke-width="1"/></svg>
    </div>
    <div class="di-tooltip">Browser</div>
  </div>
  <div class="di" id="dock-games" onclick="AppMgr.open('games')">
    <div class="di-icon" style="background:linear-gradient(145deg,#1a1a30,#0d0d22)">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="7" width="20" height="14" rx="3" stroke="rgba(180,130,246,.5)" stroke-width="1.2"/><line x1="11" y1="14" x2="15" y2="14" stroke="rgba(180,130,246,.5)" stroke-width="1.4" stroke-linecap="round"/><line x1="13" y1="12" x2="13" y2="16" stroke="rgba(180,130,246,.5)" stroke-width="1.4" stroke-linecap="round"/><circle cx="19" cy="13" r="1" fill="rgba(180,130,246,.5)"/><circle cx="19" cy="16" r="1" fill="rgba(180,130,246,.5)"/></svg>
    </div>
    <div class="di-tooltip">Games</div>
  </div>
  <div class="di" id="dock-terminal" onclick="AppMgr.open('terminal')">
    <div class="di-icon" style="background:linear-gradient(145deg,#0a1a0c,#050e06)">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="3" stroke="rgba(74,222,128,.4)" stroke-width="1.1"/><path d="M8 13L12 16L8 19" stroke="rgba(74,222,128,.55)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="13" y1="19" x2="20" y2="19" stroke="rgba(74,222,128,.4)" stroke-width="1.2" stroke-linecap="round"/></svg>
    </div>
    <div class="di-tooltip">Terminal</div>
  </div>
  <div class="dock-sep"></div>
  <div class="di" id="dock-settings" onclick="AppMgr.open('settings')">
    <div class="di-icon" style="background:linear-gradient(145deg,#1e1e1e,#111)">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="3.5" stroke="rgba(200,200,210,.5)" stroke-width="1.2"/><path d="M14 5v2.5M14 20.5V23M5 14h2.5M20.5 14H23M7.3 7.3l1.8 1.8M18.9 18.9l1.8 1.8M7.3 20.7l1.8-1.8M18.9 9.1l1.8-1.8" stroke="rgba(200,200,210,.4)" stroke-width="1.3" stroke-linecap="round"/></svg>
    </div>
    <div class="di-tooltip">Settings</div>
  </div>
</div>

<!-- LOADER -->
<div id="loader">
  <div class="ld-box">
    <div class="ld-spin"><div class="ld-r lr3"></div><div class="ld-r lr2"></div><div class="ld-r lr1"></div></div>
    <div class="ld-title">atom</div>
    <div class="ld-sub" id="ld-sub">preparing launch</div>
    <div class="ld-bar-wrap"><div id="ld-bar"></div></div>
    <div class="ld-status" id="ld-status">initializing</div>
    <button class="ld-cancel" id="ld-cancel">cancel</button>
  </div>
</div>

<!-- NOTIF STACK -->
<div id="notif-stack"></div>

<script src="/uv/uv.bundle.js"></script>
<script src="/uv/uv.config.js"></script>
<script>
'use strict';
/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const GAMES = [
  {n:'Snake',       u:'https://www.coolmathgames.com/0-snake',             t:'Classic', bg:'#001a0c',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><path d="M8 36Q8 22 18 22Q28 22 28 14Q28 6 38 6" stroke="rgba(46,210,110,.65)" stroke-width="2.4" stroke-linecap="round" fill="none"/><circle cx="38" cy="6" r="4" fill="rgba(46,210,110,.75)"/></svg>`},
  {n:'2048',        u:'https://play2048.co/',                               t:'Puzzle',  bg:'#1a0f00',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="3" y="3" width="17" height="17" rx="2.5" fill="rgba(255,160,0,.15)" stroke="rgba(255,160,0,.35)" stroke-width=".8"/><rect x="24" y="3" width="17" height="17" rx="2.5" fill="rgba(255,100,0,.15)" stroke="rgba(255,100,0,.32)" stroke-width=".8"/><rect x="3" y="24" width="17" height="17" rx="2.5" fill="rgba(255,70,0,.12)" stroke="rgba(255,70,0,.28)" stroke-width=".8"/><rect x="24" y="24" width="17" height="17" rx="2.5" fill="rgba(255,190,0,.18)" stroke="rgba(255,190,0,.38)" stroke-width=".8"/><text x="11.5" y="16" font-size="9" fill="rgba(255,170,60,.85)" text-anchor="middle" font-family="Geist Mono,monospace">4</text><text x="32.5" y="16" font-size="9" fill="rgba(255,170,60,.85)" text-anchor="middle" font-family="Geist Mono,monospace">8</text><text x="11.5" y="37" font-size="8" fill="rgba(255,170,60,.85)" text-anchor="middle" font-family="Geist Mono,monospace">16</text><text x="32.5" y="37" font-size="6" fill="rgba(255,170,60,.85)" text-anchor="middle" font-family="Geist Mono,monospace">2048</text></svg>`},
  {n:'Tetris',      u:'https://www.coolmathgames.com/0-tetris',             t:'Arcade',  bg:'#000d1a',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="2" y="2" width="12" height="12" rx="2" fill="rgba(0,200,255,.16)" stroke="rgba(0,200,255,.35)" stroke-width=".8"/><rect x="16" y="2" width="12" height="12" rx="2" fill="rgba(0,200,255,.14)" stroke="rgba(0,200,255,.3)" stroke-width=".8"/><rect x="16" y="16" width="12" height="12" rx="2" fill="rgba(0,200,255,.12)" stroke="rgba(0,200,255,.26)" stroke-width=".8"/><rect x="2" y="30" width="12" height="12" rx="2" fill="rgba(255,50,150,.15)" stroke="rgba(255,50,150,.32)" stroke-width=".8"/><rect x="16" y="30" width="12" height="12" rx="2" fill="rgba(255,50,150,.13)" stroke="rgba(255,50,150,.28)" stroke-width=".8"/><rect x="30" y="30" width="12" height="12" rx="2" fill="rgba(255,50,150,.11)" stroke="rgba(255,50,150,.24)" stroke-width=".8"/></svg>`},
  {n:'Pac-Man',     u:'https://www.google.com/logos/2010/pacman10-i.html',  t:'Arcade',  bg:'#100e00',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><path d="M22 22L40 14A19 19 0 1 0 40 30Z" fill="rgba(255,215,0,.18)" stroke="rgba(255,215,0,.38)" stroke-width=".8"/><ellipse cx="22" cy="9" rx="1.8" ry="1.8" fill="rgba(0,0,0,.5)"/></svg>`},
  {n:'Flappy Bird', u:'https://flappybird.io/',                             t:'Endless', bg:'#000d14',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="3" y="14" width="7" height="22" rx="2" fill="rgba(0,155,60,.18)" stroke="rgba(0,155,60,.35)" stroke-width=".8"/><rect x="34" y="6" width="7" height="18" rx="2" fill="rgba(0,155,60,.18)" stroke="rgba(0,155,60,.35)" stroke-width=".8"/><ellipse cx="24" cy="28" rx="9" ry="6" fill="rgba(255,195,0,.18)" stroke="rgba(255,195,0,.36)" stroke-width=".8"/><circle cx="30" cy="25" r="1.4" fill="rgba(0,0,0,.5)"/><path d="M32 29L37 27" stroke="rgba(255,120,0,.55)" stroke-width="1.6" stroke-linecap="round"/></svg>`},
  {n:'Breakout',    u:'https://www.coolmathgames.com/0-breakout',           t:'Arcade',  bg:'#0a001a',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="2" y="3" width="9" height="5.5" rx="1.5" fill="rgba(170,60,255,.15)" stroke="rgba(170,60,255,.32)" stroke-width=".7"/><rect x="13" y="3" width="9" height="5.5" rx="1.5" fill="rgba(190,80,255,.15)" stroke="rgba(190,80,255,.32)" stroke-width=".7"/><rect x="24" y="3" width="9" height="5.5" rx="1.5" fill="rgba(170,60,255,.15)" stroke="rgba(170,60,255,.32)" stroke-width=".7"/><rect x="2" y="10" width="9" height="5.5" rx="1.5" fill="rgba(130,30,200,.12)" stroke="rgba(130,30,200,.28)" stroke-width=".7"/><circle cx="24" cy="34" r="3.5" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.24)" stroke-width=".7"/><rect x="13" y="40" width="12" height="4" rx="2" fill="rgba(170,60,255,.22)" stroke="rgba(170,60,255,.38)" stroke-width=".7"/></svg>`},
  {n:'Chess',       u:'https://www.chess.com/play/computer',                t:'Strategy',bg:'#080808',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="3" y="3" width="9" height="9" fill="rgba(210,210,210,.1)"/><rect x="12" y="3" width="9" height="9" fill="rgba(70,70,70,.1)"/><rect x="21" y="3" width="9" height="9" fill="rgba(210,210,210,.1)"/><rect x="3" y="12" width="9" height="9" fill="rgba(70,70,70,.1)"/><rect x="12" y="12" width="9" height="9" fill="rgba(210,210,210,.1)"/><path d="M22 19L19 28H25Z" fill="rgba(255,215,75,.55)"/><rect x="20.5" y="28" width="3" height="7" fill="rgba(255,215,75,.55)"/><circle cx="22" cy="17" r="2.2" fill="rgba(255,215,75,.6)"/></svg>`},
  {n:'Minesweeper', u:'https://minesweeper.online/',                        t:'Puzzle',  bg:'#001222',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/><rect x="18" y="3" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/><rect x="33" y="3" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/><rect x="3" y="18" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/><rect x="18" y="18" width="8" height="8" rx="1.5" fill="rgba(248,100,100,.18)" stroke="rgba(248,100,100,.36)" stroke-width=".7"/><rect x="33" y="18" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/><rect x="3" y="33" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/><rect x="18" y="33" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/><rect x="33" y="33" width="8" height="8" rx="1.5" fill="rgba(0,160,255,.13)" stroke="rgba(0,160,255,.28)" stroke-width=".7"/></svg>`},
  {n:'Slope',       u:'https://slope-game.github.io/',                     t:'Endless', bg:'#000c18',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><path d="M5 40L22 8L39 40Z" stroke="rgba(0,200,255,.22)" stroke-width="1.1" fill="none"/><circle cx="22" cy="24" r="6.5" fill="rgba(0,155,215,.15)" stroke="rgba(0,200,255,.3)" stroke-width=".8"/></svg>`},
  {n:'Wordle',      u:'https://wordleunlimited.org/',                       t:'Word',    bg:'#060a00',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="rgba(96,170,96,.2)" stroke="rgba(96,170,96,.38)" stroke-width=".7"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="rgba(195,172,72,.18)" stroke="rgba(195,172,72,.35)" stroke-width=".7"/><rect x="23" y="3" width="8" height="8" rx="1.5" fill="rgba(100,100,110,.1)" stroke="rgba(120,120,130,.18)" stroke-width=".7"/><rect x="33" y="3" width="8" height="8" rx="1.5" fill="rgba(96,170,96,.2)" stroke="rgba(96,170,96,.38)" stroke-width=".7"/><rect x="3" y="14" width="8" height="8" rx="1.5" fill="rgba(100,100,110,.08)" stroke="rgba(120,120,130,.15)" stroke-width=".7"/><rect x="13" y="14" width="8" height="8" rx="1.5" fill="rgba(96,170,96,.2)" stroke="rgba(96,170,96,.38)" stroke-width=".7"/><rect x="23" y="14" width="8" height="8" rx="1.5" fill="rgba(96,170,96,.2)" stroke="rgba(96,170,96,.38)" stroke-width=".7"/><rect x="33" y="14" width="8" height="8" rx="1.5" fill="rgba(195,172,72,.18)" stroke="rgba(195,172,72,.35)" stroke-width=".7"/></svg>`},
  {n:'Subway Surfers',u:'https://poki.com/en/g/subway-surfers',            t:'Runner',  bg:'#0d0018',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="5" y="5" width="15" height="15" rx="3" fill="rgba(150,60,255,.15)" stroke="rgba(150,60,255,.32)" stroke-width=".8" transform="rotate(10 12 12)"/><circle cx="33" cy="32" r="8" fill="rgba(255,55,125,.13)" stroke="rgba(255,55,125,.28)" stroke-width=".8"/></svg>`},
  {n:'Geometry Dash',u:'https://geometrydash.io/',                         t:'Rhythm',  bg:'#140000',
    svg:`<svg viewBox="0 0 44 44" fill="none" width="34"><rect x="8" y="8" width="18" height="18" rx="2.5" fill="rgba(255,110,0,.18)" stroke="rgba(255,110,0,.35)" stroke-width=".8"/><line x1="4" y1="36" x2="40" y2="36" stroke="rgba(0,215,255,.25)" stroke-width="1.1"/><circle cx="36" cy="30" r="5" fill="rgba(255,55,75,.15)" stroke="rgba(255,55,75,.32)" stroke-width=".8"/></svg>`},
];

const TILES = [
  {n:'Sonic',  u:'https://3duser-sys.github.io/SonicManiaWeb/RSDKv5.html',
    svg:`<svg width="40" height="40" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="13" fill="rgba(0,130,255,.13)" stroke="rgba(0,170,255,.28)" stroke-width=".8"/><ellipse cx="17" cy="16" rx="4.5" ry="2.8" fill="rgba(255,255,255,.12)" transform="rotate(-22 17 16)"/></svg>`},
  {n:'Roblox', u:'https://www.roblox.com',
    svg:`<svg width="40" height="40" viewBox="0 0 44 44" fill="none"><rect x="10" y="10" width="22" height="16" rx="2" fill="rgba(210,50,50,.18)" stroke="rgba(210,50,50,.36)" stroke-width=".8"/><rect x="14" y="15" width="4" height="4" rx=".8" fill="rgba(255,255,255,.38)"/><rect x="22" y="15" width="4" height="4" rx=".8" fill="rgba(255,255,255,.38)"/></svg>`},
  {n:'YouTube', u:'https://www.youtube.com',
    svg:`<svg width="40" height="40" viewBox="0 0 44 44" fill="none"><rect x="5" y="13" width="34" height="20" rx="8" fill="rgba(210,0,0,.18)" stroke="rgba(210,0,0,.35)" stroke-width=".8"/><path d="M17 17L31 22L17 27Z" fill="rgba(255,255,255,.5)"/></svg>`},
  {n:'Scratch', u:'https://scratch.mit.edu',
    svg:`<svg width="40" height="40" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="24" r="12" fill="rgba(255,148,0,.16)" stroke="rgba(255,148,0,.32)" stroke-width=".8"/><ellipse cx="17" cy="23" rx="2.4" ry="2.7" fill="rgba(255,255,255,.45)"/><ellipse cx="27" cy="23" rx="2.4" ry="2.7" fill="rgba(255,255,255,.45)"/><circle cx="17.5" cy="23.5" r="1.3" fill="rgba(30,8,0,.75)"/><circle cx="27.5" cy="23.5" r="1.3" fill="rgba(30,8,0,.75)"/></svg>`},
];

/* ══════════════════════════════════════════
   STARFIELD
══════════════════════════════════════════ */
(()=>{
  const cv=document.getElementById('stars'),ctx=cv.getContext('2d');
  function resize(){cv.width=innerWidth;cv.height=innerHeight;}
  resize();addEventListener('resize',resize);
  const stars=Array.from({length:320},()=>({
    x:Math.random()*innerWidth,y:Math.random()*innerHeight,
    r:Math.random()*1.1+.1,a:Math.random()*.45+.04,
    t:Math.random()*100,ts:Math.random()*.006+.002,
    cross:Math.random()>.82
  }));
  function draw(){
    ctx.clearRect(0,0,cv.width,cv.height);
    stars.forEach(s=>{
      s.t+=s.ts;
      const al=s.a*(.35+.65*Math.abs(Math.sin(s.t)));
      ctx.save();ctx.globalAlpha=al;
      if(s.cross){
        ctx.strokeStyle='rgba(200,220,255,.5)';ctx.lineWidth=.35;
        ctx.beginPath();ctx.moveTo(s.x-s.r*2.2,s.y);ctx.lineTo(s.x+s.r*2.2,s.y);
        ctx.moveTo(s.x,s.y-s.r*2.2);ctx.lineTo(s.x,s.y+s.r*2.2);ctx.stroke();
      }else{
        ctx.fillStyle=`rgba(185,210,255,${al})`;
        ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ══════════════════════════════════════════
   CURSOR
══════════════════════════════════════════ */
const curEl=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{curEl.style.left=e.clientX+'px';curEl.style.top=e.clientY+'px';});
document.addEventListener('mousedown',()=>document.body.classList.add('click'));
document.addEventListener('mouseup',()=>document.body.classList.remove('click'));
function addHov(el){if(!el._hov){el._hov=1;
  el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));
  el.addEventListener('mouseleave',()=>{document.body.classList.remove('hov');document.body.classList.remove('text-hov');});
}}
function addTextHov(el){el.addEventListener('mouseenter',()=>document.body.classList.add('text-hov'));el.addEventListener('mouseleave',()=>document.body.classList.remove('text-hov'));}
document.querySelectorAll('a,button,.di,.tl,.mb-item,.s-item,.gc,.qtile,.hgc,.btab,.nav-btn,.wc-btn').forEach(addHov);
document.querySelectorAll('input,textarea').forEach(addTextHov);

/* ══════════════════════════════════════════
   CLOCK
══════════════════════════════════════════ */
function updateClock(){
  const now=new Date();
  const t=now.toLocaleTimeString([],{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
  document.getElementById('mb-clock').textContent=t;
}
updateClock();setInterval(updateClock,5000);

/* ══════════════════════════════════════════
   NOTIFICATION SYSTEM
══════════════════════════════════════════ */
const Notify={
  show(title,body,iconBg='rgba(91,156,246,.18)',iconSvg=''){
    const stack=document.getElementById('notif-stack');
    const el=document.createElement('div');el.className='notif';
    el.innerHTML=`<div class="notif-icon" style="background:${iconBg}">${iconSvg||'<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="rgba(91,156,246,.6)" stroke-width="1.2"/><line x1="8" y1="5" x2="8" y2="9" stroke="rgba(91,156,246,.6)" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="11.5" r=".7" fill="rgba(91,156,246,.6)"/></svg>'}</div><div class="notif-text"><div class="notif-title">${title}</div><div class="notif-body">${body}</div></div>`;
    stack.appendChild(el);
    addHov(el);
    setTimeout(()=>{el.classList.add('out');setTimeout(()=>el.remove(),300);},3400);
  }
};

/* ══════════════════════════════════════════
   WINDOW MANAGER
══════════════════════════════════════════ */
let zTop=100;
const WM={
  wins:{},
  create(id,cfg){
    const desk=document.getElementById('desktop');
    const el=document.createElement('div');
    el.className='win opening focused';el.id='win-'+id;
    el.style.cssText=`width:${cfg.w||760}px;height:${cfg.h||520}px;left:${cfg.x||(desk.offsetWidth/2-(cfg.w||760)/2)}px;top:${cfg.y||(desk.offsetHeight/2-(cfg.h||520)/2)}px;z-index:${++zTop}`;
    el.innerHTML=`
      <div class="win-tb" data-winid="${id}">
        <div class="tls">
          <div class="tl tl-r" onclick="WM.close('${id}')"></div>
          <div class="tl tl-y" onclick="WM.minimize('${id}')"></div>
          <div class="tl tl-g" onclick="WM.maximize('${id}')"></div>
        </div>
        <div class="win-title">${cfg.title}</div>
        <div class="win-controls">
          <button class="wc-btn" onclick="WM.close('${id}')" title="Close">✕</button>
        </div>
      </div>
      <div class="win-body" id="wbody-${id}">${cfg.content}</div>
      <div class="win-resize" data-winid="${id}"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M8 2L2 8M8 5L5 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg></div>`;
    desk.appendChild(el);
    this.wins[id]={el,cfg,min:false};
    this._draggable(el);
    this._resizable(el);
    this._focus(el);
    // hover for cursor
    [el.querySelectorAll('.tl'),el.querySelectorAll('.wc-btn')].forEach(nl=>nl.forEach(addHov));
    setTimeout(()=>el.classList.remove('opening'),350);
    return el;
  },
  close(id){
    const w=this.wins[id];if(!w)return;
    w.el.classList.add('closing');
    setTimeout(()=>{w.el.remove();delete this.wins[id];},250);
    // update dock active
    const dockId='dock-'+id.split('-')[0];
    const di=document.getElementById(dockId);
    if(di&&!Object.keys(this.wins).some(k=>k.startsWith(id.split('-')[0]))){di.classList.remove('active');}
  },
  minimize(id){
    const w=this.wins[id];if(!w)return;
    w.el.classList.add('minimizing');
    w.min=true;
    setTimeout(()=>{w.el.style.display='none';w.el.classList.remove('minimizing');},300);
  },
  restore(id){
    const w=this.wins[id];if(!w)return;
    w.el.style.display='flex';w.min=false;
    w.el.classList.add('opening');
    setTimeout(()=>w.el.classList.remove('opening'),350);
    this._focus(w.el);
  },
  maximize(id){
    const w=this.wins[id];if(!w)return;
    const el=w.el;
    if(w.maxed){
      el.style.left=w.prevRect.l;el.style.top=w.prevRect.t;
      el.style.width=w.prevRect.w;el.style.height=w.prevRect.h;
      w.maxed=false;
    }else{
      w.prevRect={l:el.style.left,t:el.style.top,w:el.style.width,h:el.style.height};
      el.style.left='0';el.style.top='0';
      el.style.width='100%';el.style.height='100%';
      el.style.borderRadius='0';
      w.maxed=true;
    }
  },
  _focus(el){
    document.querySelectorAll('.win').forEach(w=>w.classList.remove('focused'));
    el.classList.add('focused');
    el.style.zIndex=++zTop;
  },
  _draggable(el){
    const tb=el.querySelector('.win-tb');
    let ox,oy,dragging=false;
    tb.addEventListener('mousedown',e=>{
      if(e.target.closest('.tls,.win-controls'))return;
      dragging=true;ox=e.clientX-el.offsetLeft;oy=e.clientY-el.offsetTop;
      tb.classList.add('dragging');
      this._focus(el);
    });
    document.addEventListener('mousemove',e=>{
      if(!dragging)return;
      const desk=document.getElementById('desktop');
      let nx=e.clientX-ox,ny=e.clientY-oy;
      nx=Math.max(-el.offsetWidth+80,Math.min(desk.offsetWidth-80,nx));
      ny=Math.max(0,Math.min(desk.offsetHeight-40,ny));
      el.style.left=nx+'px';el.style.top=ny+'px';
    });
    document.addEventListener('mouseup',()=>{dragging=false;tb.classList.remove('dragging');});
    el.addEventListener('mousedown',()=>this._focus(el));
  },
  _resizable(el){
    const rh=el.querySelector('.win-resize');
    let rz=false,ox,oy,ow,oh;
    rh.addEventListener('mousedown',e=>{
      rz=true;ox=e.clientX;oy=e.clientY;ow=el.offsetWidth;oh=el.offsetHeight;e.stopPropagation();
    });
    document.addEventListener('mousemove',e=>{
      if(!rz)return;
      const nw=Math.max(el.style.minWidth||420,ow+(e.clientX-ox));
      const nh=Math.max(el.style.minHeight||280,oh+(e.clientY-oy));
      el.style.width=nw+'px';el.style.height=nh+'px';
    });
    document.addEventListener('mouseup',()=>{rz=false;});
  }
};

/* ══════════════════════════════════════════
   APP MANAGER
══════════════════════════════════════════ */
const AppMgr={
  counters:{},
  open(type,opts={}){
    this.counters[type]=(this.counters[type]||0)+1;
    const id=type+'-'+this.counters[type];
    const dockEl=document.getElementById('dock-'+type);
    if(dockEl){dockEl.classList.add('active');dockEl.classList.add('di-bounce');setTimeout(()=>dockEl.classList.remove('di-bounce'),600);}
    // update menubar app name
    document.getElementById('mb-app-name').textContent=type.charAt(0).toUpperCase()+type.slice(1);
    switch(type){
      case 'home':    this._openHome(id,opts);break;
      case 'browser': this._openBrowser(id,opts);break;
      case 'games':   this._openGames(id,opts);break;
      case 'settings':this._openSettings(id,opts);break;
      case 'terminal':this._openTerminal(id,opts);break;
    }
    return id;
  },
  _openHome(id,opts){
    WM.create(id,{title:'atom — Home',w:720,h:560,content:this._homeContent()});
    this._initHome(id,opts);
  },
  _homeContent(){
    return `<div class="home-inner">
      <div class="home-hero">
        <span class="home-wordmark">atom</span>
        <div style="display:flex;justify-content:center;margin-top:10px"><div class="home-badge"><div class="badge-dot"></div>v2.0 · secure · proxy active</div></div>
      </div>
      <div class="home-div"></div>
      <div id="home-tw"></div>
      <div class="search-wrap"><div class="sfield">
        <div class="sico"><svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/><line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <input class="home-search-inp" type="text" placeholder="search or paste a url…" autocomplete="off" spellcheck="false">
        <button class="sbtn home-go-btn">Go</button>
      </div></div>
      <div class="sec-label">Quick Launch</div>
      <div class="quick-tiles" id="home-tiles"></div>
      <div class="strip-row"><div class="sec-label" style="margin:0">Games</div><div class="strip-more" id="home-games-more">See all →</div></div>
      <div class="hgstrip" id="home-strip"></div>
    </div>`;
  },
  _initHome(winId,opts){
    const wb=document.getElementById('wbody-'+winId);
    // typewriter
    const tw=wb.querySelector('#home-tw');
    const phrases=["teacher detection: elevated · care level: zero","proxy shields at 100% · grades at 12%","currently disguised as a google doc","nasa called, they want their firewall back","quantum tunneling through the content filter","bro the teacher is literally right behind you","this definitely counts as computer science class","E = mc² · you just escaped the school Wi-Fi","speed of block bypass: faster than light","loading educational content… jk lol"];
    let pi=0,ci=0,er=false;
    function type(){const c=phrases[pi];if(!er){tw.textContent=c.substring(0,ci++);if(ci>c.length){er=true;setTimeout(type,2800);}else setTimeout(type,38);}else{tw.textContent=c.substring(0,ci--);if(ci<0){er=false;pi=(pi+1)%phrases.length;setTimeout(type,240);}else setTimeout(type,12);}}
    type();
    // search
    const inp=wb.querySelector('.home-search-inp');
    const goBtn=wb.querySelector('.home-go-btn');
    const doSearch=v=>{if(!v.trim())return;const u=v.includes('.')&&!v.includes(' ')?(v.startsWith('http')?v:'https://'+v):'https://search.brave.com/search?q='+encodeURIComponent(v);Loader.launch(u);};
    inp.addEventListener('keydown',e=>{if(e.key==='Enter')doSearch(inp.value);});
    goBtn.addEventListener('click',()=>doSearch(inp.value));
    addHov(goBtn);addTextHov(inp);
    // tiles
    const tilesEl=wb.querySelector('#home-tiles');
    TILES.forEach(t=>{
      const el=document.createElement('div');el.className='qtile';
      el.innerHTML=`<div>${t.svg}</div><span class="qtile-label">${t.n}</span>`;
      el.addEventListener('click',()=>Loader.launch(t.u));
      addHov(el);tilesEl.appendChild(el);
    });
    // games strip
    const strip=wb.querySelector('#home-strip');
    GAMES.slice(0,8).forEach(g=>{
      const el=mkGameCard(g,true);
      el.addEventListener('click',()=>{AppMgr.open('browser',{url:g.u});});
      strip.appendChild(el);
    });
    // see all
    wb.querySelector('#home-games-more').addEventListener('click',()=>AppMgr.open('games'));
  },
  _openBrowser(id,opts){
    const win=WM.create(id,{title:'Browser',w:880,h:580,content:this._browserContent(id)});
    this._initBrowser(id,opts);
  },
  _browserContent(id){
    return `<div class="browser-chrome">
      <button class="nav-btn" data-action="back"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M8 2L3 6L8 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button class="nav-btn" data-action="fwd"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M4 2L9 6L4 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button class="nav-btn" data-action="reload"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6A4 4 0 0 1 10 3.5M10 2v2H8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="url-bar-wrap">
        <div class="url-lock"><svg width="9" height="10" viewBox="0 0 10 12" fill="none"><rect x="1.5" y="5.5" width="7" height="6.5" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M3.2 5.5V3.8a1.8 1.8 0 0 1 3.6 0v1.7" stroke="currentColor" stroke-width="1.3"/></svg></div>
        <input class="url-input" type="text" placeholder="enter url or search…" autocomplete="off" spellcheck="false">
        <button class="url-go">Go</button>
      </div>
    </div>
    <div class="browser-tabs">
      <div class="btab active" data-tab="0"><span class="btab-title">New Tab</span><span class="btab-close">✕</span></div>
      <button class="btab-new">+</button>
    </div>
    <div class="browser-viewport">
      <div class="browser-empty">
        <div class="be-icon"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.2"/><ellipse cx="10" cy="10" rx="3.5" ry="8" stroke="currentColor" stroke-width="1.1"/><line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" stroke-width="1.1"/></svg></div>
        <div class="be-text">atom browser</div>
        <div class="be-hint">proxy ready · enter url above</div>
      </div>
      <div class="newtab" id="newtab-${id}">
        <div class="newtab-time" id="nttime-${id}">--:--</div>
        <div class="newtab-date" id="ntdate-${id}"></div>
        <div class="newtab-search">
          <input class="newtab-input" type="text" placeholder="search or enter a url…" autocomplete="off" spellcheck="false">
          <button class="newtab-go">Go</button>
        </div>
      </div>
      <iframe class="browser-frame" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals" allowfullscreen></iframe>
    </div>`;
  },
  _initBrowser(id,opts){
    const wb=document.getElementById('wbody-'+id);
    const frame=wb.querySelector('.browser-frame');
    const empty=wb.querySelector('.browser-empty');
    const newtab=wb.querySelector('.newtab');
    const urlInput=wb.querySelector('.url-input');
    // newtab clock
    function ntClock(){
      const n=new Date();
      wb.querySelector(`#nttime-${id}`).textContent=n.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      wb.querySelector(`#ntdate-${id}`).textContent=n.toLocaleDateString([],{weekday:'long',month:'long',day:'numeric'});
    }
    ntClock();setInterval(ntClock,1000);
    const load=u=>{
      urlInput.value=u;empty.style.display='none';newtab.style.display='none';frame.style.display='block';
      try{frame.src=__uv$config.prefix+__uv$config.encodeUrl(u);}catch(e){frame.src=u;}
    };
    const go=v=>{if(!v.trim())return;const u=v.includes('.')&&!v.includes(' ')?(v.startsWith('http')?v:'https://'+v):'https://search.brave.com/search?q='+encodeURIComponent(v);load(u);};
    // chrome btns
    wb.querySelector('.url-go').addEventListener('click',()=>go(urlInput.value));
    urlInput.addEventListener('keydown',e=>{if(e.key==='Enter')go(urlInput.value);});
    wb.querySelectorAll('.nav-btn').forEach(b=>b.addEventListener('click',()=>{
      const a=b.dataset.action;
      try{if(a==='back')frame.contentWindow.history.back();else if(a==='fwd')frame.contentWindow.history.forward();else frame.contentWindow.location.reload();}catch(e){}
    }));
    // newtab search
    const ntInput=wb.querySelector('.newtab-input');
    wb.querySelector('.newtab-go').addEventListener('click',()=>go(ntInput.value));
    ntInput.addEventListener('keydown',e=>{if(e.key==='Enter')go(ntInput.value);});
    addTextHov(urlInput);addTextHov(ntInput);
    // external url
    if(opts.url)load(opts.url);
    wb._load=load;
  },
  _openGames(id,opts){
    WM.create(id,{title:'Games',w:700,h:520,content:'<div class="games-inner"><div class="games-hdr"><div class="games-title-txt">HTML5 Games</div><div class="games-count">'+GAMES.length+' titles</div></div><div class="gg" id="gg-'+id+'"></div></div>'});
    const gg=document.getElementById('gg-'+id);
    GAMES.forEach(g=>{
      const el=mkGameCard(g,false);
      el.addEventListener('click',()=>{const bid=AppMgr.open('browser',{url:g.u});});
      gg.appendChild(el);
      addHov(el);
    });
  },
  _openSettings(id,opts){
    WM.create(id,{title:'Settings',w:600,h:480,content:this._settingsContent()});
    this._initSettings(id);
  },
  _settingsContent(){
    return `<div class="settings-inner">
      <div class="settings-sidebar">
        <div class="s-item active" data-sec="proxy">
          <div class="s-item-icon" style="background:rgba(91,156,246,.12)"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="rgba(91,156,246,.7)" stroke-width="1.2"/><ellipse cx="8" cy="8" rx="2.5" ry="6" stroke="rgba(91,156,246,.5)" stroke-width="1.1"/><line x1="2" y1="8" x2="14" y2="8" stroke="rgba(91,156,246,.5)" stroke-width="1.1"/></svg></div>
          Proxy
        </div>
        <div class="s-item" data-sec="appearance">
          <div class="s-item-icon" style="background:rgba(180,130,246,.1)"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="rgba(180,130,246,.6)" stroke-width="1.2"/><circle cx="8" cy="8" r="2" fill="rgba(180,130,246,.5)"/></svg></div>
          Appearance
        </div>
        <div class="s-item" data-sec="about">
          <div class="s-item-icon" style="background:rgba(74,222,128,.08)"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="rgba(74,222,128,.5)" stroke-width="1.2"/><line x1="8" y1="6" x2="8" y2="10" stroke="rgba(74,222,128,.5)" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="4.5" r=".7" fill="rgba(74,222,128,.5)"/></svg></div>
          About
        </div>
      </div>
      <div class="settings-content" id="s-content">
        <div id="s-sec-proxy">
          <div class="s-section">
            <div class="s-section-title">Proxy Server</div>
            <div class="s-card">
              <div class="s-row"><span class="s-row-label">Bare Server</span><span class="s-row-value" style="font-size:9.5px">atomserver-production-a861.up.railway.app</span></div>
              <div class="s-row"><span class="s-row-label">Prefix</span><span class="s-row-value">/tiw/~/</span></div>
              <div class="s-row"><span class="s-row-label">Encoding</span><span class="s-row-value">XOR</span></div>
              <div class="s-row"><span class="s-row-label">Status</span><span class="s-badge">Active</span></div>
            </div>
          </div>
          <div class="s-section">
            <div class="s-section-title">Service Worker</div>
            <div class="s-card">
              <div class="s-row"><span class="s-row-label">UV Service Worker</span><div class="s-toggle on" id="st-sw"></div></div>
              <div class="s-row"><span class="s-row-label">Cookie Passthrough</span><div class="s-toggle on"></div></div>
            </div>
          </div>
        </div>
        <div id="s-sec-appearance" style="display:none">
          <div class="s-section">
            <div class="s-section-title">Display</div>
            <div class="s-card">
              <div class="s-row"><span class="s-row-label">Theme</span><span class="s-row-value">space dark</span></div>
              <div class="s-row"><span class="s-row-label">Reduce Motion</span><div class="s-toggle"></div></div>
              <div class="s-row"><span class="s-row-label">Translucency</span><div class="s-toggle on"></div></div>
            </div>
          </div>
        </div>
        <div id="s-sec-about" style="display:none">
          <div class="s-section">
            <div class="s-section-title">atom OS</div>
            <div class="s-card">
              <div class="s-row"><span class="s-row-label">Version</span><span class="s-row-value">2.0.0</span></div>
              <div class="s-row"><span class="s-row-label">Ultraviolet</span><span class="s-row-value">latest</span></div>
              <div class="s-row"><span class="s-row-label">Bare Server</span><span class="s-badge">Connected</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },
  _initSettings(id){
    const wb=document.getElementById('wbody-'+id);
    wb.querySelectorAll('.s-item').forEach(item=>{
      addHov(item);
      item.addEventListener('click',()=>{
        wb.querySelectorAll('.s-item').forEach(i=>i.classList.remove('active'));
        item.classList.add('active');
        const sec=item.dataset.sec;
        wb.querySelectorAll('[id^="s-sec-"]').forEach(s=>s.style.display='none');
        wb.querySelector('#s-sec-'+sec).style.display='block';
      });
    });
    wb.querySelectorAll('.s-toggle').forEach(t=>{t.addEventListener('click',()=>t.classList.toggle('on'));addHov(t);});
  },
  _openTerminal(id,opts){
    WM.create(id,{title:'Terminal — atom@os',w:660,h:420,content:this._termContent(id)});
    this._initTerm(id);
  },
  _termContent(id){
    return `<div class="term-body" id="term-body-${id}">
      <div class="term-line"><span class="term-prompt">atom@os:~$</span><span class="term-cmd">neofetch</span></div>
      <div class="term-line"><span class="term-out">         ⬡ atom OS v2.0</span></div>
      <div class="term-line"><span class="term-out">         kernel: ultraviolet</span></div>
      <div class="term-line"><span class="term-out">         proxy: active (xor/bare)</span></div>
      <div class="term-line"><span class="term-out">         shell: atom/zsh</span></div>
      <div class="term-line"><span class="term-out">         uptime: just launched</span></div>
      <div class="term-line" style="margin-top:6px"><span class="term-prompt">atom@os:~$</span><span class="term-out" style="color:rgba(91,156,246,.6)"> type "help" for commands</span></div>
      <div class="term-line"><span class="term-prompt">atom@os:~$</span><span class="term-cmd"> _</span></div>
    </div>
    <div class="term-input-row">
      <span class="term-input-prompt">atom@os:~$</span>
      <input class="term-input" id="term-inp-${id}" type="text" placeholder="enter command…" autocomplete="off" spellcheck="false">
    </div>`;
  },
  _initTerm(id){
    const wb=document.getElementById('wbody-'+id);
    const body=wb.querySelector('#term-body-'+id);
    const inp=wb.querySelector('#term-inp-'+id);
    addTextHov(inp);
    const cmds={
      help:`Available commands:\n  open [app]  – open home, browser, games, settings\n  clear       – clear terminal\n  proxy       – show proxy status\n  date        – current date\n  ls          – list apps`,
      clear:'__CLEAR__',
      proxy:`Proxy Status\n  server: atomserver-production-a861.up.railway.app\n  prefix: /tiw/~/\n  codec:  XOR\n  status: ● active`,
      date:new Date().toString(),
      ls:`apps:\n  home\n  browser\n  games\n  settings\n  terminal`,
      open:'__OPEN__',
    };
    function print(txt,isCmd=false){
      const lines=txt.split('\n');
      lines.forEach(l=>{
        const d=document.createElement('div');d.className='term-line';
        d.innerHTML=`<span class="${isCmd?'term-cmd':'term-out'}">${l}</span>`;
        body.appendChild(d);
      });
      body.scrollTop=body.scrollHeight;
    }
    inp.addEventListener('keydown',e=>{
      if(e.key!=='Enter')return;
      const v=inp.value.trim();inp.value='';
      if(!v)return;
      const d=document.createElement('div');d.className='term-line';
      d.innerHTML=`<span class="term-prompt">atom@os:~$</span><span class="term-cmd"> ${v}</span>`;
      body.appendChild(d);
      const parts=v.split(' ');
      const cmd=parts[0].toLowerCase();
      if(cmd==='clear'){body.innerHTML='';return;}
      if(cmd==='open'&&parts[1]){AppMgr.open(parts[1]);print(`opening ${parts[1]}…`);return;}
      const out=cmds[cmd];
      if(out){print(out);}
      else{print(`command not found: ${cmd}\ntype "help" for available commands`);}
      body.scrollTop=body.scrollHeight;
    });
    inp.focus();
  }
};

/* ══════════════════════════════════════════
   GAME CARD FACTORY
══════════════════════════════════════════ */
function mkGameCard(g,small){
  const el=document.createElement('div');
  el.className=small?'hgc':'gc';
  el.innerHTML=`<div class="${small?'gthumb':'gc-thumb'}" style="background:${g.bg}">${g.svg}</div><div class="${small?'ginfo':'gc-info'}"><div class="${small?'gname':'gc-name'}">${g.n}</div><div class="${small?'gtag':'gc-tag'}">${g.t}</div></div>`;
  return el;
}

/* ══════════════════════════════════════════
   LOADER / PROXY LAUNCH
══════════════════════════════════════════ */
const Loader={
  timer:null,
  SEQS:[
    ['routing signal','bypassing filter','tunneling through','signal locked','launching'],
    ['warping spacetime','entering orbit','touchdown','signal clean','you\'re in'],
    ['shredding firewall','encrypting path','bouncing x7 nodes','trace zeroed','clear'],
    ['converting homework to bandwidth','teacher bamboozled','escape velocity reached','bypassed','FREEDOM'],
    ['bribing the router','looking academic','calculating yeet trajectory','firewall: rip','let\'s go'],
  ],
  launch(u){
    const seq=this.SEQS[Math.random()*this.SEQS.length|0];
    const ldEl=document.getElementById('loader');
    const sub=document.getElementById('ld-sub');
    const status=document.getElementById('ld-status');
    const bar=document.getElementById('ld-bar');
    ldEl.classList.add('vis');bar.style.width='0%';sub.textContent=seq[0];
    let step=0;
    const pcts=[6,24,48,72,90,100];
    const delays=[180,380,480,540,420,260];
    const next=()=>{
      bar.style.width=pcts[step]+'%';
      status.textContent=seq[Math.min(step,seq.length-1)];step++;
      if(step<pcts.length)this.timer=setTimeout(next,delays[step-1]);
      else this.timer=setTimeout(()=>this.navigate(u),240);
    };
    this.timer=setTimeout(next,delays[0]);
  },
  navigate(u){
    let n=0;const go=()=>{
      if(swReady||n++>40){
        try{window.location.href=__uv$config.prefix+__uv$config.encodeUrl(u);}
        catch(e){window.location.href=u;}
      }else setTimeout(go,100);
    };go();
  }
};
document.getElementById('ld-cancel').addEventListener('click',()=>{
  clearTimeout(Loader.timer);
  document.getElementById('loader').classList.remove('vis');
  document.getElementById('ld-bar').style.width='0%';
});

/* ══════════════════════════════════════════
   SERVICE WORKER
══════════════════════════════════════════ */
let swReady=false;
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/uv/uv.sw.js',{scope:'/'})
    .then(r=>{
      if(r.active){swReady=true;return;}
      const s=r.installing||r.waiting;
      if(s)s.addEventListener('statechange',()=>{if(s.state==='activated'){swReady=true;Notify.show('atom OS','Proxy service worker ready.','rgba(74,222,128,.15)','<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8L7 12L13 4" stroke="rgba(74,222,128,.8)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>');}});
    }).catch(e=>{swReady=true;console.warn('SW reg failed:',e);});
}else swReady=true;

/* ══════════════════════════════════════════
   MENUBAR MENUS (simple)
══════════════════════════════════════════ */
const MB={
  file(){Notify.show('File','New browser window opened.');AppMgr.open('browser');},
  view(){Notify.show('View','All windows visible.');},
  go(){AppMgr.open('home');}
};

/* ══════════════════════════════════════════
   DOCK MAGNIFICATION
══════════════════════════════════════════ */
document.querySelectorAll('.di').forEach((di,i,arr)=>{
  di.addEventListener('mouseenter',()=>{
    const prev=arr[i-1],next=arr[i+1];
    if(prev&&!prev.classList.contains('dock-sep'))prev.classList.add('neighbor');
    if(next&&!next.classList.contains('dock-sep'))next.classList.add('neighbor');
  });
  di.addEventListener('mouseleave',()=>{
    arr.forEach(d=>d.classList.remove('neighbor'));
  });
  addHov(di);
});

/* ══════════════════════════════════════════
   BOOT — open home on start
══════════════════════════════════════════ */
setTimeout(()=>{
  AppMgr.open('home');
  setTimeout(()=>Notify.show('atom OS','Welcome back. Proxy is active.','rgba(91,156,246,.15)'),800);
},200);
</script>
</body>
</html>
