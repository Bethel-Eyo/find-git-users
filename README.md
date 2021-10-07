# Overview

This is a simple react app that helps one to search and find github users using thier username

## Technologies used

1. React native for building native mobile apps for android and ios devices.
2. React hooks used with functional components.
3. Redux for state management accross the app.
4. jest and @testing-library/react for unit tests.
5. Typescript: A superset of Javascript (to help with type declarations).
6. Cypress for end to end tests.
7. Eslint for linting.
8. saas for styling.

In the project directory, you can run:

### `Design pattern`

I used an architecture similar to MVP (model-view-presenter) architecture. the model had to do with the data which was in the redux store, the view was the file that has all the jsx properties and the logic had all the functions/methods i.e. src/pages/Home -> Home.tsx, src/screens/Home -> HomeLogic.ts

### `Tests`

1. For unit tests, they can be found in src/pages/Home -> Home.test.tsx, run the 'yarn test' command in terminal to run the tests
2. For end to end tests, they can be found in e2e/cypress/integration -> 01-gitUsers.spec.ts run 'yarn run cypress open' command in the terminal to run the e2e test.
