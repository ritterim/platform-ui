let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal--overlay');
let closeButton = document.querySelector('.modal__close');
let openButton = document.querySelector('.modal__open');

closeButton.addEventListener('click', function() {
  modal.classList.toggle('modal--closed');
  modalOverlay.classList.toggle('modal--closed');
});

openButton.addEventListener('click', function() {
  modal.classList.toggle('modal--closed');
  modalOverlay.classList.toggle('modal--closed');
});
