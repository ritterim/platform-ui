let carousel = document.querySelector('.carousel');

if(carousel) {
  let slider = document.querySelector('.carousel__slider');
  let slide = document.querySelectorAll('.carousel__slide');
  let slideLength = slide.length
  let slideArr = [];

  // start at 0 for array position
  // build array
  for (let i = 0; i < slideLength; i += 1) {
    slideArr.push(i);
  }
  
  // populate data attributes for slides
  let counter = 0
  slide.forEach(item => {
    // add data attribute (data-slide="1") for slide target
    item.setAttribute('data-slide', counter);

    counter = counter + 1;
  })

  let max = true;
  let slideVal = 0
  let increment = 1;

  let changeSlideVal = () => {
    if (max == true && slideVal <= slideLength) {
      slideVal += increment

      if (slideVal == slideLength) {
        slideVal = 0
      }
    } else {
      max = false
      slideVal -= increment;

      if (slideVal == -1) {
        slideVal = slideLength -1
      }
    }
  }

  // TODO:
  // Autoplay slider
  // setInterval(changeSlideVal, 1000);

  // show first slide in carousel
  let initialSlide = document.querySelector('.carousel__slide[data-slide="'+slideArr[0]+'"]');
  initialSlide.classList.add('active');

  let arrow = document.querySelectorAll('.carousel__arrow');
  arrow.forEach(arrow => {
    arrow.addEventListener('click', e => {
      if (document.querySelector('.carousel__slide.active') !== null) {
        document.querySelector('.carousel__slide.active').classList.remove('active');
      }

      if(arrow.classList.contains('carousel__arrow--next')) {
        // Go forward
        max = true;
      } else {
        // Go backward
        max = false;
      }

      // changes slideVal
      changeSlideVal();

      // Show active slide
      document.querySelector('.carousel__slide[data-slide="'+slideArr[slideVal]+'"]').classList.add('active');
    })
  })
}