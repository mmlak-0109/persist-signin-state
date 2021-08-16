# Persisting Redux State Demo

This is a simple application that demonstrates persisting an applications state. Redux is an in-memory solution to state management, but the state will get reset upon a page refresh, closing the tab, duplicating a tab, etc. By using the redux-persist package, you can store some or all of an applications state in various more permanent formats (local storage, session storage, etc.)  It uses the most up to date syntax for redux (@reduxjs/toolkit), react-redux, and redux-persist for the plumbing and material-ui for the UI.

## Usage

The easiest way to view the app in action is to click on this link: https://persist-signin-state-demo.netlify.app

However, if you prefer to clone it to your local environment instead, navigate to the directory where you want to save the app and run this code:
```sh
git clone https://github.com/mmlak-0109/persist-signin-state.git
```

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
