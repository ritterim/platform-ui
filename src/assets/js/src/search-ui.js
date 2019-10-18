const searchBar = document.querySelectorAll('.search--toggle');
const searchClose = document.querySelectorAll('.search--close');

if (searchBar) {
  searchBar.forEach(sb => {
    sb.addEventListener('click', function() {
      const target = this.parentNode;
      searchBar.forEach(b => {
        const bar = b.parentNode;
        if (bar.classList.contains('active')) {
          bar.classList.remove('active');
          bar.setAttribute('aria-selected', false);
        } else {
          target.classList.add('active');
          target.setAttribute('aria-selected', true);
        }
      });
    });
  });

  searchClose.forEach(close => {
    close.addEventListener('click', function() {
      const searchComplex = close.parentNode.parentNode.parentNode;
      searchComplex.classList.add('search--complex-close');
    });
  });

}
