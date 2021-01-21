const commonJestConfig = require("./_test/jest.config.json");

// Project specific code coverage override values may appear here
/*
const coverageOverrides = {
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60,
        },
    },
}
*/

const coverageOverrides = {};

module.exports = Object.assign({}, commonJestConfig, coverageOverrides);
