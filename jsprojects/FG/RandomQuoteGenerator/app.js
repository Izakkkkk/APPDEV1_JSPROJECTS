const quotes = [
    "If you cannot do great things, do small things in a great way.",     
    "You will face many defeats in life, but never let yourself be defeated.",     
    "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain.",
    "Do not let making a living prevent you from making a life." ]; 
const btn = document.getElementById("btn"); 
const quoteElement = document.querySelector(".quote"); 
btn.addEventListener("click", () => {     
    const randomIndex = getRandomQuote();     
    quoteElement.textContent = quotes[randomIndex]; }); 
    function getRandomQuote() {     
        return Math.floor(Math.random() * quotes.length); }
