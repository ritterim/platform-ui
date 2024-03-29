let  dropdownMenus = document.querySelectorAll('.dropdown-content');
let  hasDropdowns = document.querySelectorAll('.dropdown');

let openDropdown = (item) => {
  let menuItem = item.closest('.dropdown');
  if(menuItem.classList.contains('active')) {
    menuItem.classList.remove('active');
  } else {
    hasDropdowns.forEach(node => {
      node.classList.remove('active');
    });
    menuItem.classList.toggle('active');
  }
}

if(hasDropdowns) {
  const links = document.querySelectorAll('.dropdown .dropdown__trigger')
  const dropdownLinks = document.querySelectorAll('.dropdown__content a')

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      openDropdown(link);
    })
    link.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        openDropdown(link);
      }
    })
  });

  dropdownLinks.forEach(dropdownLink => {
    dropdownLink.addEventListener('click', e => {
      e.stopPropagation();
    })
  });
}

let menuActions = document.querySelectorAll('.site-menu-mobile-action');

if(menuActions) {
  menuActions.forEach(action => {
    action.addEventListener('click', e => {
      e.preventDefault;
      let wrapper = action.closest('.site-menu-wrapper');
      wrapper.querySelector('.site-menu').classList.toggle('active');
    })
  })
}
