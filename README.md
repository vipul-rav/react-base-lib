# {APP NAME} Web App - README

## Purpose

This repository is base web app.

---

## Getting Started

-   To run the project run `npm install` and then `npm start`

## Other Scripts

-   `npm test` : Run all the test cases.
-   `npm run lint`: Run lint command.
-   `npm run lint:report`: Generate lint report with warnings & errors
-   `npm run lint:fix`: Fix all link issues
-   `npm run format`:Format the files as per Prettier rules
-   `npm run stubs`: Application will run with stubs data from stubs folders
-   `npm run pack:dev`: It will be created as .tgz file in node_modules_offline folder as package

---

## Folder Structure

-   `lib`: compiled all files into one file
-   `eslint-config`: eslint setup file and report file.
-   `coverage`: output folder for code coverage reports.
-   `node_modules_offline`: output folder for application as package in zip(.tgz) file format
-   `node_modules`: standard referenced modules. Folder is excluded from repo.
-   `src`: project related files including container, common component, redux files and folders.

---

## Bump version & Building

Ensure that the the following fields have application version number bumped appropriately:

-   npm version (major| minor| patch)
-   npm build - build command for deployment package
