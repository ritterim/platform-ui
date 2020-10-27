let editReadonly = document.querySelector('.js-edit-readonly');
let editTextarea = document.querySelector('.js-edit-textarea');

if(!editReadonly && !editTextarea) return;

editReadonly.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.readonly').removeAttribute('readonly');
  document.querySelector('.readonly').focus();
});

editTextarea.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.js-textarea').removeAttribute('readonly');
  document.querySelector('.js-textarea').focus();
});
