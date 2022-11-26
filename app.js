const button = document.getElementById("toggle-button");
const switchClass = document.getElementById("switch-class");

button.addEventListener("change", (e) => {
  switchClass.classList.toggle("show-monthly");
});
