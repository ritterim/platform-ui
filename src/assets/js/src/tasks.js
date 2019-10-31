// tasks stuff
const task = document.querySelectorAll('[data-task]');
const taskEdit = Array.prototype.slice.call(document.querySelectorAll('.js-edit-task'));
const cancelTaskEdit = Array.prototype.slice.call(document.querySelectorAll('.js-cancel-task'));
const saveTaskEdit = Array.prototype.slice.call(document.querySelectorAll('.js-save-task'));
const deleteTask = Array.prototype.slice.call(document.querySelectorAll('.js-delete-task'));

if(task) {
  taskEdit.forEach(edit => {
    edit.addEventListener('click', function(e) {
      const target = this;
      const targetOpen = target.getAttribute('data-edit');

      e.preventDefault();

      // hide all drawer content
      document
        .querySelector('[data-content-container="'+targetOpen+'"]')
        .setAttribute('hidden', true);

      // show selected content
      document
        .querySelector('[data-edit-container="'+targetOpen+'"]')
        .removeAttribute('hidden');
      })
  });

  cancelTaskEdit.forEach(cancel => {
    cancel.addEventListener('click', function() {
      const target = this;
      const targetOpen = target.getAttribute('data-cancel');
      // hide all drawer content
      document
        .querySelector('[data-content-container="'+targetOpen+'"]')
        .removeAttribute('hidden');

      // show selected content
      document
        .querySelector('[data-edit-container="'+targetOpen+'"]')
        .setAttribute('hidden', true);
    })
  });

  saveTaskEdit.forEach(cancel => {
    cancel.addEventListener('click', function() {
      const target = this;
      const targetOpen = target.getAttribute('data-save');
      // hide all drawer content
      document
        .querySelector('[data-content-container="'+targetOpen+'"]')
        .removeAttribute('hidden');

      // show selected content
      document
        .querySelector('[data-edit-container="'+targetOpen+'"]')
        .setAttribute('hidden', true);
    })
  });

  deleteTask.forEach(task => {
    task.addEventListener('click', function(e){
      const target = this;
      const targetOpen = target.getAttribute('data-delete');

      e.preventDefault();

      animateCSS('[data-task="'+targetOpen+'"]', 'fadeOutUp', function() {
        document
          .querySelector('[data-task="'+targetOpen+'"]')
          .remove()
      })
    })
  })

  const toggleNewTask = Array.prototype.slice.call(document.querySelectorAll('.js-toggle-task'));
  const cancelNewTask = document.querySelector('.js-cancel-task-form');

  toggleNewTask.forEach(elm => {
    elm.addEventListener('click', function(){
      const targetOpen = this.getAttribute('data-toggle');
      const newTaskForm =  document.querySelector('[data-form="'+targetOpen+'"]');
      const taskList =  document.querySelector('[data-list="'+targetOpen+'"]');

      this.classList.toggle('cancel');
      if(this.classList.contains('cancel')) {
        document
          .querySelector('[data-list="'+targetOpen+'"]')
          .setAttribute('hidden', true);

        // show selected content
        document
          .querySelector('[data-form="'+targetOpen+'"]')
          .removeAttribute('hidden');

        newTaskForm.classList.add('flip-y-enter-active');
        taskList.classList.add('flip-y-enter-active');
      } else {
        document
          .querySelector('[data-list="'+targetOpen+'"]')
          .removeAttribute('hidden');

        // show selected content
        document
          .querySelector('[data-form="'+targetOpen+'"]')
          .setAttribute('hidden', true);
      }
    })
  })

  if(cancelNewTask) {
    cancelNewTask.addEventListener('click', function(e){
      const targetOpen = this.getAttribute('data-cancel');
      let toggleNewTask = document.querySelector('.js-toggle-task');
      e.preventDefault();
      toggleNewTask.classList.remove('cancel');
      document
        .querySelector('[data-list="'+targetOpen+'"]')
        .removeAttribute('hidden');

      // show selected content
      document
        .querySelector('[data-form="'+targetOpen+'"]')
        .setAttribute('hidden', true);
    });
  }

  const taskStatus = Array.prototype.slice.call(document.querySelectorAll('.js-task-status'));

  taskStatus.forEach(status => {
    status.addEventListener('click', function() {
      let pressed = this.getAttribute('aria-pressed');

      if(pressed == "true" ) {
        pressed = false;
        this.querySelector('.js-task-status-title').innerHTML = 'Complete'
        this.classList.remove('positive-text');
      } else {
        pressed = true;
        this.querySelector('.js-task-status-title').innerHTML = 'Completed'
        this.classList.add('positive-text');
      }

      this.setAttribute('aria-pressed', pressed);
    })
  });
}
