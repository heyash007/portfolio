import Card from './Card'

const NAV_ITEMS = [
    { label: 'Visual Design', filter: 'visual' },
    { label: 'Motion', filter: 'motion' },
    { label: 'Graphic', filter: 'graphic' },
    { label: 'UI/UX', filter: 'uiux' },
]

export default function PortfolioGrid({ cards, activeFilter, onFilterChange, onCardOpen }) {
    const leftCards = cards.filter((c) => c.side === 'left')
    const rightCards = cards.filter((c) => c.side === 'right')
    const bottomCards = cards.filter((c) => c.side === 'bottom')

    const isHidden = (card) => activeFilter !== null && card.category !== activeFilter

    function handleNavClick(e, filter) {
        e.preventDefault()
        onFilterChange(activeFilter === filter ? null : filter)
    }

    return (
        <div className="page">
            {/* TOP ROW */}
            <div className="top-row">
                {/* Left side */}
                <div className="side side-left">
                    {leftCards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            isHidden={isHidden(card)}
                            onOpen={onCardOpen}
                        />
                    ))}
                </div>

                {/* Identity */}
                <div className="identity">
                    <div className="identity-name">Aayushi Singh</div>
                    <nav className="identity-nav">
                        <ul>
                            {NAV_ITEMS.map(({ label, filter }) => (
                                <li key={filter}>
                                    <a
                                        href="#"
                                        data-filter={filter}
                                        className={activeFilter === filter ? 'active' : ''}
                                        onClick={(e) => handleNavClick(e, filter)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Right side */}
                <div className="side side-right">
                    {rightCards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            isHidden={isHidden(card)}
                            onOpen={onCardOpen}
                        />
                    ))}
                </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="bottom-row">
                {bottomCards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        isHidden={isHidden(card)}
                        onOpen={onCardOpen}
                    />
                ))}
            </div>
        </div>
    )
}
