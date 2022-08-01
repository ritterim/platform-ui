let zItems = document.querySelectorAll('[data-z]');

if(zItems) {
  zItems.forEach(item => {
    let zindex = item.dataset.z;
    item.style['z-index'] = zindex;
  });
}