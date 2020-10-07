var bgGradient = document.querySelectorAll('.linear-gradient');

if(bgGradient) {
  bgGradient.forEach(function(elem){
    const direction = elem.dataset.gradientDirection;
    const start = elem.dataset.gradientStart;
    const stop = elem.dataset.gradientStop;
    const fallback = elem.dataset.gradientFallback;
    
    if(direction && start && stop) {
      
      if(fallback) {
        elem.style.backgroundColor = fallback;
      }
      
      elem.style.backgroundImage = 'linear-gradient('
        + direction + ', ' + start + ', ' + stop + ')'
    }
  });
}