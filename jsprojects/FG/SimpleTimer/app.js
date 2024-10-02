// Set initial value for our count variable
let count = 30;
let timer; // To store the timer interval

// Select the value button and all buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) { // Decreases by 1
            count--;
        } else if (styles.contains('decreaseFive')) { // Decreases by 5
            count -= 5;
        } else if (styles.contains('increase')) { // Increases by 1
            count++;
        } else if (styles.contains('increaseFive')) { // Increases by 5
            count += 5;
        } else if (styles.contains('random')) { // Random number
            count = Math.floor(Math.random() * 281) - 100;
        } else if (styles.contains('reset')) { // Reset count
            count = 0;
        } else if (styles.contains('start-timer')) { // Start timer
            if (timer) clearInterval(timer); // Clear any existing timer
            count = 30;
            value.textContent = count;
            timer = setInterval(() => {
                if (count > 0) {
                    count--;
                    value.textContent = count;
                } else {
                    clearInterval(timer); // Stop the timer when it reaches 0
                }
            }, 1000); // Update every second
        }

        // Update the color based on the count
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
    });
});
