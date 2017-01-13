'use strict';

exports.config = {
  framework: 'jasmine2',
  specs: ['./e2e/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  rootElement: 'body',
  suites: {
    full: ['e2e/*.e2e-spec.js'],
  },
  jasmineNodeOpts:
  {
    showColors: true
  },
  onPrepare: function() {
    console.log('Jasmine Version: ' + jasmine.version || (jasmine.getEnv().versionString && jasmine.getEnv().versionString()));
    browser.driver.manage().window().setSize(1024, 768);
  },
  params: {
    currentDateTime: Date.now(),
    prescribedObservations: [],
    prescribedMedication: [],
    prescribedTherapies: []
  }
};
