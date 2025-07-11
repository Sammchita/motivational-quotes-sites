const quotes = [
  {
    text: "Coding is to programming what writing is to literature.",
    author: "Leslie Lamport"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `— ${quote.author}`;
}

// Show quote on page load
generateQuote();
