import { useRef } from 'react'

const TARGET_LONG = 220 // px

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
    }

    function handleMouseLeave() {
        if (ref.current) ref.current.style.transform = 'scale(1)'
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
            <img src={card.image} alt={card.title} />
            <div className="card-overlay">
                <h3>{card.title}</h3>
                <p>{card.description.split('.')[0] + '.'}</p>
            </div>
        </div>
    )
}
