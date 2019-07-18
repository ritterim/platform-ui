let modalOverlay = document.querySelector('.rim-modal--overlay');
let closeButton = document.querySelectorAll('.rim-modal__close');
let openButton = document.querySelectorAll('.rim-modal__open');

if(closeButton) {
  closeButton.forEach(function(el) {
    el.addEventListener('click', function() {
      let modal = document.getElementById(el.dataset.modal);
      modal.classList.toggle('rim-modal--closed');
      modalOverlay.classList.toggle('rim-modal--closed');
    });
  });
}

if(openButton) {
  openButton.forEach(function(el) {
    el.addEventListener('click', function(evt) {
      let modal = document.getElementById(el.dataset.modal);
      modal.classList.toggle('rim-modal--closed');
      modalOverlay.classList.toggle('rim-modal--closed');
    });
  });
}
