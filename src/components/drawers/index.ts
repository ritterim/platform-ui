export default class PlatformDrawer {
  component: HTMLElement | null;

  constructor(component: HTMLElement) {
    this.component = component;

    if (this.component) this.greetings();
  }

  greetings() {
    return console.log('Hello, Drawer!');
  }
}
