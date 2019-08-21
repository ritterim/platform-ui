# Platform UI

Platform UI is a CSS framework, rooted in Sass, used by [Ritter Insurance Marketing](https://ritterim.com) (RIM) for our platform of agent tools. It's being built as a replacement for existing frameworks while considering some of our unique needs.

As we start to reach a 1.0 version of Platform UI, we hope to create an easy to use framework that other developers can implement.

## Publishing

Platform UI is published privately on a regular basis to [MyGet](https://myget.org/). More infrequent but stable builds are published to [npm](https://www.npmjs.com/) as [@ritterim/platform-ui](https://www.npmjs.com/package/@ritterim/platform-ui).

## Styleguide

Documentation for Platform UI is generated on every build using [KSS-Node](https://github.com/kss-node/kss-node) and hosted [here](https://style.rimdev.io/).

## Roadmap
- [ ] Documentation 📓
- [ ] Tables
  - [ ] Responsive tables
  - [x] add dedicated `rim-table` class to `table`
  - [ ] add alternate table styles i.e., borders, no-borders, alternating borders
- [x] Tab system v0.6
  - [x] Attaches to `rim-card`
- [ ] Pez (rounded corner labels) v0.7
  - [ ] specifically to handle "states"
  - [ ] disabled, active
  - [ ] corner flags/markers
- [ ] Accordions v0.8
  - [ ] Refactor accordions visually to view more table-like
- [ ] Search UI v0.9
- [x] Styleguide redesign v1.0 😃
