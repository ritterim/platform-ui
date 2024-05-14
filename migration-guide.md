Describes changes from Platform UI `1.8.x` to `2.x`.  CSS class names from `1.8.x` that have been changed for `2.x` will be listed below, as well as new additional utilities.

## Layout

### Container
- *Updates*:
	- `.max-container` => `.container`

## Utilities

### Colors
- *Updates*:
	- `.text--{color}` => `.text-color-{color}`
	- `.background--color-{color}` => `.background-color-{color}`
	- `.border--color-{color}` => `.border-color-{color}`

### Flex
- *Updates*:
	- `.flex--align-start` => `.align-start`
	- `.flex--align-center` => `.align-center`
	- `.flex--align-end` => `.align-end`
	- `.flex--align-baseline` => `.align-baseline`
	- `.flex--align-self-start` => `.align-self-start`
	- `.flex--align-self-center => .align-self-center`
	- `.flex--align-self-end` => `.align-self-end`
	- `.flex--align-self-baseline` => `.align-self-baseline`
	- `.flex--justify-start` => `justify-start`
	- `.flex--justify-center` => `justify-center`
	- `.flex--justify-end` => `justify-end`
	- `.flex--justify-between` => `justify-between`
	- `.flex--row-reverse` => `.flex-row-reverse`
	- `.flex--column-reverse` => `.flex-column-reverse`
	- `.flex--column` => `.flex-direction-column`
	- `.flex--nowrap` => `.flex-nowrap`
	- `.flex--wrap` => `.flex-wrap`
### Spacing

#### Margin

| property            | extra small | small    | medium   | large    | extra large |
| ------------------- | ----------- | -------- | -------- | -------- | ----------- |
| margin              | `.m-xs`     | `.m-s`   | `.m-m`   | `.m-l`   | `.m-xl`     |
| margin-block        | `.mx-xs`    | `.mx-s`  | `.mx-m`  | `.mx-l`  | `mx-xl`     |
| margin-block-start  | `.mxs-xs`   | `.mxs-s` | `.mxs-m` | `.mxs-l` | `mxs-xl`    |
| margin-block-end    | `.mxe-xs`   | `.mxe-s` | `.mxe-m` | `.mxe-l` | `mxe-xl`    |
| margin-inline       | `.my-xs`    | `.my-s`  | `.my-m`  | `.my-l`  | `my-xl`     |
| margin-inline-start | `.mys-xs`   | `.mys-s` | `.mys-m` | `.mys-l` | `mys-xl`    |
| margin-inline-end   | `.mye-xs`   | `.mye-s` | `.mye-m` | `.mye-l` | `mye-xl`    |
| margin-top          | `.mt-xs`    | `.mt-s`  | `.mt-m`  | `.mt-l`  | `.mt-xl`    |
| margin-right        | `.mr-xs`    | `.mr-s`  | `.mr-m`  | `.mr-l`  | `.mr-xl`    |
| margin-bottom       | `.mb-xs`    | `.mb-s`  | `.mb-m`  | `.mb-l`  | `.mb-xl`    |
| margin-left         | `.ml-xs`    | `.ml-s`  | `.ml-m`  | `.ml-l`  | `.ml-xl`    |

#### Padding

| property             | extra small | small    | medium   | large    | extra large |
| -------------------- | ----------- | -------- | -------- | -------- | ----------- |
| padding              | `.p-xs`     | `.p-s`   | `.p-m`   | `.p-l`   | `.p-xl`     |
| padding-block        | `.px-xs`    | `.px-s`  | `.px-m`  | `.px-l`  | `px-xl`     |
| padding-block-start  | `.pxs-xs`   | `.pxs-s` | `.pxs-m` | `.pxs-l` | `pxs-xl`    |
| padding-block-end    | `.pxe-xs`   | `.pxe-s` | `.pxe-m` | `.pxe-l` | `pxe-xl`    |
| padding-inline       | `.py-xs`    | `.py-s`  | `.py-m`  | `.py-l`  | `py-xl`     |
| padding-inline-start | `.pys-xs`   | `.pys-s` | `.pys-m` | `.pys-l` | `pys-xl`    |
| padding-inline-end   | `.pye-xs`   | `.pye-s` | `.pye-m` | `.pye-l` | `pye-xl`    |
| padding-top          | `.pt-xs`    | `.pt-s`  | `.pt-m`  | `.pt-l`  | `.pt-xl`    |
| padding-right        | `.pr-xs`    | `.pr-s`  | `.pr-m`  | `.pr-l`  | `.pr-xl`    |
| padding-bottom       | `.pb-xs`    | `.pb-s`  | `.pb-m`  | `.pb-l`  | `.pb-xl`    |
| padding-left         | `.pl-xs`    | `.pl-s`  | `.pl-m`  | `.pl-l`  | `.pl-xl`    |

### Typography

#### Alignment
- *Updates*:
	- `.text--left` => `.text-align-left`
	- `.text--center` => `.text-align-center`
	- `.text--right` => `.text-align-right`
- *Additions*:
	- `.text-align-start`
	- `.text-align-justified`
	- `.text-align-end`

#### Case
- *Updates*:
	- `.text--uppercase` => `.text-case-uppercase`
	- `.text--lowercase` => `.text-case-lowercase`
	- `.text--capitalize` => `.text-case-capitalize`

#### Decoration
- *Updates*:
	- `text--underline` => `.text-decoration-underline`
- *Additions*:
	- `.text-decoration-none`

#### Sizing
- *Updates*:
	- `.text--size-xs` => `.text-size-xs`
	- `.text--size-s` => `.text-size-s`
	- `.text--size-m` => `.text-size-m`
	- `.text--size-l` => `.text-size-l`
	- `.text--size-xl` => `.text-size-xl`
	- `.text--size-2xl` => `.text-size-2xl`
	- `.text--size-3xl` => `.text-size-3xl`
	- `.text--size-4xl` => `.text-size-4xl`

#### Styles
- *Updates*:
	- `.text--italic` => `.text-style-italic`
	- `.text--normal` => `.text-style-normal`
- *Additions*:
	- `text-style-oblique`

#### Weights
- *Updates*:
	- `.text--bold` => `.text-weight-bold`

#### Wraps
- *Updates*:
	- `text--nowrap` => `.text-wrap-nowrap`
- *Additions*:
	- `.text-wrap-balance`
	- `.text-wrap-pretty`
	- `.text-wrap-wrap`
