function animateCSS(element, animationName, callback) {
  var node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
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
var rimNoteToggle = document.querySelector('.rim-note-toggle');
var showLessNote = document.querySelector('.rim-note__toggle');
var openTags = document.querySelector('.open-note-tags');
var noteTags = document.querySelector('.rim-note__tags');

[].forEach.call(document.querySelectorAll('.rim-note-toggle'), function(el) {
  el.addEventListener('click', function() {
    var parent = this.parentNode.parentNode;
    console.log(parent);

    parent.classList.toggle('note-open');
  })
})
  
showLessNote.addEventListener('click', function() {
  rimNote.classList.toggle('note-open');
});

openTags.addEventListener('click', function(){
  noteTags.classList.toggle('closed');
});

var newButton = document.querySelector('.rim-note__new-action');
var allButton = document.querySelector('.rim-note__all-action');

allButton.addEventListener('click', function() {
  notes.classList.add('open');
});

var notesList = document.querySelector('.rim-notes__list');
var newNoteForm = document.querySelector('.rim-new-note');

var animationDuration = 500;

newButton.addEventListener('click', function(){
  newButton.classList.add('cancel-note');
  animateCSS(notesList, 'flipOutY', function(){
    newNoteForm.classList.toggle('hidden');
  });
});
