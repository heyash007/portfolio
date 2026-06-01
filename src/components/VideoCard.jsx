import { motion } from 'framer-motion'

export default function VideoCard({ card, isHidden, onOpen }) {
    const classes = [
        'project-card',
        isHidden ? 'hidden' : '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
                layout: { type: 'spring', stiffness: 180, damping: 40 },
                opacity: { duration: 0.25, ease: 'easeInOut' },
            }}
            className={classes}
            data-category={card.category}
            onClick={() => !isHidden && onOpen(card)}
        >
            <div className="project-card-image-wrap">
                <video
                    src={card.coverVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="project-card-image"
                />
            </div>
            <div className="project-card-info">
                <h3 className="project-card-title font-departure-15">{card.title}</h3>
                <div className="project-card-pills">
                    {/* The user requested no year, just category label (mapped to the pill style) */}
                    <span className="project-card-pill font-eb-garamond-14">{card.categoryLabel}</span>
                </div>
            </div>
        </motion.div>
    )
}
