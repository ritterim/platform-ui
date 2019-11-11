var rimNotes = document.querySelector('[data-inner="notes"]');

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
  
  
  var rimNoteToggle = document.querySelector('.pui-note__toggle');
  
  [].forEach.call(document.querySelectorAll('.js-toggle-wrapper'), function(el) {
    el.addEventListener('click', function() {
      var parent = this.parentNode.parentNode;
      let hidden = document.querySelector('.js-toggle-wrapper--bottom').getAttribute('hidden');

      if(hidden == "true" ) {
        hidden = false;
        document.querySelector('.js-toggle-wrapper--bottom').removeAttribute('hidden');
      } else {
        hidden = true;
        document.querySelector('.js-toggle-wrapper--bottom').setAttribute('hidden', true);   
      }
      
      parent.classList.toggle('note-open');
    })
  });
    
  
  [].forEach.call(document.querySelectorAll('.pui-note__toggle'), function(el) {
    el.addEventListener('click', function() {
      var note = this.parentNode;
      let hidden = document.querySelector('.js-toggle-wrapper--bottom').getAttribute('hidden');

      if(hidden == "true" ) {
        hidden = false;
        document.querySelector('.js-toggle-wrapper--bottom').removeAttribute('hidden');
      } else {
        hidden = true;
        document.querySelector('.js-toggle-wrapper--bottom').setAttribute('hidden', true);   
      }

      note.classList.toggle('note-open');
    })
  });
  
  
  [].forEach.call(document.querySelectorAll('.js-open-tags'), function(el) {
    el.addEventListener('click', function() {
      let hidden = document.querySelector('.js-tags').getAttribute('hidden');

      if (document.querySelector('.js-tags').style.display === "none") {
        document.querySelector('.js-tags').style.display = "flex";
      } else {
        document.querySelector('.js-tags').style.display = "none";
      }
    })
  });
    
  
  [].forEach.call(document.querySelectorAll('.js-tag'), function(el) {
    el.addEventListener('click', function() {
      this.classList.add('background-salmon', 'text-white');
    })
  });
  
  var newButton = document.querySelector('.js-toggle-form');
  var notesList = document.querySelector('[data-list="notes"]');
  var newNoteForm = document.querySelector('[data-new="note"]');
  var cancelNote = document.querySelector('.js-cancel-form');
  
  function newNoteFormClose() {
    newButton.classList.remove('cancel-note');
    newNoteForm.classList.add('flip-y-leave-active');
    newNoteForm.classList.remove('flip-y-enter-active');
    newNoteForm.setAttribute('hidden', true);
    notesList.classList.add('flip-y-enter-active');
    notesList.classList.remove('flip-y-leave-active');
    notesList.removeAttribute('hidden');
  }
  
  function newNoteFormOpen() {
    newButton.classList.add('cancel-note');
    newNoteForm.classList.add('flip-y-enter-active');
    newNoteForm.classList.remove('flip-y-leave-active');
    newNoteForm.removeAttribute('hidden');
    notesList.classList.add('flip-y-leave-active');
    notesList.classList.remove('flip-y-add-active');
    notesList.setAttribute('hidden', true);
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
