let carousels = document.querySelectorAll('.carousel');

if(carousels) {
  carousels.forEach(carousel => {
    let slides = carousel.querySelectorAll('.carousel__slide');
    let slideLength = slides.length
    let slideArr = [];
    let next = true;
    let slideVal = 0
    let increment = 1;
  
    // start at 0 for array position
    // build array
    for (let i = 0; i < slideLength; i += 1) {
      slideArr.push(i);
    }
    
    // populate data attributes for slides
    let setSlideData = () => {
      let counter = 0;
      slides.forEach(slide => {
        // add data attribute (data-slide="1") for slide target
        slide.setAttribute('data-slide', counter);
    
        counter = counter + 1;
      })
    }
  
    let changeSlideVal = () => {
      if (next == true && slideVal <= slideLength) {
        slideVal += increment;
  
        if (slideVal == slideLength) {
          slideVal = 0;
        }
      } else {
        next = false;
        slideVal -= increment;
  
        if (slideVal == -1) {
          slideVal = slideLength -1;
        }
      }
    }
  
    // show first slide in carousel
    let setInitialSlide = () => {
      let initialSlide = carousel.querySelector('.carousel__slide[data-slide="'+slideArr[0]+'"]');
      initialSlide.classList.add('active');
    }
  
    // remove 'active' class from slide
    let removeActiveSlide = () => {
      if (carousel.querySelector('.carousel__slide.active') !== null) {
        carousel.querySelector('.carousel__slide.active').classList.remove('active');
      }
    }
  
    // click an arrow to move the carousel one space
    let clickArrow = () => {
      let arrows = carousel.querySelectorAll('.carousel__arrow');
      arrows.forEach(arrow => {
        arrow.addEventListener('click', e => {
          removeActiveSlide();
  
          // Which arrow is clicked
          if(arrow.classList.contains('carousel__arrow--next')) {
            // Go forward
            next = true;
          } else {
            // Go backward
            next = false;
          }
  
          // changes slideVal
          changeSlideVal();
  
          // Show active slide
          carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('active');
  
          // Set nav button
          if(hasNav) {
            removeActiveButton();
            setActiveButton();
          }
        })
      })
    }
    
  
    // HasNav functions
    // Remove active class from current active button in nav
    let removeActiveButton = () => {
      if(carousel.querySelector('.carousel__nav-button.active') !== null) {
        carousel.querySelector('.carousel__nav-button.active').classList.remove('active');
      }
    }
  
    // set active class to button with corresponding slideVal attr
    let setActiveButton = () => {
      carousel.querySelector('.carousel__nav-button[data-nav="'+slideVal+'"]').classList.add('active');
    }
  
    // build the nav list
    let buildNavList = () => {
      let list = document.createElement('ol');
      list.classList.add('carousel__nav', 'list');
      slides.forEach((slide, index) => {
        let li = document.createElement('li');
        li.classList.add('carousel__nav-item');
        let button = document.createElement('button');
        button.classList.add('carousel__nav-button');
        button.setAttribute('data-nav', index);
        li.appendChild(button);
        list.appendChild(li);
      });
  
      // append the nav list
      carousel.appendChild(list);
    }
  
    // highlight first button in nav by adding active class
    let setInitialButton = () => {
      let initialNav = carousel.querySelector('.carousel__nav-button[data-nav="'+slideArr[0]+'"]');
      initialNav.classList.add('active');
    }
  
    // click nav buttons
    let navButtonClick = () => {
      let navButtons = carousel.querySelectorAll('.carousel__nav-item button');
      navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          let targetButton = e.target;
          
          removeActiveButton();
  
          // add 'active' to the clicked button
          targetButton.classList.add('active');
          
          // set slideVal to data attr from clicked nav button
          slideVal = parseInt(targetButton.dataset.nav);
  
          removeActiveSlide();
  
          // Show active slide
          carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('active');
        });
      });
    }
  
    // Add a nav list to the carousel
    let hasNav = carousel.classList.contains('has-nav');
    if(hasNav) {
  
      // build nav
      buildNavList();
  
      // add 'active' class to first button in nav
      setInitialButton();
  
      // click a nav button to move the carousel
      navButtonClick();
    }
  
    setSlideData();
    // show first slide in carousel
    setInitialSlide();
  
    // click an arrow to move the carousel one space
    clickArrow();
    
  
    // TODO:
    // Autoplay slider
    // setInterval(changeSlideVal, 1000);
  })
}