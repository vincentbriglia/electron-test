# electron-test

This repository shows how the Raven-JS SDK for Sentry is bugged with Electron projects.

How to Use
----------

* Install node / npm.
* `git clone https://github.com/Zamiell/electron-test.git`
* `cd electron-test`
* `npm install`
* Edit `app/renderer.js` and fill in `https://[a1b1c1]@sentry.io/[12345]` with the values for your Sentry account / app.
* `npm start`
* Watch the bugged report come in to your Sentry account!
