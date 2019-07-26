var toggleNotes = document.querySelector('.open-notes');
var closeNotes = document.querySelector('.rim-notes__close');
var notes = document.querySelector('.rim-notes');
if (toggleNotes) {
  toggleNotes.addEventListener('click', function() {
    notes.classList.add('open');
  });

  closeNotes.addEventListener('click', function(){
    notes.classList.remove('open');
  });
}

if (notes) {  
  var rimNote = document.querySelector('.rim-note');
  var rimNoteToggle = document.querySelector('.rim-note-toggle');
  var showLessNote = document.querySelector('.rim-note__close');
  var openTags = document.querySelector('.open-note-tags');
  var noteTags = document.querySelector('.rim-note__tags');

  rimNoteToggle.addEventListener('click', function() {
    rimNote.classList.add('note-open');
  });
   
  showLessNote.addEventListener('click', function() {
    rimNote.classList.remove('note-open');
  });

  openTags.addEventListener('click', function(){
    noteTags.classList.toggle('closed');
  });
}