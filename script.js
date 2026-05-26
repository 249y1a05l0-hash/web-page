// ES6 variables
const button = document.getElementById("btn");

const title = document.getElementById("title");

const message = document.getElementById("message");

// DOM Manipulation + Arrow Function
button.addEventListener("click", () => {

    // Array of colors
    const colors = [
        "lightgreen",
        "lightpink",
        "lightyellow",
        "lavender",
        "lightgray"
    ];

    // Random color
    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    // Change background color
    document.body.style.backgroundColor = randomColor;

    // Change text using template literals
    title.innerHTML = "Background Changed";

    message.innerHTML =
        `New color is ${randomColor}`;

});
