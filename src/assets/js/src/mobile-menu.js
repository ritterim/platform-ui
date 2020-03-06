var menuAction = document.querySelector('.mobile-menu-action');

if (menuAction) {
  var body = document.querySelector('.platform');

  menuAction.addEventListener('click', function() {
    body.classList.toggle('menu-open');
  });
}
