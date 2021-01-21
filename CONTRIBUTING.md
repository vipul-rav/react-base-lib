# CYBG : Base Web App - CONTRIBUTING

## Contribution Checklist

Things to remember when making code or configuration changes to this repository:
- Update the README.md & docs files
- Update the ROADMAP.md
- Update the CHANGELOG.md
- Update the CLI.md
- Update the package.json > see Versioning Guidance below
- Raise Pull Request > see PR Guidance below

## Versioning Guidance

Version number format in package.json is split into 3 sections: MAJOR.MINOR.PATCH
However this project does NOT use semantic versioning.

Version numbers are bumped as follows:

- MAJOR version bump:
    - Changes to CI tools or process

- MINOR version bump:
    - Changes to CI provided files

- PATCH version bump:
    - Changes to Development only tools or files
    - Changes to Documentation

## PR Guidance

Pull Requests should generally follow the standard [Pull Request Process](https://abouthere.atlassian.net/wiki/spaces/DYB/pages/422609879/Web+Apps+-+Pull+Request+Process) with the addition of these project specific rules:

- Mandatory pull request reviewers/approvers vary by upgrade type:

    - MAJOR or MINOR version update:
        - Dev Ops
        - Web Team Lead
    - PATCH version update:
        - Web Team Lead
