const { presets, plugins } = require("../../_build/webpack.config.babel");

module.exports = require("babel-jest")
    .createTransformer({ presets, plugins });
