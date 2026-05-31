import { useEffect, useState, useRef } from 'react'
import allCards from '../data'

export default function DetailOverlay({ card, cards = [], onNavigate, onClose }) {
    const isOpen = card !== null

    const [viewedAssetId, setViewedAssetId] = useState(null)
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
        }
    }

    useEffect(() => {
        checkScroll()
        window.addEventListener('resize', checkScroll)
        return () => window.removeEventListener('resize', checkScroll)
    }, [card, isOpen])

    const scrollGallery = (dir) => {
        if (scrollRef.current) {
            const shift = dir === 'right' ? 300 : -300
            scrollRef.current.scrollBy({ left: shift, behavior: 'smooth' })
        }
    }

    useEffect(() => {
        if (card) setViewedAssetId(card.id)
    }, [card])

    const [expandedSections, setExpandedSections] = useState({ 0: true })

    useEffect(() => {
        if (card) {
            setExpandedSections({ 0: true })
        }
    }, [card])

    const toggleSection = (idx) => {
        setExpandedSections((prev) => ({
            ...prev,
            [idx]: !prev[idx],
        }))
    }

    // Grouping logic for the image gallery
    const relatedCards = card && card.group
        ? allCards.filter((c) => c.group === card.group)
        : card
            ? [card]
            : []

    // The master card provides the text/description (first in the group array)
    const masterCard = relatedCards.length > 0 ? relatedCards[0] : card

    // The currently viewed asset for the cinematic media block
    const activeAsset = allCards.find((c) => c.id === viewedAssetId) || card

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

    const handleNextSlide = () => {
        if (relatedCards.length > 1) {
            const idx = relatedCards.findIndex((c) => c.id === viewedAssetId)
            if (idx >= 0 && idx < relatedCards.length - 1) {
                setViewedAssetId(relatedCards[idx + 1].id)
            } else if (nextCard) {
                onNavigate(nextCard)
            }
        } else if (nextCard) {
            onNavigate(nextCard)
        }
    }

    const handlePrevSlide = () => {
        if (relatedCards.length > 1) {
            const idx = relatedCards.findIndex((c) => c.id === viewedAssetId)
            if (idx > 0) {
                setViewedAssetId(relatedCards[idx - 1].id)
            } else if (prevCard) {
                onNavigate(prevCard)
            }
        } else if (prevCard) {
            onNavigate(prevCard)
        }
    }

    // Keyboard navigation for arrow keys to switch gallery slides & projects
    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                handleNextSlide()
            } else if (e.key === 'ArrowLeft') {
                handlePrevSlide()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, viewedAssetId, relatedCards, nextCard, prevCard])

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

    const hasNext = (relatedCards.length > 1 && relatedCards.findIndex((c) => c.id === viewedAssetId) < relatedCards.length - 1) || !!nextCard
    const hasPrev = (relatedCards.length > 1 && relatedCards.findIndex((c) => c.id === viewedAssetId) > 0) || !!prevCard

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
                            <span className="meta-label">SKILLS</span>
                            <span className="meta-value">{masterCard.skills || '—'}</span>
                        </div>
                    </div>

                    <hr className="detail-divider" />

                    <div className="detail-image-wrap">
                        {hasPrev && (
                            <button
                                className="detail-gallery-nav-btn prev"
                                onClick={handlePrevSlide}
                                aria-label="Previous slide"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        )}
                        {hasNext && (
                            <button
                                className="detail-gallery-nav-btn next"
                                onClick={handleNextSlide}
                                aria-label="Next slide"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        )}
                        {(activeAsset.video || activeAsset.coverVideo) ? (
                            <video
                                className="detail-img"
                                key={activeAsset.id}
                                src={activeAsset.video || activeAsset.coverVideo}
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
                            <div className="related-grid-wrap" style={{ position: 'relative' }}>
                                {canScrollLeft && (
                                    <button
                                        className="gallery-scroll-btn left"
                                        onClick={() => scrollGallery('left')}
                                        aria-label="Scroll left"
                                    >
                                        ←
                                    </button>
                                )}
                                <div className="related-grid" ref={scrollRef} onScroll={checkScroll}>
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
                                                {c.coverVideo ? (
                                                    <video
                                                        src={c.coverVideo}
                                                        muted
                                                        loop
                                                        autoPlay
                                                        playsInline
                                                    />
                                                ) : (
                                                     <img src={c.image} alt={c.title} />
                                                )}
                                            </div>
                                            <span className="related-item-title">{c.title}</span>
                                        </button>
                                    ))}
                                </div>
                                {canScrollRight && (
                                    <button
                                        className="gallery-scroll-btn right"
                                        onClick={() => scrollGallery('right')}
                                        aria-label="Scroll right"
                                    >
                                        →
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Case Study Section */}
                    {masterCard.caseStudy && (
                        <div className="case-study-section">
                            <h2 className="case-study-main-title">Case Study and Process</h2>
                            
                            <div className="case-study-header">
                                <h3 className="case-study-subtitle">{masterCard.caseStudy.subtitle}</h3>
                                <p className="case-study-intro">{masterCard.caseStudy.intro}</p>
                                <div className="case-study-meta-inline">
                                    {masterCard.caseStudy.meta.map((m, idx) => (
                                        <div key={idx} className="case-study-meta-item">
                                            <span className="case-study-meta-label">{m.label}:</span>
                                            <span className="case-study-meta-value">{m.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="case-study-content">
                                {masterCard.caseStudy.summaryParagraphs.map((p, idx) => (
                                    <p key={idx} className="case-study-summary-para">{p}</p>
                                ))}

                                {masterCard.caseStudy.sections.map((section, idx) => {
                                    const isExpanded = !!expandedSections[idx];
                                    return (
                                        <div key={idx} className="case-study-section-block">
                                            <button 
                                                className="case-study-section-toggle" 
                                                onClick={() => toggleSection(idx)}
                                                aria-expanded={isExpanded}
                                                aria-controls={`case-study-section-content-${idx}`}
                                            >
                                                <span className="case-study-section-title">{section.title}</span>
                                                <span className={`case-study-toggle-icon ${isExpanded ? 'is-expanded' : ''}`}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                            <div 
                                                id={`case-study-section-content-${idx}`}
                                                className={`case-study-section-content-wrap ${isExpanded ? 'is-expanded' : ''}`}
                                            >
                                                <div className="case-study-section-content-inner">
                                                    {section.content.map((item, itemIdx) => {
                                                        if (typeof item === 'string') {
                                                            return <p key={itemIdx} className="case-study-para">{item}</p>
                                                        } else if (item.type === 'list') {
                                                            return (
                                                                <ul key={itemIdx} className="case-study-list">
                                                                    {item.items.map((li, liIdx) => (
                                                                        <li key={liIdx} className="case-study-list-item">{li}</li>
                                                                    ))}
                                                                </ul>
                                                            )
                                                        } else if (item.type === 'subsections') {
                                                            return (
                                                                <div key={itemIdx} className="case-study-subsections">
                                                                    {item.items.map((sub, subIdx) => (
                                                                        <div key={subIdx} className="case-study-subsection">
                                                                            <h5 className="case-study-subsection-title">{sub.title}</h5>
                                                                            {sub.content.map((p, pIdx) => {
                                                                                if (typeof p === 'string') {
                                                                                    return <p key={pIdx} className="case-study-para">{p}</p>
                                                                                } else if (p.type === 'list') {
                                                                                    return (
                                                                                        <ul key={pIdx} className="case-study-list nested">
                                                                                            {p.items.map((li, liIdx) => (
                                                                                                <li key={liIdx} className="case-study-list-item">{li}</li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    )
                                                                                }
                                                                                return null
                                                                            })}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )
                                                        }
                                                        return null
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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
