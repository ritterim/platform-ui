// Import main styles
import './main.scss';

// Import components
import PlatformCarousel from './components/carousels';
import PlatformDrawer from './components/drawers';
import PlatformInfobox from './components/infoboxes';
import PlatformModal from './components/modals';
import PlatformTab from './components/tabs';
import PlatformTooltip from './components/tooltips';

// Load all components into an array
const components = [
  {
    selector: '.carousel',
    Component: PlatformCarousel
  },
  {
    selector: '.drawer',
    Component: PlatformDrawer
  },
  {
    selector: '.infobox',
    Component: PlatformInfobox
  },
  {
    selector: '.modal',
    Component: PlatformModal
  },
  {
    selector: '.tab',
    Component: PlatformTab
  },
  {
    selector: '.tab',
    Component: PlatformTooltip
  }
];

// Once window is loaded, loop through all components, 
// only instantiating if selectors are found on the page
window.addEventListener('load', () => {
  components.forEach((component) => {
    const { selector, Component } = component;

    const componentGroup = [document.querySelector(selector)];

    if (componentGroup.length) {
      componentGroup.forEach((cmp) => new Component(cmp as HTMLElement));
    }

    return;
  });
});
