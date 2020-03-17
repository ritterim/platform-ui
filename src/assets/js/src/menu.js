let  dropdownMenu = document.querySelectorAll('.dropdown-menu');
let  hasDropdown = document.querySelectorAll('.has-dropdown');

let openDropdown = (item) => {
  let menuItem = item.closest('.has-dropdown');
  if(menuItem.classList.contains('dropdown-active')) {
    menuItem.classList.remove('dropdown-active');
  } else {
    hasDropdown.forEach(node => {
      node.classList.remove('dropdown-active');
    });
    menuItem.classList.toggle('dropdown-active');
  }  
}

if (hasDropdown) {
  const links = document.querySelectorAll('.has-dropdown .site-menu__link')

  links.forEach( (el) => {
    el.addEventListener('click', (e) => {
      openDropdown(el);
      e.preventDefault();
    })
    el.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        openDropdown(el);
        e.preventDefault();
      }
    })
  });
}

let menuAction = document.querySelector('.site-menu-mobile-action');

if (menuAction) {
  menuAction.addEventListener('click', (e) => {
    e.preventDefault;
    if (e.target.nextElementSibling.matches('.site-menu')) {
      e.target.nextElementSibling.classList.toggle('active');
    }    
  })
}
