/*
    Electron Test (for Sentry)
    (renderer process)
*/

'use strict';

// Imports
const stuff = require('./stuff');

// Initialize Raven (error logging to Sentry)
Raven.config('https://[a1b1c1]@sentry.io/[12345]', {
    autoBreadcrumbs: true,
}).install();
