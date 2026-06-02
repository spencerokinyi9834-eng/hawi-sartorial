<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="Premium corporate wear, school uniforms, workwear and custom tailoring in Nairobi, Kenya. Hawi Sartorial Ltd — Fashion Meets Elegance."/>
<meta name="theme-color" content="#161616"/>
<title>Hawi Sartorial Ltd | Corporate Wear, School Uniforms & Workwear in Kenya</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --gold:#B8960C;--gold-light:#D4AF37;
  --dark:#0D0D0D;--dark-2:#161616;--dark-3:#1E1E1E;--dark-4:#2A2A2A;
  --text:#F5F0E8;--text-muted:#9A9A8A;
  --serif:'Cormorant Garamond',serif;--sans:'Inter',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--dark);color:var(--text);font-family:var(--sans);font-size:16px;line-height:1.7;overflow-x:hidden}

/* ── NAV ── */
nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:1rem 4rem;background:rgba(13,13,13,0.95);backdrop-filter:blur(14px);border-bottom:.5px solid rgba(184,150,12,.2);transition:padding .3s}
nav.scrolled{padding:.7rem 4rem}
.nav-logo{display:flex;align-items:center;gap:.7rem;text-decoration:none}
.nav-logo-text{font-family:var(--serif);font-size:1.2rem;font-weight:600;color:var(--text);letter-spacing:.05em;line-height:1.1}
.nav-logo-text small{color:var(--gold-light);display:block;font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;font-weight:300}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{color:var(--text-muted);text-decoration:none;font-size:.82rem;letter-spacing:.09em;text-transform:uppercase;transition:color .3s}
.nav-links a:hover{color:var(--gold-light)}
.nav-cta{background:var(--gold);color:var(--dark);padding:.5rem 1.4rem;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;font-weight:500;border:none;cursor:pointer;transition:background .3s;font-family:var(--sans)}
.nav-cta:hover{background:var(--gold-light)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px}
.hamburger span{display:block;width:24px;height:2px;background:var(--text);transition:.3s}
.mobile-menu{display:none;position:fixed;top:60px;left:0;right:0;background:rgba(13,13,13,.98);padding:2rem;z-index:199;flex-direction:column;gap:1.2rem;border-bottom:.5px solid rgba(184,150,12,.2)}
.mobile-menu.open{display:flex}
.mobile-menu a{color:var(--text-muted);text-decoration:none;font-size:1rem;letter-spacing:.1em;text-transform:uppercase;transition:color .3s;padding:.5rem 0;border-bottom:.5px solid rgba(255,255,255,.05)}
.mobile-menu a:hover{color:var(--gold-light)}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:7rem 2rem 4rem;background:var(--dark);position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 45%,rgba(184,150,12,.07) 0%,transparent 70%)}
.hero-lines{position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,rgba(184,150,12,.035) 0,rgba(184,150,12,.035) 1px,transparent 1px,transparent 80px);pointer-events:none}
.hero-content{position:relative;max-width:820px}
.hero-tag{display:inline-block;border:.5px solid rgba(184,150,12,.5);color:var(--gold-light);font-size:.73rem;letter-spacing:.22em;text-transform:uppercase;padding:.4rem 1.2rem;margin-bottom:1.8rem}
.hero h1{font-family:var(--serif);font-size:clamp(3rem,7vw,5.5rem);font-weight:300;line-height:1.1;letter-spacing:.02em;margin-bottom:1.4rem}
.hero h1 em{color:var(--gold-light);font-style:italic}
.hero p{color:var(--text-muted);font-size:1.05rem;max-width:520px;margin:0 auto 2.5rem;line-height:1.9}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn-primary{background:var(--gold);color:var(--dark);padding:.82rem 2rem;font-size:.84rem;letter-spacing:.1em;text-transform:uppercase;font-weight:500;border:none;cursor:pointer;transition:all .3s;font-family:var(--sans);text-decoration:none;display:inline-block}
.btn-primary:hover{background:var(--gold-light)}
.btn-outline{background:transparent;color:var(--text);padding:.82rem 2rem;font-size:.84rem;letter-spacing:.1em;text-transform:uppercase;font-weight:400;border:.5px solid rgba(245,240,232,.3);cursor:pointer;transition:all .3s;font-family:var(--sans);text-decoration:none;display:inline-block}
.btn-outline:hover{border-color:var(--gold-light);color:var(--gold-light)}
.hero-divider{width:60px;height:1px;background:var(--gold);margin:3rem auto 0}

/* ── STATS ── */
.stats{background:var(--dark-2);padding:3rem 4rem;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;border-top:.5px solid rgba(184,150,12,.2);border-bottom:.5px solid rgba(184,150,12,.2)}
.stat{text-align:center;padding:1.5rem}
.stat-num{font-family:var(--serif);font-size:2.8rem;font-weight:600;color:var(--gold-light);line-height:1}
.stat-label{font-size:.77rem;letter-spacing:.13em;text-transform:uppercase;color:var(--text-muted);margin-top:.4rem}

