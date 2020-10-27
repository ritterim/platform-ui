var closeDrawer = document.querySelectorAll('.pui-drawer__close, .drawer__close');
var openDrawer = document.querySelectorAll('.pui-drawer__open, .drawer__open');

if(!closeDrawer && !closeDrawer) return;

function toggleDrawer(drawer) {
  drawer.classList.toggle('pui-drawer--closed');
}

closeDrawer.forEach(function(drawer) {
  el.addEventListener('click', function() {
    toggleDrawer(document.getElementById(el.dataset.drawer));
  });
});

openDrawer.forEach(function(drawer) {
  el.addEventListener('click', function() {
    toggleDrawer(document.getElementById(el.dataset.drawer));
  });
});
