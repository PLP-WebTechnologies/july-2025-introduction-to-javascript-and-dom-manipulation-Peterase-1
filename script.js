// ===============================
// Part 1: Variables & Conditionals
// ===============================
document.getElementById("askNameBtn").addEventListener("click", () => {
  let name = prompt("What is your name?");
  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}! 👋`;
  } else {
    document.getElementById("greeting").textContent = "You didn't enter a name.";
  }
});

// ===============================
// Part 2: Functions
// ===============================
function calculateTotal(a, b) {
  return a + b;
}

document.getElementById("calcBtn").addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;
  let result = calculateTotal(num1, num2);
  document.getElementById("calcResult").textContent = `Total: ${result}`;
});

// Another function (string formatter)
function formatMessage(message) {
  return `📢 ${message.toUpperCase()}!`;
}
console.log(formatMessage("functions are reusable"));

// ===============================
// Part 3: Loops
// ===============================
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old items

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
});

// Example loop with array
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(`I like ${fruit}`));

// ===============================
// Part 4: DOM Manipulation
// ===============================
let darkMode = false;
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkMode = !darkMode;
  document.getElementById("themeText").textContent = darkMode
    ? "Dark mode is ON 🌙"
    : "Light mode is ON ☀️";
});
