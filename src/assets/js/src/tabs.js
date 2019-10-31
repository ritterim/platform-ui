const tabList = document.querySelector('[role="tablist"]');

if (tabList) {

  const tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  const tabPanel = Array.prototype.slice.call(document.querySelectorAll('[role="tabpanel"]'));
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
    tabList.children[0].firstElementChild.setAttribute('aria-selected', true);
    tabPanel[0].removeAttribute('hidden');
  }

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

    // Show the selected panel
    grandparent.parentNode
      .querySelector(`#${target.getAttribute('aria-controls')}`)
      .removeAttribute('hidden');
  }
}
