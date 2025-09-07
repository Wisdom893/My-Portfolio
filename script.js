// Dark mode toggle
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
