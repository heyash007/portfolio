import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const fishGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 2, 2, 2, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 6, 6, 2, 2, 2, 2, 2, 2, 2, 6, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 6, 6, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 6, 6, 0, 0, 0, 0, 6],
    [0, 0, 6, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 6, 1],
    [0, 6, 1, 1, 4, 4, 4, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 6, 6, 1, 1],
    [6, 1, 1, 4, 5, 4, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1],
    [6, 1, 1, 4, 4, 4, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
    [0, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 3, 1],
    [0, 0, 6, 6, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 6, 0, 0, 6, 3],
    [0, 0, 0, 0, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 6, 6, 3, 3, 3, 3, 3, 3, 3, 6, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 3, 3, 3, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const drawPixelFish = (ctx, x, y, palette, facingRight, size = 110) => {
    const rows = fishGrid.length;
    const cols = fishGrid[0].length;
    const pixelSize = size / cols;

    ctx.save();
    ctx.translate(x, y);
    if (facingRight) ctx.scale(-1, 1);

    fishGrid.forEach((row, r) => {
        row.forEach((type, c) => {
            if (type === 0) return;

            if (type === 1) ctx.fillStyle = palette.base;
            else if (type === 2) ctx.fillStyle = palette.highlight;
            else if (type === 3) ctx.fillStyle = palette.shadow;
            else if (type === 4) ctx.fillStyle = '#FFFFFF';
            else if (type === 5) ctx.fillStyle = '#111111';
            else if (type === 6) ctx.fillStyle = palette.outline;

            ctx.fillRect(
                (c - cols / 2) * pixelSize,
                (r - rows / 2) * pixelSize,
                pixelSize + 0.4,
                pixelSize + 0.4
            );
        });
    });
    ctx.restore();
};

const palettes = [
    { base: '#000EFF', highlight: '#4D56FF', shadow: '#000A80', outline: '#0006CC' },
    { base: '#14A043', highlight: '#48D96D', shadow: '#054D1F', outline: '#0D7A31' }
];

const TypewriterText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "0px 0px -20px 0px" });

    useEffect(() => {
        if (!isInView) return;
        
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
            }
        }, 60); // typing speed
        return () => clearInterval(interval);
    }, [isInView, text]);

    return (
        <span ref={containerRef} style={{ display: 'inline-flex', alignItems: 'center', width: `${text.length + 1.2}ch` }}>
            <span style={{ whiteSpace: 'nowrap' }}>{displayedText}</span>
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                style={{ 
                    display: 'inline-block', 
                    width: '0.6em', 
                    height: '1.2em', 
                    backgroundColor: 'currentColor', 
                    marginLeft: '4px'
                }}
            />
        </span>
    );
};

export default function Footer() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        const fish = [];
        const numFish = 6;

        const resizeCanvas = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        for (let i = 0; i < numFish; i++) {
            const palette = palettes[Math.floor(Math.random() * palettes.length)];
            const size = 30 + Math.random() * 40;
            const speed = 0.5 + Math.random() * 1.5;
            const facingRight = Math.random() > 0.5;

            fish.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: facingRight ? speed : -speed,
                palette,
                size,
                facingRight,
                amplitude: 2 + Math.random() * 5,
                frequency: 0.01 + Math.random() * 0.02,
                offset: Math.random() * Math.PI * 2
            });
        }

        const animate = (t) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            fish.forEach(f => {
                f.x += f.speed;
                f.y += Math.sin(t * f.frequency + f.offset) * 0.5;

                // Wrap around
                if (f.x > canvas.width + f.size) f.x = -f.size;
                if (f.x < -f.size) f.x = canvas.width + f.size;

                drawPixelFish(ctx, f.x, f.y, f.palette, f.facingRight, f.size);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <footer className="site-footer">
            <canvas ref={canvasRef} className="footer-fish-canvas"></canvas>
            <div className="footer-content">
                <div className="footer-top">
                    <h2 className="footer-name font-departure-footer">AAYUSHI SINGH</h2>
                    <p className="footer-coded-by font-menlo">
                        <TypewriterText text="coded by me and antigravity" />
                    </p>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wish">
                        <p className="font-eb-garamond-footer">Hope you had a good swim!</p>
                    </div>
                    <div className="footer-contact">
                        <p className="font-eb-garamond-footer">Let's work together</p>
                        <a href="mailto:contact@aayushi.design" className="footer-email font-eb-garamond-footer">contact@aayushi.design</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
