let  dropdownMenu = document.querySelectorAll('.dropdown-menu');
let  hasDropdown = document.querySelectorAll('.has-dropdown');

let openDropdown = (item) => {
  let menuItem = item.closest('.has-dropdown');
  menuItem.classList.toggle('dropdown-active');
}

if (hasDropdown) {

  let handleDropDownClick = () => {
    [].forEach.call(document.querySelectorAll('.has-dropdown .site-menu__link'), (el) => {
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
