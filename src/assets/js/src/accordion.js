let accordionHeaders = document.querySelectorAll('.accordion__header');

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
