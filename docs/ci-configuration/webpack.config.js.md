# CYBG : Base Web App / Docs / CI Configuration / webpack.config.js

*NOTE!* This file will be replaced by an equivalent file on the CI server during Build. Any changes to this file will not be reflected outwith developer machines.

## Production Configuration

Explanation of the configuration items in the webpack.config.js file:

`entry`:
- the starting point of the app.

`module`:

- babel-loader
    - loader used for JS transpilation with babel.
    - ignores any .babelrc files
    - presets:
        - [React preset](https://babeljs.io/docs/plugins/preset-react/) for JSX support.
        - [Env preset](https://babeljs.io/docs/plugins/preset-env/) for ECMAScript (latest version) support.
        - [browserlist](https://github.com/ai/browserslist) for polyfill & code transforms browser support.
    - plugins:
        - [Object rest spread transform](https://babeljs.io/docs/plugins/transform-object-rest-spread) for Rest & Spread properties support (future ECMAScript syntax).

- css-loader
    - See ExtractTextPlugin notes below.
    - fallback to style-loader used when the CSS is not extracted (i.e. in an additional chunk when allChunks: false)

`output`:
- specifies the output bundle file name & location.
- Uses a hash of the contents in the filename for cache busting.

`plugins`:

- CopyWebpackPlugin:
    - used to move asset type files to dist folder.
    - missing directories are ignored.

- ExtractTextPlugin:
    - used to moves all the required *.css modules in entry chunks into a separate CSS file.
    - styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css)

- HTMLWebpackPlugin: used to inject the JS bundle into the main html file.
