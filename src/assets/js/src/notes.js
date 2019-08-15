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
  const drawerClose = document.querySelectorAll('.js-drawer-right-close');
  const rightDrawer = document.querySelector('.js-drawer-right');
  const allButton = document.querySelectorAll('.js-show-all');
  const drawerInner = rightDrawer.querySelectorAll('[data-inner]');
  const sideContent = document.querySelector('.js-side-content');
  const showContent = document.querySelectorAll('.js-show-content');

  drawerOpen.forEach(open => {
    open.addEventListener('click', openDrawer);
  });

  allButton.forEach(button => {
    button.addEventListener('click', openDrawer);
  });

  drawerClose.forEach(close => {
    close.addEventListener('click', closeDrawer);
  })
  
  function openDrawer() {
    const target = this;
    const targetOpen = target.getAttribute('data-open');

    rightDrawer.classList.add('slide-right-enter-active');
    rightDrawer.classList.remove('slide-right-leave-active');

    // hide all drawer content
    rightDrawer
      .querySelectorAll('[data-inner]')
      .forEach(inner => inner.setAttribute('hidden', true));

    // show selected content
    rightDrawer
      .querySelector('[data-inner="'+targetOpen+'"]')
      .removeAttribute('hidden');
  }

  function closeDrawer() {
    rightDrawer.classList.add('slide-right-leave-active');
    rightDrawer.classList.remove('slide-right-enter-active');
  }

  showContent.forEach(show => {
    show.addEventListener('click', showSideContent);
  })

  function showSideContent() {
    const target = this;
    const targetOpen = target.getAttribute('data-open');


    // hide all drawer content
    sideContent
      .querySelectorAll('[data-content-inner]')
      .forEach(inner => inner.setAttribute('hidden', true));

    // show selected content
    sideContent
      .querySelector('[data-content-inner="'+targetOpen+'"]')
      .removeAttribute('hidden');

    closeDrawer();
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
  
  var newButton = document.querySelector('.js-toggle-form');
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



  // tasks stuff
  const task = document.querySelectorAll('[data-task]');
  const taskEdit = document.querySelectorAll('.js-edit-task');
  const cancelTaskEdit = document.querySelectorAll('.js-cancel-task');
  const saveTaskEdit = document.querySelectorAll('.js-save-task');

  taskEdit.forEach(edit => {
    edit.addEventListener('click', function() {
      const target = this;
      const targetOpen = target.getAttribute('data-edit');
      console.log(target);
      console.log(targetOpen);

      // hide all drawer content
      document
        .querySelectorAll('[data-content-container="'+targetOpen+'"]')
        .forEach(inner => inner.setAttribute('hidden', true));

      // show selected content
      document
        .querySelector('[data-edit-container="'+targetOpen+'"]')
        .removeAttribute('hidden');
      })
  });
  
}
