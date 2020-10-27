let toggleAside = document.querySelector('.aside-tab');
if(!toggleAside) return;

let aside = document.querySelector('.platform');
let rotateIcon = document.querySelector('.aside-tab i');

toggleAside.addEventListener('click', () => {
  aside.classList.toggle('toggle');
  rotateIcon.classList.toggle('rotate-180');
});
