import { useEffect } from 'react'

export default function DetailOverlay({ card, onClose }) {
    const isOpen = card !== null

    // Escape key handler
    useEffect(() => {
        if (!isOpen) return
        const handler = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [isOpen, onClose])

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <div
            className={`detail-overlay${isOpen ? ' is-open' : ''}`}
            aria-hidden={!isOpen}
        >
            <button className="detail-back" onClick={onClose} aria-label="Back to portfolio">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                        d="M11 3L5 9L11 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Back
            </button>

            {card && (
                <div className="detail-content">
                    <div className="detail-image-wrap">
                        {card.video ? (
                            <video
                                className="detail-img"
                                src={card.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <img className="detail-img" src={card.image} alt={card.title} />
                        )}
                    </div>
                    <div className="detail-text">
                        <h1 className="detail-title">{card.title}</h1>
                        <p className="detail-desc">{card.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
