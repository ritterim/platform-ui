export default class PlatformTab {
  component: HTMLElement | null;
  tabList: HTMLElement | null | undefined;
  tabs: NodeListOf<HTMLElement> | null | undefined;
  tabPanels: NodeListOf<HTMLElement> | null | undefined;

  constructor(component: HTMLElement) {
    this.component = component;

    if (this.component) {
      // Grab parts of the tabs component
      this.tabList = this.component.querySelector('.tab-list') as HTMLElement;
      this.tabPanels = this.component.querySelectorAll('.tab-panel');
      this.tabs = this.tabList?.querySelectorAll('.tab');

      // Add event listener to each tab
      this.tabs?.forEach((tab) => {
        tab.addEventListener('click', () => {
          this.setActiveTab(tab);
        });
      });
    }
  }

  setActiveTab(tab: HTMLElement) {
    // Finds current active tab and removes the `active` class, removes `aria-selected=true`
    const currentActiveTab = this.tabList?.querySelector('.tab.active');
    if (currentActiveTab) {
      currentActiveTab.setAttribute('aria-selected', 'false');
      currentActiveTab.classList.remove('active');
    }

    // Finds the current open panel and removes the `open` class
    const currentOpenPanel = this.component?.querySelector('.tab-panel.open');
    if (currentOpenPanel) currentOpenPanel.classList.remove('open');

    // Sets `aria-selected=true` and adds the `active` class to the selected tab
    tab.setAttribute('aria-selected', 'true');
    tab.classList.add('active');

    // Finds the next tab panel and applies the `open` class
    const nextPanel = this.component?.querySelector(
      `#${tab.getAttribute('aria-controls')}`
    );
    if (nextPanel) nextPanel.classList.add('open');

    return;
  }
}
