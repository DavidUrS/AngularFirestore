// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAJu51eR9rk6LKK5fg4FD5CMaDGO3wwnGQ",
    authDomain: "tasks-f95ea.firebaseapp.com",
    databaseURL: "https://tasks-f95ea.firebaseio.com",
    projectId: "tasks-f95ea",
    storageBucket: "tasks-f95ea.appspot.com",
    messagingSenderId: "920161299022"
  }
};
