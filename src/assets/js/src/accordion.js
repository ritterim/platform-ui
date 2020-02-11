let accordionHeader = document.querySelectorAll('.pui-accordion__header');

if (accordionHeader) {
  accordionHeader.forEach(function(el) {
    el.addEventListener('click', function(e) {
      let accordion = el.parentElement;
      e.preventDefault();
      accordion.classList.toggle('active');
    });
    el.addEventListener('keydown', function(e) {
      let accordion = el.parentElement;
      if (e.keyCode === 13) {
        e.preventDefault();
        accordion.classList.toggle('active');
      }
    });
  });
}

let inputCheck = document.querySelectorAll('input[type=checkbox]');
let noFocus = document.querySelectorAll('.no-focus'); 

if(inputCheck) {
  console.log(inputCheck.length);
  inputCheck.forEach(function(el){     
    el.addEventListener('click', function() {
    console.log(noFocus.length);
      if(el.classList.contains('no-focus')) {
        el.classList.remove('no-focus');
        el.classList.add('no-focus');
      } else {
        el.classList.add('no-focus');
      }
      if(el.checked) {
        console.log('checked');
      } else {
        console.log('not checked');
      }
    })
    // el.addEventListener('keydown', function(e){
    //   if (e.keyCode === 9) {
    //     if (el === document.activeElement) {
    //       console.log('tabbed')
    //       el.classList.add('focus');
    //     } else {
    //       console.log('not tabbed')
    //       el.classList.remove('focus');
    //     }        
    //   }
    // })
  })
}

