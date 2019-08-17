// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyD4-WOOf18uFVjqlVPYD2GVdFSOJMItFOI',
        authDomain: 'my-portfolio-dbcf5.firebaseapp.com',
        databaseURL: 'https://my-portfolio-dbcf5.firebaseio.com',
        projectId: 'my-portfolio-dbcf5',
        storageBucket: 'my-portfolio-dbcf5.appspot.com',
        messagingSenderId: '593079080628'
    }
};