/* ── SECTION COMMONS ── */
.section{padding:6rem 4rem;max-width:1200px;margin:0 auto}
.section-tag{font-size:.72rem;letter-spacing:.26em;text-transform:uppercase;color:var(--gold);margin-bottom:.9rem}
.section-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3rem);font-weight:300;line-height:1.2;margin-bottom:1.5rem}
.gold-line{width:40px;height:1px;background:var(--gold);margin:1.5rem 0}

/* ── ABOUT ── */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-text p{color:var(--text-muted);margin-bottom:1.2rem;line-height:1.9}
.about-box{border:.5px solid rgba(184,150,12,.3);padding:3rem;text-align:center;position:relative}
.about-box::before{content:'';position:absolute;top:-1px;left:20%;width:60%;height:1px;background:var(--gold)}
.about-box-num{font-family:var(--serif);font-size:5rem;font-weight:300;color:rgba(184,150,12,.13);line-height:1}
.about-box-text{font-family:var(--serif);font-size:1.3rem;color:var(--text);font-style:italic}

/* ── SERVICES ── */
.services-section{background:var(--dark-2);padding:6rem 0}
.services-inner{max-width:1200px;margin:0 auto;padding:0 4rem}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:3rem;border:.5px solid rgba(184,150,12,.1)}
.service-card{background:var(--dark-2);padding:2.5rem;border:.5px solid rgba(184,150,12,.1);position:relative;overflow:hidden;transition:background .4s}
.service-card:hover{background:var(--dark-3)}
.service-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .4s}
.service-card:hover::after{transform:scaleX(1)}
.service-num{font-family:var(--serif);font-size:3.5rem;font-weight:300;color:rgba(184,150,12,.11);line-height:1;margin-bottom:1rem}
.service-name{font-family:var(--serif);font-size:1.5rem;font-weight:400;margin-bottom:.8rem}
.service-desc{font-size:.9rem;color:var(--text-muted);line-height:1.8}
.service-items{margin-top:1.2rem;display:flex;flex-wrap:wrap;gap:.5rem}
.service-item{font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);border:.5px solid rgba(184,150,12,.3);padding:.25rem .7rem}

/* ── WHY ── */
.why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;margin-top:3rem}
.why-card{background:var(--dark-3);padding:2rem;border-left:2px solid var(--gold);transition:background .3s}
.why-card:hover{background:var(--dark-4)}
.why-title{font-family:var(--serif);font-size:1.2rem;margin-bottom:.5rem}
.why-desc{font-size:.88rem;color:var(--text-muted);line-height:1.8}

/* ── PROCESS ── */
.process-section{background:var(--dark-2);padding:6rem 0}
.process-inner{max-width:1200px;margin:0 auto;padding:0 4rem}
.process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:3rem;position:relative}
.process-steps::before{content:'';position:absolute;top:1.5rem;left:10%;right:10%;height:.5px;background:rgba(184,150,12,.3)}
.process-step{text-align:center;padding:0 1rem;position:relative}
.step-circle{width:3rem;height:3rem;border:.5px solid var(--gold);display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem;font-family:var(--serif);font-size:1.1rem;color:var(--gold-light);background:var(--dark-2);position:relative;z-index:1}
.step-title{font-family:var(--serif);font-size:1.05rem;margin-bottom:.5rem}
.step-desc{font-size:.82rem;color:var(--text-muted);line-height:1.7}

