# CYBG : Base Web App - SETUP

Notes on using the Base Web App for a new Web App project.

## Demo File Clean Up

- Delete the folders:

    - `./docs`
    - `./src/components/SampleComponent`
    - `./src/containers/SampleContainer`

- Delete the files:

    - CHANGELOG.md
    - CONTRIBUTING.md
    - README.BASEAPP.md
    - ROADMAP.md
    - SETUP.md

## Package.json Changes

The following changes should be applied to the file: `package.json`:

- `name`: name of repository (in kebab-case)
- `version`: at initial repo clone reset to 0.0.1
- `description`: update with overview of project
- `repository.url`: update with repo url

## Other File Changes

`_locale/en-GB/sample.content.json`:

- Replace `newapp` in filename with the name of the web app.

`src/index.html`:

- Change `<title>` content to name of web app.

`README.NEWAPP.md`:

- Replace {APP NAME} where it appears with the name of the web app.
- Rename the file to `README.md`
