let modal = document.querySelector('.rim-modal');
let modalOverlay = document.querySelector('.rim-modal--overlay');
let closeButton = document.querySelector('.rim-modal__close');
let openButton = document.querySelector('.rim-modal__open');

if(closeButton) { 
  closeButton.addEventListener('click', function() {
    modal.classList.toggle('rim-modal--closed');
    modalOverlay.classList.toggle('rim-modal--closed');
  });
}

if(openButton) {
  openButton.addEventListener('click', function() {
    modal.classList.toggle('rim-modal--closed');
    modalOverlay.classList.toggle('rim-modal--closed');
  });
}
