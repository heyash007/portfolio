import { useRef } from 'react'

const TARGET_LONG = 450 // px - make card expand massively on hover

const sizeClass = {
    default: '',
    tall: 'card--tall',
    lg: 'card--lg',
    wide: 'card--wide',
}

export default function Card({ card, isHidden, onOpen }) {
    const ref = useRef(null)

    function handleMouseEnter() {
        const el = ref.current
        if (!el) return
        const maxDim = Math.max(el.offsetWidth, el.offsetHeight)
        el.style.transform = `scale(${(TARGET_LONG / maxDim).toFixed(4)})`
        el.style.zIndex = 50
    }

    function handleMouseLeave() {
        if (ref.current) {
            ref.current.style.transform = 'scale(1)'
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
                {/* Corner brackets */}
                <span className="bracket bracket--tl" />
                <span className="bracket bracket--tr" />
                <span className="bracket bracket--bl" />
                <span className="bracket bracket--br" />

                {/* Top: Year + Title (right aligned) */}
                <div className="card-overlay-top">
                    <div className="card-overlay-meta">
                        <span className="card-overlay-year">{card.year}</span>
                        <h3 className="card-overlay-title">{card.title}</h3>
                    </div>
                </div>

                {/* Middle: Secondary Description / Category Pill */}
                <div className="card-overlay-middle">
                    <p className="card-overlay-desc">{card.description}</p>
                    <span className="card-overlay-pill">{card.categoryLabel}</span>
                </div>

                {/* Bottom: Smaller embedded image */}
                <div className="card-overlay-bottom">
                    <img src={card.image} alt={card.title} className="card-overlay-img" />
                </div>
            </div>
        </div>
    )
}
