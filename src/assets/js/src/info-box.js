let infoBox = document.querySelector('.pui-info-box, .info-box');
let infoBox2 = document.querySelector('.pui-info-box--left, .info-box--left');

if(!infoBox && !infoBox2) return;

document.querySelector('.toggle-hidden').addEventListener('click', () => {
  this.nextSibling.nextSibling.classList.toggle('hidden');
});


document.querySelector('.toggle-hidden--left').addEventListener('click', e => {
  e.preventDefault();
  this.nextSibling.nextSibling.classList.toggle('hidden');
});
