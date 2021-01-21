const path = require("path");
const fs = require("fs");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const pkg = require("./package.json");

const findModulesSubDirectoryExports = modulePath => fs.readdirSync(modulePath).reduce((pathList, curPath) => {
    const curFullPath = path.join(modulePath, curPath);
    if (fs.statSync(curFullPath).isDirectory()) {
        const paths = findModulesSubDirectoryExports(curFullPath);
        return pathList.concat(paths);
    } else if (curPath === "index.js") {
        pathList.push(modulePath.replace("node_modules/", ""));
    } else if (curPath.endsWith(".js")) {
        pathList.push(path.join(modulePath.replace("node_modules/", ""), curPath.replace(".js", "")));
    }
    return pathList;
}, []);
const componentLib = ["web-ui-components/lib", "lodash"];
const innerModules = componentLib.reduce((pathList, currentModule) =>
    pathList.concat(findModulesSubDirectoryExports(`node_modules/${currentModule}`)), []);

export default {
    input: `${__dirname}/src/index.js`,
    external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies), ...innerModules],
    plugins: [
        babel({
            babelrc: false,
            exclude: "node_modules/**",
            presets: ["react", ["env", {
                modules: false,
                targets: {
                    browsers: [
                        "IE 11",
                        "last 3 Chrome versions",
                        "last 2 Edge versions",
                        "last 2 Firefox versions",
                        "last 2 Safari versions",
                        "last 2 ChromeAndroid versions",
                        "last 2 iOS versions",
                    ],
                },
            }]],
            plugins: ["transform-object-rest-spread", "external-helpers"],
        }),
        commonjs(),
    ],
    output: {
        file: "lib/index.js",
        format: "cjs",
    },
};
