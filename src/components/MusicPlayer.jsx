import { useState, useEffect, useRef } from 'react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [scWidget, setScWidget] = useState(null);
    const iframeRef = useRef(null);

    useEffect(() => {
        if (!iframeRef.current) return;

        let widget = null;
        
        const initWidget = () => {
            if (window.SC && window.SC.Widget) {
                widget = window.SC.Widget(iframeRef.current);
                setScWidget(widget);

                widget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true));
                widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false));
                widget.bind(window.SC.Widget.Events.FINISH, () => setIsPlaying(false));
            } else {
                setTimeout(initWidget, 300);
            }
        };

        setTimeout(initWidget, 100);

        return () => {
            if (widget) {
                widget.unbind(window.SC.Widget.Events.PLAY);
                widget.unbind(window.SC.Widget.Events.PAUSE);
                widget.unbind(window.SC.Widget.Events.FINISH);
            }
        };
    }, []);

    const togglePlay = (e) => {
        e.preventDefault();
        if (scWidget) {
            scWidget.toggle();
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <iframe 
                ref={iframeRef}
                style={{ display: 'none' }}
                allow="autoplay; encrypted-media"
                title="SoundCloud music player"
                src="https://w.soundcloud.com/player/?url=https://soundcloud.com/lalune-sallume/sets/webplaylist&auto_play=false&shuffle=true"
            />
            <button 
                onClick={togglePlay} 
                className="music-btn"
                aria-label="Toggle Music"
            >
                <div className="music-note-wrap">
                    {/* SVG 8-bit connected 8th note — slightly larger 30px wrapper */}
                    <svg className={`pixel-note ${isPlaying ? 'dancing' : ''}`} viewBox="0 0 24 24" shapeRendering="crispEdges">
                      <rect x="3" y="15" width="5" height="4" fill="currentColor"/>
                      <rect x="6" y="6" width="2" height="11" fill="currentColor"/>
                      <rect x="15" y="13" width="5" height="4" fill="currentColor"/>
                      <rect x="18" y="4" width="2" height="11" fill="currentColor"/>
                      <rect x="6" y="4" width="14" height="2" fill="currentColor"/>
                      <rect x="6" y="6" width="14" height="2" fill="currentColor"/>
                    </svg>
                </div>
            </button>
        </div>
    );
}
