const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const feedback = document.getElementById("searchFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    input.focus();
    feedback.textContent = "Type something to search.";
    return;
  }

  feedback.textContent = `Search submitted: ${query}`;
});

// Clicking the compact magnifier opens the bar and places the cursor in it.
form.querySelector("button").addEventListener("click", () => {
  if (!input.value.trim()) {
    input.focus();
  }
});

// Clear the demo response as the user edits the query.
input.addEventListener("input", () => {
  feedback.textContent = "";
});
