const paths = require("../paths");

module.exports = [
    { context: paths.resolveFromRoot("_config"), from: "**/*", to: "_config" },
    { context: paths.resolveFromRoot("_locale"), from: "**/*", to: "_locale" },
    { context: paths.resolveFromRoot("src/css"), from: "**/*", to: "css" },
    { context: paths.resolveFromRoot("src/font"), from: "**/*", to: "font" },
    { context: paths.resolveFromRoot("src/icons"), from: "**/*", to: "icons" },
    { context: paths.resolveFromRoot("src/images"), from: "**/*", to: "images" },
    { context: paths.resolveFromRoot("node_modules/web-ui-components/lib"), from: "**/*.css", to: "css" },
];
