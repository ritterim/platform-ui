# Platform UI

![npm (scoped)](https://img.shields.io/npm/v/%40ritterim/platform-ui?logo=npm)
![npm](https://img.shields.io/npm/dw/%40ritterim%2Fplatform-ui?logo=npm)
![example workflow](https://github.com/ritterim/platform-ui/actions/workflows/version-tag-build-master.yml/badge.svg)

Platform UI is a CSS framework developed by [RIMdev](https://rimdev.io) for [Ritter Insurance Marketing](https://ritterim.com) for our platform of agent and staff facing tools. 

Learn more at [platformui.com](https://platformui.com/)

## Table of Contents
- [Get Started](#get-started)
- [CDN](#cdn)
- [Packages](#packages)
- [Scripts](#scripts)
- [License](#license)

## Get Started

### CDN
#### [jsDelivr](https://www.jsdelivr.com/)
```html
<!-- In the <head> of your site. -->
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="https://cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
```
#### [unpkg](https://www.unpkg.com/)
```html
<!-- In the <head> of your site. -->
<link rel="preconnect" href="https://unpkg.com" crossorigin>
<link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
``` 
### Packages

Available on [npm](https://www.npmjs.com/package/@ritterim/platform-ui) and [yarn](https://yarnpkg.com/package?q=%40ritter&name=%40ritterim%2Fplatform-ui)

```sh
npm i @ritterim/platform-ui
```
```sh
yarn add @ritterim/platform-ui
```
## Scripts
- `start` - Optimizes icons and generates icon font, then starts the Vite development server
- `build` - Builds the package, runs all scripts prefixed with "build"
- `build:svgs` - Optimizes all icon SVGs with SVGO
- `build:font` - Creates the icon font based off the optimized SVGs
- `start:vite` - Starts the Vite development server
- `build:vite` - Optimizes everything and bundles as package

## License 

[MIT](/LICENSE)