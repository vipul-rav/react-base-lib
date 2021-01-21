/* eslint-disable no-console */
const fs = require("fs");

const getPath = (libraryName) => {

    const path = `../${libraryName}/node_modules_offline/`;

    if (!fs.existsSync(path)) {
        
        console.log(`*** ERR! You do not have this location available => package.json/${path}`);       
        throw Error();
    }

    return path;
};

const getPathAndFilename = (libraryName, version) => {

    const path = getPath(libraryName);
    const filename = `${libraryName}-${version}.tgz`;
    const pathAndFilename = `${path}${filename}`;

    if(!fs.existsSync(pathAndFilename)) {

        console.log(`*** ERR! You do not have this library available => ${libraryName}:${version}`);
        console.log(`*** ERR! We looked for it here => package.json/${pathAndFilename}`);  
        throw Error();
    }

    return pathAndFilename;
};

(() => {

    const { dependencies } = require("../package.json");
    const localModuleList = require("./local-module-list.json");
    const child_process = require("child_process");

    try {

        Object.entries(dependencies)
            .filter(([key, _value]) => localModuleList.includes(key))
            .forEach(([libraryName, version]) => {

                const pathAndFilename = getPathAndFilename(libraryName, version);
                child_process.execSync(`npm install ${pathAndFilename}  --registry https://registry.npmjs.org`, { stdio: [0, 1, 2] });

                console.log("install:local success");
            });

    } catch(err) {
        console.log("*** ERR! install:local failed! ***");
    }
})();
