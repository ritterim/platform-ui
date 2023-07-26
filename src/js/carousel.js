let carousels = document.querySelectorAll('.carousel');

if(carousels) {
  carousels.forEach(carousel => {
    let slides = carousel.querySelectorAll('.carousel__slide');
    let slider = carousel.querySelector('.carousel__slider');
    let slideLength = slides.length;
    let slideArr = [];
    let next = true;
    let slideVal = 0;
    let increment = 1;

  
    // start at 0 for array position
    // build array
    for (let i = 0; i < slideLength; i += 1) {
      slideArr.push(i);
    }

    // slide Values based on array values
    let activeSlideVal = slideVal;
    

    // populate data attributes for slides
    let setSlideData = () => {
      let counter = 0;
      slides.forEach(slide => {
        // add data attribute (data-slide='1') for slide target
        slide.setAttribute('data-slide', counter);
    
        counter++;
      })
    }
  

    // show first slide in carousel
    // set previous slide to last item in array
    // set next slide to nextSlideVal which equals slideVal +1 or always 1
    let setInitialSlide = () => {
      let initialSlide = carousel.querySelector('.carousel__slide[data-slide="'+activeSlideVal+'"]');
      initialSlide.classList.add('active');
    }
  

    let changeSlideVal = () => {
      // If the right (forward) arrow is clicked
      if (next && (slideVal <= slideLength)) {
        slideVal += increment;
        if (slideVal == slideLength) {
          slideVal = 0;
        }
      // If the left (previous) arrow is clicked
      } else {
        next = false;
        slideVal -= increment;
  
        if (slideVal == -1) {
          slideVal = slideLength - 1;
        }
      }
    }
    
    
    // set active, next, previous classes on appropriate slides
    let changeSlide = () => {
      // removeActiveSlide();
      // changes slideVal
      changeSlideVal();
      
      if (next == true) {
        carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('next');
        setTimeout(() => {
          slider.classList.add('move-left');
        }, 100);
        
        setTimeout(() => {
          carousel.querySelector('.carousel__slide.next').classList.remove('next');
          slider.classList.remove('move-left');
        }, 1000);
      } else if (next == false) {
        carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('previous');
        setTimeout(() => {
          slider.classList.add('move-right');
        }, 100);
        
        setTimeout(() => {
          carousel.querySelector('.carousel__slide.previous').classList.remove('previous');
          slider.classList.remove('move-right');
        }, 1000);
      }

      setTimeout(() => {
        carousel.querySelector('.carousel__slide.active').classList.remove('active');
        carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('active');
      }, 1000);
    }
  

    // click an arrow to move the carousel one space
    let clickArrow = () => {
      let arrows = carousel.querySelectorAll('.carousel__arrow');
      arrows.forEach(arrow => {
        arrow.addEventListener('click', e => {
          
          // Which arrow is clicked
          if(arrow.classList.contains('carousel__arrow--next')) {
            // Go forward
            next = true;
          } else {
            // Go backward
            next = false;
          }
  
          // Changes slide
          changeSlide();
          
          if (slider.classList.contains('move-left') || slider.classList.contains('move-right')) {
            arrow.disabled = true;
            setTimeout(() => {
              arrow.disabled = false;
            }, 1000);
          }
  
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
          
          let currentSlideVal = slideVal;
          
          // set slideVal to data attr from clicked nav button
          slideVal = parseInt(targetButton.dataset.nav);

          if (slideVal > currentSlideVal) {
            next = true;
          } else {
            next = false;
          }

          if (next == true) {
            carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('next');
            setTimeout(() => {
              slider.classList.add('move-left');
            }, 100);
            
            setTimeout(() => {
              carousel.querySelector('.carousel__slide.next').classList.remove('next');
              slider.classList.remove('move-left');
            }, 1000);
          } else if (next == false) {
            carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('previous');
            setTimeout(() => {
              slider.classList.add('move-right');
            }, 100);
            
            setTimeout(() => {
              carousel.querySelector('.carousel__slide.previous').classList.remove('previous');
              slider.classList.remove('move-right');
            }, 1000);
          }
    
          setTimeout(() => {
            carousel.querySelector('.carousel__slide.active').classList.remove('active');
            carousel.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('active');
          }, 1000);
  
        });
      });
    }
  

    // Add a nav list to the carousel
    let hasNav = carousel.hasAttribute('data-nav');
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
    
  
    // Autoplay slider
    let hasAuto = carousel.hasAttribute('data-auto');
    
    if(hasAuto) {
      setInterval(changeSlide, 8000);
    }
  })
}