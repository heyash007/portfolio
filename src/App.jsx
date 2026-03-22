import { useState, useEffect } from 'react'
import cards from './data'
import PortfolioGrid from './components/PortfolioGrid'
import DetailOverlay from './components/DetailOverlay'
import SplashScreen from './components/SplashScreen'

export default function App() {
    const [activeFilter, setActiveFilter] = useState(null)
    const [openCard, setOpenCard] = useState(null)
    const [showSplash, setShowSplash] = useState(true)

    // Click anywhere outside the nav → reset filter (mirrors old vanilla behaviour)
    useEffect(() => {
        function handleClick(e) {
            if (openCard) return                          // detail overlay is open — ignore
            if (e.target.closest('.identity-nav')) return // click was inside the nav — ignore
            setActiveFilter(null)
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [openCard])

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
            <DetailOverlay
                card={openCard}
                cards={filteredCards}
                onNavigate={setOpenCard}
                onClose={() => setOpenCard(null)}
            />
        </>
    )
}
