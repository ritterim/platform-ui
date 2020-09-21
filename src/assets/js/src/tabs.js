const tabList = document.querySelector('.pui-tabs');

if (tabList) {
  const width = window.innerWidth;
  const tab = document.querySelectorAll('.pui-tab');

  if (width < 767.9) {

    function mobileTabs(tab){

      if(tab.previousElementSibling.checked) {
        if(tab.previousElementSibling.classList.contains('un-checked')) {
          tab.previousElementSibling.classList.remove('un-checked');
          tab.previousElementSibling.removeAttribute('checked');
        } else {
          uncheck();
        }
      } else {
        clearUnChecked();
        return;
      }

      function clearUnChecked() {
        tab.forEach(function(el) {
          // removes un-checked from all tabs
          el.previousElementSibling.classList.remove('un-checked');
        })
      }

      function uncheck() {
        // sets checked attribute to false
        tab.previousElementSibling.setAttribute('checked', false);
        // adds class to hide pui-tab-panel with css
        tab.previousElementSibling.classList.add('un-checked');
      }
    }

    tab.forEach(function(el) {
      el.addEventListener('click', function() {
        // checks for flat tabs look
        if(el.closest(".pui-tabs").classList.contains('pui-tabs--flat')) {

          // checks for responsive class added to flat tabs
          if(el.closest('.pui-tabs').classList.contains('responsive')) {
            mobileTabs(el);
          } else {
            return;
          }
        } else {
          mobileTabs(el);
        }        
      })
    })
  } else {
    // if above mobile breakpoint, remove un-checked from all tabs
    tab.forEach(function(el) {
      if(el.previousElementSibling.classList.contains('un-checked')) {
        el.previousElementSibling.classList.remove('un-checked');
      }
    })
  }
}
