let closeDrawer = document.querySelectorAll('.rim-drawer__close');
let openDrawer = document.querySelectorAll('.rim-drawer__open');

if(closeDrawer) {
  closeDrawer.forEach(function(el) {
    el.addEventListener('click', function() {
      console.log('in close click evt');
      let drawer = document.getElementById(el.dataset.drawer);
      console.log('el.dataset: ' + el.dataset.drawer);
      console.log('drawer: ' + drawer);
      drawer.classList.toggle('rim-drawer--closed');
    });
  });
}

if(openDrawer) {
  openDrawer.forEach(function(el) {
    el.addEventListener('click', function() {
      console.log('in open click evt');
      let drawer = document.getElementById(el.dataset.drawer);
      console.log('el.dataset: ' + el.dataset.drawer);
      console.log('drawer: ' + drawer);
      drawer.classList.toggle('rim-drawer--closed');
    });
  });
}

const drawerOpen = document.querySelectorAll('.js-open-right-drawer');
const drawerClose = document.querySelectorAll('.js-drawer-right-close');
const rightDrawer = document.querySelector('.js-drawer-right');
const sideContent = document.querySelector('.js-side-content');
const showContent = document.querySelectorAll('.js-show-content');

if(rightDrawer) {
  drawerOpen.forEach(open => {
    open.addEventListener('click', openDrawerRight);
  });
  
  drawerClose.forEach(close => {
    close.addEventListener('click', closeDrawerRight);
  })
  
  function openDrawerRight() {
    const target = this;
    const targetOpen = target.getAttribute('data-open');
  
    rightDrawer.classList.add('slide-right-enter-active');
    rightDrawer.classList.remove('slide-right-leave-active');
  
    // hide all drawer content
    rightDrawer
      .querySelectorAll('[data-inner]')
      .forEach(inner => inner.setAttribute('hidden', true));
  
    // show selected content
    rightDrawer
      .querySelector('[data-inner="'+targetOpen+'"]')
      .removeAttribute('hidden');
  }
  
  function closeDrawerRight() {
    rightDrawer.classList.add('slide-right-leave-active');
    rightDrawer.classList.remove('slide-right-enter-active');
  }
  
  showContent.forEach(show => {
    show.addEventListener('click', showSideContent);
  })
  
  function showSideContent() {
    const target = this;
    const targetOpen = target.getAttribute('data-open');
  
  
    // hide all drawer content
    sideContent
      .querySelectorAll('[data-inner]')
      .forEach(inner => inner.setAttribute('hidden', true));
  
    // show selected content
    sideContent
      .querySelector('[data-inner="'+targetOpen+'"]')
      .removeAttribute('hidden');
  
    closeDrawerRight();
  }
}
