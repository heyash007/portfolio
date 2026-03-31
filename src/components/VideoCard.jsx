import { useRef } from 'react'

const TARGET_LONG = 450 // px - make card expand massively on hover

export default function VideoCard({ card, isHidden, onOpen }) {
    const ref = useRef(null)

    function handleMouseEnter() {
        const el = ref.current
        if (!el) return

        const maxDim = Math.max(el.offsetWidth, el.offsetHeight)
        const maxAllowed = Math.min(window.innerWidth, window.innerHeight) * 0.85
        const targetLong = card.expandTarget || TARGET_LONG
        const actualTarget = Math.min(targetLong, maxAllowed)
        const scale = (actualTarget / maxDim).toFixed(4)

        const rect = el.getBoundingClientRect()
        let originX = 'center'
        let originY = 'center'

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
            ref.current.style.zIndex = 1
        }
    }

    const classes = [
        'card',
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
            {/* Video plays at rest */}
            <video
                src={card.coverVideo}
                autoPlay
                muted
                loop
                playsInline
                className="card-video"
            />

            {/* Hover overlay (same as Card) */}
            <div className="card-overlay">
                <div className="card-overlay-header">
                    <span className="card-overlay-year">{card.year}</span>
                    <h3 className="card-overlay-title">{card.title}</h3>
                    <span className="card-overlay-pill">{card.categoryLabel}</span>
                </div>
                <div className="card-overlay-body">
                    <div className="card-overlay-img-wrap">
                        {/* Show video thumbnail in overlay too */}
                        <video
                            src={card.coverVideo}
                            muted
                            loop
                            playsInline
                            className="card-overlay-img"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
