/* by Bohdan Bohiv */
const menu = document.querySelector('.menu');
const ham = document.querySelectorAll('.ham');
const menuIcon = document.querySelector('.menuIcon');
const xIcon = document.querySelector('.xIcon');

ham[0].addEventListener('click', toggleMenu);
ham[1].addEventListener('click', toggleMenu);

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    closeMenu();
  } else {
    menu.classList.add('showMenu');
    menuIcon.style.display = 'none';
    xIcon.style.display = 'block';
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) closeMenu();
});

function closeMenu() {
  menu.classList.remove('showMenu');
  xIcon.style.display = 'none';
  menuIcon.style.display = 'block';
}
