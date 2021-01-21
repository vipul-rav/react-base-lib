# CYBG : {APP NAME} Web App - README

## Purpose

This repository contains the {APP NAME} Web App.

---
## Getting Started

- To run the project run `npm install` and then `npm start`
- To review the other commands available, see: [CLI]("./CLI.md")

---
## Folder Structure

- `_build`: config files that are replaced on the CI server during build.
- `_config`: config files that are replaced on the CI server during deployment.
- `_locale`: json files with textual content that may be replaced after deployment.
- `dev`: config files used for development purposes only. Content will not be used on CI.
- `dist`: output folder for generated code. Content is excluded from repo.
- `docs`: repository documentation linked to from this Readme file.
- `node_modules`: standard referenced modules. Folder is excluded from repo.
- `src`: project related files. Content will be included in bundles.
- `test`: testing related files. Content will excluded from bundles.

---
## Building & Deploying

To build the web application:
- Open Jenkins Job `NPM Builds > Build Node Application (and variants) v1.5`
- Click 'Build with Parameters'
- Set GIT_REPO parameter as repository name
- Set GIT_BRANCH parameter as name of branch to be built/deployed
- Click 'Build'

Once built the console output lists build number (i.e. 0.0.1-11) towards the end ('/home/jenkins_slave/opt/bin/publish-to-nexus' ...)

The build number should be:
    - used in deploy process (see below).
    - noted on Jira tickets as appropriate.

To deploy the web application:
- Open Jenkins Job `Web-Apps > Deploy Generic WebApp v1.5`
- Click 'Build with Parameters'
- Set ENVIRONMENT parameter as appropriate
- Set WEB_APP parameter as repository name
- Set BUILD_VERSION with build number (see above)
- Click 'Build'
When the job has completed, the web app build will be deployed to the selected environment.
