import { useState, useRef, useEffect, useCallback } from 'react'
import aboutPhotos from '../aboutData'

const DEFAULT_DESCRIPTION = {
    heading: "Hi, I'm Aayushi.",
    body: "I love movies, silly animations, David Foster Wallace, and cooking — which is to say, I love sitting with things, absurdity, footnotes, and care. These are, I have come to understand, the same things that make a design worth anything.",
}

export default function AboutPage() {
    // Load the user's specific scattered cluster coordinates as initial positions
    const [photos, setPhotos] = useState(() =>
        aboutPhotos.map((p) => ({
            ...p,
            x: p.initialX,
            y: p.initialY,
            rotation: p.initialRotation,
            zIndex: 1,
        }))
    )
    const [activeId, setActiveId] = useState(null)
    const [topZ, setTopZ] = useState(aboutPhotos.length)
    const [description, setDescription] = useState(DEFAULT_DESCRIPTION)

    const dragRef = useRef(null)
    const textRef = useRef(null)
    const stageRef = useRef(null)

    // Ensure the scatter pile starts perfectly centered horizontally on all screen sizes
    useEffect(() => {
        if (stageRef.current) {
            const scrollMax = stageRef.current.scrollWidth - stageRef.current.clientWidth;
            stageRef.current.scrollLeft = scrollMax / 2;
        }
    }, [])

    const onPointerDown = useCallback((e, id) => {
        const newZ = topZ + 1
        setTopZ(newZ)
        setPhotos((prev) =>
            prev.map((p) => (p.id === id ? { ...p, zIndex: newZ } : p))
        )
        dragRef.current = {
            id,
            startX: e.clientX,
            startY: e.clientY,
            baseX: photos.find(p => p.id === id)?.x || 0,
            baseY: photos.find(p => p.id === id)?.y || 0,
            moved: false,
        }

        const photo = photos.find((p) => p.id === id)
        setActiveId(id)
        if (photo) setDescription(photo.description)
    }, [topZ, photos])

    useEffect(() => {
        const handleMove = (e) => {
            if (!dragRef.current) return
            const dx = e.clientX - dragRef.current.startX
            const dy = e.clientY - dragRef.current.startY
            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                dragRef.current.moved = true
            }
            const { id, baseX, baseY } = dragRef.current
            setPhotos((prev) =>
                prev.map((p) =>
                    p.id === id
                        ? { ...p, x: baseX + dx, y: baseY + dy }
                        : p
                )
            )
        }

        const handleUp = () => {
            if (!dragRef.current) return
            
            if (!dragRef.current.moved) {
                textRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
            dragRef.current = null
        }

        window.addEventListener('pointermove', handleMove)
        window.addEventListener('pointerup', handleUp)

        return () => {
            window.removeEventListener('pointermove', handleMove)
            window.removeEventListener('pointerup', handleUp)
        }
    }, [])

    return (
        <main className="about-page">
            {/* Central text block */}
            <div className="about-page-text" ref={textRef}>
                <h2 className="about-page-heading">{description.heading}</h2>
                <p className="about-page-body">{description.body}</p>
            </div>

            {/* Polaroid scrolling area encompassing the scattered canvas */}
            <div className="polaroid-stage" ref={stageRef}>
                <div className="polaroid-pile">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className={`polaroid${activeId === photo.id ? ' polaroid--active' : ''}`}
                            style={{
                                transform: `translate(calc(-50% + ${photo.x}px), calc(-50% + ${photo.y}px)) rotate(${photo.rotation}deg)`,
                                zIndex: photo.zIndex,
                            }}
                            onPointerDown={(e) => onPointerDown(e, photo.id)}
                        >
                            <div className="polaroid-photo">
                                <img src={photo.image} alt={photo.label} draggable={false} />
                            </div>
                            <span className="polaroid-label">{photo.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
