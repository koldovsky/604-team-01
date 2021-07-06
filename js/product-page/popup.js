/* by Bohdan Bohiv */
const popup = document.querySelector('.popup');

document.querySelector('main > div:first-child > img').addEventListener('click', () => {
  popup.style.display = 'unset';
});

document.querySelector('.popup .xPopup').addEventListener('click', () => {
  popup.style.removeProperty('display');
});
