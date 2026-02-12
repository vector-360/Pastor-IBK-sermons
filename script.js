// HAMBURGER MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle?.addEventListener("click", () => {
navLinks.classList.toggle("show");
});

// BIBLE QUOTES
const quotes = [
{ text: "For I know the plans I have for you...", ref: "Jeremiah 29:11" },
{ text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
{ text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
{ text: "Trust in the Lord with all your heart...", ref: "Proverbs 3:5" }
];

function changeQuote() {
const random = Math.floor(Math.random() * quotes.length);
document.getElementById("quote-text")?.innerText = quotes[random].text;
document.getElementById("quote-ref")?.innerText = quotes[random].ref;
}

changeQuote();
setInterval(changeQuote, 60000);

// FILTER + SEARCH
const filterButtons = document.querySelectorAll(".filter-btn");
const sermons = document.querySelectorAll(".sermon-item");
const searchInput = document.getElementById("searchInput");

let currentFilter = "all";

filterButtons.forEach(button => {
button.addEventListener("click", () => {
document.querySelector(".filter-btn.active")?.classList.remove("active");
button.classList.add("active");
currentFilter = button.dataset.filter;
filterAndSearch();
});
});

searchInput?.addEventListener("keyup", filterAndSearch);

function filterAndSearch() {
const searchValue = searchInput.value.toLowerCase();

sermons.forEach(sermon => {
const title = sermon.dataset.title.toLowerCase();
const tags = sermon.dataset.tags.toLowerCase();
const matchesSearch = title.includes(searchValue) || tags.includes(searchValue);
const matchesFilter = currentFilter === "all" || sermon.classList.contains(currentFilter);

sermon.style.display = (matchesSearch && matchesFilter) ? "block" : "none";
});
}
