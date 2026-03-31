import { useState, useRef, useEffect, useCallback } from 'react'
import aboutPhotos from '../aboutData'

const DEFAULT_DESCRIPTION = {
    heading: "Hi, I'm Aayushi.",
    body: "I love movies, silly animations, David Foster Wallace, and cooking — which is to say, I love sitting with things, absurdity, footnotes, and care. These are, I have come to understand, the same things that make a design worth anything.",
}

export default function AboutPage() {
    // Track position + rotation per photo
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

    // Drag state stored in a ref so event listeners don't capture stale state
    const dragRef = useRef(null)

    const onPointerDown = useCallback((e, id) => {
        const newZ = topZ + 1
        setTopZ(newZ)
        setPhotos((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, zIndex: newZ } : p
            )
        )
        dragRef.current = {
            id,
            startX: e.clientX,
            startY: e.clientY,
            moved: false,
        }

        // Trigger description update immediately on click/drag start
        const photo = aboutPhotos.find((p) => p.id === id)
        setActiveId(id)
        if (photo) setDescription(photo.description)

    }, [topZ])

    useEffect(() => {
        const handleMove = (e) => {
            if (!dragRef.current) return
            const dx = e.clientX - dragRef.current.startX
            const dy = e.clientY - dragRef.current.startY
            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                dragRef.current.moved = true
            }
            const { id } = dragRef.current
            setPhotos((prev) =>
                prev.map((p) =>
                    p.id === id
                        ? { ...p, x: p.initialX + dx, y: p.initialY + dy }
                        : p
                )
            )
        }

        const handleUp = (e) => {
            if (!dragRef.current) return
            const { id, startX, startY, moved } = dragRef.current

            const dx = e.clientX - startX
            const dy = e.clientY - startY

            // Apply state updates inside setPhotos to ensure accurate synchronization
            setPhotos((prev) => {
                const nextPhotos = prev.map((p) =>
                    p.id === id
                        ? { ...p, initialX: p.initialX + dx, initialY: p.initialY + dy }
                        : p
                )
                return nextPhotos
            })

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
            <div className="about-page-text">
                <h2 className="about-page-heading">{description.heading}</h2>
                <p className="about-page-body">{description.body}</p>
            </div>

            {/* Polaroid scatter area */}
            <div className="polaroid-stage">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className={`polaroid${activeId === photo.id ? ' polaroid--active' : ''}`}
                        style={{
                            transform: `translate(calc(-50% + ${photo.x}px), calc(-50% + ${photo.y}px)) rotate(${photo.rotation}deg)`,
                            zIndex: photo.zIndex,
                        }}
                        onPointerDown={(e) => onPointerDown(e, photo.id)}
                    // removed inline move/up bindings
                    >
                        <div className="polaroid-photo">
                            <img src={photo.image} alt={photo.label} draggable={false} />
                        </div>
                        <span className="polaroid-label">{photo.label}</span>
                    </div>
                ))}
            </div>
        </main>
    )
}
