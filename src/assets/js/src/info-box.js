let infoBox = document.querySelectorAll('.pui-info-box, .info-box');

if(infoBox) {
  let hidden = document.querySelectorAll('.toggle-hidden');
  let boxClose = document.querySelectorAll('.info-box__close');
  
  hidden.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      button.nextSibling.nextSibling.classList.toggle('hidden');
    });
  });

  if (boxClose) {
    boxClose.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        btn.parentElement.classList.toggle('hidden');
      });
    });
  }
}
