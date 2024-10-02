import React, { useState } from 'react';

const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us."
];

export default function QuoteGenerator() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousQuotes, setPreviousQuotes] = useState([]);

    const getRandomIndex = () => Math.floor(Math.random() * quotes.length);

    const randomQuoteChange = () => {
        let newIndex;
        do {
            newIndex = getRandomIndex();
        } while (newIndex === currentIndex); 

        setPreviousQuotes((prev) => [...prev, quotes[currentIndex]]); 
        setCurrentIndex(newIndex);
    };

    const nextQuote = () => {
        setPreviousQuotes((prev) => [...prev, quotes[currentIndex]]); 
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const showPreviousQuote = () => {
        if (previousQuotes.length > 0) {
            const lastQuote = previousQuotes[previousQuotes.length - 1]; 
            setCurrentIndex(quotes.indexOf(lastQuote)); 
            setPreviousQuotes((prev) => prev.slice(0, -1)); 
        }
    };

    return (
        <div className="quote-generator-container">
            <h1>Quote Generator</h1>
            <div className="quote-display">
                <p>{quotes[currentIndex]}</p>
            </div>
            <div className="button-container">
                <button className="previous" onClick={showPreviousQuote} disabled={previousQuotes.length === 0}>Previous Quote</button>
                <button className="randomize" onClick={randomQuoteChange}>Random Quote</button>
                <button className="next" onClick={nextQuote}>Next Quote</button>
            </div>
            <div className="previous-quotes">
                <h2><center>Previous Quotes:</center></h2>
                <div className="scrollable-container">
                    <ul>
                        {previousQuotes.map((quote, index) => (
                            <li key={index}>{quote}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
