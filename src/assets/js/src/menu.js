let  dropdownMenu = Array.prototype.slice.call(document.querySelectorAll('.dropdown-menu'));
let  hasDropdown = Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'));

if (dropdownMenu) {
  dropdownMenu.forEach(menu => {
    menu.classList.add('hide-mobile-up')
  });
}
if (hasDropdown) {
  hasDropdown.forEach(menu => {
    menu.addEventListener('click', () => {
      Array.from(menu.childNodes).find(x => {
        if(x.classList && Array.from(x.classList).includes('dropdown-menu'))
          x.classList.toggle('hide-mobile-up');
      })
    })
  });
}
