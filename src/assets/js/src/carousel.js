let carousel = document.querySelectorAll('.carousel');

if(carousel) {
  carousel.forEach(carousel => {
    let slide = document.querySelectorAll('.carousel__slide');
    let slideLength = slide.length
    let slideArr = [];
    let max = true;
    let slideVal = 0
    let increment = 1;
  
    // start at 0 for array position
    // build array
    for (let i = 0; i < slideLength; i += 1) {
      slideArr.push(i);
    }
    
    // populate data attributes for slides
    let setSlideData = () => {
      let counter = 0
      slide.forEach(item => {
        // add data attribute (data-slide="1") for slide target
        item.setAttribute('data-slide', counter);
    
        counter = counter + 1;
      })
    }
  
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
  
    // show first slide in carousel
    let setInitialSlide = () => {
      let initialSlide = document.querySelector('.carousel__slide[data-slide="'+slideArr[0]+'"]');
      initialSlide.classList.add('active');
    }
  
    // remove 'active' class from slide
    let removeActiveSlide = () => {
      if (document.querySelector('.carousel__slide.active') !== null) {
        document.querySelector('.carousel__slide.active').classList.remove('active');
      }
    }
  
    // click an arrow to move the carousel one space
    let clickArrow = () => {
      let arrow = document.querySelectorAll('.carousel__arrow');
      arrow.forEach(arrow => {
        arrow.addEventListener('click', e => {
          removeActiveSlide();
  
          // Which arrow is clicked
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
          document.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('active');
  
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
      if(document.querySelector('.carousel__nav-button.active') !== null) {
        document.querySelector('.carousel__nav-button.active').classList.remove('active')
      }
    }
  
    // set active class to button with corresponding slideVal attr
    let setActiveButton = () => {
      document.querySelector('.carousel__nav-button[data-nav="'+slideVal+'"]').classList.add('active');
    }
  
    // build the nav list
    let buildNavList = () => {
      let list = document.createElement('ol');
      slide.forEach(() => {
        let li = document.createElement('li')
        let button = document.createElement('button');
        li.appendChild(button);
        list.appendChild(li);
      });
  
      // append the nav list
      carousel.appendChild(list);
  
      // apply classes to list and list elements
      listClasses();
      liClasses();
      buttonClasses();
    }
  
    // add classes to list
    let listClasses = () => {
      let nav = document.querySelector('.carousel ol');
      let navClasses = ['carousel__nav', 'list'];
      nav.classList.add(...navClasses);
    }
  
    let liClasses = () => {
      // add class to nav li
      let navItem = document.querySelectorAll('.carousel__nav li')
      navItem.forEach(li => {
        li.classList.add('carousel__nav-item');
      });
    }
  
    // add class and data attribute to nav button
    let navButton;
    let buttonClasses = () => {
      navButton = document.querySelectorAll('.carousel__nav-item button');
      let num = 0
      navButton.forEach(btn => {
        btn.classList.add('carousel__nav-button');
        btn.setAttribute('data-nav', num);
  
        num = num + 1;
      });
    }
  
    // highlight first button in nav by adding active class
    let setInitialButton = () => {
      let initialNav = document.querySelector('.carousel__nav-button[data-nav="'+slideArr[0]+'"]');
      initialNav.classList.add('active');
    }
  
    // click nav buttons
    let navButtonClick = () => {
      navButton.forEach(btn => {
        btn.addEventListener('click', (e) => {
          let targetButton = e.target;
          
          removeActiveButton();
  
          // add 'active' to the clicked button
          targetButton.classList.add('active')
          
          // set slideVal to data attr from clicked nav button
          slideVal = parseInt(targetButton.dataset.nav);
  
          removeActiveSlide();
  
          // Show active slide
          document.querySelector('.carousel__slide[data-slide="'+slideVal+'"]').classList.add('active');
        });
      });
    }
  
    // Add a nav list to the carousel
    let hasNav = document.querySelector('.has-nav');
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