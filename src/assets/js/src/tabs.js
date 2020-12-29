const tabList = document.querySelector('.pui-tabs, .tabs');

if (tabList) {
  const tabs = document.querySelectorAll('.pui-tab, .tab');  

  let mobileTabs = (tab) => {
    // if tab input is checked
    if(tab.previousElementSibling.checked) {

      // if the checked tab has the un-checked class remove it and set the checked attribute to true
      if(tab.previousElementSibling.classList.contains('un-checked')) {
        tab.previousElementSibling.classList.remove('un-checked');
        tab.previousElementSibling.setAttribute('checked', true);
      } else {
        // uncheck the tab
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

      // sets any checked radio to false
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

  let onTabClicked = (evt) => {
    // do not run if flat tabs has unresponsive class
    // this is for tabs--flat
    if(evt.target.closest('.pui-tabs, .tabs').classList.contains('unresponsive')) {
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
    // bool check to only run JS below 768px
    let resizerHandled = false;

    // ensure click event only fires once
    tabs.forEach(tab => {
      tab.removeEventListener('click', onTabClicked);
    })

    pageWidth = window.innerWidth || document.documentElement.clientWidth;
    if (pageWidth > 767.9) {
      // above mobile resolutions, remove any un-checked class on tabs
      tabs.forEach(tab => {
        if (tab.classList.contains('un-checked')) {
          tab.classList.remove('un-checked');
        }
      })

      resizerHandled = false;
      return;
    } else {
      if (resizerHandled === false ) {
        fireMobileTabs();
        // set bool to true so function only runs oonce
        resizerHandled = true;
      }
    }
  }

  window.addEventListener('resize', checkRunTabs, false);

  let pageWidth = window.innerWidth || document.documentElement.clientWidth;
  // run tabs JS once on pageload
  if (pageWidth < 767.9) {
    checkRunTabs();
  }
}
