/* global require, module */

var mergeTrees = require('broccoli-merge-trees');

var appTree  = mergeTrees(['app', 'app-addon'], { overwrite: true });
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  trees: {
    app: appTree
  },

  // for some large projects, you may want to uncomment this (for now)
  es3Safe: true,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-core.max.js');
app.import('vendor/ember-addons.bs_for_ember/dist/js/bs-nav.max.js');

module.exports = app.toTree();