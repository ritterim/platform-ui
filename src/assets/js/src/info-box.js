let infoBox = document.querySelectorAll('.pui-info-box, .info-box');

if(infoBox) {
  let hidden = document.querySelectorAll('.toggle-hidden');
  hidden.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      button.nextSibling.nextSibling.classList.toggle('hidden');
    });
  });
  
}
