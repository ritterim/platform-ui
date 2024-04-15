export default class PlatformTab {
  component: HTMLElement | null;

  constructor(component: HTMLElement) {
    this.component = component;

    if (this.component) this.greetings();
  }

  greetings() {
    return console.log('Hello, Tab!');
  }
}