/* ── PORTFOLIO ── */
.portfolio-section{background:var(--dark);padding:6rem 0}
.portfolio-inner{max-width:1200px;margin:0 auto;padding:0 4rem}
.portfolio-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:3px;margin-top:3rem}
.portfolio-item{position:relative;overflow:hidden;aspect-ratio:4/3;cursor:pointer;background:var(--dark-3)}
.portfolio-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease,filter .4s;filter:brightness(.88)}
.portfolio-item:hover img{transform:scale(1.06);filter:brightness(1)}
.portfolio-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(13,13,13,.85) 0%,rgba(13,13,13,.1) 60%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;opacity:0;transition:opacity .4s}
.portfolio-item:hover .portfolio-overlay{opacity:1}
.portfolio-badge{display:inline-block;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--dark);background:var(--gold);padding:.3rem .8rem;margin-bottom:.6rem;width:fit-content}
.portfolio-label{font-family:var(--serif);font-size:1.4rem;color:var(--text)}
.portfolio-sublabel{font-size:.78rem;color:var(--text-muted);margin-top:.3rem}
/* placeholder colour panels when images not found */
.portfolio-item:nth-child(1) .portfolio-bg{background:linear-gradient(135deg,#2a1f00,#5a3d00)}
.portfolio-item:nth-child(2) .portfolio-bg{background:linear-gradient(135deg,#0d0d0d,#2a2a2a)}
.portfolio-item:nth-child(3) .portfolio-bg{background:linear-gradient(135deg,#1a0d2e,#3d1a5a)}
.portfolio-item:nth-child(4) .portfolio-bg{background:linear-gradient(135deg,#1a0d00,#3d2000)}
.portfolio-bg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.portfolio-bg-text{font-family:var(--serif);font-size:4rem;font-weight:300;color:rgba(212,175,55,.15)}

/* ── LIGHTBOX ── */
#lightbox{display:none;position:fixed;inset:0;z-index:999;background:rgba(0,0,0,.96);align-items:center;justify-content:center}
#lightbox.open{display:flex}
.lb-close{position:absolute;top:1.5rem;right:2rem;font-size:2rem;color:var(--text-muted);cursor:pointer;transition:color .3s;background:none;border:none;font-family:var(--sans)}
.lb-close:hover{color:var(--gold-light)}
.lb-img{max-width:85vw;max-height:85vh;object-fit:contain;display:block}
.lb-cap{text-align:center;margin-top:1rem;font-family:var(--serif);font-size:1.1rem;color:var(--gold-light);letter-spacing:.1em}
.lb-nav{position:absolute;top:50%;transform:translateY(-50%);background:none;border:.5px solid rgba(184,150,12,.4);color:var(--gold-light);font-size:1.5rem;width:3rem;height:3rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s}
.lb-nav:hover{background:var(--gold);color:var(--dark)}
#lb-prev{left:1.5rem}
#lb-next{right:1.5rem}

/* ── TESTIMONIALS ── */
.testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.testimonial{background:var(--dark-3);padding:2rem;border-top:1px solid var(--gold)}
.testimonial-quote{font-family:var(--serif);font-size:2.5rem;color:rgba(184,150,12,.3);line-height:1;margin-bottom:.4rem}
.testimonial-text{font-size:.92rem;color:var(--text-muted);line-height:1.9;font-style:italic;margin-bottom:1.4rem}
.testimonial-author{font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)}
.testimonial-role{font-size:.78rem;color:var(--text-muted);margin-top:.2rem}

/* ── CONTACT ── */
.contact-section{background:var(--dark-2);padding:6rem 0}
.contact-inner{max-width:1200px;margin:0 auto;padding:0 4rem}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;margin-top:3rem}
.contact-info p{color:var(--text-muted);line-height:1.9;margin-bottom:2rem}
.contact-detail{display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.2rem}
.contact-detail-icon{color:var(--gold);font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;min-width:80px;padding-top:2px}
.contact-detail-val{color:var(--text-muted);font-size:.92rem}
.contact-detail-val a{color:var(--text-muted);text-decoration:none;transition:color .3s}
.contact-detail-val a:hover{color:var(--gold-light)}
.contact-form{display:flex;flex-direction:column;gap:1rem}
.form-group{display:flex;flex-direction:column;gap:.4rem}
.form-group label{font-size:.73rem;letter-spacing:.13em;text-transform:uppercase;color:var(--text-muted)}
.form-group input,.form-group textarea,.form-group select{background:var(--dark-4);border:.5px solid rgba(245,240,232,.12);color:var(--text);padding:.75rem 1rem;font-family:var(--sans);font-size:.9rem;outline:none;transition:border-color .3s;width:100%;-webkit-appearance:none}
.form-group input:focus,.form-group textarea:focus,.form-group select:focus{border-color:var(--gold)}
.form-group textarea{resize:vertical;min-height:100px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
#form-fb{display:none;font-size:.82rem;margin-top:.4rem;text-align:center;letter-spacing:.05em}

/* ── FOOTER ── */
footer{background:var(--dark);border-top:.5px solid rgba(184,150,12,.2);padding:3rem 4rem;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap}
.footer-logo{display:flex;align-items:center;gap:.7rem}
.footer-logo-text{font-family:var(--serif);font-size:1.1rem;color:var(--text)}
.footer-logo-text span{color:var(--gold-light)}
.footer-logo-sub{font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text-muted)}
.footer-copy{font-size:.78rem;color:var(--text-muted)}
.footer-links{display:flex;gap:1.5rem;flex-wrap:wrap}
.footer-links a{font-size:.76rem;color:var(--text-muted);text-decoration:none;letter-spacing:.09em;text-transform:uppercase;transition:color .3s}
.footer-links a:hover{color:var(--gold-light)}

/* ── FLOATING BUTTONS ── */
.fab-group{position:fixed;bottom:2rem;right:2rem;display:flex;flex-direction:column;gap:.8rem;z-index:300}
.fab-wa{width:54px;height:54px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;cursor:pointer;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,.35);transition:transform .3s,box-shadow .3s}
.fab-wa:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(37,211,102,.5)}
.fab-top{width:46px;height:46px;border-radius:50%;background:var(--dark-3);border:.5px solid rgba(184,150,12,.4);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--gold-light);font-size:1.1rem;opacity:0;pointer-events:none;transition:opacity .4s,transform .3s,background .3s}
.fab-top.visible{opacity:1;pointer-events:all}
.fab-top:hover{background:var(--dark-4);transform:translateY(-2px)}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  nav{padding:1rem 1.5rem}
  .nav-links,.nav-cta{display:none}
  .hamburger{display:flex}
  .stats{grid-template-columns:repeat(2,1fr);padding:2rem 1.5rem}
  .section,.services-inner,.process-inner,.portfolio-inner,.contact-inner{padding:4rem 1.5rem}
  .about-grid,.contact-grid{grid-template-columns:1fr;gap:2.5rem}
  .services-grid,.testimonials-grid{grid-template-columns:1fr}
  .portfolio-grid{grid-template-columns:1fr}
  .why-grid{grid-template-columns:1fr}
  .process-steps{grid-template-columns:repeat(2,1fr);gap:2rem}
  .process-steps::before{display:none}
  footer{flex-direction:column;text-align:center;padding:2rem 1.5rem}
  .footer-links{justify-content:center}
  .form-row{grid-template-columns:1fr}
  .lb-nav{display:none}
}
</style>
</head>
<body>

<!-- ═══════════ NAV ═══════════ -->
<nav id="main-nav">
  <a href="#" class="nav-logo">
    <!-- SVG Logo Mark -->
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="42" height="42" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#0D0D0D" stroke="#B8960C" stroke-width=".8"/>
      <circle cx="50" cy="50" r="43" fill="none" stroke="#B8960C" stroke-width=".4" stroke-dasharray="2.5,2"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="#B8960C" stroke-width=".5"/>
      <g fill="#D4AF37" stroke="#0D0D0D" stroke-width=".3">
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(0,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(22.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(45,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(67.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(90,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(112.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(135,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(157.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(180,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(202.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(225,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(247.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(270,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(292.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(315,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(337.5,50,50)"/>
      </g>
      <circle cx="50" cy="50" r="30" fill="#0D0D0D" stroke="#D4AF37" stroke-width=".6"/>
      <path d="M44,37 Q37,42 41,48 Q46,55 39,61 Q34,67 41,71" fill="none" stroke="#D4AF37" stroke-width="1.3" stroke-linecap="round"/>
      <line x1="57" y1="29" x2="44" y2="71" stroke="#D4AF37" stroke-width=".8" stroke-linecap="round" opacity=".75"/>
      <ellipse cx="56" cy="30.5" rx="2.2" ry="1.4" fill="none" stroke="#D4AF37" stroke-width=".9" transform="rotate(-40,56,30.5)"/>
    </svg>
    <div class="nav-logo-text">Hawi Sartorial<small>Fashion Meets Elegance</small></div>
  </a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#process">Process</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="nav-cta" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Get a Quote</button>
  <button class="hamburger" id="ham" aria-label="Menu" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mob-menu">
  <a href="#about" onclick="closeMenu()">About</a>
  <a href="#services" onclick="closeMenu()">Services</a>
  <a href="#process" onclick="closeMenu()">Process</a>
  <a href="#portfolio" onclick="closeMenu()">Portfolio</a>
  <a href="#contact" onclick="closeMenu()">Contact</a>
  <a href="#contact" onclick="closeMenu()" style="color:var(--gold-light);font-weight:500">→ Get a Quote</a>
</div>

<!-- ═══════════ HERO ═══════════ -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-lines"></div>
  <div class="hero-content">
    <!-- Full Hero Logo -->
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width:155px;height:155px;margin:0 auto 1.8rem;display:block" aria-label="Hawi Sartorial Logo">
      <circle cx="100" cy="100" r="97" fill="#0D0D0D" stroke="#B8960C" stroke-width="1"/>
      <circle cx="100" cy="100" r="90" fill="none" stroke="#B8960C" stroke-width=".5" stroke-dasharray="3,2.5"/>
      <circle cx="100" cy="100" r="76" fill="none" stroke="#B8960C" stroke-width=".8"/>
      <g fill="#D4AF37" stroke="#0D0D0D" stroke-width=".5">
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(0,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(11.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(22.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(33.75,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(45,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(56.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(67.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(78.75,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(90,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(101.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(112.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(123.75,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(135,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(146.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(157.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(168.75,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(180,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(191.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(202.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(213.75,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(225,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(236.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(247.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(258.75,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(270,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(281.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(292.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(303.75,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(315,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(326.25,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(337.5,100,100)"/>
        <rect x="91" y="8" width="18" height="10" rx="1" transform="rotate(348.75,100,100)"/>
      </g>
      <circle cx="100" cy="100" r="65" fill="#0D0D0D" stroke="#D4AF37" stroke-width=".8"/>
      <circle cx="100" cy="100" r="61" fill="none" stroke="rgba(184,150,12,.25)" stroke-width=".4" stroke-dasharray="2,2"/>
      <path d="M90,72 Q72,80 78,96 Q85,110 70,122 Q62,131 72,139" fill="none" stroke="#D4AF37" stroke-width="2.6" stroke-linecap="round"/>
      <line x1="115" y1="58" x2="90" y2="140" stroke="#D4AF37" stroke-width="1.4" stroke-linecap="round" opacity=".8"/>
      <ellipse cx="113.5" cy="60" rx="4.2" ry="2.6" fill="none" stroke="#D4AF37" stroke-width="1.5" transform="rotate(-38,113.5,60)"/>
      <text x="100" y="158" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="10.5" fill="#F5F0E8" letter-spacing="3.5">HAWI SARTORIAL</text>
      <line x1="63" y1="163" x2="137" y2="163" stroke="#B8960C" stroke-width=".6"/>
    </svg>

    <div class="hero-tag">Fashion Meets Elegance · Nairobi, Kenya</div>
    <h1>Dressed for<br/><em>Every Occasion.</em><br/>Tailored for You.</h1>
    <p>From the classroom to the boardroom, Hawi Sartorial Ltd crafts exceptional garments that define professionalism, unity, and style.</p>
    <div class="hero-btns">
      <a class="btn-primary" href="#contact">Request a Quote</a>
      <a class="btn-outline" href="#services">Our Services</a>
    </div>
    <div class="hero-divider"></div>
  </div>
</section>

<!-- ═══════════ STATS ═══════════ -->
<div class="stats">
  <div class="stat"><div class="stat-num">500+</div><div class="stat-label">Garments Delivered</div></div>
  <div class="stat"><div class="stat-num">3</div><div class="stat-label">Core Specialisms</div></div>
  <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Custom Fit</div></div>
  <div class="stat"><div class="stat-num">48hr</div><div class="stat-label">Quote Turnaround</div></div>
</div>

<!-- ═══════════ ABOUT ═══════════ -->
<section id="about" style="background:var(--dark)">
  <div class="section">
    <div class="about-grid">
      <div class="about-text">
        <div class="section-tag">Who We Are</div>
        <h2 class="section-title">Craftsmanship Woven Into Every Stitch</h2>
        <div class="gold-line"></div>
        <p>Hawi Sartorial Ltd is a Nairobi-based fashion and design firm dedicated to creating garments that speak to quality, identity, and purpose. We believe that what you wear tells a story — and we help organisations, schools, and businesses tell theirs with precision and pride.</p>
        <p>From bulk uniform orders to bespoke corporate collections, our team of skilled tailors and designers brings your vision to life with meticulous attention to fit, fabric, and finish.</p>
        <a class="btn-primary" href="#contact" style="margin-top:1rem">Work With Us</a>
      </div>
      <div>
        <div class="about-box">
          <div class="about-box-num">HS</div>
          <div class="about-box-text">"Quality is not an act, it is a habit."</div>
          <div style="margin-top:1rem;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold)">Hawi Sartorial Ltd</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ SERVICES ═══════════ -->
<section id="services" class="services-section">
  <div class="services-inner">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title">Our Specialisations</h2>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-num">01</div>
        <div class="service-name">Workwear</div>
        <div class="service-desc">Durable, comfortable, and professional attire designed for the demands of the modern workplace — from overalls and scrubs to smart staff uniforms.</div>
        <div class="service-items">
          <span class="service-item">Staff Uniforms</span><span class="service-item">Industrial Wear</span>
          <span class="service-item">Hospitality</span><span class="service-item">Healthcare</span>
        </div>
      </div>
      <div class="service-card">
        <div class="service-num">02</div>
        <div class="service-name">School Wear</div>
        <div class="service-desc">Smart, resilient school uniforms crafted to foster identity and community. Built to last the school year and beyond, in fabrics that keep up with active young minds.</div>
        <div class="service-items">
          <span class="service-item">Uniforms</span><span class="service-item">Sports Kits</span>
          <span class="service-item">Blazers</span><span class="service-item">Ties & Accessories</span>
        </div>
      </div>
      <div class="service-card">
        <div class="service-num">03</div>
        <div class="service-name">Corporate Wear</div>
        <div class="service-desc">Elevate your brand presence with bespoke corporate collections — tailored suits, branded shirts, and executive attire that command the boardroom.</div>
        <div class="service-items">
          <span class="service-item">Suits & Blazers</span><span class="service-item">Branded Shirts</span>
          <span class="service-item">Event Wear</span><span class="service-item">Executive Collections</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ WHY US ═══════════ -->
<section style="background:var(--dark)">
  <div class="section">
    <div class="section-tag">Why Hawi Sartorial</div>
    <h2 class="section-title">The Hawi Difference</h2>
    <div class="why-grid">
      <div class="why-card"><div class="why-title">Premium Craftsmanship</div><div class="why-desc">Every garment passes through the hands of skilled tailors trained to uphold exacting standards of finish, cut, and construction.</div></div>
      <div class="why-card"><div class="why-title">Custom-Fit Guarantee</div><div class="why-desc">We don't do off-the-shelf. Every order is tailored to your measurements, brand guidelines, and specific requirements.</div></div>
      <div class="why-card"><div class="why-title">Bulk Order Capability</div><div class="why-desc">Whether you need 10 pieces or 10,000, our production process scales without compromising quality or consistency.</div></div>
      <div class="why-card"><div class="why-title">Fast Turnaround</div><div class="why-desc">We understand deadlines. Our streamlined workflow ensures your order is delivered on time, every time — without cutting corners.</div></div>
    </div>
  </div>
</section>

<!-- ═══════════ PROCESS ═══════════ -->
<section id="process" class="process-section">
  <div class="process-inner">
    <div class="section-tag">How It Works</div>
    <h2 class="section-title">From Concept to Wardrobe</h2>
    <div class="process-steps">
      <div class="process-step"><div class="step-circle">01</div><div class="step-title">Consultation</div><div class="step-desc">Share your needs, vision, and requirements with our design team.</div></div>
      <div class="process-step"><div class="step-circle">02</div><div class="step-title">Design & Sample</div><div class="step-desc">We create samples and refine the design until you're fully satisfied.</div></div>
      <div class="process-step"><div class="step-circle">03</div><div class="step-title">Production</div><div class="step-desc">Full-scale tailoring begins with quality checks at every stage.</div></div>
      <div class="process-step"><div class="step-circle">04</div><div class="step-title">Delivery</div><div class="step-desc">Your finished garments are delivered on time, ready to wear.</div></div>
    </div>
  </div>
</section>

<!-- ═══════════ PORTFOLIO ═══════════ -->
<section id="portfolio" class="portfolio-section">
  <div class="portfolio-inner">
    <div class="section-tag">Gallery</div>
    <h2 class="section-title">Our Premium Collections</h2>
    <p style="color:var(--text-muted);max-width:500px;font-size:.92rem;margin-top:.5rem;margin-bottom:0">Every piece is crafted with precision — from bold prints to classic silhouettes, tailored to perfection. Click any piece to explore.</p>
    <div class="portfolio-grid" id="portfolio-grid">
      <!-- Item 1: Brown Satin Co-ord -->
      <div class="portfolio-item" onclick="openLightbox(0)">
        <div class="portfolio-bg" style="background:linear-gradient(160deg,#3B1A0A,#6B3218,#8B4513)">
          <div class="portfolio-bg-text" style="font-size:5rem;color:rgba(212,175,55,.18)">01</div>
        </div>
        <img src="photo1.jpg" alt="Brown Satin Co-ord Set" style="display:block"/>
        <div class="portfolio-overlay">
          <span class="portfolio-badge">Brown Elegance</span>
          <div class="portfolio-label">Chocolate Satin Co-ord</div>
          <div class="portfolio-sublabel">Scoop Neck Top · Wide-Leg Trousers · Satin</div>
        </div>
      </div>
      <!-- Item 2: Green & Gold Zebra Print -->
      <div class="portfolio-item" onclick="openLightbox(1)">
        <div class="portfolio-bg" style="background:linear-gradient(160deg,#1B3A1B,#2D5A1B,#8B7332)">
          <div class="portfolio-bg-text" style="font-size:5rem;color:rgba(212,175,55,.18)">02</div>
        </div>
        <img src="photo2.jpg" alt="Green Gold Safari Print Set" style="display:block"/>
        <div class="portfolio-overlay">
          <span class="portfolio-badge">Wild Print</span>
          <div class="portfolio-label">Safari Print Co-ord</div>
          <div class="portfolio-sublabel">Off-Shoulder · Balloon Sleeves · Wide-Leg</div>
        </div>
      </div>
      <!-- Item 3: Black Abstract Art Print -->
      <div class="portfolio-item" onclick="openLightbox(2)">
        <div class="portfolio-bg" style="background:linear-gradient(160deg,#0a0a0a,#1a1a1a,#2a2a2a)">
          <div class="portfolio-bg-text" style="font-size:5rem;color:rgba(255,255,255,.08)">03</div>
        </div>
        <img src="photo3.jpg" alt="Black Abstract Art Print Set" style="display:block"/>
        <div class="portfolio-overlay">
          <span class="portfolio-badge">Black Elegance</span>
          <div class="portfolio-label">Abstract Art Print Set</div>
          <div class="portfolio-sublabel">Off-Shoulder · Line Art Print · Wide-Leg</div>
        </div>
      </div>
      <!-- Item 4: Gold Satin Co-ord -->
      <div class="portfolio-item" onclick="openLightbox(3)">
        <div class="portfolio-bg" style="background:linear-gradient(160deg,#4A3500,#8B6914,#C5941A)">
          <div class="portfolio-bg-text" style="font-size:5rem;color:rgba(212,175,55,.18)">04</div>
        </div>
        <img src="photo4.jpg" alt="Gold Satin Co-ord Set" style="display:block"/>
        <div class="portfolio-overlay">
          <span class="portfolio-badge">Gold Luxury</span>
          <div class="portfolio-label">Gold Satin Co-ord</div>
          <div class="portfolio-sublabel">Scoop Neck · Wide-Leg Trousers · Satin</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Lightbox -->
<div id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
  <button class="lb-close" onclick="closeLightbox()" aria-label="Close">✕</button>
  <button class="lb-nav" id="lb-prev" onclick="lbNav(-1)" aria-label="Previous">‹</button>
  <div style="text-align:center">
    <img id="lb-img" class="lb-img" src="" alt=""/>
    <div id="lb-cap" class="lb-cap"></div>
  </div>
  <button class="lb-nav" id="lb-next" onclick="lbNav(1)" aria-label="Next">›</button>
</div>

<!-- ═══════════ TESTIMONIALS ═══════════ -->
<section style="background:var(--dark-2)">
  <div class="section">
    <div class="section-tag">Client Voices</div>
    <h2 class="section-title">What Our Clients Say</h2>
    <div class="testimonials-grid">
      <div class="testimonial">
        <div class="testimonial-quote">"</div>
        <div class="testimonial-text">The school uniforms Hawi Sartorial produced for us were exceptional — great fabric, perfect fit, and delivered ahead of schedule. Our students look sharp and the parents are thrilled.</div>
        <div class="testimonial-author">Mary Wanjiku</div>
        <div class="testimonial-role">Head Teacher, Nairobi Primary School</div>
      </div>
      <div class="testimonial">
        <div class="testimonial-quote">"</div>
        <div class="testimonial-text">We outfitted our entire team in branded corporate wear for a major conference. Hawi Sartorial's attention to detail and quality was unmatched. We looked cohesive and professional.</div>
        <div class="testimonial-author">James Otieno</div>
        <div class="testimonial-role">Operations Director, TechBridge Africa</div>
      </div>
      <div class="testimonial">
        <div class="testimonial-quote">"</div>
        <div class="testimonial-text">From workwear to event attire, they handle it all with professionalism. The team is responsive, the pricing is fair, and the quality is consistently excellent.</div>
        <div class="testimonial-author">Aisha Mwangi</div>
        <div class="testimonial-role">HR Manager, Horizon Hotels</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ CONTACT ═══════════ -->
<section id="contact" class="contact-section">
  <div class="contact-inner">
    <div class="section-tag">Get In Touch</div>
    <h2 class="section-title">Start Your Order Today</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <p>Ready to dress your team, school, or organisation with purpose? Reach out to us and we'll get back to you within 48 hours with a tailored quote.</p>
        <div class="contact-detail"><div class="contact-detail-icon">Location</div><div class="contact-detail-val">Nairobi, Kenya</div></div>
        <div class="contact-detail"><div class="contact-detail-icon">Email</div><div class="contact-detail-val"><a href="mailto:hawisartorial@gmail.com">hawisartorial@gmail.com</a></div></div>
        <div class="contact-detail"><div class="contact-detail-icon">Phone</div><div class="contact-detail-val"><a href="tel:+254717983802">+254 717 983 802</a></div></div>
        <div class="contact-detail"><div class="contact-detail-icon">WhatsApp</div><div class="contact-detail-val"><a href="https://wa.me/254717983802" target="_blank" rel="noopener">Chat on WhatsApp</a></div></div>
        <div class="contact-detail"><div class="contact-detail-icon">Hours</div><div class="contact-detail-val">Mon – Sat, 8am – 6pm</div></div>
      </div>
      <div class="contact-form">
        <div class="form-row">
          <div class="form-group"><label>Full Name</label><input id="f-name" type="text" placeholder="Your name"/></div>
          <div class="form-group"><label>Email</label><input id="f-email" type="email" placeholder="your@email.com"/></div>
        </div>
        <div class="form-group"><label>Organisation</label><input id="f-org" type="text" placeholder="School, company or organisation"/></div>
        <div class="form-group">
          <label>Service Needed</label>
          <select id="f-service">
            <option value="">Select a service</option>
            <option>Workwear</option>
            <option>School Wear</option>
            <option>Corporate Wear</option>
            <option>Multiple / Not Sure</option>
          </select>
        </div>
        <div class="form-group"><label>Message</label><textarea id="f-msg" placeholder="Tell us about your requirements — quantity, timeline, special requests..."></textarea></div>
        <button class="btn-primary" id="send-btn" style="width:100%;padding:1rem;font-size:.9rem" onclick="sendEnquiry()">Send Enquiry</button>
        <p id="form-fb"></p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ FOOTER ═══════════ -->
<footer>
  <div class="footer-logo">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="34" height="34" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#0D0D0D" stroke="#B8960C" stroke-width=".8"/>
      <g fill="#D4AF37" stroke="#0D0D0D" stroke-width=".3">
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(0,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(22.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(45,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(67.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(90,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(112.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(135,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(157.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(180,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(202.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(225,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(247.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(270,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(292.5,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(315,50,50)"/>
        <rect x="47.5" y="5.5" width="5" height="4.5" rx=".4" transform="rotate(337.5,50,50)"/>
      </g>
      <circle cx="50" cy="50" r="30" fill="#0D0D0D" stroke="#D4AF37" stroke-width=".6"/>
      <path d="M44,37 Q37,42 41,48 Q46,55 39,61 Q34,67 41,71" fill="none" stroke="#D4AF37" stroke-width="1.3" stroke-linecap="round"/>
      <line x1="57" y1="29" x2="44" y2="71" stroke="#D4AF37" stroke-width=".8" stroke-linecap="round" opacity=".75"/>
      <ellipse cx="56" cy="30.5" rx="2.2" ry="1.4" fill="none" stroke="#D4AF37" stroke-width=".9" transform="rotate(-40,56,30.5)"/>
    </svg>
    <div>
      <div class="footer-logo-text">Hawi <span>Sartorial</span> Ltd</div>
      <div class="footer-logo-sub">Fashion Meets Elegance</div>
    </div>
  </div>
  <div class="footer-copy">© 2024 Hawi Sartorial Ltd. Nairobi, Kenya.</div>
  <div class="footer-links">
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </div>
</footer>

<!-- ═══════════ FLOATING BUTTONS ═══════════ -->
<div class="fab-group">
  <button class="fab-top" id="fab-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" title="Back to top" aria-label="Back to top">↑</button>
  <a class="fab-wa" href="https://wa.me/254717983802" target="_blank" rel="noopener" title="Chat on WhatsApp" aria-label="WhatsApp">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
</div>

<script>
// ── Lightbox data ──
var lbItems=[
  {src:'photo1.jpg',cap:'Chocolate Satin Co-ord — Brown Elegance'},
  {src:'photo2.jpg',cap:'Safari Print Co-ord — Green & Gold Wild Print'},
  {src:'photo3.jpg',cap:'Abstract Art Print Set — Black Elegance'},
  {src:'photo4.jpg',cap:'Gold Satin Co-ord — Gold Luxury'}
];
var lbIdx=0;

function openLightbox(i){
  lbIdx=i;
  document.getElementById('lb-img').src=lbItems[i].src;
  document.getElementById('lb-cap').textContent=lbItems[i].cap;
  var lb=document.getElementById('lightbox');
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
}
function lbNav(d){
  lbIdx=(lbIdx+d+lbItems.length)%lbItems.length;
  document.getElementById('lb-img').src=lbItems[lbIdx].src;
  document.getElementById('lb-cap').textContent=lbItems[lbIdx].cap;
}
document.getElementById('lightbox').addEventListener('click',function(e){if(e.target===this)closeLightbox()});
document.addEventListener('keydown',function(e){
  var lb=document.getElementById('lightbox');
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLightbox();
  if(e.key==='ArrowLeft')lbNav(-1);
  if(e.key==='ArrowRight')lbNav(1);
});

// ── Nav scroll shrink ──
window.addEventListener('scroll',function(){
  document.getElementById('main-nav').classList.toggle('scrolled',window.scrollY>60);
  document.getElementById('fab-top').classList.toggle('visible',window.scrollY>400);
});

// ── Mobile menu ──
function toggleMenu(){document.getElementById('mob-menu').classList.toggle('open')}
function closeMenu(){document.getElementById('mob-menu').classList.remove('open')}

// ── Contact form → mailto ──
function sendEnquiry(){
  var name=document.getElementById('f-name').value.trim();
  var email=document.getElementById('f-email').value.trim();
  var org=document.getElementById('f-org').value.trim();
  var svc=document.getElementById('f-service').value;
  var msg=document.getElementById('f-msg').value.trim();
  var fb=document.getElementById('form-fb');
  if(!name||!email||!msg){
    fb.style.display='block';fb.style.color='#E24B4A';
    fb.textContent='Please fill in your name, email, and message.';return;
  }
  var body='New enquiry from Hawi Sartorial website:\n\nName: '+name+'\nEmail: '+email+
    (org?'\nOrganisation: '+org:'')+(svc?'\nService: '+svc:'')+'\n\nMessage:\n'+msg;
  window.location.href='mailto:hawisartorial@gmail.com'
    +'?subject='+encodeURIComponent('Website Enquiry — '+name)
    +'&body='+encodeURIComponent(body);
  fb.style.display='block';fb.style.color='#D4AF37';
  fb.textContent='Opening your email app… Or email us directly at hawisartorial@gmail.com';
}
</script>
</body>
</html>
