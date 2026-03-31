import { useState, useEffect } from 'react'
import cards from './data'
import PortfolioGrid from './components/PortfolioGrid'
import DetailOverlay from './components/DetailOverlay'
import SplashScreen from './components/SplashScreen'
import Footer from './components/Footer'

export default function App() {
    const [activeFilter, setActiveFilter] = useState(null)
    const [openCard, setOpenCard] = useState(null)
    const [showSplash, setShowSplash] = useState(true)

    // Click anywhere outside the nav → reset filter (mirrors old vanilla behaviour)
    useEffect(() => {
        function handleClick(e) {
            if (openCard) return                          // detail overlay is open — ignore
            if (activeFilter === 'about') return          // about page is a hard route — ignore
            if (e.target.closest('.identity-nav')) return // click was inside old nav — ignore
            if (e.target.closest('.new-nav')) return       // click was inside new nav — ignore
            if (e.target.closest('.new-header')) return    // click was inside new header — ignore
            setActiveFilter(null)
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [openCard, activeFilter])

    const filteredCards = activeFilter
        ? cards.filter((c) => c.category === activeFilter)
        : cards

    return (
        <>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            <PortfolioGrid
                cards={cards}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                onCardOpen={setOpenCard}
            />
            <Footer />
            <DetailOverlay
                card={openCard}
                cards={filteredCards}
                onNavigate={setOpenCard}
                onClose={() => setOpenCard(null)}
            />
        </>
    )
}
