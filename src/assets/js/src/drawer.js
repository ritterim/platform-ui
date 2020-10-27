let closeDrawer = document.querySelectorAll('.pui-drawer__close, .drawer__close');
let openDrawer = document.querySelectorAll('.pui-drawer__open, .drawer__open');

if(!closeDrawer && !closeDrawer) return;

let  toggleDrawer = (drawer) => {
  drawer.classList.toggle('pui-drawer--closed');
}

closeDrawer.forEach(drawer => {
  drawer.addEventListener('click', () => {
    toggleDrawer(document.getElementById(drawer.dataset.drawer));
  });
});

openDrawer.forEach(drawer => {
  drawer.addEventListener('click', () => {
    toggleDrawer(document.getElementById(drawer.dataset.drawer));
  });
});
