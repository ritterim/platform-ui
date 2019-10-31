let tooltipPlacement = Array.prototype.slice.call(document.querySelectorAll('[data-placement]'));

if(tooltipPlacement) {
  tooltipPlacement.forEach(function(el) {
    let direction = el.dataset.placement;
    el.classList.add('tooltip-' + direction);
  });
}
