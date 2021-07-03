let menu = document.querySelector(".menu");
let ham = document.querySelectorAll(".ham");
let menuIcon = document.querySelector(".menuIcon");
let xIcon = document.querySelector(".xIcon");

ham[0].addEventListener("click", toggleMenu);
ham[1].addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menuIcon.style.display = "none";
    xIcon.style.display = "block";
  }
}
