let infoBox = document.querySelector('.pui-info-box, .info-box');
let infoBox2 = document.querySelector('.pui-info-box--left, .info-box--left');

if(infoBox && infoBox2) {
  let hidden = document.querySelector('.toggle-hidden');
  hidden.addEventListener('click', button => {
    hidden.nextSibling.nextSibling.classList.toggle('hidden');
  });

  let hiddenLeft = document.querySelector('.toggle-hidden--left');
  hiddenLeft.addEventListener('click', e => {
    e.preventDefault();
    hiddenLeft.nextSibling.nextSibling.classList.toggle('hidden');
  });
}
