Package.describe({
  name: 'meteor-gifmaker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
    api.addFiles('client/save_file.js', 'client');
    api.addFiles('client/animate.js', 'client');
    api.addFiles('lib/gifshot.js');
    api.addFiles('lib/common.js');

    api.use('raix:ui-dropped-event');
    api.use('cfs:standard-packages');
    api.use('cfs:gridfs');
});


