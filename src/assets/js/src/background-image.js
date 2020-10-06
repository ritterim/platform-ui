var bgImg = document.querySelectorAll('.background-image');

if(bgImg) {
  bgImg.forEach(function(elem){
    const img = elem.dataset.backgroundImage;
    const position = elem.dataset.backgroundPosition;
    const size = elem.dataset.backgroundSize;
    const repeat = elem.dataset.backgroundRepeat;
    if(img) {
      elem.style.backgroundImage = 'url('+img+')';
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
  });
}