// Dark mode toggle
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;


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

//Buttons
function toggleDetails(button) {
    const details = button.nextElementSibling;

    if (details.style.display === "block") {
        details.style.display = "none";
        button.innerText = "View Details";
    } else {
        details.style.display = "block";
        button.innerText = "Hide Details";
    }
}
