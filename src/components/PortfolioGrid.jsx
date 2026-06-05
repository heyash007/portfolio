import { useState, useEffect, useRef } from 'react'
import Card from './Card'
import VideoCard from './VideoCard'
import PuzzleBoard from './PuzzleBoard'
import AboutPage from './AboutPage'
import ThemeToggle from './ThemeToggle'
import MusicPlayer from './MusicPlayer'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
    { label: 'home', filter: null },
    { label: 'visual', filter: 'visual' },
    { label: 'motion', filter: 'motion' },
    { label: 'development', filter: 'development' },
    { label: 'about', filter: 'about' },
]

export default function PortfolioGrid({ cards, activeFilter, onFilterChange, onCardOpen }) {
    const projectsRef = useRef(null)
    const [isPuzzleSolved, setIsPuzzleSolved] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isAnatomyOpen, setIsAnatomyOpen] = useState(false)
    const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false)

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    function handleNavClick(e, filter) {
        if (e) e.preventDefault()
        // If clicking home (filter===null), set it to null.
        // Otherwise, if it's already active, we can leave it or toggle it (toggle behavior is fine).
        const next = filter === null ? null : (activeFilter === filter ? null : filter)
        onFilterChange(next)

        if (next === null) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else if (next !== 'about' && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    function handleMobileNavClick(e, filter) {
        if (e) e.preventDefault()
        setIsMobileMenuOpen(false)

        // Delay the filter/scrolling action slightly to let the body overflow unlock
        // and allow smooth scroll animations to fire correctly on mobile viewports.
        setTimeout(() => {
            handleNavClick(null, filter)
        }, 150)
    }

    return (
        <div className="new-page-container">
            <header className="new-header">
                <div className="logo-group">
                    <a href="#" onClick={(e) => handleNavClick(e, null)}>
                        <img
                            src="/images/logo/namesealBLUE.svg?v=5"
                            alt="Logo"
                            className="new-logo"
                        />
                    </a>
                    <div className="music-container">
                        <MusicPlayer />
                    </div>
                </div>
                <nav className="new-nav">
                    {/* Desktop-only Navigation Links */}
                    <div className="nav-links-desktop">
                        {NAV_ITEMS.map(({ label, filter }) => (
                            <a
                                key={filter}
                                href="#"
                                onClick={(e) => handleNavClick(e, filter)}
                                className={`nav-link font-eb-garamond-14 text-blue${activeFilter === filter ? ' active' : ''}`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Navigation Controls (Visible on mobile/desktop) */}
                    <div className="nav-controls">
                        <ThemeToggle />
                        <button
                            className={`mobile-hamburger-btn ${isMobileMenuOpen ? 'is-active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Navigation Menu"
                        >
                            <div className="hamburger-box">
                                <span className="hamburger-inner line-1"></span>
                                <span className="hamburger-inner line-2"></span>
                                <span className="hamburger-inner line-3"></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="mobile-nav-overlay"
                    >
                        <div className="mobile-nav-links">
                            {NAV_ITEMS.map(({ label, filter }) => (
                                <a
                                    key={filter}
                                    href="#"
                                    onClick={(e) => handleMobileNavClick(e, filter)}
                                    className={`mobile-nav-link font-eb-garamond-28${activeFilter === filter ? ' active' : ''}`}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="new-main">
                {activeFilter === 'about' ? (
                    <AboutPage />
                ) : (
                    <>
                        <section className="about-section">
                            <div className="about-left">
                                <div className="puzzle-label" style={{
                                    color: isPuzzleSolved ? 'var(--text-primary)' : 'var(--accent-blue)',
                                    transition: 'color 0.3s ease',
                                }}>
                                    {isPuzzleSolved ? 'BRAVO!' : 'happy solving'}
                                </div>

                                <div className="ascii-art-placeholder">
                                    <PuzzleBoard onSolve={setIsPuzzleSolved} />
                                </div>
                            </div>


                            <div className="about-right">
                                <p className="font-eb-garamond-14 text-black about-para">
                                    <span className="font-eb-garamond-medium-15">Beauty</span> is not just in the eye of the beholder. It is both physical and emotional, something we recognise without needing to name. It carries feelings no single word or language can hold.
                                </p>
                                <p className="font-eb-garamond-14 text-black about-para" style={{ marginTop: '20px' }}>
                                    And so, I <span className="font-eb-garamond-medium-15">design</span> from this conviction, that what we build can mean more than what it does, that it can move people, not just serve them.
                                </p>

                                <div className="about-sub-columns">
                                    <div className={`sub-column collapsible-sub-column ${isAnatomyOpen ? 'is-expanded' : ''}`}>
                                        <button
                                            className="sub-column-toggle font-departure-15 text-blue"
                                            onClick={() => setIsAnatomyOpen(!isAnatomyOpen)}
                                            aria-expanded={isAnatomyOpen}
                                        >
                                            <span>DESIGN ANATOMY</span>
                                            <span className="toggle-chevron">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <h2 className="font-departure-15 text-blue desktop-only-heading">DESIGN ANATOMY</h2>

                                        <div className="sub-column-content">
                                            <ul className="font-departure-12 text-blue">
                                                <li>Films : Colour</li>
                                                <li>Philosophy : Purpose</li>
                                                <li>Psychoanalysis : Insight</li>
                                                <li>Storytelling : Structure</li>
                                                <li>Sketching : Form</li>
                                                <li>Writing : Clarity</li>
                                                <li>Cooking : Patience</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={`sub-column collapsible-sub-column ${isPhilosophyOpen ? 'is-expanded' : ''}`}>
                                        <button
                                            className="sub-column-toggle font-departure-15 text-blue"
                                            onClick={() => setIsPhilosophyOpen(!isPhilosophyOpen)}
                                            aria-expanded={isPhilosophyOpen}
                                        >
                                            <span>DESIGN PHILOSOPHY</span>
                                            <span className="toggle-chevron">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <h2 className="font-departure-15 text-blue desktop-only-heading">DESIGN PHILOSOPHY</h2>

                                        <div className="sub-column-content">
                                            <ul className="font-departure-12 text-blue nested-bullets">
                                                <li>· Purposeful: Innovation must drive utility</li>
                                                <li>· Enduring: Built to outlast fleeting trends.</li>
                                                <li>· Clear: Aesthetics exist to build understanding.</li>
                                                <li>· Quiet: The design remains unobtrusive.</li>
                                                <li>· Honest: It delivers exactly what it promises.</li>
                                                <li>· Meticulous: Considered down to the last pixel.</li>
                                                <li>· Essential: Does more with less.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-block">
                                    <p className="font-eb-garamond-15 text-black" style={{ marginBottom: '4px' }}>Product, design, {"<dev>"}, & everything in between.</p>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <a href="https://cal.com/aayushi-singh-fbozlw" target="_blank" rel="noopener noreferrer" className="font-eb-garamond-15 text-blue" style={{ textDecoration: 'none' }}>Book an intro call</a>
                                        <span className="font-eb-garamond-15" style={{ color: 'var(--text-primary)', opacity: 0.3 }}>|</span>
                                        <a href="mailto:contact@aayushi.design" className="font-eb-garamond-15 text-blue" style={{ textDecoration: 'none' }}>Email</a>
                                        <span className="font-eb-garamond-15" style={{ color: 'var(--text-primary)', opacity: 0.3 }}>|</span>
                                        <a href="https://www.instagram.com/aayushidesigns" target="_blank" rel="noopener noreferrer" className="font-eb-garamond-15 text-blue" style={{ textDecoration: 'none' }}>Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="recent-projects-section" ref={projectsRef}>
                            <div className="projects-header">
                                <h2 className="font-departure-15 text-blue" style={{ marginBottom: '4px' }}>RECENT PROJECTS</h2>
                                <p className="font-eb-garamond-14 text-black">Click on one to know more.</p>
                            </div>

                            <motion.div
                                layout
                                transition={{ type: 'spring', stiffness: 180, damping: 40 }}
                                className={`projects-grid ${activeFilter !== null ? 'filtered' : ''}`}
                            >
                                <AnimatePresence mode="sync">
                                    {cards.map((card) => (
                                        card.coverVideo ? (
                                            <VideoCard
                                                key={card.id}
                                                card={card}
                                                isHidden={false}
                                                onOpen={onCardOpen}
                                            />
                                        ) : (
                                            <Card
                                                key={card.id}
                                                card={card}
                                                isHidden={false}
                                                onOpen={onCardOpen}
                                            />
                                        )
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </section>
                    </>
                )}
            </main>
        </div>
    )
}
