import './App.css';
import React, {useState, useEffect, useRef} from "react"
import useWordGame from "./hooks/useWordGame"

function App() {
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useWordGame(5)
    
    return (
        <div>
            <h2>How fast do you type?</h2>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h2>Word count: {wordCount}</h2>
        </div>
    )
}

export default App
