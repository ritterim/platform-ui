let accordionHeader = document.querySelectorAll('.pui-accordion__header, .accordion__header');

if (accordionHeader) {
  accordionHeader.forEach(function(el) {
    el.addEventListener('click', function(e) {
      let accordion = el.parentElement;
      e.preventDefault();
      accordion.querySelector('.pui-accordion__content, .accordion__content').classList.toggle('active');
    });
    el.addEventListener('keydown', function(e) {
      let accordion = el.parentElement;
      if (e.keyCode === 13) {
        e.preventDefault();
        accordion.querySelector('.pui-accordion__content, .accordion__content').classList.toggle('active');
      }
    });
  });
}
