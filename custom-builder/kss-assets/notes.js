function animateCSS(element, animationName, callback) {
  var node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

var toggleNotes = document.querySelector('.open-notes');
var closeNotes = document.querySelector('.rim-notes__close');
var notes = document.querySelector('.rim-notes--all');

closeNotes.addEventListener('click', function(){
  notes.classList.remove('open');
});


var rimNote = document.querySelector('.rim-note');
var rimNoteToggle = document.querySelector('.rim-note__toggle');
var openTags = document.querySelector('.open-note-tags');

[].forEach.call(document.querySelectorAll('.rim-note-toggle-wrapper'), function(el) {
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
    var noteTags = document.querySelector('.rim-note__tags');

    noteTags.classList.toggle('closed');
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
var allButton = document.querySelector('.rim-note__all-action');
var notesList = document.querySelector('.rim-notes__list');
var newNoteForm = document.querySelector('.rim-new-note');
var cancelNote = document.querySelector('.rim-note__cancel-action');

function newNoteFormClose() {
  newButton.classList.remove('cancel-note');
  animateCSS('.rim-new-note', 'flipOutY', function(){
    newNoteForm.classList.add('closed');
    newNoteForm.classList.remove('flipInY');
    newNoteForm.classList.remove('flipOutY');
    notesList.classList.remove('closed');
    animateCSS('.rim-notes__list', 'flipInY');
  });
}

function newNoteFormOpen() {
  newButton.classList.add('cancel-note');
  animateCSS('.rim-notes__list', 'flipOutY', function(){
    newNoteForm.classList.remove('closed');
    notesList.classList.remove('flipOutY');
    notesList.classList.remove('flipInY');
    notesList.classList.add('closed');
    animateCSS('.rim-new-note', 'flipInY');
  });
}

allButton.addEventListener('click', function() {
  notes.classList.add('open');
});

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
