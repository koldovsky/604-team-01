/* by Bohdan Bohiv */
const smallImg = document.querySelector('main > div:first-child > img')
const popup = document.querySelector('.popup');
const xPopup = document.querySelector('.popup .xPopup');

smallImg.addEventListener('click', () => {
  popup.style.display = 'unset';
});

xPopup.addEventListener('click', () => {
  popup.style.removeProperty('display');
});
