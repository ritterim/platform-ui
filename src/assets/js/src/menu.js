let  dropdownMenu = document.querySelectorAll('.dropdown-menu');
let  hasDropdown = document.querySelectorAll('.has-dropdown');

let openDropdown = (item) => {
  let menuItem = item.closest('.has-dropdown');
  menuItem.classList.toggle('dropdown-active');
  // item.classList.toggle('active');
  // Array.from(menuItem.childNodes).find(x => {
  //   if(x.classList && Array.from(x.classList).includes('dropdown-menu'))
  //     x.classList.toggle('active');
  // })
}

if (hasDropdown) {

  let handleDropDownClick = () => {
    [].forEach.call(document.querySelectorAll('.dropdown-action'), (el) => {
      el.addEventListener('click', (e) => {
        openDropdown(el);
        e.preventDefault();
      })
    });
  }

  handleDropDownClick();
}

let menuAction = document.querySelector('.site-menu-mobile-action');
let siteMenu = document.querySelector('.site-menu');

if (menuAction) {
  menuAction.addEventListener('click', (e) => {
    e.preventDefault;
    siteMenu.classList.toggle('active');
  })
}
