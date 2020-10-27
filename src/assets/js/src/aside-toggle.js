var toggleAside = document.querySelector('.aside-tab');
if(!toggleAside) return;

var aside = document.querySelector('.platform');
var rotateIcon = document.querySelector('.aside-tab i');

toggleAside.addEventListener('click', function() {
  aside.classList.toggle('toggle');
  rotateIcon.classList.toggle('rotate-180');
});
