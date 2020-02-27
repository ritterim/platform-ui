let  dropdownMenu = document.querySelectorAll('.dropdown-menu');
let  hasDropdown = document.querySelectorAll('.has-dropdown');

if (dropdownMenu) {
  dropdownMenu.forEach(menu => {
    menu.classList.add('hidden')
  });
}

let openDropdown = (item) => {
  Array.from(item.childNodes).find(x => {
    if(x.classList && Array.from(x.classList).includes('dropdown-menu'))
      x.classList.toggle('hidden');
  })
}

if (hasDropdown) {
  hasDropdown.forEach(menu => {
    menu.addEventListener('click', (e) => {
      e.preventDefault();
      openDropdown(menu);
    })
    menu.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        openDropdown(menu);
      }      
    })
  });
}

let menuAction = document.querySelector('.site-menu-mobile-action');
let siteMenu = document.querySelector('.site-menu');

if (menuAction) {
  menuAction.addEventListener('click', (e) => {
    e.preventDefault;
    siteMenu.classList.toggle('active');
  })
}
