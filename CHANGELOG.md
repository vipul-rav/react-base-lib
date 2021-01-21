# CYBG : Base Web App - CHANGELOG

## 1.6.1 (June 07, 2018)

- added .eslintrc (code quality rules)
- restored new .npmrc file, updated gitignore

## 1.6.0 (May 18, 2018)

- adding application urls to config.env.json

## 1.5.4 (May 4, 2018)

- added node process env variable for development.

## 1.5.3 (April 17, 2018)

- added .npmrc to gitignore

## 1.5.2 (April 13, 2018)

- package.json webpack dev hot cli param removed

- Webpack Dev config file additions:
    - added devServer options
    - added HotModuleReplacementPlugin

## 1.5.1 (April 11, 2018)

- Downgrade React to v15.4.1
    - Temporary downgrade until web-ui-components issues resolved

- Npm start command

- Test folder
    - Added folder for test files

- Webpack Dev config file creation
    - asset move for config
    - asset move for test

## 1.5.0 (April 10, 2018)

### Changed Webpack Production Config

- Locale folder
    - Added folder used for textual content

- HTML file
    - Added sample stylesheet link tag

- Added .npmrc with npm registry details

- Added paths.js for simplifying file references

- Webpack config for production environment changes:
    
    - Moved config file into new _build folder

    - Change from module.loaders to newer modules.rules syntax

    - Babel loader changes:
        - Block babelrc references
        - Added babel object rest spread plugin
        - Added browserlist values to babel config
    
    - Copy Webpack Plugin Config changes:
        - Fixed asset move to allow for missing directories
        - Added asset move for images directory
        - Added asset move for css in library
        - Added asset move for locale files

## 1.4.0 (March 09, 2018)

### Added Basic App Example

- Added very basic example React app, with:
    - Example HTML file
    - Example JS entry point
    - Example component & container
    - Minimal folder structure

### Added Webpack Production Config

- Added webpack config for support for a simple app in a production environment only, including:
    - Babel presets (react & env)
    - Bundling with hash
    - Bundle injection in HTML file
    - Asset move to dist folder

### Added Environment Config

- Added config file for environment specific configuration, including:
    - Base urls
    - Whitelist domains
