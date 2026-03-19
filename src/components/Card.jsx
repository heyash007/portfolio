import { useRef } from 'react'

const TARGET_LONG = 450 // px - make card expand massively on hover

const sizeClass = {
    default: '',
    tall: 'card--tall',
    lg: 'card--lg',
    wide: 'card--wide',
    ultraWide: 'card--ultra-wide',
}

export default function Card({ card, isHidden, onOpen }) {
    const ref = useRef(null)

    function handleMouseEnter() {
        const el = ref.current
        if (!el) return

        // 1. Calculate max safe target scale so we don't exceed screen size
        const maxDim = Math.max(el.offsetWidth, el.offsetHeight)
        const maxAllowed = Math.min(window.innerWidth, window.innerHeight) * 0.85
        const targetLong = card.expandTarget || TARGET_LONG
        const actualTarget = Math.min(targetLong, maxAllowed)
        const scale = (actualTarget / maxDim).toFixed(4)

        // 2. Prevent viewport overflow by shifting transform-origin
        const rect = el.getBoundingClientRect()
        let originX = 'center'
        let originY = 'center'

        // Thresholds: if card's distance to edge is less than half the expanded growth, pin origin to edge
        const growX = (el.offsetWidth * scale - el.offsetWidth) / 2
        const growY = (el.offsetHeight * scale - el.offsetHeight) / 2

        if (rect.left < growX) originX = 'left'
        else if (window.innerWidth - rect.right < growX) originX = 'right'

        if (rect.top < growY) originY = 'top'
        else if (window.innerHeight - rect.bottom < growY) originY = 'bottom'

        el.style.transformOrigin = `${originX} ${originY}`
        el.style.transform = `scale(${scale})`
        el.style.zIndex = 50
    }

    function handleMouseLeave() {
        if (ref.current) {
            ref.current.style.transform = 'scale(1)'
            // We leave transformOrigin as-is so it shrinks back smoothly from where it grew
            ref.current.style.zIndex = 1
        }
    }

    const classes = [
        'card',
        sizeClass[card.size] || '',
        isHidden ? 'hidden' : '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            ref={ref}
            className={classes}
            data-category={card.category}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => !isHidden && onOpen(card)}
        >
            {/* Background Image (Normal State) */}
            <img src={card.image} alt={card.title} />

            {/* Hover State Overlay - redesigned to match the minimal bracket layout */}
            <div className="card-overlay">
                {/* Top Header Row (Year | Caption | Title Pill) */}
                <div className="card-overlay-header">
                    <span className="card-overlay-year">{card.year}</span>
                    <h3 className="card-overlay-title">{card.title}</h3>
                    <span className="card-overlay-pill">{card.categoryLabel}</span>
                </div>

                {/* Centered Image Body */}
                <div className="card-overlay-body">
                    <div className="card-overlay-img-wrap">
                        <img src={card.image} alt={card.title} className="card-overlay-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
