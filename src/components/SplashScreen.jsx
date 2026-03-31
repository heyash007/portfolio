import { useEffect, useRef, useState } from 'react';

export default function SplashScreen({ onComplete }) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [fadingOut, setFadingOut] = useState(false);
    const charRefs = useRef([]);

    // Detailed Pixel-art fish grid (24x14) based on reference image
    // 0: empty, 1: base, 2: highlight, 3: shadow, 4: eye (white), 5: pupil (black), 6: outline
    const fishGrid = [
        [0,0,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,6,6,2,2,2,6,6,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,6,6,2,2,2,2,2,2,2,6,6,0,0,0,0,0,0,0],
        [0,0,0,0,6,6,2,2,2,2,2,1,1,1,1,1,1,6,6,0,0,0,0,6],
        [0,0,6,6,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,6,0,0,6,1],
        [0,6,1,1,4,4,4,1,1,1,1,3,1,1,3,1,1,1,1,1,6,6,1,1],
        [6,1,1,4,5,4,1,1,1,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1],
        [6,1,1,4,4,4,1,1,1,1,3,3,3,3,1,1,1,1,1,1,1,1,1,6],
        [0,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,6,3,1],
        [0,0,6,6,1,1,1,1,3,3,3,3,3,3,3,1,1,1,1,6,0,0,6,3],
        [0,0,0,0,6,6,1,1,1,1,1,1,1,1,1,1,1,6,6,0,0,0,0,6],
        [0,0,0,0,0,0,6,6,3,3,3,3,3,3,3,6,6,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,6,6,3,3,3,6,6,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0,0],
    ];

    const drawPixelFish = (ctx, x, y, palette, facingRight, size = 110) => {
        const rows = fishGrid.length;
        const cols = fishGrid[0].length;
        const pixelSize = size / cols;
        
        ctx.save();
        ctx.translate(x, y);
        if (facingRight) ctx.scale(-1, 1); // Grid is facing Left
        
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
                    (c - cols/2) * pixelSize, 
                    (r - rows/2) * pixelSize, 
                    pixelSize + 0.4, 
                    pixelSize + 0.4
                );
            });
        });
        ctx.restore();
    };

    const drawBubble = (ctx, x, y, radius, outlineColor) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
        
        const r = parseInt(outlineColor.slice(1,3), 16);
        const g = parseInt(outlineColor.slice(3,5), 16);
        const b = parseInt(outlineColor.slice(5,7), 16);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.25)`; 
        ctx.lineWidth = 0.5;
        ctx.stroke();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let startTime = null;
        let particles = [];
        let burstHandled = false;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const getCharPos = (id) => {
            const el = charRefs.current[id];
            if (!el) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            const rect = el.getBoundingClientRect();
            return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        };

        // NEW POSITIONS & ROLES:
        // Blue comes from LEFT, eats [0, 1, 2, 3]
        // Green comes from RIGHT, eats [9, 8, 6, 5]
        const blueChompOrder = [0, 1, 2, 3];
        const greenChompOrder = [9, 8, 6, 5];

        const bluePalette = {
            base: '#000EFF',
            highlight: '#4D56FF',
            shadow: '#000A80',
            outline: '#0006CC' // Reduced prominence
        };

        const greenPalette = {
            base: '#14A043',
            highlight: '#48D96D',
            shadow: '#054D1F',
            outline: '#0D7A31' // Reduced prominence
        };

        const animate = (t) => {
            if (!startTime) startTime = t;
            let elapsed = t - startTime;
            const duration = 5000;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (elapsed < duration) {
                let bluePos = { x: -150, y: window.innerHeight / 2 };
                let greenPos = { x: window.innerWidth + 150, y: window.innerHeight / 2 };

                if (elapsed < 1200) {
                    const p = elapsed / 1200;
                    // Blue from LEFT
                    const startX_B = -150;
                    const endX_B = getCharPos(0).x - 100;
                    bluePos.x = startX_B + (endX_B - startX_B) * p;
                    bluePos.y = getCharPos(0).y;
                    
                    // Green from RIGHT
                    const startX_G = window.innerWidth + 150;
                    const endX_G = getCharPos(9).x + 100;
                    greenPos.x = startX_G + (endX_G - startX_G) * p;
                    greenPos.y = getCharPos(9).y;
                } else if (elapsed < 4200) {
                    const p = (elapsed - 1200) / 3000;
                    
                    const updateFishChomp = (order, sideFactor) => {
                        const stepP = 1 / order.length;
                        const index = Math.min(Math.floor(p / stepP), order.length - 1);
                        const localP = (p % stepP) / stepP;
                        
                        let prevId = index === 0 ? -1 : order[index - 1];
                        let startCoord;
                        if (prevId === -1) {
                            const firstCharPos = getCharPos(order[0]);
                            startCoord = { x: firstCharPos.x - (100 * sideFactor), y: firstCharPos.y };
                        } else {
                            startCoord = getCharPos(prevId);
                        }
                        
                        let targetId = order[index];
                        let targetCoord = getCharPos(targetId);

                        const x = startCoord.x + (targetCoord.x - startCoord.x) * Math.pow(localP, 1.4);
                        const y = startCoord.y + (targetCoord.y - startCoord.y) * localP;

                        if (localP > 0.8) {
                            const el = charRefs.current[targetId];
                            if (el) el.style.opacity = '0';
                        }
                        return { x, y };
                    };

                    bluePos = updateFishChomp(blueChompOrder, 1); // comes from left
                    greenPos = updateFishChomp(greenChompOrder, -1); // comes from right
                } else {
                    if (!burstHandled) {
                        burstHandled = true;
                        const bCoord = getCharPos(3);
                        const gCoord = getCharPos(5);
                        for (let i = 0; i < 35; i++) {
                            particles.push({ 
                                x: bCoord.x, y: bCoord.y, 
                                vx: (Math.random() - 0.5) * 5, vy: (Math.random() - 0.8) * 4, 
                                r: Math.random() * 5 + 3, color: '#000EFF', life: 1.0 
                            });
                            particles.push({ 
                                x: gCoord.x, y: gCoord.y, 
                                vx: (Math.random() - 0.5) * 5, vy: (Math.random() - 0.8) * 4, 
                                r: Math.random() * 5 + 3, color: '#14A043', life: 1.0 
                            });
                        }
                        setTimeout(() => setFadingOut(true), 400); 
                    }
                }

                if (elapsed < 4200) {
                    drawPixelFish(ctx, bluePos.x, bluePos.y, bluePalette, true, 80); // Blue facing right
                    drawPixelFish(ctx, greenPos.x, greenPos.y, greenPalette, false, 80); // Green facing left
                } else {
                    particles.forEach(p => {
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy -= 0.04;
                        p.life -= 0.012;
                        if (p.life > 0) {
                            ctx.globalAlpha = p.life;
                            drawBubble(ctx, p.x, p.y, p.r, p.color);
                        }
                    });
                    ctx.globalAlpha = 1.0;
                }
            }

            if (elapsed < duration + 500) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                onComplete();
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [onComplete]);

    return (
        <div id="splash-container" ref={containerRef} className="splash-container" style={{ 
            backgroundColor: '#ffffff',
            opacity: fadingOut ? 0 : 1, 
            transition: 'opacity 0.6s ease-in-out' 
        }}>
            <div className="text-container" style={{
                fontSize: '24px',
                fontFamily: "'Departure Mono', monospace",
                letterSpacing: '0.03em',
                color: '#000000',
                display: 'flex',
                gap: '0.03em'
            }}>
                {"swim in :>".split("").map((char, i) => (
                    <span 
                        key={i} 
                        ref={el => { charRefs.current[i] = el; }} 
                        style={{ display: 'inline-block', whiteSpace: 'pre', transition: 'opacity 0.1s' }}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <canvas id="fish-canvas" ref={canvasRef} style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
        </div>
    );
}
