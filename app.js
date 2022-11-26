const button = document.getElementById("toggle-button");
const flexy = document.getElementById("flexy");

button.addEventListener("change", (e) => {
  flexy.classList.toggle("show-monthly");
});
