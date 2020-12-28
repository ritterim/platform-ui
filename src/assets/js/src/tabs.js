const tabList = document.querySelector('.pui-tabs, .tabs');

if (tabList) {
  const tabs = document.querySelectorAll('.pui-tab, .tab');  

  let mobileTabs = (tab) => {
    if(!tab.previousElementSibling) debugger;
    if(tab.previousElementSibling.checked) {
      if(tab.previousElementSibling.classList.contains('un-checked')) {
        tab.previousElementSibling.classList.remove('un-checked');
        tab.previousElementSibling.setAttribute('checked', true);
        console.log('mobiletabs if');
      } else {
        uncheck(tab);
      }
    } else {
      clearUnChecked();
      console.log('mobiletabs else');
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
    console.log('add un-checked');
  }

  let onTabClicked = (evt) => {
    if(evt.target.closest('.pui-tabs, .tabs').classList.contains('unresponsive')) {
      console.log('unresponsive');
      // do not run if flat tabs has unresponsive class
      return;
    } else {
      // call mobileTabs function
      mobileTabs(evt.target);
    }
  };

  let fireMobileTabs = () => {
    tabs.forEach(tab => {
      tab.addEventListener('click', onTabClicked);
    })
  }

  let checkRunTabs = () => {
    let resizerHandled = false;
    tabs.forEach(tab => {
      tab.removeEventListener('click', onTabClicked);
    })
    pageWidth = window.innerWidth || document.documentElement.clientWidth;
    if (pageWidth > 768) {
      console.log('Wide viewport');
      tabs.forEach(tab => {
        if (tab.classList.contains('un-checked')) {
          tab.classList.remove('un-checked');
        }
      })
      resizerHandled = false;
      console.log(resizerHandled);
      return;
    } else {
      if (resizerHandled === false ) {
        fireMobileTabs();
        resizerHandled = true;
        console.log(resizerHandled);
      }
    }
  }

  window.addEventListener('resize', checkRunTabs, false);

  let pageWidth = window.innerWidth || document.documentElement.clientWidth;
  if (pageWidth < 768) {
    checkRunTabs();
  }
}
