# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [5.0.2] - 2018-06-24

### Fixed

- Include `bin` in `package.json`

## [5.0.1] - 2018-06-24

### Fixed

- `bin` entry in `package.json`

## [5.0.0] - 2018-06-13

### New

- More documentation
- Function that accepts and returns a URL for the preview (`url` option)

### Changed

- Changed HTML API: `instance.html` is now a function
- Changed JSON API: `instance.json` is now a function
- Reduce font-size earlier

### Fixed

- Viewing markdown

## [4.3.0] - 2018-06-04

### New

- Detect and link other components in the view

## [4.2.1] - 2018-05-30

### Changed

- Empty groups will be ignored

### Fixed

- Incorrect sorting of groups
- Error when all components are inside groups

## [4.2.0] - 2018-04-30

### New

- More tests
- Keyboard navigation

### Changed

- Improved styleguide

## [4.1.0] - 2018-02-19

### New

- CLI
- Documentation

### Changed

- Removed `prepublish` script from `package.json`
- Only support Node.js 8
- More template engines supported by default

## [4.0.3] - 2017-12-11

### Changed

- Use correct `Authorization`-header

## [4.0.2] - 2017-12-11

### Changed

- Reduced size of generated JS files

### Fixed

- Text selection in Chrome

## [4.0.1] - 2017-11-29

### Fixed

- Wrong JSON URL when using a custom file name

## [4.0.0] - 2017-11-24

### Changed

- Name and API

## [3.1.5] - 2017-11-24

### Changed

- Updated changelog
- Updated readme

## [3.1.4] - 2017-11-08

### Changed

- Added more tests
- Removed external CSS files
- SVG icons instead of icon font
- Rewritten layout styling
- Group config is now case-insensitive

### Fixed

- Empty config throws error

## [3.1.3] - 2017-11-03

### New

- Tests for actions and reducers

### Changed

- Updated to React 16
- Improved JSDoc annotation
- Use system font instead of Open Sans
- Removed unused Markdown styling

### Fixed

- Assert parameter order in tests

## [3.1.2] - 2017-08-16

### New

- Show error when data fails to load

## [3.1.1] - 2017-08-08

### Changed

- Ignore `yarn.lock` and `package-lock.json` files

### Fixed

- Missing padding below navigation

## [3.1.0] - 2017-08-04

### New

- Filter components

### Changed

- Reduced min height of inspector

## [3.0.0] - 2017-08-01

### New

- Realtime UI updates without page reloads
- Debug with Redux DevTools

### Changed

- Added more tests

### Fixed

- Default state of components
- Overflowing content in Firefox

## [2.0.1] - 2017-07-25

### Changed

- Label in preview toolbar is now selectable

### Fixed

- Initial component should respect sorting of sidebar

## [2.0.0] - 2017-07-24

### New

- Only support Node.js 7 and 8

### Changed

- Improved scrolling area in sidebar
- Color of active item in sidebar

### Fixed

- iframe not scrollable after resize