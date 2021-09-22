const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const link = document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
}
