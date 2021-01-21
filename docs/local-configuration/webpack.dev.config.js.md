# CYBG : Base Web App / Docs / Local Configuration / webpack.dev.config.js

## Development Configuration

Explanation of certain configuration items in the webpack.dev.config.js file:

`devServer`:
- `contentBase`: directory containing static content to be served.
- `hot`: enables hot module replacement.
- `open`: opens browser on load.

`devtool`:
- creates source maps

`plugins`:

- `CopyWebpackPlugin` - additional directory moves for:
    - `_config`: only required during development as file is added on CI.
    - `test`: currently only required for testing on local machines.

- `webpack.DefinePlugin`: Used to define node process env variable for development.

- `webpack.HotModuleReplacementPlugin`: Used for hot module replacement.

- `webpack.NamedModulesPlugin`: Displays the relative path of the module when HMR is enabled.

All other items are as described in the docs for the CI config file: 
- [_build/webpack.config.js]("./docs/ci-configuration/webpack.config.js.md")
