# CYBG : Base Web App / Docs / Local Configuration / .eslintrc.yaml

## Shared Development Configuration

Explanation of certain configuration items in the `.eslintrc.yaml` file located in the `dev` folder:

`plugins`:
- `import`: plugin with Import/Export Module specific lint rules
- `react`: plugin with React & JSX specific lint rules

`env`:
- `browser`: allows for browser specific references when linting
- `es6`: allows access to ES6 globals (such as Promise, Map, Set)
- `jest`: allows for jest test specific references when linting
- `node`: allows access to Node globals for tooling files

`parser`:
- `babel-eslint`: ensures lint allows for language variations provided via babel

`parserOptions`:
- `sourceType`: `module` - allows for module format in source files
- `ecmaVersion`: `2017` - allows for ECMAScript 2017 language features
- `ecmaFeatures`:
    - `jsx`: allows for jsx language features

`rules`: This contains the default rules set that should be used across projects. It is split into sections:
- Quality Rules - JS: Rules related to code quality issues with general Javascript. Primarily from ESLint:Recommended
- Quality Rules - Import: Rules from the `import` plugin.
- Quality Rules - React: Rules from the `react` plugin.
- Stylistic Rules - These Rules will be replaced by Prettier soon

## Project Specific Configuration

Explanation of certain configuration items in the `.eslintrc.yaml` file located in the project root folder:

`extends`: Provides a reference to the shared development configuration

`rules`:
- New Projects should not add any rule overrides.
- Existing Projects:
    - A specific set of overrides may be provided whilst the repository is brought inline with the standard eslint configuration.
    - The initial set of overrides will either reduce the severity of rules or disable specific rules.
    - Once created there should be no additions to the ruleset.
    - The override ruleset should be reduced/eliminated over time.
