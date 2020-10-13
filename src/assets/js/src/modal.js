let closeModal = document.querySelectorAll('.pui-modal__close, .modal__close');
let openModal = document.querySelectorAll('.pui-modal__open, .modal__open');

function modalClose(elm) {
  elm.classList.add('pui-modal--closed', 'modal--closed');
  document.body.classList.remove('modal-open');
}

function modalOpen(elm) {
  elm.classList.remove('pui-modal--closed', 'modal--closed');
  document.body.classList.add('modal-open');
  elm.focus();
}

if(closeModal) {
  closeModal.forEach(function(el) {
    el.addEventListener('click', function() {
      let modal = document.getElementById(el.dataset.modal);
      modalClose(modal);
    });
  });
}

if(openModal) {
  openModal.forEach(function(el) {
    el.addEventListener('click', function(evt) {
      let modal = document.getElementById(el.dataset.modal);
      modalOpen(modal);
    });

    document.addEventListener('keydown', e => {
      if (e.keyCode == 27) {
        let modal = document.getElementById(el.dataset.modal);
        modalClose(modal);
      }
    });
  });
}
