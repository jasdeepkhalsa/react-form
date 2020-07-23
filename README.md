# React Form with Hooks

## Features

- Responsive across desktop, tablet & mobile thanks to bulma.io
- Internally uses React with hooks for state management & routing (with [hookrouter](https://github.com/Paratron/hookrouter))
- Data validation with [Joi](https://hapi.dev/module/joi/) schemas
- End-to-end tested with [Cypress](https://www.cypress.io/)

## Pre-requisites

You will need to have access to the command-line, for Linux/Mac a Terminal or on Windows it will be a command prompt (`cmd`)

Please ensure you have the following installed and available on the command-line:

- `node` (NodeJS) - version 12 or later
- `npm` - version 6 or later
- `yarn` - version 1.22 or later
- `git` (optional) - version 2 or later

You can find the exact version by adding the flag `--version` to any of these commands e.g. `node --version`.

If you need to upgrade `node` or `npm` of these tools, installing [Node Version Manager](https://github.com/nvm-sh/nvm) (`nvm`) is recommended for.

Finally, the latest version of the [Chrome browser](https://www.google.co.uk/chrome/) is recommended for viewing and testing this app.

## Download

Download the .zip archive and unzip it to a folder of your choosing e.g. "react-form":

https://github.com/jasdeepkhalsa/react-form/archive/master.zip

**Or** on the command-line, use `git` to clone this repository:

```
$ git clone https://github.com/jasdeepkhalsa/react-form.git
```

## Installation

Make sure you are in the root of your application for all the following steps.

Do this by using `cd` (Mac, Linux, PowerShell) or `dir` (Windows) to navigate on the command line to where you have placed your "react-form" folder.

Then run:

```bash
$ yarn
```

## Running the app

Once installation is complete, simply run the following to start the app:

```bash
$ yarn start
```

This should automatically open a page in your Chrome browser, ususally at `http://localhost:3000`.

## Running the tests

### Cypress - End-to-End Tests

_Note: Please ensure you have the app running before attempting to run these tests_

The Cypress end-to-end tests can be run with:

```bash
$ yarn test
```

The first time you do this Cypress will most likely need to install itself, so please be patient. Subsequent load times should be faster.

Once installed, the Cypress app should pop up a window showing a list of integration tests.

Click the button `Run all specs`. This should start to run the tests by default in the `Chrome` browser.

If you're having difficulty getting this to work, try selecting `Electron` instead as the browser to run the tests in.

Alternatively, use the following command to run the tests headlessly in Electron (which comes shipped with Cypress):

```bash
$ yarn run test:ci
```

### Jest - Unit Tests

The unit tests can be run with:

```bash
$ yarn run test:unit
```

## Future Roadmap / TODO

- **Back journeys** - This would be implemented by using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to first move backward through history and then detecting whether data exists in the store for the particular fields on the page, mapping the fields/form controls to the data, and then repopulating the fields
- **Guarded routes** - Stopping the user navigating away from the form before completing it could be achieved with an [interceptor](https://github.com/Paratron/hookrouter/blob/master/src-docs/pages/en/03_navigation.md#controlled-interceptors)
- **Adding more pages** - The first point of call would be to have a look inside the `src/config` folder which lists several key configuration files powering the app. Next, would be to create a new page component within the `src/components/pages` folder, remembering to extend the `base` container component (see other pages for an example)
- **Adding more tests** - This can be done by simply adding test files within the `cypress/integration` folder. Jest unit tests may also be added for some of the `src/data` and `src/utils` functions
