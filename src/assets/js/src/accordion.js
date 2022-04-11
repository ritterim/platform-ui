let accordionHeaders = document.querySelectorAll('.pui-accordion__header, .accordion__header');

if(accordionHeaders) {
  accordionHeaders.forEach(accordion => {
    accordion.addEventListener('click', e => {
      e.preventDefault();
      accordion.parentElement.classList.toggle('active');
    });
    accordion.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        accordion.parentElement.classList.toggle('active');
      }
    });
  });
}
