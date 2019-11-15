const tabList = document.querySelector('[role="tablist"]');

if (tabList) {
  let width = window.innerWidth;

  const tabs = document.querySelectorAll('[role="tab"]');
  const tabPanel = document.querySelectorAll('[role="tabpanel"]');
  
  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', changeTabs);
  });

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
      }
    });
  } else {
    setFirstTab();
  }

  function setFirstTab() {
    console.log('test');
    tabList.children[0].firstElementChild.setAttribute('aria-selected', true);
    tabPanel[0].removeAttribute('hidden');
  };

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener('keydown', e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
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
      .forEach(p => p.setAttribute('hidden', true));

    grandparent.parentNode
      .querySelectorAll('[role="tabpanel"]')
      .forEach(p => p.classList.remove('is-active'));      

    // Show the selected panel
    grandparent.parentNode
      .querySelector(`#${target.getAttribute('aria-controls')}`)
      .removeAttribute('hidden');
      
    grandparent.parentNode
      .querySelector(`#${target.getAttribute('aria-controls')}`).classList.add('is-active');
  }

  function removeActiveClass() {
    tabPanel.forEach(node => {
      node.classList.remove('is-active');
      node.setAttribute('hidden', true);
    });
  }

  function resetTabs() {
    console.log('tabs reset');
    tabs.forEach(node => {
      node.setAttribute('aria-selected', false);
    });
  }

  function mobileTabs(e) {    

    // Allow clicks inside content
    if (e.target.closest('.pui-tab-panel__inner')) return;
    
    if (e.currentTarget.classList.contains('is-active')) {
      removeActiveClass();
    } else {
      removeActiveClass();
      e.currentTarget.classList.add('is-active');
      e.currentTarget.removeAttribute('hidden');
    }    
  }

  if(width < 768) {
    tabPanel.forEach(panel => {
      panel.addEventListener('click', mobileTabs);
    });
  }

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  window.onresize = function(e) {
    let width = window.innerWidth;

    if(width < 768) {
      tabPanel.forEach(panel => {
        panel.addEventListener('click', mobileTabs);
      });
    }
     

    // if(width < 768) {
    //   tabPanel.forEach(panel => {
    //     panel.addEventListener('click', mobileTabs);
    //   });
    // } else {      
    //   console.log('else if');
    //   resetTabs();
    //   setFirstTab();
    // }
  };
}
