var rimNotes = document.querySelector('.rim-notes');

if (rimNotes) {
  function animateCSS(element, animationName, callback) {
    var node = document.querySelector(element)
    node.classList.add('animated', animationName)
  
    function handleAnimationEnd() {
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }
  
    node.addEventListener('animationend', handleAnimationEnd)
  }
  
  const drawerOpen = document.querySelectorAll('.js-open-right-drawer');
  const drawerClose = document.querySelector('.js-drawer-right-close');
  const rightDrawer = document.querySelector('.js-drawer-right');
  const allButton = document.querySelectorAll('.js-show-all');

  drawerOpen.forEach(open => {
    open.addEventListener("click", openDrawer);
  });

  allButton.forEach(button => {
    button.addEventListener('click', openDrawer);
  });  
  
  drawerClose.addEventListener('click', closeDrawer);
  
  function openDrawer() {
    const target = this;
    const targetOpen = target.getAttribute('data-open');

    console.log(targetOpen);

    rightDrawer.classList.add('slide-right-enter-active');
    rightDrawer.classList.remove('slide-right-leave-active');

    rightDrawer
      .querySelectorAll('[data-inner]')
      .forEach(inner => inner.setAttribute("hidden", true));

    rightDrawer
      .querySelector('[data-inner="'+targetOpen+'"]')
      .forEach(inner => inner.setAttribute("hidden", true));
  }

  function closeDrawer() {
    rightDrawer.classList.add('slide-right-leave-active');
    rightDrawer.classList.remove('slide-right-enter-active');
  }
  
  
  var rimNote = document.querySelector('.rim-note');
  var rimNoteToggle = document.querySelector('.rim-note__toggle');
  var openTags = document.querySelector('.open-note-tags');
  
  [].forEach.call(document.querySelectorAll('.rim-note-toggle-wrapper'), function(el) {
    el.addEventListener('click', function() {
      var parent = this.parentNode.parentNode;
  
      parent.classList.toggle('note-open');
      document.querySelector('.rim-note-toggle-wrapper--bottom').classList.toggle('slide-down-enter-active');   
    })
  });
    
  
  [].forEach.call(document.querySelectorAll('.rim-note__toggle'), function(el) {
    el.addEventListener('click', function() {
      var note = this.parentNode;
  
      note.classList.toggle('note-open');
      document.querySelector('.rim-note-toggle-wrapper--bottom').classList.toggle('slide-down-enter-active');    
    })
  });
  
  
  [].forEach.call(document.querySelectorAll('.open-note-tags'), function(el) {
    el.addEventListener('click', function() {
      var noteTags = document.querySelector('.rim-note__tags');
  
      noteTags.classList.toggle('slide-down-enter-active');
    })
  });
    
  
  [].forEach.call(document.querySelectorAll('.rim-note__tag'), function(el) {
    el.addEventListener('click', function() {
      this.classList.toggle('active');
    })
  });
    
  
  [].forEach.call(document.querySelectorAll('.rim-note__action'), function(el) {
    el.addEventListener('click', function() {
      this.classList.toggle('active');
    })
  });
  
  var newButton = document.querySelector('.rim-notes__new-action');
  var notesList = document.querySelector('.rim-notes__list');
  var newNoteForm = document.querySelector('.rim-new-note');
  var cancelNote = document.querySelector('.rim-note__cancel-action');
  
  function newNoteFormClose() {
    newButton.classList.remove('cancel-note');
    newNoteForm.classList.add('flip-y-leave-active');
    newNoteForm.classList.remove('flip-y-enter-active');
    notesList.classList.add('flip-y-enter-active');
    notesList.classList.remove('flip-y-leave-active');
  }
  
  function newNoteFormOpen() {
    newButton.classList.add('cancel-note');
    newNoteForm.classList.add('flip-y-enter-active');
    newNoteForm.classList.remove('flip-y-leave-active');
    notesList.classList.add('flip-y-leave-active');
    notesList.classList.remove('flip-y-add-active');
  }
  
  cancelNote.addEventListener('click', function(e){
    e.preventDefault();
    newNoteFormClose();
  });
  
  newButton.addEventListener('click', function(){
    var _this = this;
  
    if(_this.classList.contains('cancel-note')) {
      newNoteFormClose();
    } else {
      newNoteFormOpen();
    }  
  });
  
}
