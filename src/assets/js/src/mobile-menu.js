var menuAction = document.querySelector('.mobile-menu-action');

if (menuAction) {
  var body = document.querySelector('.platform');

  menuAction.addEventListener('click', function() {
    body.classList.toggle('menu-open');
  });
}

var hasDropdown = document.querySelector('.has-dropdown');

if (hasDropdown) {

  function handleDropDownClick() {
    [].forEach.call(document.querySelectorAll('.has-dropdown'), function(el) {
      el.addEventListener('click', function() {
        this.classList.toggle('active');
      })
    });
  }

  if (window.innerWidth < 768) {
    handleDropDownClick();
  }  
}
