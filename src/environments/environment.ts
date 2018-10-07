// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Firebase API
  firebase: {
    apiKey: "AIzaSyBT5zl_6KUQtyXHYf5tsaBg4zUwY2Xg0z0",
    authDomain: "book-it-test-eb8b1.firebaseapp.com",
    databaseURL: "https://book-it-test-eb8b1.firebaseio.com",
    projectId: "book-it-test-eb8b1",
    storageBucket: "book-it-test-eb8b1.appspot.com",
    messagingSenderId: "846897505343"
  },

  // Open Library API URL.
  openLibrary: 'https://openlibrary.org/api/books'
  
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
