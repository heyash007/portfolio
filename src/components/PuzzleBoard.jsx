import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TILE_WIDTH = 120;
const TILE_HEIGHT = 111.66666666666667;
const ROWS = 3;
const COLS = 3;

/**
 * Grid-based Swapping Puzzle with Framer Motion layout animations.
 */
const PuzzleBoard = () => {
    const [tiles, setTiles] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [isSolved, setIsSolved] = useState(false);
    const [showGlow, setShowGlow] = useState(false);

    // Initialize and Shuffle
    useEffect(() => {
        const baseTiles = Array.from({ length: ROWS * COLS }, (_, i) => {
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            return {
                id: i, // Constant ID for the image segment
                bgX: -(col * TILE_WIDTH),
                bgY: -(row * TILE_HEIGHT)
            };
        });

        // Simple shuffle
        const shuffled = [...baseTiles].sort(() => Math.random() - 0.5);
        setTiles(shuffled);
    }, []);

    // Handle Glow timeout
    useEffect(() => {
        if (isSolved) {
            setShowGlow(true);
            const timer = setTimeout(() => {
                setShowGlow(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isSolved]);

    const handleTileClick = (clickedId) => {
        if (isSolved) return;

        if (selectedId === null) {
            setSelectedId(clickedId);
        } else if (selectedId === clickedId) {
            setSelectedId(null);
        } else {
            // Swap logic
            const newTiles = [...tiles];
            const firstIdx = newTiles.findIndex(t => t.id === selectedId);
            const secondIdx = newTiles.findIndex(t => t.id === clickedId);

            [newTiles[firstIdx], newTiles[secondIdx]] = [newTiles[secondIdx], newTiles[firstIdx]];
            
            setTiles(newTiles);
            setSelectedId(null);
            checkSolved(newTiles);
        }
    };

    const checkSolved = (currentTiles) => {
        const solved = currentTiles.every((tile, index) => tile.id === index);
        setIsSolved(solved);
    };

    return (
        <div className={`puzzle-board-container ${showGlow ? 'solved' : ''}`}>
            {tiles.map((tile) => {
                const isSelected = selectedId === tile.id;
                return (
                    <motion.div
                        key={tile.id}
                        layout
                        onClick={() => handleTileClick(tile.id)}
                        className={`puzzle-tile ${isSelected ? 'selected' : ''}`}
                        style={{
                            backgroundPosition: `${tile.bgX}px ${tile.bgY}px`,
                        }}
                        whileHover={{ 
                            scale: isSelected ? 1.05 : 1.02,
                            zIndex: 20
                        }}
                        animate={{
                            scale: isSelected ? 1.05 : 1,
                            zIndex: isSelected ? 20 : 10,
                            boxShadow: isSelected 
                                ? "0 0 20px rgba(0, 14, 255, 0.4), inset 0 0 0 2px #000EFF" 
                                : "0 0 0 rgba(0,0,0,0)"
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 30,
                            layout: { duration: 0.4, ease: "easeInOut" }
                        }}
                    />
                );
            })}
        </div>
    );
};

export default PuzzleBoard;
