import { useState, useRef } from 'react'
import Card from './Card'
import VideoCard from './VideoCard'
import PuzzleBoard from './PuzzleBoard'
import AboutPage from './AboutPage'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
    { label: 'home', filter: null },
    { label: 'visual', filter: 'visual' },
    { label: 'motion', filter: 'motion' },
    { label: 'ui/ux', filter: 'uiux' },
    { label: 'about', filter: 'about' },
]

export default function PortfolioGrid({ cards, activeFilter, onFilterChange, onCardOpen }) {
    const projectsRef = useRef(null)
    const [isPuzzleSolved, setIsPuzzleSolved] = useState(false)

    function handleNavClick(e, filter) {
        e.preventDefault()
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

    const isHidden = (card) => activeFilter !== null && card.category !== activeFilter

    return (
        <div className="new-page-container">
            <header className="new-header">
                <div className="logo-group">
                    <a href="#" onClick={(e) => handleNavClick(e, null)}>
                        <img
                            src="/images/logo/namesealBLUE.svg"
                            alt="Logo"
                            className="new-logo"
                        />
                    </a>
                </div>
                <nav className="new-nav">
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
                    <div style={{ paddingLeft: '12px', display: 'flex', alignItems: 'center' }}>
                        <ThemeToggle />
                    </div>
                </nav>
            </header>

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
                                    <div className="sub-column">
                                        <h2 className="font-departure-15 text-blue">DESIGN ANATOMY</h2>
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
                                    <div className="sub-column">
                                        <h2 className="font-departure-15 text-blue">DESIGN PHILOSOPHY</h2>
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

                                <div className="contact-block">
                                    <p className="font-eb-garamond-15 text-black" style={{ marginBottom: '4px' }}>Let's work together!</p>
                                    <a href="mailto:contact@aayushi.design" className="font-eb-garamond-15 text-blue" style={{ textDecoration: 'none' }}>contact@aayushi.design</a>
                                </div>
                            </div>
                        </section>

                        <section className="recent-projects-section" ref={projectsRef}>
                            <div className="projects-header">
                                <h2 className="font-departure-15 text-blue" style={{ marginBottom: '4px' }}>RECENT PROJECTS</h2>
                                <p className="font-eb-garamond-14 text-black">Click to find more.</p>
                            </div>

                            <motion.div layout className={`projects-grid ${activeFilter !== null ? 'filtered' : ''}`}>
                                <AnimatePresence mode="popLayout">
                                    {cards.map((card) => {
                                        if (isHidden(card)) return null;
                                        return card.coverVideo ? (
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
                                    })}
                                </AnimatePresence>
                            </motion.div>
                        </section>
                    </>
                )}
            </main>
        </div>
    )
}
