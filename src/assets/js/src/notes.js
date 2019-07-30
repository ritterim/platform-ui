function animateCSS(element, animationName, callback) {
  var node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      // node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

var toggleNotes = document.querySelector('.open-notes');
var closeNotes = document.querySelector('.rim-notes__close');
var notes = document.querySelector('.rim-notes--all');

toggleNotes.addEventListener('click', function() {
  notes.classList.add('open');
});

closeNotes.addEventListener('click', function(){
  notes.classList.remove('open');
});


var rimNote = document.querySelector('.rim-note');
var rimNoteToggle = document.querySelector('.rim-note__toggle');
var openTags = document.querySelector('.open-note-tags');

[].forEach.call(document.querySelectorAll('.rim-note-toggle'), function(el) {
  el.addEventListener('click', function() {
    var parent = this.parentNode.parentNode;

    parent.classList.toggle('note-open');
  })
});
  

[].forEach.call(document.querySelectorAll('.rim-note__toggle'), function(el) {
  el.addEventListener('click', function() {
    var note = this.parentNode;

    note.classList.toggle('note-open');
  })
});
  

[].forEach.call(document.querySelectorAll('.open-note-tags'), function(el) {
  el.addEventListener('click', function() {
    var parent = this.parentNode;
    var noteTags = parent.nextSibling.nextSibling;

    noteTags.classList.toggle('closed');
  })
});

var newButton = document.querySelector('.rim-notes__new-action');
var allButton = document.querySelector('.rim-note__all-action');

allButton.addEventListener('click', function() {
  notes.classList.add('open');
});

var notesList = document.querySelector('.rim-notes__list');
var newNoteForm = document.querySelector('.rim-new-note');

newButton.addEventListener('click', function(){
  var _this = this;

  if(_this.classList.contains('cancel-note')) {
    console.log('has class');
    newButton.classList.remove('cancel-note');
    animateCSS('.rim-new-note', 'flipOutY', function(){
      newNoteForm.classList.add('hidden');
      newNoteForm.classList.remove('flipInY');
      newNoteForm.classList.remove('flipOutY');
      notesList.classList.remove('hidden');
      animateCSS('.rim-notes__list', 'flipInY');
    });
  } else {
    newButton.classList.add('cancel-note');
    animateCSS('.rim-notes__list', 'flipOutY', function(){
      newNoteForm.classList.remove('hidden');
      animateCSS('.rim-new-note', 'flipInY');
      notesList.classList.remove('flipOutY');
      notesList.classList.add('hidden');
    });
  }
  
});
