

// components for item number 1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let tNumber = document.getElementById("tNumber").value;
    let major = document.getElementById("major").value;
    let x = `Hello ${name}, from ${address} and can be contacted with the phone number ${tNumber}. You are pursuing your degree in ${major}.`;
    document.getElementById("output1").innerHTML = x;
});

// components for item number 2
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let totalSales = parseFloat(document.getElementById("totalSales").value);
    let profit = totalSales * 0.23;
    document.getElementById("output2").innerHTML = `Estimated profit: $${profit.toFixed(2)}`;
});

// components for item number 3
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    const speed = 60;
    let time5 = speed * 5;
    let time8 = speed * 8;
    let time12 = speed * 12;
    let output = `In 5 hours: ${time5} miles<br>In 8 hours: ${time8} miles<br>In 12 hours: ${time12} miles`;
    document.getElementById("output3").innerHTML = output;
});

// components for item number 4
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    let milesDriven = parseFloat(document.getElementById("milesDriven").value);
    let gallonsUsed = parseFloat(document.getElementById("gallonsUsed").value);
    let mpg = milesDriven / gallonsUsed;
    document.getElementById("output4").innerHTML = `Miles per gallon (MPG): ${mpg.toFixed(2)}`;
});

// components for item number 5
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    let celcius = parseFloat(document.getElementById("celcius").value);
    let fahrenheit = (celcius * 9/5) + 32;
    document.getElementById("output5").innerHTML = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}`;
});

// components for item number 6
const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    let cookiesEaten = parseFloat(document.getElementById("cookiesEaten").value);
    const caloriesPerCookie = 75;
    let totalCalories = caloriesPerCookie * cookiesEaten;
    document.getElementById("output6").innerHTML = `Number of calories consumed: ${totalCalories}`;
});

// components for item number 7
const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
    let males = parseFloat(document.getElementById("males").value);
    let females = parseFloat(document.getElementById("females").value);
    let total = males + females;
    let malePercentage = (males / total) * 100;
    let femalePercentage = (females / total) * 100;
    document.getElementById("output7").innerHTML = `Percentage of males: ${malePercentage.toFixed(2)}%<br>Percentage of females: ${femalePercentage.toFixed(2)}%`;
});