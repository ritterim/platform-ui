const searchBar = document.querySelectorAll('.search--toggle');
const searchClose = document.querySelectorAll('.search--close');

if (searchBar) {
  searchBar.forEach(sb => {
    sb.addEventListener('click', toggleBars);
  });

  function toggleBars(e) {
    e.preventDefault();
    searchBar.forEach(b => {
      const bar = b.parentNode;
      bar.classList.remove('active');
      bar.setAttribute('aria-selected', false);
    });
    e.currentTarget.parentNode.classList.add('active');
    e.currentTarget.parentNode.setAttribute('aria-selected', true);
  }

  searchClose.forEach(close => {
    close.addEventListener('click', function() {
      const searchComplex = close.parentNode.parentNode.parentNode;
      searchComplex.classList.add('search--complex-close');
    });
  });
}
