import { useEffect, useState } from 'react'

export default function DetailOverlay({ card, cards = [], onNavigate, onClose }) {
    const isOpen = card !== null

    const [viewedAssetId, setViewedAssetId] = useState(null)

    useEffect(() => {
        if (card) setViewedAssetId(card.id)
    }, [card])

    // Grouping logic for the image gallery
    const relatedCards = card && card.group
        ? cards.filter((c) => c.group === card.group)
        : card
            ? [card]
            : []

    // The master card provides the text/description (first in the group array)
    const masterCard = relatedCards.length > 0 ? relatedCards[0] : card

    // The currently viewed asset for the cinematic media block
    const activeAsset = cards.find((c) => c.id === viewedAssetId) || card

    // Compute unique projects array for bottom pagination (collapsing groups into a single entry)
    const uniqueProjects = cards.reduce((acc, c) => {
        if (!c.group) {
            acc.push(c)
        } else if (!acc.some((existing) => existing.group === c.group)) {
            acc.push(c)
        }
        return acc
    }, [])

    const currentIndex = masterCard ? uniqueProjects.findIndex((c) => c.id === masterCard.id) : -1
    const prevCard = currentIndex > 0 ? uniqueProjects[currentIndex - 1] : null
    const nextCard = currentIndex >= 0 && currentIndex < uniqueProjects.length - 1 ? uniqueProjects[currentIndex + 1] : null

    // Escape key handler
    useEffect(() => {
        if (!isOpen) return
        const handler = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [isOpen, onClose])

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <div
            className={`detail-overlay${isOpen ? ' is-open' : ''}`}
            aria-hidden={!isOpen}
        >
            <button className="detail-close" onClick={onClose} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {card && masterCard && (
                <div className="detail-content">
                    <div className="detail-header">
                        <div className="detail-title-col">
                            <h1 className="detail-title">{masterCard.title}</h1>
                        </div>
                        <div className="detail-desc-col">
                            <p className="detail-desc">{masterCard.description}</p>
                        </div>
                    </div>

                    <div className="detail-meta">
                        <div className="meta-block">
                            <span className="meta-label">YEAR</span>
                            <span className="meta-value">{masterCard.year}</span>
                        </div>
                        <div className="meta-block">
                            <span className="meta-label">ROLE</span>
                            <span className="meta-value">{masterCard.role || '—'}</span>
                        </div>
                        <div className="meta-block">
                            <span className="meta-label">SKILLS</span>
                            <span className="meta-value">{masterCard.skills || '—'}</span>
                        </div>
                        <div className="meta-block">
                            <span className="meta-label">TEAM</span>
                            <span className="meta-value">{masterCard.team || '—'}</span>
                        </div>
                    </div>

                    <hr className="detail-divider" />

                    <div className="detail-image-wrap">
                        {activeAsset.video ? (
                            <video
                                className="detail-img"
                                key={activeAsset.id} // force re-mount on swap so autoplay works
                                src={activeAsset.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <img className="detail-img" src={activeAsset.image} alt={activeAsset.title} />
                        )}
                    </div>

                    {relatedCards.length > 1 && (
                        <div className="related-section">
                            <h3 className="related-title">Project Gallery</h3>
                            <div className="related-grid">
                                {relatedCards.map((c) => (
                                    <button
                                        key={c.id}
                                        className={`related-preview-btn ${c.id === viewedAssetId ? 'is-active' : ''}`}
                                        onClick={() => {
                                            const scroller = document.querySelector('.detail-overlay')
                                            if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' })
                                            setViewedAssetId(c.id)
                                        }}
                                        aria-label={`View ${c.title}`}
                                    >
                                        <div className="related-img-wrap">
                                            <img src={c.image} alt={c.title} />
                                        </div>
                                        <span className="related-item-title">{c.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="detail-footer">
                        <div className="footer-nav footer-nav-prev">
                            {prevCard && (
                                <button className="nav-btn" onClick={() => onNavigate(prevCard)}>
                                    <span className="nav-arrow">←</span>
                                    <div className="nav-text" style={{ textAlign: 'left' }}>
                                        <span className="nav-label">Previous</span>
                                        <span className="nav-title">{prevCard.title}</span>
                                    </div>
                                </button>
                            )}
                        </div>

                        <div className="footer-dots">
                            {uniqueProjects.map((c, i) => (
                                <button
                                    key={c.id}
                                    className={`dot ${i === currentIndex ? 'active' : ''}`}
                                    onClick={() => onNavigate(c)}
                                    aria-label={`Go to ${c.title}`}
                                />
                            ))}
                        </div>

                        <div className="footer-nav footer-nav-next">
                            {nextCard && (
                                <button className="nav-btn" onClick={() => onNavigate(nextCard)}>
                                    <div className="nav-text" style={{ textAlign: 'right' }}>
                                        <span className="nav-label">Next</span>
                                        <span className="nav-title">{nextCard.title}</span>
                                    </div>
                                    <span className="nav-arrow">→</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
