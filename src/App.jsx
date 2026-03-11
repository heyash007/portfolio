import { useState, useEffect } from 'react'
import cards from './data'
import PortfolioGrid from './components/PortfolioGrid'
import DetailOverlay from './components/DetailOverlay'

export default function App() {
    const [activeFilter, setActiveFilter] = useState(null)
    const [openCard, setOpenCard] = useState(null)

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

    return (
        <>
            <PortfolioGrid
                cards={cards}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                onCardOpen={setOpenCard}
            />
            <DetailOverlay card={openCard} onClose={() => setOpenCard(null)} />
        </>
    )
}
