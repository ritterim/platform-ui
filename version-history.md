# Version History

---
# 1.4.11
    - max-container class for adding max-width on block-containers
# 1.4.10
    - modals use `active` state class
# 1.4.9
    - info-box uses `active` to show content
    - drawers use `active` to display drawer
    - menus use `active` to show mobile and dropdown menus
# 1.4.8
    - Remove code.css 
# 1.4.7
    - Added individual border-radius utilities
# 1.4.6
    - Refactored fancy form to used with `form--fancy` as a modifier on forms
## 1.4.5
    - Secondary buttons show text for has-text at all screen sizes.
## 1.4.4
    - Toggle Small renamed to switch
## 1.4.3
    - Removes unnecessary console.warning in accordions JavaScript
    - Fixes `background-hover--${color}` utilities

## 1.4.2
    - Remove padding: 1rem from `section`
## 1.4.0
    - Updated BEM syntax on color utilities:
      - `text--{color}`
      - `text-hover--{color}`
      - `background--{color}`
      - `background-hover--{color}`
## 1.3.13
    - Removed AnimateCSS from Platform UI
    - Removed HighlightJS from Platform UI
## 1.3.12
    - Remove z-index from toggle option
## 1.3.11
    - Removed `.pez` component
    - Removed `.button--post` documentation
    - Removed `.time` form class
## 1.3.10
    - Update font sizing from percentages to rem
    - Updated font scale
    - Removed default font preferences
## 1.3.9
    - Add !important to cursor utility classes
    - cursor not allowed on disabled checkboxes
    - improved disabled styles in forms
## 1.3.8
    - Set a min-width to 1rem for loaders in loading buttons
## 1.3.7
    - Specify -50% for Y axis on mobile tooltip
    - Improve mobile infox-box
        - Center info-box with fixed positioning. Similar to tooltip.
## 1.3.6
    - Change max-width to min-width in loader classes to prevent bug at mobile screen sizes
## 1.3.5
    - Update font files
## 1.3.4
    - Use > selector to toggle accordion__content
## 1.3.3
    - Fix bug with `pin-center` utility
## 1.3.2
    - Fix active accordion bug for pui- prefixed accordions
## 1.3.1
    - Add !important to position modifiers
    - Add active class to accordion
    - Remove padding-right from input type date,time
## 1.3.0
    - Add in new responsive display classes
    - Add in new cursor utilities
## 1.2.26
    - Remove --closed classes from drawers and modals
    - Use --active classes to open drawers and modals
## 1.2.25 
    - add hospital-small icon
    - fixes lock-solid icon
## 1.2.24
    - Updated transitions on accordion, site-menu items, text utilties
## 1.2.23
    - Updated transitions on text utilities, site menu to fix odd behavior
## 1.2.22
    - `display--` prefix for display utility classes.
    - remove `color: initial` from border--color- utility classes

## 1.2.21
    - has-icon classes work on `select` dropdowns


## 1.2.18
    - add font-style: normal utility (text--normal)
    - add text-align: left utility (text--left)
    - lower side drawer z-index below the fixed header

## 1.2.17
    - info-box display: inline-block

## 1.2.16
    - info-box--left modifier

## 1.2.15
    - New icons added
        - radio button selected
        - magic wand
        - bomb

## 1.2.14
    - Display: none added to show-breakpoint-only classes

## 1.2.13
    - Form Light updated and added to docs
    - Increase margin-top on inputs inside fancy forms
    - Remove form--stacked
    - Remove border-radius from tables

## 1.2.12
    - Add ability to use `.flex` on breakpoint display utility

## 1.2.11
    - Add new Text icon to platform icons

## 1.2.10
    - Fixed issues with `.info-box`:
      - Removed inline `width:32px` from style guide example
      - Added `.preventDefault()` to the toggle click listener
      - Adjusted margin of the arrow
      
## 1.2.9
    - Add Commissions icon
    
## 1.2.8
    Add toggle-small form option
    
## 1.2.7
    - Create Top Drawer
        - Set top position based on fixed header
    - Drawer Left and Right
        - Full width at mobile
        - Set height for drawers left and right based on fixed header
    - Info Box
        - Made responsive
        - Set default alignment to left, with optional right alignment
    - Icons will show in buttons at all resolutiions
    - Background transparent class
    - Border-color transparent class

## 1.2.6
    - Button background colors
    - Alpha color variations to :root

## 1.2.5
    - Correct alignment on checkboxes and radios

## 1.2.4
    - New tab default styles
        - Fully responsive 

## 1.2.3
    - Fix icon spelling, all references to `pi-check-cirle-solid` will need updated to `pi-check-circle-solid`
    - Fix drawer box shadow

## 1.2.2
    - Deprecated button--post, breaking change, projects will need updated markup
    - Add close button to info box, demo purposes only

## 1.2.1
    - Remove --left specificity from info box (fix for demo purposes only)

## 1.2.0
    - Version fix, no updates

## 1.1.31
    - Fix drawer bug
    - Remove reference to already eliminated secondary colors

## 1.1.30
    - Create the pui- prefix mixin 

## 1.1.29
    - Revert dropdown__item back to dropdown__content-item

## 1.1.28
    - Pinterest font icon
    - Fixed site-menu__item border within dropdowns

## 1.1.27
    - Align-items center on site-menu__item

## 1.1.26
    - More site-menu stuff
    - Most likely deprecated with the latest refactor

## 1.1.25
    - Ol list style position
    - Site-menu border-top styles
    - Remove secondary colors and platform colors
    - Deprecate pills

## 1.1.24
    - Removes cursor pointer on pez

## 1.1.23
    - Site-menu padding
    - Css custom properties for colors in menu

## 1.1.22
    - More border styles on menu items
    - Mobile menu js bug

## 1.1.21
    - Dropdown__trigger nested border styles

## 1.1.20
    - Dropdown__trigger styles

## 1.1.19
    - Menu js bug
    - Img gradient js bug
    - Site-menu__item back in
    - Add dropdown__trigger

## 1.1.18
    - Font-size for heading elements
    - Golden ratio line-height
    - #666 > #666666

## 1.1.17
    - This version seems confusing, it seems like the versioning was out of order compared to the time of the PRs
    - Menu js bug
    - Img gradient js bug

## 1.1.16
    - Border-left on blockquote
    - .cards on block-container
    - Site-menu refactor
    - Button docs
    - Js es6 standardization 
    - Remove pill close
    - Pez corner label 

## 1.1.15
    - Background color alpha transparency classes
    - Mobiles tabs error js
    - Blockquote
    - Lists clean up

## 1.1.14
    - Hero images

## 1.1.13
    - Pui- prefix remove start
    - Example: .pui-card, .card {styles}
    - Bug regarding tabs

## 1.1.12
    - Case utilities

## 1.1.11
    - Image gradient updates

## 1.1.10
    - Linear gradient added for background utilities

## 1.1.9
    - Offset page anchor utility
    - Vh vw utility classes added
    - Background-image utility

## 1.1.8
    - Mobile toggle tabs
