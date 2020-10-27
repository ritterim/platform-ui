let menuAction = document.querySelector('.mobile-menu-action');

if(menuAction) return;

let body = document.querySelector('.platform');

menuAction.addEventListener('click', () => {
  body.classList.toggle('menu-open');
});
