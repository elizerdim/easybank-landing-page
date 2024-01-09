const menuButton = document.getElementById("menu-button");
const navContainer = document.getElementById("nav-container");
const phoneImg = document.getElementById("phone-mockup");
const menuButtonBars = document.getElementsByClassName("bar");

const openMenu = () => {
  navContainer.classList.toggle("hidden");
  phoneImg.classList.toggle("hidden");
  menuButton.classList.toggle("close-position");
}

menuButton.addEventListener("click", openMenu);