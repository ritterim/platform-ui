let closeModalButtons = document.querySelectorAll('.modal__close');
let openModalButtons = document.querySelectorAll('.modal__open');

let modalClose = (modal) => {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

let modalOpen = (modal) => {
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  modal.focus();
}

if(closeModalButtons) {
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = document.getElementById(button.dataset.modal);
      modalClose(modal);
    });
  });
}

if(openModalButtons) {
  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = document.getElementById(button.dataset.modal);
      modalOpen(modal);
    });

    document.addEventListener('keydown', e => {
      if (e.keyCode == 27) {
        let modal = document.getElementById(button.dataset.modal);
        modalClose(modal);
      }
    });
  });
}
