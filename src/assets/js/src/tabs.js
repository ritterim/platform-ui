const tabList = document.querySelector('[role="tablist"]');

if (tabList) {
  let width = window.innerWidth;

  const tabs = document.querySelectorAll('[role="tab"]');
  const tabPanel = document.querySelectorAll('[role="tabpanel"]');
  
  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', changeTabs);
  });

  function checkHash() {
    if (window.location.hash) {
      tabs.forEach(tab => {
        if (window.location.hash === tab.hash) {
          tabList.children[0].firstElementChild.setAttribute('aria-selected', false);
          tab.setAttribute('aria-selected', true);
        }
      });
      tabPanel.forEach(panel => {
        if (window.location.hash.replace('#', '') === panel.id) {
          tabPanel[0].setAttribute('hidden', true);
          panel.removeAttribute('hidden');
          panel.classList.add('tab-active');
        }
      });
    } else {
      setFirstTab();
    }
  }

  checkHash();

  function setFirstTab() {
    tabList.children[0].firstElementChild.setAttribute('aria-selected', true);
    tabPanel[0].removeAttribute('hidden');
  };

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener('keydown', e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute('tabindex', -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
    }
  });

  function changeTabs(e) {
    const target = this;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;

    history.replaceState(null, '', e.currentTarget.hash);
    e.preventDefault();

    // Remove all current selected tabs
    grandparent
      .querySelectorAll('[aria-selected="true"]')
      .forEach(t => t.setAttribute('aria-selected', false));

    // Set this tab as selected
    target.setAttribute('aria-selected', true);

    // Hide all tab panels
    grandparent.parentNode
      .querySelectorAll('[role="tabpanel"]')
      .forEach(p => { 
        p.setAttribute('hidden', true);
        p.classList.remove('tab-active');
      });    

    // Show the selected panel
    grandparent.parentNode
      .querySelector(`#${target.getAttribute('aria-controls')}`)
      .removeAttribute('hidden')
      .classList.add('tab-active');
  }

  function removeActiveClass() {
    tabPanel.forEach(node => {
      node.classList.remove('tab-active');
      node.setAttribute('hidden', true);
    });
  }

  function resetTabs() {
    tabs.forEach(node => {
      node.setAttribute('aria-selected', false);
    });
  }

  function removeLocationHash(){
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL) 
  }

  function mobileTabs(e) {
    let id = e.target.parentNode.id;

    // Allow clicks inside content
    if (e.target.closest('.pui-tab-panel__inner')) return;
    
    if (e.currentTarget.classList.contains('tab-active')) {
      // close clicked panel
      removeActiveClass();
      removeLocationHash();
    } else {
      // open clicked panel
      setActiveTab(id);
      removeActiveClass();
      e.currentTarget.classList.add('tab-active');
      e.currentTarget.removeAttribute('hidden');
    }    
  }
  function setActiveTab(id) {
    resetTabs();
    let newTab = document.querySelector(`a[href="#${id}"]`);
    
    newTab.setAttribute('aria-selected', true);
    window.location.hash = `${id}`;
  }

  // mobile resolution
  if(width < 768) {
    resetTabs();
    tabPanel.forEach(panel => {
      panel.addEventListener('click', mobileTabs);
    });
  }

  function handleResize() {
    let width = window.innerWidth;
    if (width > 767.9) {
      //  desktop stuff
      let activeTabs = document.querySelectorAll('.tab-active');
      if (activeTabs.length) {
        return;
      } else {
        resetTabs();
        setFirstTab();
      }      
      window.removeEventListener('resize', handleResize);
    } else {
      tabPanel.forEach(panel => {
        panel.addEventListener('click', mobileTabs);
      });
    }
  }
  
  window.addEventListener('resize', handleResize);

  window.onresize = function(e) {
    let width = window.innerWidth;

    if(width < 768) {
      window.addEventListener('resize', handleResize);
    }
  };
}
