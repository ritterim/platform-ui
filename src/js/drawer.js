let closeDrawer = document.querySelectorAll('.drawer__close');
let openDrawer = document.querySelectorAll('.drawer__open');

let toggleDrawer = (drawer) => {
  drawer.classList.toggle('active');
}

if(closeDrawer) {
  closeDrawer.forEach(drawer => {
    drawer.addEventListener('click', () => {
      toggleDrawer(document.getElementById(drawer.dataset.drawer));
    });
  });
}

if(openDrawer) {
  openDrawer.forEach(drawer => {
    drawer.addEventListener('click', () => {
      toggleDrawer(document.getElementById(drawer.dataset.drawer));
    });
  });
}
