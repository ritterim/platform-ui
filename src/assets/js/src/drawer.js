let closeDrawer = document.querySelectorAll('.pui-drawer__close');
let openDrawer = document.querySelectorAll('.pui-drawer__open');

if(closeDrawer) {
  closeDrawer.forEach(function(el) {
    el.addEventListener('click', function() {
      let drawer = document.getElementById(el.dataset.drawer);
      drawer.classList.toggle('pui-drawer--closed');
    });
  });
}

if(openDrawer) {
  openDrawer.forEach(function(el) {
    el.addEventListener('click', function() {
      let drawer = document.getElementById(el.dataset.drawer);
      drawer.classList.toggle('pui-drawer--closed');
    });
  });
}
