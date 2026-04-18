const fs = require('fs');

try {
    const html = fs.readFileSync('portfolio.html', 'utf8');

    // Extract CSS
    const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
    if (styleMatch) {
        fs.writeFileSync('src/index.css', styleMatch[1].trim());
        console.log('Saved CSS to src/index.css');
    }

    // Extract body content
    const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        let jsx = bodyMatch[1];
        
        // Remove script tags at the bottom
        jsx = jsx.replace(/<script>[\s\S]*?<\/script>/gi, '');

        // 1. class -> className
        jsx = jsx.replace(/class=/g, 'className=');

        // 2. SVG Attributes -> camelCase
        jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
        jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
        jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
        jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
        jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
        jsx = jsx.replace(/preserveAspectRatio=/g, 'preserveAspectRatio=');

        // 3. inline styles to React style objects
        jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
            const rules = styleString.split(';').filter(r => r.trim().length > 0);
            const styleObj = {};
            rules.forEach(rule => {
                const [key, ...val] = rule.split(':');
                if (key && val) {
                    const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                    styleObj[camelKey] = val.join(':').trim();
                }
            });
            // Convert to JSON-like string, but replace " with ' for React aesthetics
            let objStr = JSON.stringify(styleObj).replace(/"([^"]+)":/g, '$1:');
            return `style={${objStr}}`;
        });

        // 4. Convert HTML comments to JSX comments
        jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

        // 5. Self closing tags
        // img
        jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
        // br
        jsx = jsx.replace(/<br>/g, '<br />');

        // 6. Strip RAW DOM event handlers that break React
        jsx = jsx.replace(/onmouseover="[^"]*"/g, 'className="social-link"');
        jsx = jsx.replace(/onmouseout="[^"]*"/g, '');

        // 7. Strip trailing mismatched closing div if it exists at the very end
        jsx = jsx.replace(/<\/div>\s*$/g, '');

        const appCode = `
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
      ${jsx}
    </>
  );
}
`;
        fs.writeFileSync('src/App.jsx', appCode);
        console.log('Saved JSX to src/App.jsx');
    }
} catch (e) {
    console.error(e);
}
