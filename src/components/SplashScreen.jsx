import { useState, useEffect } from 'react'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function SplashScreen({ onComplete }) {
    const [displayedText, setDisplayedText] = useState('')
    const [isFadingOut, setIsFadingOut] = useState(false)

    useEffect(() => {
        let isMounted = true

        async function typeSequence() {
            const sequence = [
                { text: 'Welcome,\n\n\n\n', delayAfter: 1000 },
                { text: 'This place is a living canvas\n', delayAfter: 500 },
                { text: 'of passion projects, ', delayAfter: 500 },
                { text: 'works in progress, ', delayAfter: 500 },
                { text: 'and endless becoming.', delayAfter: 500 },
            ]

            let currentText = ''

            for (const segment of sequence) {
                // Type out the characters one by one
                for (let i = 0; i < segment.text.length; i++) {
                    if (!isMounted) return
                    currentText += segment.text[i]
                    setDisplayedText(currentText)
                    await sleep(40) // Typing speed per character
                }

                // Pause for the requested duration after the segment finishes
                if (!isMounted) return
                await sleep(segment.delayAfter)
            }

            // Trigger the CSS fade out animation
            if (!isMounted) return
            setIsFadingOut(true)

            // Wait for the CSS transition (0.8s) before unmounting
            await sleep(800)
            if (!isMounted) return
            onComplete()
        }

        typeSequence()

        return () => {
            isMounted = false
        }
    }, [onComplete])

    return (
        <div className={`splash-screen ${isFadingOut ? 'splash-fade-out' : ''}`}>
            <div className="splash-text-container">
                {displayedText.split('\n\n').map((line, index, arr) => (
                    <div
                        key={index}
                        style={{ textAlign: index === 0 ? 'center' : 'left' }}
                    >
                        {line}
                        {index === arr.length - 1 && <span className="splash-cursor">|</span>}
                    </div>
                ))}
            </div>
        </div>
    )
}
