const toggleBtn = document.querySelector(".navbar__toogleBtn");
const logInBtn = document.querySelector(".navbar__logInBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
