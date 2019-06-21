var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal--overlay');
var closeButton = document.querySelector('.modal__close');
var openButton = document.querySelector('.modal__open');

closeButton.addEventListener('click', function() {
  modal.classList.toggle('modal--closed');
  modalOverlay.classList.toggle('modal--closed');
});

openButton.addEventListener('click', function() {
  modal.classList.toggle('modal--closed');
  modalOverlay.classList.toggle('modal--closed');
});
