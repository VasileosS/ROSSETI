// Навигация

let navLink = document.querySelectorAll("#nav");
let current = document.getElementsByClassName("active");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    current[0].className = current[0].className.replace("active", "");
    navLink[i].classList.toggle("active");
  });
}

// FAQ

const items = document.querySelectorAll(".faq a");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    items[i].classList.toggle("active");
    items[i].nextElementSibling.classList.toggle("active");
  });
}

// burger

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const bg = document.querySelector("#bg");

open.addEventListener("click", () => {
  open.classList.toggle("active");
  bg.classList.toggle("active");
});
close.addEventListener("click", () => {
  open.classList.toggle("active");
  bg.classList.toggle("active");
});
function burger() {
  open.classList.toggle("active");
  bg.classList.toggle("active");
}
