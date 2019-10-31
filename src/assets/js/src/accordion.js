let accordionHeader = Array.prototype.slice.call(document.querySelectorAll('.rim-accordion__header'));

if (accordionHeader) {
  accordionHeader.forEach(function(el) {
    el.addEventListener('click', function() {
      let accordion = el.parentElement;
      accordion.classList.toggle('active');
    });
  });
}
