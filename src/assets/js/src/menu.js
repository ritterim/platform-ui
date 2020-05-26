let  hasDropdown = document.querySelectorAll('.dropdown');

let openDropdown = (item) => {
  let menuItem = item.closest('.dropdown');
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
  const links = document.querySelectorAll('.dropdown .dropdown__trigger')

  links.forEach( (el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openDropdown(el);
    })
    el.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        openDropdown(el);
      }
    })
  });
}

let siteMenu = document.querySelectorAll('.site-menu');

let toggleMenu = (elm) => {
  let activeMenu = elm.nextElementSibling;
  
  if (activeMenu.classList.contains('active')) {
    activeMenu.classList.remove('active')
  } else {
    siteMenu.forEach(menu => {
      menu.classList.remove('active');
    })
    activeMenu.classList.toggle('active');
  }
}

let menuAction = document.querySelectorAll('.site-menu-mobile-action');

if (menuAction) {
  menuAction.forEach(function(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault;
      toggleMenu(el);
    })
  })
}
