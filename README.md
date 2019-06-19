# platform-ui

Platform UI is a CSS framework used by Ritter Insurance Marketing (RIM) for our platform of agent tools.

## Dependencies

### Animate.css

Why re-write it? We import [Animate.css](https://daneden.github.io/animate.css/) for straight css animation. We also support a small collection of Vue transitions.

### Font Awesome Pro

We've tried to use [Font Awesome](https://fontawesome.com/) _as-is_, so you can swap in any version or use your preferred icon libs.

### Inter UI font family

[The Inter typeface family](https://rsms.me/inter/). Comprehensive, dynamic, useful!

### KSS node

Built on [KSS-node](https://github.com/kss-node/kss-node) to generate a style guide as the codebase evolves. See '/styleguide'

## Get started

First time running platform-ui? `build` copies fontawesome scss and webfonts to the project.

`npm build`

After that...

`npm start`
