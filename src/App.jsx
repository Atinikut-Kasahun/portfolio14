
import React, { useEffect } from 'react';
import './index.css';

export default function App() {
  useEffect(() => {
    // 1. Custom Cursor Functionality
    const cursor = document.querySelector('.custom-cursor');
    const dot = document.querySelector('.cursor-dot');
    const hoverTargets = document.querySelectorAll('a, button, .project-link, .index-btn');

    if (cursor && dot) {
        const handleMouseMove = (e) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
            cursor.style.setProperty('--mouse-x', e.clientX + 'px');
            cursor.style.setProperty('--mouse-y', e.clientY + 'px');
        };

        document.addEventListener('mousemove', handleMouseMove);

        const addHover = () => { cursor.classList.add('hover'); dot.classList.add('hover'); };
        const removeHover = () => { cursor.classList.remove('hover'); dot.classList.remove('hover'); };
        
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', addHover);
            target.addEventListener('mouseleave', removeHover);
        });

        // 2. Scroll Reveal Observers
        const sectionElements = document.querySelectorAll('.project, .hero-graphics, .project-custom');
        sectionElements.forEach(sec => sec.classList.add('reveal'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        sectionElements.forEach(sec => observer.observe(sec));

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            hoverTargets.forEach(target => {
                target.removeEventListener('mouseenter', addHover);
                target.removeEventListener('mouseleave', removeHover);
            });
            observer.disconnect();
        };
    }
  }, []);

  return (
    <>
      

    {/*  Global Custom Cursor Layers  */}
    <div className="custom-cursor"></div>
    <div className="cursor-dot"></div>

    {/*  Index Button Widget  */}
    <div className="index-widget">
        <button className="index-btn" title="Open Index"></button>
        <div className="index-label">INDEX</div>
    </div>

    {/*  Left fixed red sidebar tab  */}
    <div className="left-sidebar">
        <div className="sidebar-brand">HOVS</div>
        <div className="sidebar-location">
            House of van Schneider<br/>
            New York City/BKLYN
        </div>
        <div className="sidebar-icon">
            {/*  decorative emblem for the eagle  */}
            𓅃
        </div>
    </div>

    {/*  Main Content Panel  */}
    <div className="main-wrapper">
        
        {/*  Hero Section inside main window  */}
        <div className="hero">
            <div className="nav-header">
                <div className="nav-group">
                    <div className="nav-title">REPERTOIRE</div>
                    <a href="#" className="nav-link">essentials</a>
                    <a href="#" className="nav-link">essays<span className="nav-badge">DESK</span></a>
                    <a href="#" className="nav-link">the weekly</a>
                </div>
                <div className="nav-group">
                    <div className="nav-title">CRÉATIVITÉ</div>
                    <a href="#" className="nav-link">mixtapes</a>
                    <a href="#" className="nav-link">books</a>
                    <a href="#" className="nav-link">quotes</a>
                </div>
                <div className="nav-group">
                    <div className="nav-title">NARRATIVE</div>
                    <a href="#" className="nav-link">the praxis</a>
                    <a href="#" className="nav-link">artifacts</a>
                    <a href="#" className="nav-link">photo archive</a>
                </div>
            </div>

            <div className="hero-graphics">
                {/*  Placeholder for the custom cherubs banner  */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Floral_ornament_1.svg" alt="Crea Ergo Sum Embelishment" className="hero-emblem" style={{height:"120px",objectFit:"contain"}} />
                
                <h1 className="hero-title">
                    I CREATE;<br/>
                    THEREFORE<br/>
                    I AM
                </h1>
            </div>
        </div>

        {/*  About / Signature section  */}
        <div className="about-section">
            <div className="about-signature">Designed in New York City</div>
            
            <div className="about-grid">
                <div className="about-text-col">
                    <p>I'm the founder & creative director at <strong>HOVS</strong>, a studio that builds and runs its own products — and occasionally works with partners such as <strong>NASA/JPL</strong> to brand their space missions.</p>
                    <p>Currently growing <strong>mymind™</strong>, my peaceful escape from the chaos of the internet.</p>
                    <p>I'm also the co-founder of <strong>Semplice™</strong> and <strong>Carbonmade™</strong>, which have been serving the creative community for more than two decades.</p>
                    <p>HOVS believes in brands and products that have a point of view. Take a look at some of our work</p>
                    <a href="#work">↓</a>
                </div>

                <div className="about-divider"></div>

                <div className="about-image-col">
                    {/*  Black & white high contrast image of Tobias similar to design  */}
                    <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop" alt="Tobias van Schneider" className="about-image" />
                    <div className="about-caption-title">Tobias van Schneider</div>
                    <div className="about-caption-role">FOUNDER HOVS</div>
                </div>
            </div>
        </div>

        {/*  Project: BMW Motorcycle  */}
        <div id="work" className="project">
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop" alt="HOVS BMW Airhead" className="project-hero-img" style={{filter:"grayscale(100%)",objectPosition:"center",height:"60vh",objectFit:"cover"}} />
            
            <div className="project-meta">
                <div className="project-meta-left">
                    <h2 className="project-title"><strong>HOVS</strong> — Building a retro-futuristic interpretation of the original BMW airhead</h2>
                    <div className="project-tags">Brand Identity, Product Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc">In collaboration with my friend Seba (<strong>oneYedeer</strong>), we reimagined the classic BMW R100R airhead through a retro-futuristic lens. Every element, from the front fairing to the upholstery and tail, was custom-designed from the ground up. The bike maintains its clear identity as a BMW airhead, but with an unexpected twist that only those with a keen eye for design might fully appreciate.</p>
                    <a href="#" className="project-link">View project details</a>
                </div>
            </div>

            <div className="project-details">
                <div className="project-details-item">
                    <img src="https://images.unsplash.com/photo-1609162791834-8cbf3fe8ccec?q=80&w=800&auto=format&fit=crop" alt="Detail Tail section" className="project-details-img" style={{filter:"grayscale(100%)",height:"400px",objectFit:"cover"}} />
                    <div className="project-details-caption">Detail of the custom fabricated tail section</div>
                </div>
                <div className="project-details-item">
                    {/*  Mockup of the red badge  */}
                    <div style={{height:"400px",background:"#111",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                        {/*  Red stylized emblem  */}
                        <div style={{width:"220px",height:"220px",border:"3px solid var(--hovs-red)",borderRadius:"50%",color:"var(--hovs-red)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-serif)",fontSize:"11px",letterSpacing:"2px"}}>
                            <div>HOUSE OF</div>
                            <div style={{fontSize:"30px",margin:"10px 0"}}>H<span style={{opacity:"0.5"}}>✥</span>S</div>
                            <div>VAN SCHNEIDER</div>
                        </div>
                    </div>
                    <div className="project-details-caption">Custom badge design</div>
                </div>
            </div>
        </div>

        {/*  Project: Graphic Identity Snowflake (NASA)  */}
        <div className="project project-custom" style={{backgroundColor:"#260ebd"}}>
            <div className="graphic-showcase" style={{backgroundColor:"transparent",paddingTop:"8vw"}}>
                <div className="graphic-canvas" style={{maxWidth:"900px",aspectRatio:"16/9"}}>
                    <svg width="280" height="280" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="6" fill="#260ebd"/>
                        <path d="M50 15 v15 m0 40 v15 M15 50 h15 m40 0 h15 M25 25 l10 10 m30 30 l10 10 M25 75 l10 -10 m30 -30 l10 -10" stroke="#260ebd" strokeWidth="8" strokeLinecap="square"/>
                        <path d="M35 15 l15 15 l15 -15 M15 35 l15 15 l-15 15 M85 35 l-15 15 l15 15 M35 85 l15 -15 l15 15" stroke="#260ebd" strokeWidth="8" strokeLinejoin="miter"/>
                        {/*  Adding a tiny star sparkle next to logo  */}
                        <path d="M65 30 Q 70 30 70 25 Q 70 30 75 30 Q 70 30 70 35 Q 70 30 65 30 Z" fill="#260ebd"/>
                    </svg>
                </div>
            </div>

            <div className="project-meta" style={{borderTopColor:"rgba(255,255,255,0.15)",paddingTop:"60px"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{fontSize:"40px",letterSpacing:"-1.5px",lineHeight:"1"}}><strong>NASA</strong> — Branding NASA's<br />mission to Jupiter's icy<br />moon, Europa</h2>
                    <div className="project-tags" style={{color:"rgba(255,255,255,0.4)",marginTop:"20px"}}>Brand Identity, Product Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#fff",fontSize:"16px"}}>Once again, NASA asked HOVS to brand its latest mission to space — this time to find out if Jupiter's moon, Europa, has habitable conditions for life. We designed the logo to reflect the clipper's orbit of Jupiter, in which it will dip in and out of Jupiters' dangerous radiation zone to collect samples from the icy moon Europa. Another HOVS logo in space, 1.8 billion miles deep.</p>
                    <a href="#" className="project-link" style={{color:"#fff",borderBottomColor:"rgba(255,255,255,0.4)"}}>View project details</a>
                </div>
            </div>

            <div className="project-details" style={{marginTop:"100px"}}>
                <div style={{backgroundColor:"transparent",width:"100%",display:"flex",paddingBottom:"0"}}>
                    <div style={{flex:"2",display:"flex",justifyContent:"center",alignItems:"flex-end",marginBottom:"-120px",zIndex:"2"}}>
                        <div style={{width:"450px",height:"550px",background:"linear-gradient(to right, #ddd, #fff 40%, #eee)",borderRadius:"225px 225px 10px 10px",boxShadow:"inset 0 20px 40px rgba(0,0,0,0.1), inset -20px 0 30px rgba(0,0,0,0.05)",position:"relative",borderBottom:"3px solid #ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",paddingBottom:"50px"}}>
                            <div style={{position:"absolute",width:"100%",top:"120px",borderBottom:"1px dashed rgba(0,0,0,0.15)"}}></div>
                            <div style={{position:"absolute",width:"100%",top:"180px",borderBottom:"1px dashed rgba(0,0,0,0.15)"}}></div>
                            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{mixBlendMode:"multiply",opacity:"0.9"}}>
                                <circle cx="50" cy="50" r="6" fill="#260ebd"/>
                                <path d="M50 15 v15 m0 40 v15 M15 50 h15 m40 0 h15 M25 25 l10 10 m30 30 l10 10 M25 75 l10 -10 m30 -30 l10 -10" stroke="#260ebd" strokeWidth="8" strokeLinecap="square"/>
                                <path d="M35 15 l15 15 l15 -15 M15 35 l15 15 l-15 15 M85 35 l-15 15 l15 15 M35 85 l15 -15 l15 15" stroke="#260ebd" strokeWidth="8" strokeLinejoin="miter"/>
                            </svg>
                        </div>
                    </div>
                    <div style={{flex:"1",display:"flex",alignItems:"center",justifyContent:"flex-start",marginLeft:"-50px"}}>
                        <div style={{fontSize:"110px",fontWeight:"800",color:"#fff",writingMode:"vertical-rl",transform:"rotate(180deg)",display:"flex",alignItems:"center",gap:"15px",letterSpacing:"-2px"}}>
                            EUROPA <span style={{fontWeight:"400",opacity:"0.9"}}>CLIPPER</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*  Project: mymind (Light Section)  */}
        <div className="project project-light project-custom" style={{paddingTop:"0",position:"relative"}}>
            <div style={{backgroundColor:"#f7f7f8",padding:"120px 0",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"40px"}}>
                <div className="gradient-circle">
                    <div className="gradient-circle-inner"></div>
                </div>
            </div>

            <div className="project-meta" style={{padding:"60px 10% 0"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong style={{color:"#ed4e23",fontWeight:"500"}}>mymind</strong> — Building a<br />peaceful oasis within the<br />chaos of the internet</h2>
                    <div className="project-tags" style={{marginTop:"20px"}}>Brand Identity, Product Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{fontSize:"16px"}}>mymind is the first and only extension for your real mind. It's one private place to save everything you care about online, beautifully visualized and organized with the help of artificial intelligence. I co-founded mymind and manage the product design, branding and growth.</p>
                    <a href="#" className="project-link" style={{color:"#888",fontWeight:"500"}}>Visit mymind.com</a>
                </div>
            </div>

            <div className="project-details" style={{padding:"0 10%",marginTop:"80px",paddingBottom:"120px"}}>
                <div className="project-details-item">
                    <div style={{backgroundColor:"#e5e6e8",padding:"40px",height:"500px",display:"flex",justifyContent:"center",alignItems:"flex-end",overflow:"hidden",position:"relative"}}>
                        <div style={{width:"100%",background:"#fbfbfb",height:"85%",borderRadius:"12px 12px 0 0",boxShadow:"0 10px 40px rgba(0,0,0,0.08)",padding:"40px",display:"flex",flexDirection:"column"}}>
                            <div style={{fontFamily:"var(--font-serif)",fontSize:"32px",color:"#d0d0d0",fontStyle:"italic",borderBottom:"2px solid #efefef",paddingBottom:"15px",marginBottom:"30px"}}>Search my mind...</div>
                            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
                                <div style={{background:"#fff",padding:"30px 20px",textAlign:"center",fontSize:"13px",color:"#111",lineHeight:"1.6",fontFamily:"var(--font-serif)",fontStyle:"italic",boxShadow:"0 2px 10px rgba(0,0,0,0.02)"}}>"It's not what we don't know that gets us in trouble. It's what we know for sure that just ain't so."</div>
                                <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1542382156-df533c360980?auto=format&fit=crop&w=400&q=80')",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"4px"}}></div>
                            </div>
                            <div style={{position:"absolute",top:"50%",left:"-20px",writingMode:"vertical-rl",transform:"rotate(180deg)",color:"#ccc",fontSize:"10px",letterSpacing:"2px",fontWeight:"600"}}>mymind</div>
                        </div>
                    </div>
                    <div className="project-details-caption" style={{color:"#aaa"}}>A better place for everything.</div>
                </div>
                <div className="project-details-item">
                    <div style={{backgroundColor:"#ed4e23",height:"500px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div style={{fontFamily:"var(--font-serif)",fontSize:"140px",color:"#fff",fontStyle:"italic",fontWeight:"700",lineHeight:"0.8",textAlign:"center",transform:"translateY(-20px)"}}>
                            m<br /><span style={{paddingLeft:"50px"}}>y</span>
                        </div>
                    </div>
                    <div className="project-details-caption" style={{color:"#aaa"}}>The Thinking Guy. Our beloved mymind logo.</div>
                </div>
            </div>
        </div>

        {/*  Project: Red Geometric Logo (Mars Mission)  */}
        <div className="project project-custom" style={{paddingBottom:"0",backgroundColor:"#da281d"}}>
            <div className="graphic-showcase" style={{backgroundColor:"transparent",padding:"8vw"}}>
                <div className="graphic-canvas" style={{backgroundColor:"#e5eaef",padding:"120px 0"}}>
                    <div style={{width:"200px",height:"200px",backgroundColor:"#da281d",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                        {/*  geometric Mars rover logomark  */}
                        <svg width="120" height="120" viewBox="0 0 100 100" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 40 h15 v-15 a10 10 0 0 1 10 -10 a10 10 0 0 1 10 10 v15 h10 a10 10 0 0 1 10 10 v10 a10 10 0 0 1 -10 10 h-50 a10 10 0 0 1 -10 -10 v-10 a10 10 0 0 1 10 -10 Z" fill="#fff"/>
                            <rect x="25" y="70" width="20" height="15" rx="5" fill="#fff" />
                            <rect x="55" y="70" width="20" height="15" rx="5" fill="#fff" />
                            <path d="M70 30 Q 75 30 75 20 Q 75 30 80 30 Q 75 30 75 40 Q 75 30 70 30 Z" fill="#fff"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="project-meta" style={{borderTopColor:"rgba(255,255,255,0.2)",paddingTop:"60px"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong>NASA</strong> — Designing an<br />identity for the Mars 2020<br />Perseverance rover mission</h2>
                    <div className="project-tags" style={{color:"rgba(255,255,255,0.3)",marginTop:"20px"}}>Brand Identity, Product Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#fff",fontSize:"16px"}}>For the 2020 Mars Rover launch, NASA commissioned HOVS to design a symbol celebrating both the legacy of space travel, and the energy of this new mission. At once the rover in abstract and blocks reaching to the sky, the logomark worked as well on NASA gear as it did on the rocket ship.</p>
                    <a href="#" className="project-link" style={{color:"#fff",borderBottomColor:"rgba(255,255,255,0.4)"}}>Visit the case study</a>
                </div>
            </div>

            <div className="project-details" style={{marginTop:"100px"}}>
                <div style={{backgroundColor:"transparent",width:"100%",display:"flex",paddingBottom:"0"}}>
                    <div style={{flex:"2",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",marginBottom:"-120px",zIndex:"2"}}>
                        <div style={{width:"450px",height:"550px",background:"#e0e4eb",boxShadow:"0 20px 40px rgba(0,0,0,0.1)",position:"relative",borderBottom:"3px solid #ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",overflow:"hidden"}}>
                            {/*  Mock of rocket with Mars logo  */}
                            <div style={{position:"absolute",left:"0",bottom:"0",width:"100px",height:"100%",background:"#333",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",paddingBottom:"40px",color:"#fff",fontSize:"30px",fontWeight:"bold"}}>A<br /><br />T</div>
                            <div style={{width:"250px",height:"100%",background:"#fff",marginLeft:"50px",borderRadius:"125px 125px 0 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",paddingBottom:"50px",boxShadow:"inset 10px 0 20px rgba(0,0,0,0.1), inset -10px 0 20px rgba(0,0,0,0.1)"}}>
                                <div style={{width:"60px",height:"60px",background:"#0b3d91",borderRadius:"50%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold",marginBottom:"20px"}}>NASA</div>
                                <div style={{width:"80px",height:"80px",backgroundColor:"#da281d",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <svg width="40" height="40" viewBox="0 0 100 100" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 40 h15 v-15 a10 10 0 0 1 10 -10 a10 10 0 0 1 10 10 v15 h10 a10 10 0 0 1 10 10 v10 a10 10 0 0 1 -10 10 h-50 a10 10 0 0 1 -10 -10 v-10 a10 10 0 0 1 10 -10 Z" fill="#fff"/>
                                    </svg>
                                </div>
                                <div style={{fontSize:"20px",color:"#333",letterSpacing:"2px",marginTop:"10px",fontWeight:"500"}}>MARS<br />2020</div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex:"1",display:"flex",alignItems:"flex-start",justifyContent:"center"}}>
                        <div style={{fontSize:"100px",fontWeight:"400",color:"#fff",writingMode:"vertical-rl",transform:"rotate(180deg)",letterSpacing:"-2px",lineHeight:"0.8",marginTop:"50px"}}>
                            MARS
                        </div>
                    </div>
                </div>
            </div>
            {/*  Underneath image caption text  */}
            <div style={{display:"flex",gap:"20px",padding:"0 10%",marginTop:"140px",paddingBottom:"60px"}}>
                <div style={{flex:"2",textAlign:"right",color:"#88120a",fontSize:"14px",paddingRight:"200px"}}>The mission type identifier on the launch rocket.</div>
                <div style={{flex:"1",color:"#88120a",fontSize:"14px",paddingLeft:"50px"}}>The additional text identifier.</div>
            </div>
        </div>

        {/*  Project: Semplice (Yellow Section)  */}
        <div className="project project-custom" style={{backgroundColor:"#fed926",position:"relative"}}>
            <div className="graphic-showcase" style={{backgroundColor:"transparent",padding:"100px 10% 0"}}>
                <div className="graphic-canvas" style={{backgroundColor:"#000",width:"100%",aspectRatio:"16/9",maxWidth:"none",flexDirection:"row",gap:"30px"}}>
                    {/*  Semplice Eagle Logo  */}
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 10 Q60 5 70 10 Q65 20 75 30 Q60 35 50 25 Q40 35 25 30 Q35 20 30 10 Q40 5 50 10 Z" fill="#fff"/>
                        <path d="M50 30 C 80 30, 90 60, 90 70 C 80 65, 70 70, 60 60 C 55 70, 45 70, 40 60 C 30 70, 20 65, 10 70 C 10 60, 20 30, 50 30 Z" fill="#fff"/>
                        {/*  Simplified representation of the complex eagle logo  */}
                        <circle cx="45" cy="45" r="3" fill="#000" />
                        <circle cx="55" cy="45" r="3" fill="#000" />
                        <path d="M48 20 L50 15 L52 20 Z" fill="#fff" />
                    </svg>
                    {/*  Typographic Semplice  */}
                    <div style={{fontSize:"72px",color:"#fff",fontWeight:"600",letterSpacing:"-2px"}}>Semplice<span style={{fontSize:"24px",verticalAlign:"super",fontWeight:"500"}}>™</span></div>
                </div>
            </div>

            <div className="project-meta" style={{padding:"60px 10%",borderTopColor:"rgba(0,0,0,0.15)"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{color:"#111",fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong>Semplice™</strong> — The modern<br />creative portfolio system<br />with an old-school heart</h2>
                    <div className="project-tags" style={{color:"#6a5e1c",marginTop:"20px"}}>Brand Identity, Product Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#111",fontSize:"16px"}}>The world's leading creatives use Semplice to build custom portfolios from scratch. I co-founded Semplice and I'm responsible for creative direction, product design, branding and marketing. It's an ever-evolving tool, website backend and creative community helping designers build with pride.</p>
                    <a href="#" className="project-link" style={{color:"#111",borderBottomColor:"rgba(0,0,0,0.2)"}}>Visit semplice.com</a>
                </div>
            </div>

            <div className="project-details" style={{padding:"0 10%",marginTop:"40px",paddingBottom:"120px"}}>
                <div style={{width:"100%",display:"flex",background:"#262626",padding:"40px",borderRadius:"8px",boxShadow:"0 30px 60px rgba(0,0,0,0.15)",height:"600px",gap:"40px"}}>
                    {/*  Semplice Editor Mockup Canvas  */}
                    <div style={{flex:"2",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                        {/*  Webpage preview content  */}
                        <div style={{width:"100%",height:"80%",backgroundImage:"url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80')",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"4px",boxShadow:"0 10px 30px rgba(0,0,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                            {/*  Selection highlight  */}
                            <div style={{position:"absolute",width:"80%",height:"60%",border:"2px solid #5aa9e6",marginTop:"60px",pointerEvents:"none"}}>
                                <div style={{position:"absolute",top:"-12px",left:"-2px",background:"#5aa9e6",color:"#fff",fontSize:"10px",padding:"2px 6px"}}>Title</div>
                            </div>
                            {/*  Mock UI floating panel  */}
                            <div style={{position:"absolute",bottom:"20px",right:"20px",width:"200px",height:"180px",background:"#111",borderRadius:"6px",boxShadow:"0 10px 20px rgba(0,0,0,0.5)",padding:"15px",display:"flex",flexDirection:"column"}}>
                                <div style={{background:"linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",width:"100%",flex:"1",borderRadius:"4px",marginBottom:"10px"}}></div>
                                <div style={{width:"100%",height:"40px",background:"#222",borderRadius:"4px",display:"flex",alignItems:"center",padding:"0 10px",color:"#fff",fontSize:"12px",justifyContent:"space-between"}}><span>#C4EEFC</span> <div style={{width:"20px",height:"20px",background:"#000",borderRadius:"4px"}}></div></div>
                            </div>
                            {/*  Central Typography  */}
                            <h3 style={{color:"#fff",fontFamily:"var(--font-serif)",fontSize:"32px",textAlign:"center",marginTop:"60px",textShadow:"0 2px 10px rgba(0,0,0,0.3)"}}>GOSSAMER X OFFHOURS<br />HOMECOAT</h3>
                        </div>
                    </div>
                    {/*  Editor Sidebar Mockup  */}
                    <div style={{flex:"1",maxWidth:"300px",background:"#1a1a1a",borderRadius:"6px",padding:"20px",display:"flex",flexDirection:"column",gap:"15px"}}>
                        <div style={{display:"flex",justifyContent:"space-between",color:"#fff",fontSize:"14px",borderBottom:"1px solid #333",paddingBottom:"15px",alignItems:"center"}}>
                            <span>Section <span style={{color:"#666",marginLeft:"10px"}}>Row</span></span>
                            <div style={{width:"24px",height:"24px",background:"#fed926",color:"#000",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10px"}}>✓</div>
                        </div>
                        <div style={{color:"#fff",fontSize:"11px"}}>Spacing</div>
                        <div style={{display:"flex",gap:"10px"}}>
                            <div style={{flex:"1",background:"#222",padding:"10px",color:"#fff",fontSize:"16px",borderBottom:"2px solid #ed1b5a"}}>0 <span style={{fontSize:"8px",color:"#666",display:"block"}}>Top</span></div>
                            <div style={{flex:"1",background:"#222",padding:"10px",color:"#fff",fontSize:"16px"}}>20 <span style={{fontSize:"8px",color:"#666",display:"block"}}>Right</span></div>
                            <div style={{flex:"1",background:"#222",padding:"10px",color:"#fff",fontSize:"16px"}}>0 <span style={{fontSize:"8px",color:"#666",display:"block"}}>Bottom</span></div>
                            <div style={{flex:"1",background:"#222",padding:"10px",color:"#fff",fontSize:"16px"}}>444 <span style={{fontSize:"8px",color:"#666",display:"block"}}>PX</span></div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#fff",fontSize:"11px",marginTop:"10px"}}>
                            <span>Background</span>
                            <div style={{width:"20px",height:"20px",background:"#fff",borderRadius:"4px"}}></div>
                        </div>
                        <div style={{background:"#222",height:"80px",display:"flex",justifyContent:"center",alignItems:"center",color:"#666",fontSize:"11px",marginTop:"10px",borderRadius:"4px",border:"1px dashed #444"}}>
                            or select from Unsplash
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*  Section: Featured Essays  */}
        <div className="project project-light project-custom" style={{padding:"100px 10%",position:"relative"}}>
            <div style={{marginBottom:"40px",borderBottom:"1px solid #111",paddingBottom:"20px"}}>
                <h2 style={{fontSize:"48px",fontWeight:"400",letterSpacing:"-1px",marginBottom:"5px"}}>Featured Essays</h2>
                <div style={{color:"#999",fontSize:"16px"}}>from the DESK blog</div>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px"}}>
                {/*  Essay 1  */}
                <div>
                    <div style={{width:"100%",aspectRatio:"1",background:"linear-gradient(135deg, #f5c25e, #f16628, #f8c983)",marginBottom:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        {/*  Soft abstract blurry center like image  */}
                        <div style={{width:"70%",height:"70%",background:"#eb3c1a",borderRadius:"50%",filter:"blur(25px)"}}></div>
                    </div>
                    <div style={{fontSize:"18px",color:"#111"}}>Dear young Designer</div>
                </div>
                
                {/*  Essay 2  */}
                <div>
                    <div style={{width:"100%",aspectRatio:"1",background:"#000",marginBottom:"15px",position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        {/*  abstract white scribbles  */}
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 20 Q 30 10, 50 50 T 100 80 M10 80 Q 40 90, 80 40 M0 50 Q 80 0, 100 50 M20 0 Q 30 100, 90 20 M10 40 Q 60 70, 90 0 M20 90 Q 50 10, 100 100 M 0 70 Q 50 30, 80 100 M 30 0 Q 60 40, 10 100 M 10 10 Q 90 90, 20 80 M 80 20 Q 10 90, 90 80" fill="none" stroke="#fff" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div style={{fontSize:"18px",color:"#111"}}>Breaking the algorithm</div>
                </div>

                {/*  Essay 3  */}
                <div>
                    <div style={{width:"100%",aspectRatio:"1",background:"#e5281a",marginBottom:"15px",position:"relative",overflow:"hidden"}}>
                        {/*  abstract shape  */}
                        <div style={{position:"absolute",top:"0",right:"0",width:"80%",height:"80%",background:"linear-gradient(135deg, #000, #111)",borderBottomLeftRadius:"100%",borderTopRightRadius:"50%",transform:"rotate(15deg) translate(10%, -10%)",boxShadow:"-10px 10px 30px rgba(0,0,0,0.5)"}}></div>
                        <div style={{position:"absolute",bottom:"10%",right:"10%",width:"50%",height:"50%",background:"#000",borderRadius:"50%",borderBottomRightRadius:"100%",transform:"scaleX(1.5) rotate(-30deg)"}}></div>
                    </div>
                    <div style={{fontSize:"18px",color:"#111"}}>Where are our design heroes?</div>
                </div>
            </div>
            
            <div style={{height:"100px"}}></div> {/*  Final padding  */}
        </div>

        {/*  Project: AD ASTRA  */}
        <div className="project project-custom" style={{backgroundColor:"#111"}}>
            <div className="graphic-showcase" style={{backgroundColor:"#1a1a1a",padding:"8vw"}}>
                <div className="graphic-canvas" style={{backgroundColor:"#d4d4d4",padding:"100px 0",maxWidth:"900px",position:"relative",overflow:"hidden"}}>
                    {/*  Room architecture shadows  */}
                    <div style={{position:"absolute",top:"0",left:"0",bottom:"0",width:"25%",background:"linear-gradient(to right, rgba(0,0,0,0.15), transparent)",borderRight:"1px solid rgba(0,0,0,0.05)"}}></div>
                    <div style={{position:"absolute",top:"40%",right:"-20%",width:"50%",height:"200%",background:"linear-gradient(135deg, rgba(0,0,0,0.2), transparent)",transform:"rotate(25deg)",pointerEvents:"none"}}></div>
                    
                    {/*  Poster  */}
                    <div style={{width:"420px",height:"650px",background:"#000",margin:"0 auto",boxShadow:"0 40px 80px rgba(0,0,0,0.5)",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",padding:"50px 30px"}}>
                        {/*  Matrix text lines mock  */}
                        <div style={{width:"100%",height:"60%",display:"flex",flexWrap:"wrap",alignContent:"flex-start",gap:"4px",opacity:"0.4"}}>
                            {/*  repeating block  */}
                            <div style={{width:"12px",height:"2px",background:"#fff"}}></div><div style={{width:"24px",height:"2px",background:"#fff"}}></div><div style={{width:"8px",height:"2px",background:"#fff"}}></div><div style={{width:"30px",height:"2px",background:"#fff"}}></div><div style={{width:"16px",height:"2px",background:"#fff"}}></div><div style={{width:"40px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"50px",height:"2px",background:"#fff"}}></div><div style={{width:"20px",height:"2px",background:"#fff"}}></div>
                            <div style={{width:"20px",height:"2px",background:"#fff"}}></div><div style={{width:"14px",height:"2px",background:"#fff"}}></div><div style={{width:"38px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"26px",height:"2px",background:"#fff"}}></div><div style={{width:"22px",height:"2px",background:"#fff"}}></div><div style={{width:"18px",height:"2px",background:"#fff"}}></div><div style={{width:"44px",height:"2px",background:"#fff"}}></div>
                            <div style={{width:"15px",height:"2px",background:"#fff"}}></div><div style={{width:"25px",height:"2px",background:"#fff"}}></div><div style={{width:"35px",height:"2px",background:"#fff"}}></div><div style={{width:"12px",height:"2px",background:"#fff"}}></div><div style={{width:"32px",height:"2px",background:"#fff"}}></div><div style={{width:"18px",height:"2px",background:"#fff"}}></div><div style={{width:"28px",height:"2px",background:"#fff"}}></div><div style={{width:"22px",height:"2px",background:"#fff"}}></div>
                            <div style={{width:"42px",height:"2px",background:"#fff"}}></div><div style={{width:"14px",height:"2px",background:"#fff"}}></div><div style={{width:"20px",height:"2px",background:"#fff"}}></div><div style={{width:"38px",height:"2px",background:"#fff"}}></div><div style={{width:"16px",height:"2px",background:"#fff"}}></div><div style={{width:"24px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"30px",height:"2px",background:"#fff"}}></div>
                            {/*  space  */}
                            <div style={{width:"100%",height:"10px"}}></div>
                            <div style={{width:"12px",height:"2px",background:"#fff"}}></div><div style={{width:"24px",height:"2px",background:"#fff"}}></div><div style={{width:"8px",height:"2px",background:"#fff"}}></div><div style={{width:"30px",height:"2px",background:"#fff"}}></div><div style={{width:"16px",height:"2px",background:"#fff"}}></div><div style={{width:"40px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"50px",height:"2px",background:"#fff"}}></div><div style={{width:"20px",height:"2px",background:"#fff"}}></div>
                            <div style={{width:"20px",height:"2px",background:"#fff"}}></div><div style={{width:"14px",height:"2px",background:"#fff"}}></div><div style={{width:"38px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"26px",height:"2px",background:"#fff"}}></div><div style={{width:"22px",height:"2px",background:"#fff"}}></div><div style={{width:"18px",height:"2px",background:"#fff"}}></div><div style={{width:"44px",height:"2px",background:"#fff"}}></div>
                            <div style={{width:"15px",height:"2px",background:"#fff"}}></div><div style={{width:"25px",height:"2px",background:"#fff"}}></div><div style={{width:"35px",height:"2px",background:"#fff"}}></div><div style={{width:"12px",height:"2px",background:"#fff"}}></div><div style={{width:"32px",height:"2px",background:"#fff"}}></div><div style={{width:"18px",height:"2px",background:"#fff"}}></div><div style={{width:"28px",height:"2px",background:"#fff"}}></div><div style={{width:"22px",height:"2px",background:"#fff"}}></div>
                            <div style={{width:"42px",height:"2px",background:"#fff"}}></div><div style={{width:"14px",height:"2px",background:"#fff"}}></div><div style={{width:"20px",height:"2px",background:"#fff"}}></div><div style={{width:"38px",height:"2px",background:"#fff"}}></div><div style={{width:"16px",height:"2px",background:"#fff"}}></div><div style={{width:"24px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"30px",height:"2px",background:"#fff"}}></div>
                            
                            <div style={{width:"100%",height:"20px"}}></div>
                            <div style={{width:"12px",height:"2px",background:"#fff"}}></div><div style={{width:"24px",height:"2px",background:"#fff"}}></div><div style={{width:"8px",height:"2px",background:"#fff"}}></div><div style={{width:"30px",height:"2px",background:"#fff"}}></div><div style={{width:"16px",height:"2px",background:"#fff"}}></div><div style={{width:"40px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"50px",height:"2px",background:"#fff"}}></div><div style={{width:"20px",height:"2px",background:"#fff"}}></div>
                            <div style={{width:"20px",height:"2px",background:"#fff"}}></div><div style={{width:"14px",height:"2px",background:"#fff"}}></div><div style={{width:"38px",height:"2px",background:"#fff"}}></div><div style={{width:"10px",height:"2px",background:"#fff"}}></div><div style={{width:"26px",height:"2px",background:"#fff"}}></div><div style={{width:"22px",height:"2px",background:"#fff"}}></div><div style={{width:"18px",height:"2px",background:"#fff"}}></div><div style={{width:"44px",height:"2px",background:"#fff"}}></div>
                        </div>
                        <div style={{marginTop:"auto",paddingBottom:"20px",width:"100%",borderBottom:"1px solid rgba(255,255,255,0.2)",marginBottom:"20px"}}></div>
                        <div style={{color:"#fff",fontSize:"52px",fontWeight:"800",letterSpacing:"2px",fontFamily:"var(--font-sans)",transform:"scaleX(1.2)"}}>AD ASTRA</div>
                    </div>
                </div>
            </div>

            <div className="project-meta" style={{borderTopColor:"rgba(255,255,255,0.1)",paddingTop:"60px"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{color:"#fff",fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong>AD ASTRA</strong> — A movie<br />poster for Brad Pitt's<br />cinematic venture into deep<br />space</h2>
                    <div className="project-tags" style={{color:"rgba(255,255,255,0.2)",marginTop:"20px"}}>Graphic Poster Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#666",fontSize:"16px"}}>The setting: deep space. The actor: Brad Pitt. The request: Design a poster for the film. Our work plays with white space and the acronym LOS, meaning Loss of Signal. While our designs were not ultimately the final poster, it was an honor to have our work considered for this film.</p>
                </div>
            </div>

            <div className="project-details" style={{marginTop:"100px"}}>
                <div style={{width:"100%",display:"flex",background:"#000",height:"500px"}}>
                    {/*  LOS Typography  */}
                    <div style={{flex:"2",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#000",position:"relative"}}>
                        {/*  Thick distorted text rows  */}
                        <div style={{fontSize:"260px",fontWeight:"900",lineHeight:"0.75",letterSpacing:"-8px",color:"#fff",transform:"scale(1.1, 1.4)",filter:"contrast(2)"}}>LOS</div>
                        {/*  Glitch line overlays  */}
                        <div style={{position:"absolute",top:"15%",width:"100%",height:"8px",background:"#000",opacity:"0.9"}}></div>
                        <div style={{position:"absolute",top:"25%",width:"100%",height:"4px",background:"#fff",opacity:"0.7"}}></div>
                        <div style={{position:"absolute",top:"35%",width:"100%",height:"12px",background:"#000",opacity:"0.95"}}></div>
                        <div style={{position:"absolute",top:"55%",left:"-20px",width:"105%",height:"10px",background:"#000",opacity:"0.9"}}></div>
                        <div style={{position:"absolute",top:"70%",right:"-20px",width:"101%",height:"8px",background:"#000",opacity:"1"}}></div>
                        <div style={{position:"absolute",top:"80%",width:"100%",height:"6px",background:"#fff",mixBlendMode:"overlay"}}></div>
                        <div style={{position:"absolute",top:"85%",width:"100%",height:"15px",background:"#000"}}></div>
                    </div>
                    {/*  Audio Wave  */}
                    <div style={{flex:"1",display:"flex",alignItems:"center",justifyContent:"center",borderLeft:"1px solid #1a1a1a"}}>
                        <svg width="150" height="400" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 0 L52 20 L40 30 L60 40 L45 50 L80 60 L30 70 L55 80 L20 100 L70 120 L45 140 L85 150 L55 160 L40 180 L60 200 L45 220 L65 240 L35 260 L50 300" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                {/*  Underneath image caption text  */}
                <div style={{display:"flex",gap:"20px",padding:"0 10%",marginTop:"20px",paddingBottom:"80px"}}>
                    <div style={{flex:"2",color:"#333",fontSize:"14px"}}>Details of the typography.</div>
                    <div style={{flex:"1",color:"#333",fontSize:"14px",paddingLeft:"20px"}}>Signal lost in space.</div>
                </div>
            </div>
        </div>

        {/*  Section: Random Artifacts  */}
        <div className="project project-custom" style={{padding:"100px 0 200px",backgroundColor:"#080808",position:"relative"}}>
            
            {/*  Sticky/Centered Title Block  */}
            <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"10"}}>
                {/*  the sticky wrapper  */}
                <div style={{position:"sticky",top:"40vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100px",margin:"0 auto",paddingRight:"50px"}}>
                    <div style={{display:"flex",gap:"-4px",marginBottom:"20px",alignItems:"center",justifyContent:"center",width:"100%",transform:"rotate(90deg) translateY(10px)"}}>
                        <div style={{width:"16px",height:"16px",border:"2px solid #ed4e23",borderRadius:"50%",opacity:"0.8"}}></div>
                        <div style={{width:"16px",height:"16px",border:"2px solid #5aa9e6",borderRadius:"50%",opacity:"0.8",marginLeft:"-8px"}}></div>
                        <div style={{width:"16px",height:"16px",border:"2px solid #fed926",borderRadius:"50%",opacity:"0.8",marginLeft:"-8px"}}></div>
                    </div>
                    <div style={{writingMode:"vertical-rl",transform:"rotate(180deg)",color:"#e5e5e5",fontSize:"16px",fontWeight:"500",letterSpacing:"1.5px",borderLeft:"1px solid #333",paddingLeft:"15px",height:"350px"}}>
                        Random artifacts<br />from the HOVS archive
                    </div>
                </div>
            </div>

            {/*  Masonry Grid  */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",padding:"0 10%",gap:"10vw",marginTop:"150px",position:"relative",zIndex:"2"}}>
                
                {/*  Left Column  */}
                <div style={{display:"flex",flexDirection:"column",gap:"200px"}}>
                    {/*  Sneaker  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%) contrast(1.1)",width:"100%",aspectRatio:"4/5",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px"}}>
                            <div style={{color:"#fff",fontSize:"12px",fontFamily:"Helvetica, sans-serif",padding:"30px",textAlign:"right",opacity:"0.8",fontWeight:"bold",letterSpacing:"1px"}}>"SHOELACES"</div>
                        </div>
                        <div style={{color:"#444",fontSize:"15px",marginTop:"25px",lineHeight:"1.6"}}>
                            Custom Sneaker, hand-made with love and tears<br />by me. Inspired by Virgil Abloh.
                        </div>
                    </div>

                    {/*  Red Quote  */}
                    <div style={{backgroundColor:"#da281d",width:"100%",aspectRatio:"0.8",padding:"60px 50px",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"}}>
                        <h3 style={{color:"#fff",fontSize:"40px",fontWeight:"700",lineHeight:"1.05",letterSpacing:"-2px",marginBottom:"40px",fontFamily:"var(--font-sans)"}}>
                            "If you want to be a<br />better designer, don't<br />study design books.<br />Study sculpture.<br />Study paintings.<br />Study cars, watches,<br />philosophers, movies,<br />fiction, music, people.<br /><br />Study the world."
                        </h3>
                        <div style={{position:"absolute",bottom:"30px",right:"30px",textAlign:"right",color:"rgba(0,0,0,0.6)",fontSize:"9px",fontWeight:"800",letterSpacing:"1px",lineHeight:"1.5"}}>
                            <svg width="40" height="20" viewBox="0 0 100 50" fill="currentColor" style={{marginBottom:"5px"}}>
                                <path d="M10 25 Q30 5 50 25 T90 25" fill="none" stroke="currentColor" strokeWidth="4"/>
                            </svg><br />
                            EXCERPT FROM A<br />RANDOM DESK BLOG POST
                        </div>
                    </div>
                    <div style={{color:"#444",fontSize:"15px",marginTop:"25px",lineHeight:"1.6"}}>
                        Poster designed for one of my essays.
                    </div>

                    {/*  MACBA Book  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1544411047-c45ba12bf5ce?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%)",width:"100%",aspectRatio:"4/5",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px",position:"relative"}}>
                            <div style={{position:"absolute",top:"30%",left:"10%",color:"#fff",fontFamily:"var(--font-sans)",fontSize:"60px",fontWeight:"800",lineHeight:"0.8",letterSpacing:"-2px"}}>MAC<br />&nbsp;&nbsp;BA</div>
                        </div>
                        <div style={{color:"#444",fontSize:"15px",marginTop:"25px",lineHeight:"1.6"}}>
                            Exploratory book cover design featuring<br />photograph from Barcelona MACBA architecture.
                        </div>
                    </div>

                    {/*  NASA Sneaker  */}
                    <div>
                        <div style={{backgroundColor:"#e5e5e5",width:"100%",aspectRatio:"1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"2px"}}>
                            {/*  White/Red Mockup Sneaker  */}
                            <div style={{width:"80%",paddingTop:"100%",backgroundImage:"url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%) contrast(1.5) sepia(100%) hue-rotate(-50deg) saturate(300%) brightness(1.2)",mixBlendMode:"multiply",transform:"rotate(-15deg)"}}></div>
                        </div>
                        <div style={{color:"#444",fontSize:"15px",marginTop:"25px",lineHeight:"1.6"}}>
                            Custom sneaker hand-made by myself. NASA inspired. Find<br />more at vanschneider.com/custom-sneakers.
                        </div>
                    </div>
                </div>

                {/*  Right Column  */}
                <div style={{display:"flex",flexDirection:"column",gap:"200px",paddingTop:"50vh"}}>
                    {/*  Beach  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%) contrast(1.2)",width:"100%",aspectRatio:"1",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px"}}></div>
                        <div style={{color:"#444",fontSize:"15px",marginTop:"25px",lineHeight:"1.6"}}>
                            Photograph of a beach in Iceland. It felt like being<br />on another planet. The sand is black due to the<br />volcanic ashes.
                        </div>
                    </div>

                    {/*  JPL Badge  */}
                    <div style={{width:"100%",aspectRatio:"1",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",marginTop:"100px"}}>
                        <div style={{width:"90%",height:"90%",borderRadius:"50%",border:"1px solid #333",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",background:"radial-gradient(circle, #222 0%, #080808 100%)"}}>
                            {/*  Circular Text Path  */}
                            <svg viewBox="0 0 200 200" width="100%" height="100%" style={{position:"absolute",top:"0",left:"0"}}>
                                <path id="curve-jpl" d="M 20 100 A 80 80 0 1 1 180 100 A 80 80 0 1 1 20 100" fill="transparent" />
                                <text font-family="var(--font-sans)" font-size="12" font-weight="700" fill="#666" letter-spacing="5.5">
                                    <textPath href="#curve-jpl" startOffset="0" text-anchor="start">
                                        SECRET ORDER FOR DARK MATTER & DARK ENERGY
                                    </textPath>
                                </text>
                            </svg>
                            {/*  Inner geometric shapes replicating badge details  */}
                            <div style={{position:"absolute",width:"65%",height:"65%",borderRadius:"50%",border:"1px solid #444",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <div style={{position:"absolute",width:"1px",height:"100%",background:"rgba(255,255,255,0.1)"}}></div>
                                <div style={{position:"absolute",height:"1px",width:"100%",background:"rgba(255,255,255,0.1)"}}></div>
                                <div style={{position:"absolute",width:"70%",height:"70%",borderRadius:"50%",border:"1px dashed rgba(255,255,255,0.2)"}}></div>
                                <svg width="50%" height="50%" viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="1.5">
                                    <circle cx="50" cy="30" r="10" fill="#222" stroke="#fff"/>
                                    <circle cx="50" cy="30" r="3" fill="#fff" />
                                    <path d="M30 20 Q50 5 70 20" />
                                    <path d="M40 50 L60 50 L60 70 A10 10 0 0 1 40 70 Z" />
                                    <path d="M40 85 L60 85 L50 100 Z" fill="#fff"/>
                                </svg>
                                <div style={{position:"absolute",top:"0",left:"0",width:"50%",height:"100%",overflow:"hidden",borderRadius:"50% 0 0 50%",opacity:"0.3"}}>
                                    <div style={{width:"200%",height:"200%",backgroundImage:"radial-gradient(circle at center, #fff 10%, transparent 10%), radial-gradient(circle at center, #fff 10%, transparent 10%)",backgroundSize:"10px 10px",backgroundPosition:"0 0, 5px 5px",transform:"rotate(45deg)"}}></div>
                                </div>
                            </div>
                            <div style={{position:"absolute",bottom:"15%",fontSize:"18px",fontWeight:"800",color:"#fff",background:"#080808",padding:"2px 15px",letterSpacing:"3px",border:"1px solid #333"}}>JPL</div>
                        </div>
                    </div>
                    <div style={{color:"#444",fontSize:"15px",marginTop:"25px",lineHeight:"1.6"}}>
                        Badge design to celebrate 80th anniversary of JPL,<br />the founding agency of NASA. Designed in<br />collaboration with Verena Michelitsch.
                    </div>

                    {/*  Red Structure  */}
                    <div>
                        <div style={{backgroundColor:"#ba1313",width:"100%",aspectRatio:"4/5",display:"flex",justifyContent:"flex-start",alignItems:"flex-end",borderRadius:"2px",padding:"40px",boxShadow:"inset -20px 20px 100px rgba(0,0,0,0.5)",overflow:"hidden"}}>
                            {/*  abstract folded paper mock  */}
                            <div style={{display:"flex",flexDirection:"column",width:"120%",gap:"12px",transform:"rotate(35deg) translateY(100px) translateX(-50px)"}}>
                                <div style={{height:"25px",background:"#600000",boxShadow:"0 8px 15px rgba(0,0,0,0.5)"}}></div>
                                <div style={{height:"25px",background:"#700000",boxShadow:"0 8px 15px rgba(0,0,0,0.5)"}}></div>
                                <div style={{height:"25px",background:"#800000",boxShadow:"0 8px 15px rgba(0,0,0,0.5)"}}></div>
                                <div style={{height:"25px",background:"#900000",boxShadow:"0 8px 15px rgba(0,0,0,0.5)"}}></div>
                                <div style={{height:"25px",background:"#a00000",boxShadow:"0 8px 15px rgba(0,0,0,0.5)"}}></div>
                                <div style={{height:"25px",background:"#b00000",boxShadow:"0 8px 15px rgba(0,0,0,0.5)"}}></div>
                                <div style={{height:"200px",background:"#c00000",boxShadow:"0 8px 15px rgba(0,0,0,0.5)"}}></div>
                            </div>
                        </div>
                    </div>

                    {/*  Black Sweatshirt  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%) contrast(1.2)",width:"100%",aspectRatio:"1",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px"}}></div>
                        <div style={{color:"#444",fontSize:"15px",marginTop:"25px",lineHeight:"1.6"}}>
                            Limited Edition sweatshirt designed by yours<br />truly, in collaboration with Unsplash. Only 500<br />were ever made, and all sold out.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/*  Project: Carbonmade (Purple Section)  */}
        <div className="project project-custom" style={{backgroundColor:"#a47ac4",paddingBottom:"0"}}>
            <div className="graphic-showcase" style={{backgroundColor:"transparent",padding:"100px 10% 0"}}>
                <div className="graphic-canvas" style={{backgroundColor:"#A6D0CD",width:"100%",aspectRatio:"16/9",maxWidth:"none",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}}>
                    {/*  3D Bird Character Mockup  */}
                    <div style={{width:"140px",height:"260px",background:"#b0d664",borderRadius:"125px",boxShadow:"inset -10px -10px 30px rgba(0,0,0,0.3), inset 10px 10px 30px rgba(255,255,255,0.5), 0 30px 40px rgba(0,0,0,0.2)",position:"relative",zIndex:"1"}}>
                        {/*  Eye  */}
                        <div style={{position:"absolute",right:"10px",top:"80px",width:"40px",height:"40px",background:"#fff",borderRadius:"50%",boxShadow:"0 5px 10px rgba(0,0,0,0.2)",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <div style={{width:"15px",height:"15px",background:"#000",borderRadius:"50%"}}></div>
                        </div>
                        {/*  Beak  */}
                        <div style={{position:"absolute",right:"-25px",top:"110px",width:"30px",height:"15px",background:"#fecb40",borderRadius:"20px"}}></div>
                        {/*  Hair  */}
                        <div style={{position:"absolute",top:"-30px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px"}}>
                            <div style={{width:"15px",height:"40px",background:"#9686bc",borderRadius:"20px",transform:"rotate(-20deg)"}}></div>
                            <div style={{width:"15px",height:"50px",background:"#9686bc",borderRadius:"20px"}}></div>
                            <div style={{width:"15px",height:"40px",background:"#9686bc",borderRadius:"20px",transform:"rotate(20deg)"}}></div>
                        </div>
                        {/*  Legs  */}
                        <div style={{position:"absolute",bottom:"-30px",left:"40px",width:"8px",height:"40px",background:"#e5b05c"}}></div>
                        <div style={{position:"absolute",bottom:"-30px",right:"40px",width:"8px",height:"40px",background:"#e5b05c"}}></div>
                        <div style={{position:"absolute",bottom:"-30px",left:"25px",width:"15px",height:"5px",background:"#e5b05c",borderRadius:"5px"}}></div>
                        <div style={{position:"absolute",bottom:"-30px",right:"25px",width:"15px",height:"5px",background:"#e5b05c",borderRadius:"5px"}}></div>
                    </div>
                    {/*  Carbonmade Logo Text  */}
                    <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",zIndex:"2"}}>
                        <h1 style={{fontFamily:"var(--font-sans)",fontSize:"14vw",fontWeight:"800",color:"#fff",letterSpacing:"-2px",textShadow:"0 10px 30px rgba(0,0,0,0.1)",marginBottom:"-5vw",lineHeight:"1"}}>CARBON</h1>
                        <h2 style={{fontFamily:"'Brush Script MT', cursive, var(--font-serif)",fontSize:"8vw",color:"#fff",marginLeft:"20vw",textShadow:"0 5px 20px rgba(0,0,0,0.1)",transform:"rotate(-5deg)"}}>made</h2>
                    </div>
                </div>
            </div>

            <div className="project-meta" style={{padding:"60px 10%",borderTopColor:"rgba(0,0,0,0.15)"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{color:"#111",fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong>CARBONMADE</strong> — Helping<br />creatives show off their<br />work since 2005</h2>
                    <div className="project-tags" style={{color:"#fff",marginTop:"20px",opacity:"0.8"}}>Brand Identity, Product Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#444",fontSize:"16px"}}>Carbonmade is an institution in the creative community, powering more than 2 million portfolios since before Twitter and the iPhone existed. I came on board as partner in 2018 and led Carbonmade through a complete redesign and rebrand. I now manage Carbonmade's product design and identity.</p>
                    <a href="#" className="project-link" style={{color:"#111",borderBottomColor:"rgba(0,0,0,0.2)",fontWeight:"600",textDecoration:"none",paddingBottom:"5px",borderBottom:"2px solid rgba(0,0,0,0.2)"}}>Visit carbonmade.com</a>
                </div>
            </div>

            <div className="project-details" style={{padding:"0 10%",marginTop:"40px",paddingBottom:"120px"}}>
                <div style={{width:"100%",display:"flex",height:"500px",boxShadow:"0 30px 60px rgba(0,0,0,0.2)"}}>
                    <div style={{flex:"2",background:"#e0f2f8",display:"flex",justifyContent:"center",alignItems:"flex-end",overflow:"hidden",paddingTop:"60px",position:"relative"}}>
                        {/*  Browser Window Mockup  */}
                        <div style={{width:"80%",height:"90%",background:"#fbfbfb",borderRadius:"8px 8px 0 0",boxShadow:"0 10px 40px rgba(0,0,0,0.1)",display:"flex",flexDirection:"column"}}>
                            {/*  Browser Chrome  */}
                            <div style={{height:"40px",borderBottom:"1px solid #eee",display:"flex",alignItems:"center",padding:"0 20px",gap:"8px"}}>
                                <div style={{width:"10px",height:"10px",background:"#e0e0e0",borderRadius:"50%"}}></div>
                                <div style={{width:"10px",height:"10px",background:"#e0e0e0",borderRadius:"50%"}}></div>
                                <div style={{width:"10px",height:"10px",background:"#e0e0e0",borderRadius:"50%"}}></div>
                            </div>
                            <div style={{padding:"30px",flex:"1",position:"relative"}}>
                                <div style={{fontSize:"24px",fontFamily:"var(--font-sans)",fontWeight:"800",letterSpacing:"-1px",marginBottom:"30px",color:"#111"}}>zoe carbina</div>
                                <div style={{position:"absolute",right:"30px",top:"35px",display:"flex",gap:"5px",flexDirection:"column"}}>
                                    <div style={{width:"25px",height:"2px",background:"#111"}}></div>
                                    <div style={{width:"25px",height:"2px",background:"#111"}}></div>
                                    <div style={{width:"25px",height:"2px",background:"#111"}}></div>
                                </div>
                                <div style={{width:"250px",height:"250px",background:"#A6D0CD",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"flex-end",paddingBottom:"20px"}}>
                                     <div style={{width:"60px",height:"160px",background:"#b0d664",borderRadius:"60px",boxShadow:"inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 15px rgba(255,255,255,0.4)",position:"relative"}}>
                                        <div style={{position:"absolute",right:"5px",top:"40px",width:"15px",height:"15px",background:"#fff",borderRadius:"50%",boxShadow:"0 2px 5px rgba(0,0,0,0.2)",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <div style={{width:"6px",height:"6px",background:"#000",borderRadius:"50%"}}></div>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex:"1",background:"#4b3164",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div style={{width:"120px",height:"120px",background:"#fff",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"'Brush Script MT', cursive",fontSize:"70px",fontWeight:"bold",color:"#111",paddingTop:"10px"}}>m</div>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px",color:"#fff",opacity:"0.8",fontSize:"14px",fontWeight:"500"}}>
                    <div>Show Off Your Work® with Carbonmade.</div>
                    <div>The Carbonmade Interface.</div>
                </div>
            </div>
        </div>

        {/*  Section: Memomi  */}
        <div className="project project-custom" style={{padding:"0",backgroundColor:"#1a1a1a"}}>
            <div style={{width:"100%",aspectRatio:"16/9",maxHeight:"900px",background:"#111",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",position:"relative"}}>
                {/*  Dark sleek product geometry mockup  */}
                <div style={{width:"150%",height:"200%",background:"radial-gradient(circle at center, #222, #000)",position:"absolute",top:"50%",left:"0%",transform:"rotate(15deg) translateY(-50%)",opacity:"0.6"}}></div>
                <div style={{width:"90%",height:"100%",background:"linear-gradient(-45deg, #0a0a0a, #2a2a2a)",position:"absolute",bottom:"-30%",left:"-10%",borderRadius:"10% 40% 10% 10%",boxShadow:"inset 20px 20px 80px rgba(255,255,255,0.05), inset -20px -20px 80px rgba(0,0,0,0.9), 0 -20px 50px rgba(0,0,0,0.8)"}}>
                    <div style={{color:"#fff",fontFamily:"var(--font-sans)",fontSize:"20px",fontWeight:"300",letterSpacing:"4px",position:"absolute",top:"35%",left:"25%",transform:"rotate(-35deg)",opacity:"0.6"}}>memomi</div>
                    <div style={{position:"absolute",top:"30%",left:"35%",width:"40%",height:"20%",backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)",backgroundSize:"4px 4px",transform:"rotate(-35deg)",opacity:"0.5"}}></div>
                    <div style={{position:"absolute",bottom:"15%",right:"30%",width:"30px",height:"10px",borderRadius:"10px",background:"#000",boxShadow:"inset 0 2px 5px rgba(0,0,0,1)"}}></div>
                </div>
            </div>
            
            <div className="project-meta" style={{padding:"60px 10%",borderTopColor:"rgba(255,255,255,0.05)"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{color:"#fff",fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong>Memomi</strong> — Reinventing the<br />luxury shopping experience<br />with a new high-end digital<br />mirror</h2>
                    <div className="project-tags" style={{color:"rgba(255,255,255,0.4)",marginTop:"20px"}}>Advisor, Creative Director</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#bbb",fontSize:"16px"}}>Memomi created the world's first digital mirror software platform called Memory Mirror. I overseeing the user experience, brand creative and ever-evolving product design. Memomi launched with partners such as Intel, IBM, Sony and Panasonic, and now appears in high-end stores like Neiman Marcus.</p>
                    <a href="#" className="project-link" style={{color:"#fff",borderBottomColor:"rgba(255,255,255,0.2)"}}>Visit memomi.co</a>
                </div>
            </div>

            <div className="project-details" style={{padding:"0 10%",marginTop:"40px",paddingBottom:"120px"}}>
                <div style={{display:"flex",height:"500px",gap:"2vw"}}>
                    {/*  Left Memomi Logo Canvas  */}
                    <div style={{flex:"1.5",background:"#000",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h1 style={{color:"#fff",fontFamily:"var(--font-sans)",fontSize:"5vw",fontWeight:"300",letterSpacing:"5px",position:"relative"}}>mem<span style={{position:"relative",top:"10px"}}>o</span>mi<span style={{fontSize:"20px",position:"absolute",top:"-10px",right:"-25px"}}>&#174;</span></h1>
                    </div>
                    {/*  Right Mirror UI  */}
                    <div style={{flex:"1",background:"#111",display:"flex",justifyContent:"center",alignItems:"flex-end",padding:"20px",paddingBottom:"0"}}>
                        <div style={{width:"90%",height:"95%",backgroundImage:"url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80')",backgroundSize:"cover",backgroundPosition:"center",border:"12px solid #222",borderBottom:"0",borderRadius:"4px 4px 0 0",position:"relative"}}>
                            <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",background:"linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)"}}></div>
                            <div style={{position:"absolute",top:"20px",left:"0",width:"100%",textAlign:"center",color:"#fff"}}>
                                <div style={{fontSize:"10px",letterSpacing:"2px"}}>memomi</div>
                                <div style={{fontSize:"22px",fontWeight:"600",lineHeight:"1.1",marginTop:"10px"}}>Realistic<br />Live Makeover<br />in Seconds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*  Section: Random Artifacts 2 (Dark)  */}
        <div className="project project-custom" style={{padding:"100px 0 200px",backgroundColor:"#0c0c0e",position:"relative"}}>
            
            {/*  Sticky/Centered Title Block  */}
            <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"10"}}>
                <div style={{position:"sticky",top:"40vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100px",margin:"0 auto",paddingRight:"50px"}}>
                    <div style={{display:"flex",gap:"-4px",marginBottom:"20px",alignItems:"center",justifyContent:"center",width:"100%",transform:"rotate(90deg) translateY(10px)"}}>
                        <div style={{width:"16px",height:"16px",border:"2px solid #ed4e23",borderRadius:"50%",opacity:"0.8"}}></div>
                        <div style={{width:"16px",height:"16px",border:"2px solid #5aa9e6",borderRadius:"50%",opacity:"0.8",marginLeft:"-8px"}}></div>
                        <div style={{width:"16px",height:"16px",border:"2px solid #fed926",borderRadius:"50%",opacity:"0.8",marginLeft:"-8px"}}></div>
                    </div>
                    <div style={{writingMode:"vertical-rl",transform:"rotate(180deg)",color:"#e5e5e5",fontSize:"16px",fontWeight:"500",letterSpacing:"1.5px",borderLeft:"1px solid #333",paddingLeft:"15px",height:"350px"}}>
                        Random artifacts<br />from the HOVS archive
                    </div>
                </div>
            </div>
            {/*  Dual-Row Infinite Anti-Grid Marquee  */}
            <div className="marquee-wrapper">
                <div className="marquee-row left">
                    {/*  Cloned items to ensure seamless endless horizontal scrolling  */}
                    <div className="marquee-item">
                        <img src="https://images.unsplash.com/photo-1542382156909-92f9d6c42171?auto=format&fit=crop&w=400&q=80" alt="Process shot" />
                        <span>The Praxis Series</span>
                        <img src="https://images.unsplash.com/photo-1563284587-f273be8cc8bb?auto=format&fit=crop&w=400&q=80" alt="Design sketch" />
                        <span>Semplice V6</span>
                        <img src="https://images.unsplash.com/photo-1542382156909-92f9d6c42171?auto=format&fit=crop&w=400&q=80" alt="Process shot" />
                        <span>The Praxis Series</span>
                        <img src="https://images.unsplash.com/photo-1563284587-f273be8cc8bb?auto=format&fit=crop&w=400&q=80" alt="Design sketch" />
                        <span>Semplice V6</span>
                    </div>
                </div>
                {/*  Opposite Direction Row  */}
                <div className="marquee-row right">
                    {/*  Opposing content block  */}
                    <div className="marquee-item">
                        <span>Carbonmade 4</span>
                        <img src="https://images.unsplash.com/photo-1577083656158-7578ec6e8a09?auto=format&fit=crop&w=400&q=80" alt="Material study" />
                        <span>Mymind Updates</span>
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" alt="Studio space" />
                        <span>Carbonmade 4</span>
                        <img src="https://images.unsplash.com/photo-1577083656158-7578ec6e8a09?auto=format&fit=crop&w=400&q=80" alt="Material study" />
                        <span>Mymind Updates</span>
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" alt="Studio space" />
                    </div>
                </div>
            </div>

            {/*  Masonry Grid 2  */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",padding:"0 10%",gap:"10vw",marginTop:"100px",position:"relative",zIndex:"2"}}>
                
                {/*  Left Column  */}
                <div style={{display:"flex",flexDirection:"column",gap:"200px"}}>
                    
                    {/*  Business Cards  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1589041127566-f084ba4fa41a?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%)",width:"100%",aspectRatio:"4/5",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px"}}></div>
                        <div style={{color:"#666",fontSize:"14px",marginTop:"25px",lineHeight:"1.6"}}>
                            Business cards designer for myself, HOVS. Printed<br />and designed back in 2012.
                        </div>
                    </div>

                    {/*  Yellow Poster  */}
                    <div style={{backgroundColor:"#ffd600",width:"100%",aspectRatio:"0.7",padding:"50px 40px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <p style={{color:"#111",fontSize:"13px",fontWeight:"600",lineHeight:"1.8",textAlign:"justify",wordSpacing:"2px"}}>
                            You've loved this since you were a kid. You didn't color inside<br />
                            the lines, you drew your own pictures. You were a daydreamer.<br />
                            You did your reading assignments. but your own stories were<br />
                            better. You grew up. You made posters for your band. you<br />
                            published a zine. you learned just enough HTML &amp; CSS to be<br />
                            dangerous. You took up painting. You took up photography. You<br />
                            fell in love with architecture. with fashion. with films. You worked<br />
                            late into the night just for the fun of it. You got a job. You learned<br />
                            about process. about "due EOD." You followed best practice.<br />
                            You followed the project brief. You did one, two, three rounds of<br />
                            revisions. You made the logo pop. You made the logo bigger.<br />
                            You optimized. you tested. You were productive. efficient. you<br />
                            came in under hours. You pitched countless ideas that never<br />
                            saw the light of day. You rarely saw daylight yourself. You got<br />
                            tired. You wondered how early was too early for a mid-life crisis.<br />
                            You thought about quitting and working on a farm. doing<br />
                            something with your hands. You forgot why you got into this in<br />
                            the first place -- you love to create.
                        </p>
                        <h4 style={{color:"#111",fontSize:"18px",fontWeight:"800",marginTop:"60px",letterSpacing:"-0.5px"}}>Make something beautiful, for yourself.</h4>
                    </div>

                    {/*  Singapore Towers  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1542617505-591b942fe2ae?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%)",width:"100%",aspectRatio:"4/5",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px"}}></div>
                        <div style={{color:"#666",fontSize:"14px",marginTop:"25px",lineHeight:"1.6"}}>
                            Photograph of apartment towers in Singapore.
                        </div>
                    </div>

                    {/*  Necklace  */}
                    <div>
                        <div style={{backgroundColor:"#d4d4d4",width:"100%",aspectRatio:"1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"2px",position:"relative"}}>
                            <div style={{width:"120px",height:"120px",border:"4px solid #fff",transform:"rotate(45deg)",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}}></div>
                        </div>
                        <div style={{color:"#666",fontSize:"14px",marginTop:"25px",lineHeight:"1.6"}}>
                            House of van Schneider Necklace concept featuring the HOVS<br />logo.
                        </div>
                    </div>
                </div>

                {/*  Right Column  */}
                <div style={{display:"flex",flexDirection:"column",gap:"200px",paddingTop:"30vh"}}>
                    
                    {/*  Marble Skateboard  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1520045892556-9d8dd3bc8547?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(100%) contrast(1.2)",width:"100%",aspectRatio:"1",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px"}}></div>
                        <div style={{color:"#666",fontSize:"14px",marginTop:"25px",lineHeight:"1.6"}}>
                            A skateboard made out of marble. A concept.
                        </div>
                    </div>

                    {/*  App Mockup  */}
                    <div>
                        <div style={{backgroundColor:"#050505",width:"100%",aspectRatio:"4/5",display:"flex",justifyContent:"center",alignItems:"flex-end"}}>
                            <div style={{width:"70%",height:"85%",borderRadius:"30px 30px 0 0",border:"8px solid #222",borderBottom:"0",background:"#111",position:"relative"}}>
                                {/*  App interface mock  */}
                                <div style={{position:"absolute",top:"10%",width:"100%",textAlign:"center",color:"#fff"}}>
                                    <div style={{fontSize:"12px",opacity:"0.5"}}>&lt; END TRACK</div>
                                    <div style={{fontSize:"20px",fontWeight:"600",marginTop:"20px"}}>Breath, Body &amp; Beat</div>
                                    <div style={{fontSize:"14px",opacity:"0.5",marginTop:"5px"}}>First Drop</div>
                                </div>
                                <div style={{position:"absolute",top:"45%",left:"50%",transform:"translate(-50%, -50%)",width:"80px",height:"80px",background:"#e5ff00",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 0 1px #fff, 0 0 40px rgba(229,255,0,0.2)"}}>
                                    <div style={{width:"25px",height:"25px",borderLeft:"5px solid #000",borderRight:"5px solid #000"}}></div>
                                </div>
                                <div style={{position:"absolute",top:"60%",width:"100%",textAlign:"center",color:"#fff",fontSize:"12px",letterSpacing:"2px",fontWeight:"800"}}>PLAYBACK SETTINGS</div>
                            </div>
                        </div>
                        <div style={{color:"#666",fontSize:"14px",marginTop:"25px",lineHeight:"1.6"}}>
                            App design for Wave Meditation.
                        </div>
                    </div>

                    {/*  Beard Oil  */}
                    <div>
                        <div style={{backgroundColor:"#111",width:"100%",aspectRatio:"1",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                            {/*  Cylinder Mock  */}
                            <div style={{width:"65%",height:"120%",background:"linear-gradient(to right, #050505 0%, #333 50%, #050505 100%)",borderRadius:"10px",transform:"rotate(15deg)",boxShadow:"10px 10px 40px rgba(0,0,0,0.8)"}}>
                                <div style={{position:"absolute",top:"40%",left:"10%",color:"#fff",fontFamily:"var(--font-sans)",letterSpacing:"5px",fontSize:"30px"}}>B L A C K</div>
                                <div style={{position:"absolute",top:"65%",left:"20%",color:"#fff",fontSize:"11px",fontFamily:"var(--font-sans)",letterSpacing:"3px",textAlign:"center",opacity:"0.8"}}>BEARD OIL<br />&amp; SKIN CARE<br /><span style={{fontSize:"8px"}}>1 FL. OZ. / 30ML</span></div>
                            </div>
                        </div>
                        <div style={{color:"#666",fontSize:"14px",marginTop:"25px",lineHeight:"1.6"}}>
                            Product photograph of solid cologne designed by<br />HOVS, in collaboration with Beardbrand.
                        </div>
                    </div>

                    {/*  Porsche  */}
                    <div>
                        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1544839655-6b541d4013ea?auto=format&fit=crop&w=600&q=80')",width:"100%",aspectRatio:"1",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"2px"}}></div>
                        <div style={{color:"#666",fontSize:"14px",marginTop:"25px",lineHeight:"1.6"}}>
                            Photograph of classic Porsche.
                        </div>
                    </div>

                </div>
            </div>
            
            </div>
            
        </div>

        {/*  Section: 3 ROOMS  */}
        <div className="project project-custom" style={{padding:"0",backgroundColor:"#bdc0af"}}>
            {/*  Main Hero Image  */}
            <div style={{width:"100%",aspectRatio:"16/9",maxHeight:"900px",backgroundImage:"url('https://images.unsplash.com/photo-1549492423-400259a2e574?auto=format&fit=crop&w=1200&q=80')",backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",filter:"contrast(1.1)"}}>
                {/*  Added a darker overlay to make white text pop more if needed  */}
                <div style={{position:"absolute",width:"100%",height:"100%",background:"linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)",pointerEvents:"none"}}></div>
                
                <div style={{fontFamily:"var(--font-serif)",fontSize:"4vw",color:"#fff",letterSpacing:"2px",textShadow:"0 5px 20px rgba(0,0,0,0.5)",display:"flex",alignItems:"center",gap:"40px",position:"relative",zIndex:"1"}}>
                    <span>THREE</span>
                    {/*  CSS Interlocking Logo mock  */}
                    <div style={{width:"15vh",height:"15vh",position:"relative"}}>
                        <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="2" style={{width:"100%",height:"100%",filter:"drop-shadow(0 2px 10px rgba(0,0,0,0.5))"}}>
                            <path d="M50 20 C60 10, 80 10, 80 30 C80 50, 50 50, 50 80 C50 50, 20 50, 20 30 C20 10, 40 10, 50 20 Z" />
                            <path d="M20 50 C10 40, 10 20, 30 20 C50 20, 50 50, 80 50 C50 50, 50 80, 30 80 C10 80, 10 60, 20 50 Z" />
                        </svg>
                    </div>
                    <span>ROOMS</span>
                </div>
            </div>

            {/*  Metadata Row  */}
            <div className="project-meta" style={{padding:"60px 10%",borderTopColor:"rgba(0,0,0,0.1)",alignItems:"flex-start"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{color:"#444",fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong>3 ROOMS</strong> — Creating a<br />transportive digital art<br />gallery that celebrates the<br />early internet</h2>
                    <div className="project-tags" style={{color:"#666",marginTop:"20px"}}>Brand, Storytelling, Webdesign</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#555",fontSize:"16px"}}>It started when we commissioned artist Jesperish to create three pieces of artwork incorporating the HOVS Identity. Then it became bigger. We designed and built three rooms (works of art in themselves, in 40K pixel resolution) to feature each piece of art. Why? For pure fun &amp; curiosity, like the good old days.</p>
                    <a href="#" className="project-link" style={{color:"#444",borderBottomColor:"rgba(0,0,0,0.2)"}}>Visit Three Rooms</a>
                </div>
            </div>

            {/*  Side by Side Images  */}
            <div style={{display:"flex",gap:"4vw",padding:"0 10%",marginTop:"40px",paddingBottom:"120px"}}>
                <div style={{flex:"1"}}>
                    <div style={{backgroundColor:"#000",width:"100%",aspectRatio:"4/3",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                        {/*  Gold 3d logo mock inside black bg  */}
                        <div style={{width:"50%",height:"50%",filter:"drop-shadow(0 0 10px rgba(255,215,0,0.3))",display:"flex",justifyContent:"center",alignItems:"center"}}>
                             <svg viewBox="0 0 100 100" fill="none" stroke="#d4af37" strokeWidth="1.5" style={{width:"100%",height:"100%"}}>
                                <path d="M50 20 C60 10, 80 10, 80 30 C80 50, 50 50, 50 80 C50 50, 20 50, 20 30 C20 10, 40 10, 50 20 Z" />
                                <path d="M20 50 C10 40, 10 20, 30 20 C50 20, 50 50, 80 50 C50 50, 50 80, 30 80 C10 80, 10 60, 20 50 Z" />
                                <circle cx="50" cy="50" r="40" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.5"/>
                            </svg>
                        </div>
                    </div>
                    <div style={{color:"#666",fontSize:"14px",marginTop:"20px"}}>The HOVS museum experience.</div>
                </div>
                <div style={{flex:"1"}}>
                    <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1510414169736-224855d0ce18?auto=format&fit=crop&w=600&q=80')",filter:"grayscale(50%) sepia(20%)",width:"100%",aspectRatio:"4/3",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                    <div style={{color:"#666",fontSize:"14px",marginTop:"20px"}}>Room Nr. 3, the paradise.</div>
                </div>
            </div>
        </div>

        {/*  Section: Spotify  */}
        <div className="project project-custom" style={{padding:"0",backgroundColor:"#47d163"}}>
            <div style={{padding:"100px 10% 0"}}>
                <div style={{backgroundColor:"#000",width:"100%",aspectRatio:"16/9",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    {/*  Spotify Logo Mock  */}
                    <div style={{display:"flex",alignItems:"center",gap:"20px",color:"#47d163"}}>
                        <svg viewBox="0 0 100 100" width="10vw" height="10vw" fill="currentColor">
                            <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm22.9 72c-1.1 1.8-3.4 2.4-5.2 1.3-14.3-8.8-32.3-10.8-48.4-5.9-2 .6-4-1-4.6-3-.6-2 1-4 3-4.6 18.2-5.5 38.3-3.2 54 6.5 1.8 1.1 2.3 3.4 1.2 5.2zm7.4-16.5c-1.3 2.1-4.2 2.9-6.3 1.5-16.4-10-41.5-13-56.5-7.1-2.4.9-5-1-5.9-3.4-.9-2.4 1-5 3.4-5.9 17.5-6.8 45.4-3.4 63.8 7.8 2.1 1.4 2.8 4.2 1.5 6.3zm.5-17.1C61 26.6 35.4 25.7 20.6 30.2c-3 1-6.1-1.3-7.1-4.3-.9-3 1.3-6.1 4.3-7.1 17.5-5.2 46.2-4.1 68.7 9.2 2.7 1.6 3.6 5 2 7.7-1.6 2.7-5 3.6-7.7 2z"/>
                        </svg>
                        <h1 style={{fontFamily:"var(--font-sans)",fontSize:"8vw",fontWeight:"700",letterSpacing:"-3px",margin:"0"}}>Spotify</h1>
                    </div>
                </div>
            </div>

            {/*  Metadata Row  */}
            <div className="project-meta" style={{padding:"60px 10%",borderTopColor:"rgba(0,0,0,0.1)",alignItems:"flex-start"}}>
                <div className="project-meta-left">
                    <h2 className="project-title" style={{color:"#fff",fontSize:"38px",letterSpacing:"-1px",lineHeight:"1"}}><strong>Spotify</strong> — Designing a<br />music brand and product for<br />millions of loyal users around<br />the world</h2>
                    <div className="project-tags" style={{color:"rgba(0,0,0,0.4)",marginTop:"20px"}}>Brand Identity, Product Design</div>
                </div>
                <div className="project-meta-right">
                    <p className="project-desc" style={{color:"#111",fontSize:"16px"}}>I worked for three years on the Spotify brand and product design, guiding Spotify through a major rebrand as the company tripled in size to more than 80 million users. I also worked on the Spotify Innovation Team, establishing and implementing Spotify's first design guidelines and designing future products.</p>
                </div>
            </div>

            {/*  Dashboards  */}
            <div style={{padding:"0 10%",marginTop:"40px",paddingBottom:"120px",display:"flex",flexDirection:"column",gap:"10px"}}>
                <div style={{display:"flex",height:"500px",width:"100%"}}>
                    {/*  Desktop UI Mock  */}
                    <div style={{flex:"2",backgroundColor:"#f7dcd5",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div style={{width:"80%",height:"60%",background:"#2b2e4a",borderRadius:"8px",boxShadow:"0 20px 50px rgba(0,0,0,0.3)",display:"flex",overflow:"hidden"}}>
                            <div style={{flex:"1",position:"relative",overflow:"hidden"}}>
                                <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",background:"radial-gradient(circle at 30% 70%, #d83f5e, #2b2e4a)",opacity:"0.8"}}></div>
                                {/*  Content overlay  */}
                                <div style={{position:"absolute",top:"30%",left:"0",width:"100%",textAlign:"center",color:"#fff"}}>
                                    <div style={{fontSize:"10px",opacity:"0.8",letterSpacing:"1px"}}>New on Spotify?</div>
                                    <div style={{fontSize:"40px",fontWeight:"800",lineHeight:"1.1",marginTop:"10px"}}>Only one<br />step away.</div>
                                </div>
                            </div>
                            {/*  Login Panel  */}
                            <div style={{width:"250px",background:"#1a1c29",padding:"30px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"15px"}}>
                                <div style={{width:"100%",padding:"10px",background:"#1e3264",color:"#fff",fontSize:"10px",textAlign:"center",borderRadius:"20px"}}>LOGIN WITH FACEBOOK</div>
                                <div style={{color:"#666",fontSize:"10px"}}>or</div>
                                <div style={{width:"100%",height:"30px",background:"#2a2c39",borderRadius:"4px"}}></div>
                                <div style={{width:"100%",height:"30px",background:"#2a2c39",borderRadius:"4px"}}></div>
                                <div style={{width:"100%",padding:"10px",border:"1px solid #1db954",color:"#1db954",fontSize:"10px",textAlign:"center",borderRadius:"20px",marginTop:"10px"}}>START PLAYING</div>
                            </div>
                        </div>
                    </div>
                    {/*  Mobile UI Mock  */}
                    <div style={{flex:"1",backgroundColor:"#2b3576",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div style={{width:"60%",height:"80%",background:"#000",borderRadius:"4px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",padding:"20px"}}>
                            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                <div style={{width:"30px",height:"30px",background:"#333",borderRadius:"50%"}}></div>
                                <div style={{color:"#fff",fontSize:"10px",lineHeight:"1.2"}}>Good morning,<br /><strong>Dan Champaign</strong></div>
                            </div>
                            <div style={{marginTop:"50px",display:"flex",flexDirection:"column",gap:"15px"}}>
                                <div style={{color:"#1db954",fontSize:"30px",fontWeight:"800",letterSpacing:"-1px"}}>Browse</div>
                                <div style={{color:"#fff",fontSize:"24px",fontWeight:"700",letterSpacing:"-1px"}}>Activity</div>
                                <div style={{color:"#fff",fontSize:"24px",fontWeight:"700",letterSpacing:"-1px"}}>Radio</div>
                                <div style={{color:"#fff",fontSize:"24px",fontWeight:"700",letterSpacing:"-1px"}}>Your Music</div>
                                <div style={{color:"#fff",fontSize:"24px",fontWeight:"700",letterSpacing:"-1px"}}>Playlists</div>
                            </div>
                            <div style={{marginTop:"auto",color:"#666",fontSize:"10px"}}>⚙ SETTINGS</div>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",gap:"2vw"}}>
                    <div style={{flex:"2",color:"#111",fontSize:"14px",opacity:"0.6"}}>The new Spotify desktop experience.</div>
                    <div style={{flex:"1",color:"#111",fontSize:"14px",opacity:"0.6"}}>The new Spotify mobile app.</div>
                </div>
            </div>
            
        </div>

        {/*  Grand Footer / Navigation Menu  */}
        <div className="project project-custom footer-arches" style={{backgroundColor:"#000",width:"100%",height:"900px",padding:"0",position:"relative",overflow:"hidden",display:"flex"}}>
            
            {/*  Background Gradient Fog  */}
            <div style={{position:"absolute",bottom:"0",left:"0",width:"100%",height:"60%",background:"linear-gradient(to bottom, transparent, rgba(50,55,60,0.6))",pointerEvents:"none"}}></div>

            {/*  Absolute SVG overlay drawing the entire architectural framework  */}
            <svg viewBox="0 0 200 100" preserveAspectRatio="none" style={{position:"absolute",bottom:"0",left:"0",width:"100%",height:"100%",stroke:"rgba(255,255,255,0.25)",strokeWidth:"0.15",fill:"none",pointerEvents:"none"}}>
                {/*  Far Left Pillar  */}
                <rect x="5" y="45" width="8" height="55" />
                <line x1="6" y1="45" x2="6" y2="100" />
                <line x1="7.5" y1="45" x2="7.5" y2="100" />
                <line x1="9" y1="45" x2="9" y2="100" />
                <line x1="10.5" y1="45" x2="10.5" y2="100" />
                <line x1="12" y1="45" x2="12" y2="100" />
                <rect x="3" y="43" width="12" height="2" />
                <rect x="4" y="42" width="10" height="1" />
                
                {/*  Far Right Pillar  */}
                <rect x="187" y="45" width="8" height="55" />
                <line x1="188" y1="45" x2="188" y2="100" />
                <line x1="189.5" y1="45" x2="189.5" y2="100" />
                <line x1="191" y1="45" x2="191" y2="100" />
                <line x1="192.5" y1="45" x2="192.5" y2="100" />
                <line x1="194" y1="45" x2="194" y2="100" />
                <rect x="185" y="43" width="12" height="2" />
                <rect x="186" y="42" width="10" height="1" />

                {/*  Left Archway Path (from Left Pillar to Center)  */}
                {/*  Outer Arch  */}
                <path d="M 13 42 C 13 10, 40 -5, 50 -10 C 60 -5, 87 10, 95 100" />
                {/*  Middle Arch  */}
                <path d="M 18 42 C 18 15, 43 0, 50 -4 C 57 0, 82 15, 88 100" />
                {/*  Inner Arch  */}
                <path d="M 23 42 C 23 20, 46 8, 50 3 C 54 8, 77 20, 81 100" />
                
                {/*  Right Archway Path (from Center to Right Pillar)  */}
                {/*  Outer Arch  */}
                <path d="M 105 100 C 113 10, 140 -5, 150 -10 C 160 -5, 187 10, 187 42" />
                {/*  Middle Arch  */}
                <path d="M 112 100 C 118 15, 143 0, 150 -4 C 157 0, 182 15, 182 42" />
                {/*  Inner Arch  */}
                <path d="M 119 100 C 123 20, 146 8, 150 3 C 154 8, 177 20, 177 42" />
                
                {/*  Left Arch Steps  */}
                <line x1="28" y1="96" x2="76" y2="96" />
                <line x1="26" y1="98" x2="78" y2="98" />
                
                {/*  Right Arch Steps  */}
                <line x1="124" y1="96" x2="172" y2="96" />
                <line x1="122" y1="98" x2="174" y2="98" />
            </svg>

            {/*  Foreground Content Layer  */}
            <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex"}}>
                
                {/*  Left Menu Pane  */}
                <div style={{flex:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}}>
                    {/*  HOVS Cross Small  */}
                    <div style={{position:"absolute",top:"10%",opacity:"0.3"}}>
                         <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3" style={{width:"40px",height:"40px",transform:"rotate(45deg)"}}>
                            <path d="M50 20 C60 10, 80 10, 80 30 C80 50, 50 50, 50 80 C50 50, 20 50, 20 30 C20 10, 40 10, 50 20 Z" />
                            <path d="M20 50 C10 40, 10 20, 30 20 C50 20, 50 50, 80 50 C50 50, 50 80, 30 80 C10 80, 10 60, 20 50 Z" />
                        </svg>
                    </div>

                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",color:"#fff",fontFamily:"var(--font-serif)",fontSize:"2vw",textShadow:"0 5px 15px rgba(0,0,0,1)"}}>
                        <a href="#" style={{color:"#fff",textDecoration:"none"}}>Threerooms</a>
                        <div style={{color:"rgba(255,255,255,0.3)",fontSize:"10px"}}>•</div>
                        <a href="#" style={{color:"#fff",textDecoration:"none"}}>Color Inspiration</a>
                        <div style={{color:"rgba(255,255,255,0.3)",fontSize:"10px"}}>•</div>
                        <a href="#" style={{color:"#fff",textDecoration:"none"}}>Newsletter</a>
                    </div>
                </div>

                {/*  Right Menu Pane  */}
                <div style={{flex:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}}>
                    {/*  HOVS Cross Small  */}
                    <div style={{position:"absolute",top:"10%",opacity:"0.3"}}>
                         <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3" style={{width:"40px",height:"40px",transform:"rotate(45deg)"}}>
                            <path d="M50 20 C60 10, 80 10, 80 30 C80 50, 50 50, 50 80 C50 50, 20 50, 20 30 C20 10, 40 10, 50 20 Z" />
                            <path d="M20 50 C10 40, 10 20, 30 20 C50 20, 50 50, 80 50 C50 50, 50 80, 30 80 C10 80, 10 60, 20 50 Z" />
                        </svg>
                    </div>

                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",color:"#fff",fontFamily:"var(--font-serif)",fontSize:"2vw",textShadow:"0 5px 15px rgba(0,0,0,1)"}}>
                        <a href="#" style={{color:"#fff",textDecoration:"none"}}>Instagram</a>
                        <div style={{color:"rgba(255,255,255,0.3)",fontSize:"10px"}}>•</div>
                        <a href="#" style={{color:"#fff",textDecoration:"none"}}>LinkedIn</a>
                        <div style={{color:"rgba(255,255,255,0.3)",fontSize:"10px"}}>•</div>
                        <a href="#" style={{color:"#fff",textDecoration:"none"}}>Twitter</a>
                    </div>
                </div>

            </div>

        </div>

        {/*  Connect Bottom Footer  */}
        <div style={{backgroundColor:"#0d121c",padding:"120px 0",display:"flex",justifyContent:"center",alignItems:"center",gap:"40px",position:"relative",zIndex:"10"}}>
            <a href="#" target="_blank" style={{color:"#64748b",transition:"color 0.3s",transform:"scale(1.1)"}} className="social-link"  aria-label="Github">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>
            <a href="#" target="_blank" style={{color:"#64748b",transition:"color 0.3s",transform:"scale(1.1)"}} className="social-link"  aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
            <a href="#" target="_blank" style={{color:"#64748b",transition:"color 0.3s",transform:"scale(1.1)"}} className="social-link"  aria-label="Telegram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </a>
        </div>
    {/*  Interaction Dynamics Engine  */}
    

    </>
  );
}
