let modalOverlay = document.querySelector('.rim-modal--overlay');
let closeModal = document.querySelectorAll('.rim-modal__close');
let openModal = document.querySelectorAll('.rim-modal__open');

if(closeModal) {
  closeModal.forEach(function(el) {
    el.addEventListener('click', function() {
      let modal = document.getElementById(el.dataset.modal);
      modal.classList.toggle('rim-modal--closed');
      modalOverlay.classList.toggle('rim-modal--closed');
    });
  });
}

if(openModal) {
  openModal.forEach(function(el) {
    el.addEventListener('click', function(evt) {
      let modal = document.getElementById(el.dataset.modal);
      modal.classList.toggle('rim-modal--closed');
      modalOverlay.classList.toggle('rim-modal--closed');
    });
  });
}
