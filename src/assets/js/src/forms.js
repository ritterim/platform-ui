const editReadonly = document.querySelector('.js-edit-readonly');

if (editReadonly) {
  const editTextarea = document.querySelector('.js-edit-textarea');

  editReadonly.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.readonly').removeAttribute('readonly');
    document.querySelector('.readonly').focus();
  });

  editTextarea.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.js-textarea').removeAttribute('readonly');
    document.querySelector('.js-textarea').focus();
  });
}