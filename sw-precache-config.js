/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'bower_components/webcomponentsjs/*',
    'images/**/*'
  ],
  navigateFallback: 'index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/]
};
