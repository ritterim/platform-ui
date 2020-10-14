const tabList = document.querySelector('.pui-tabs, .tabs');

if (tabList) {
  const tab = document.querySelectorAll('.pui-tab, .tab');

  const pageWidth = window.innerWidth;

  function mobileTabs(elm){

    if(elm.previousElementSibling.checked) {
      if(elm.previousElementSibling.classList.contains('un-checked')) {
        elm.previousElementSibling.classList.remove('un-checked');
        elm.previousElementSibling.setAttribute('checked', true);
      } else {
        uncheck();
      }
    } else {
      clearUnChecked();
      elm.previousElementSibling.setAttribute('checked', true);
      return;
    }

    function clearUnChecked() {
      tab.forEach(function(el) {
        const checked = el.closest('.pui-tabs, .tabs');
        checked.querySelectorAll('input[checked="true"]').forEach(function(check) {
          check.setAttribute('checked', false);
        })

        // removes un-checked from all tabs
        if(el.previousElementSibling.classList.contains('un-checked')) {
          el.previousElementSibling.classList.remove('un-checked');
          el.previousElementSibling.removeAttribute('checked');
        }
      })
    }

    // sets checked attribute to false
    // adds class to hide pui-tab-panel with css
    function uncheck() {
      elm.previousElementSibling.setAttribute('checked', false);
      elm.previousElementSibling.classList.add('un-checked');
    }
  }

  function fireMobileTabs() {
    tab.forEach(function(el) {
      el.addEventListener('click', function() {
        // checks for flat tabs look
        if(el.closest('.pui-tabs, .tabs').classList.contains('pui-tabs--flat', 'tabs--flat')) {
  
          // checks for responsive class added to flat tabs
          if(el.closest('.pui-tabs, .tabs').classList.contains('responsive')) {
            mobileTabs(el);
          } else {
            return;
          }
        } else {
          mobileTabs(el);
        }
      })
    })
  }  

  // if screen is under 768, run mobile tabs JS
  if (pageWidth < 768) {
    fireMobileTabs();
  }
  
}
