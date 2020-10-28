const tabList = document.querySelector('.pui-tabs, .tabs');

if (tabList) {
  const tabs = document.querySelectorAll('.pui-tab, .tab');
  const pageWidth = window.innerWidth;

  let mobileTabs = (tab) => {
    if(tab.previousElementSibling.checked) {
      if(tab.previousElementSibling.classList.contains('un-checked')) {
        tab.previousElementSibling.classList.remove('un-checked');
        tab.previousElementSibling.setAttribute('checked', true);
      } else {
        uncheck(tab);
      }
    } else {
      clearUnChecked();
      tab.previousElementSibling.setAttribute('checked', true);
      return;
    }
  };

  let clearUnChecked = () => {
      tabs.forEach(tab =>  {
        const checked = tab.closest('.pui-tabs, .tabs');
        checked.querySelectorAll('input[checked="true"]').forEach(check => {
          check.setAttribute('checked', false);
        })

        // removes un-checked from all tabs
        if(tab.previousElementSibling.classList.contains('un-checked')) {
          tab.previousElementSibling.classList.remove('un-checked');
          tab.previousElementSibling.removeAttribute('checked');
        }
      })
    };

    // sets checked attribute to false
    // adds class to hide pui-tab-panel with css
    let uncheck = (tab) => {
      tab.previousElementSibling.setAttribute('checked', false);
      tab.previousElementSibling.classList.add('un-checked');
    }

  let fireMobileTabs = () => {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // checks for flat tabs look
        if(tab.closest('.pui-tabs, .tabs').classList.contains('pui-tabs--flat', 'tabs--flat')) {
  
          // checks for responsive class added to flat tabs
          if(tab.closest('.pui-tabs, .tabs').classList.contains('responsive')) {
            mobileTabs(tab);
          } else {
            return;
          }
        } else {
          mobileTabs(tab);
        }
      })
    })
  }  

  // if screen is under 768, run mobile tabs JS
  if (pageWidth < 768) {
    fireMobileTabs();
  }
  
}
