/* by Bohdan Bohiv */
const pairs = document.querySelectorAll('footer div div a');
const icons = document.querySelectorAll('footer div div a :first-child');
const iconsInverted = document.querySelectorAll('footer div div a :last-child');

for (let i = 0; i < pairs.length; i++) {
  pairs[i].addEventListener('mouseover', () => {
    icons[i].style.display = 'none';
    iconsInverted[i].style.display = 'block';
  });
  pairs[i].addEventListener('mouseleave', () => {
    icons[i].style.display = 'block';
    iconsInverted[i].style.display = 'none';
  });
}
