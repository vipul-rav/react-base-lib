const { presets, plugins } = require("./_build/webpack.config.babel");

const libPresets = presets;
console.log(libPresets);
exports.presets = presets;

exports.plugins = plugins.push("external-helpers");
