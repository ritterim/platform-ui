let menuAction = document.querySelector('.mobile-menu-action');

if(menuAction) {
  let body = document.querySelector('.platform');
  menuAction.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });
}
