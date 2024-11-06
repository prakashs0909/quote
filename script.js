const text = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

const quoteElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote");
const iconBox = document.querySelector(".icon-box"); // Select the SVG icon

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for button click
button.addEventListener("click", function() {
  // Get a random quote
  const randomIndex = Math.floor(Math.random() * text.length);
  const randomQuote = text[randomIndex];
  
  // Update the quote and author
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = `- ${randomQuote.author}`;
  
  // Generate a single random color for both background, button, and SVG icon
  const color = getRandomColor();
  
  // Apply the color to the background, button, and SVG icon
  document.body.style.backgroundColor = color;
  button.style.backgroundColor = color;
  iconBox.style.borderColor = color;
  const icon = iconBox.querySelector("svg"); 
  icon.style.fill = color; // Set SVG icon color to match button
});
