let accordionHeaders = document.querySelectorAll('.pui-accordion__header, .accordion__header');

if (!accordionHeaders) return;

accordionHeaders.forEach(accordion => {
  accordion.addEventListener('click', e => {
    e.preventDefault();
    accordion.parentElement.querySelector('.pui-accordion__content, .accordion__content').classList.toggle('active');
  });
  accordion.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      accordion.parentElement.querySelector('.pui-accordion__content, .accordion__content').classList.toggle('active');
    }
  });
});
