import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const TripleSeparator = () => (
  <div className="triple-separators">
    <span></span><span></span><span></span>
  </div>
);

const ExactProjectBlock = ({ title, subtitle, tags, description, img }) => (
  <div className="project-container reveal">
    <div className="project-image-wrap">
      <img src={img} className="project-img" alt={title} />
    </div>
    <div className="project-meta-grid">
      <div className="meta-left">
        <TripleSeparator />
        <h2 className="project-title-text">
          {title} — <span className="subtitle-serif">{subtitle}</span>
        </h2>
        <div className="project-tags-v2">{tags}</div>
      </div>
      <div className="meta-right">
        <p className="project-desc-body">{description}</p>
        <a href="#" className="details-link-v2">View project details</a>
      </div>
    </div>
  </div>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const dot = document.querySelector('.cursor-dot');
    const handleMouseMove = (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      cursor.style.setProperty('--mouse-x', e.clientX + 'px');
      cursor.style.setProperty('--mouse-y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for Reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
    <div className="custom-cursor"></div>
    <div className="cursor-dot"></div>

    {/* Top Right Index Link (Exact) */}
    <nav className="nav-v2">
      <div className="index-link-v2" onClick={() => setMenuOpen(true)}>INDEX</div>
    </nav>

    {/* Full Page Red Overlay (Exact) */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="menu-overlay-v2"
        >
          <div style={{ position: "absolute", top: "40px", right: "40px", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "800", letterSpacing: "2px" }} onClick={() => setMenuOpen(false)}>CLOSE</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="#" className="menu-item-v2"><span className="num-v2">01</span><span>Repertoire</span></a>
            <a href="#" className="menu-item-v2"><span className="num-v2">02</span><span>Créez</span></a>
            <a href="#" className="menu-item-v2"><span className="num-v2">03</span><span>Narrative</span></a>
            <a href="#" className="menu-item-v2"><span className="num-v2">04</span><span>Articles</span></a>
            <a href="#" className="menu-item-v2"><span className="num-v2">05</span><span>Artifacts</span></a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    <div className="app-wrapper">
      <div className="hero-v2">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px", width: "100%" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Floral_ornament_1.svg" alt="Emblem" style={{ height: "60px", marginBottom: "40px", filter: "invert(1)" }} />
          <h1>I CREATE;<br/>THEREFORE<br/>I AM</h1>
          <div className="hero-subtitle">SELECTED REPERTOIRE — 2026</div>
        </div>
      </div>

      <ExactProjectBlock 
        title="HOVS"
        subtitle="Building a retro-futuristic interpretation of the BMW airhead"
        tags="Brand Identity, Product Design"
        description="In collaboration with Seba, we reimagined the classic BMW R100R through a retro-futuristic lens. Every element was custom-designed from the ground up."
        img="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop"
      />

      <ExactProjectBlock 
        title="NASA"
        subtitle="Branding the Europa Clipper mission to Jupiter’s moon"
        tags="Mission Identity, Visual Narrative"
        description="Once again, NASA asked HOVS to brand its latest mission to space — this time to find out if Jupiter's moon, Europa, has habitable conditions for life."
        img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
      />

      <ExactProjectBlock 
        title="MYMIND"
        subtitle="Developing a peaceful extension for your real mind"
        tags="Product Design, Founder"
        description="Currently growing mymind™, my peaceful escape from the chaos of the internet. HOVS believes in brands and products that have a point of view."
        img="https://images.unsplash.com/photo-1510414169736-224855d0ce18?auto=format&fit=crop&w=1600&auto=format&fit=crop"
      />

      <div className="semplice-cta reveal" style={{ backgroundColor: "#ffeb00", color: "#000", padding: "120px 8%", textAlign: "center", margin: "160px auto", maxWidth: "1360px", width: "calc(100% - 80px)", borderRadius: "4px" }}>
        <div style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "5px", marginBottom: "40px" }}>SEMPLICE</div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: "800", marginBottom: "30px" }}>Build your portfolio<br/>with absolute freedom.</h2>
        <a href="#" style={{ color: "#000", fontWeight: "700", borderBottom: "1px solid #000", paddingBottom: "10px", textDecoration: "none" }}>Discover Semplice 6</a>
      </div>

      <footer style={{ background: "#000", padding: "160px 8% 80px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "100px", borderBottom: "1px solid #111", paddingBottom: "100px" }}>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#444", fontWeight: "800", marginBottom: "30px", textTransform: "uppercase" }}>Navigation</div>
            <a href="#" style={{ display: "block", color: "#fff", textDecoration: "none", fontSize: "18px", marginBottom: "15px" }}>Repertoire</a>
            <a href="#" style={{ display: "block", color: "#fff", textDecoration: "none", fontSize: "18px", marginBottom: "15px" }}>Articles</a>
            <a href="#" style={{ display: "block", color: "#fff", textDecoration: "none", fontSize: "18px", marginBottom: "15px" }}>Desk</a>
          </div>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#444", fontWeight: "800", marginBottom: "30px", textTransform: "uppercase" }}>Social</div>
            <a href="#" style={{ display: "block", color: "#fff", textDecoration: "none", fontSize: "18px", marginBottom: "15px" }}>Instagram</a>
            <a href="#" style={{ display: "block", color: "#fff", textDecoration: "none", fontSize: "18px", marginBottom: "15px" }}>Twitter/X</a>
            <a href="#" style={{ display: "block", color: "#fff", textDecoration: "none", fontSize: "18px", marginBottom: "15px" }}>LinkedIn</a>
          </div>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#444", fontWeight: "800", marginBottom: "30px", textTransform: "uppercase" }}>House of van Schneider</div>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.7" }}>New York City / BKLYN<br/>40.7128° N, 74.0060° W<br/>est. 2014</p>
          </div>
        </div>
        <div style={{ marginTop: "60px", color: "#222", fontSize: "11px", letterSpacing: "2px", fontWeight: "700" }}>© 2026 HOVS — ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
    </>
  );
}
