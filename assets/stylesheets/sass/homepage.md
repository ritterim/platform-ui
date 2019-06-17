# Welcome to the Ritter Platform style guide

## Overview

A summary of how we've decided to write/structure BEM

### Utility classes

All utility classes _are_ modifiers, underscores are not applied here.
```
flex--justify-center
```

### Mixins vs. extends

If you're passing an argument or looping through a function, this is a `mixin`.

If you're writing css to be re-used, this is an `extend`. Stand-alone `extends` always begin with `%`.

NOTE: Place any SCSS native call, includes, extends, loops, and functions, at the bottom of any regular CSS. I.e., `@include`, `@extend`, `@for`, `@each`
