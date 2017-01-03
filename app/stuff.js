/*
    Electron Test (for Sentry)
    stuff.js
    (this file is included by renderer.js)
*/

'use strict';

// This is the same thing as "$(document).ready(function() {", but it doesn't use jQuery
document.addEventListener("DOMContentLoaded", function(event) {
    // The following line throws an error because foo is undefined.
    // In the console window, it correctly shows as being an error on "stuff.js:11"
    // But nothing of the sort is reported to Sentry:
    //     ReferenceError
    //     /D:/Repositories/electron-test/app/index.html
    //     No additional details are available for this frame.
    if (foo) {
    }
});
