document.querySelectorAll('.dropdown-menu').forEach(menu => {
  menu.classList.add('hide-mobile-up')
});

document.querySelectorAll('.has-dropdown').forEach(menu => {
  menu.addEventListener('click', () => {
    Array.from(menu.childNodes).find(x => {
      if(x.classList && Array.from(x.classList).includes('dropdown-menu'))
        x.classList.toggle('hide-mobile-up');
    })
  })
})
