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
  
  
  var rimNote = document.querySelectorAll('.rim-note');
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
  
}
