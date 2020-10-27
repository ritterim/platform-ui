let bgGradients = document.querySelectorAll('.linear-gradient');

if(bgGradients) {
  bgGradients.forEach(elem => {
    const direction = elem.dataset.gradientDirection;
    const start = elem.dataset.gradientStart;
    const stop = elem.dataset.gradientStop;
    const fallback = elem.dataset.gradientFallback;
    // background image data attributes
    const img = elem.dataset.backgroundImage;
    const position = elem.dataset.backgroundPosition;
    const size = elem.dataset.backgroundSize;
    const repeat = elem.dataset.backgroundRepeat;
    
    if(direction && start && stop) {
      if(fallback) {
        elem.style.backgroundColor = fallback;
      }
      
      elem.style.backgroundImage = `linear-gradient('${direction}, ${start}, ${stop})`;

      if(elem.classList.contains('background-image')) {
        if(img) {
          elem.style.backgroundImage = `linear-gradient('${direction}, ${start}, ${stop}'), url('${img}')`;
        }
        if(position) {
          elem.style.backgroundPosition = position;
        }
        if(size) {
          elem.style.backgroundSize = size;
        }
        if(repeat) {
          elem.style.backgroundRepeat = repeat;
        }
      }
    }
  });
}
