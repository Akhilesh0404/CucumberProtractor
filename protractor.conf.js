
exports.config = {
  capabilities: {

   //ignoreSynchronization: true,
    directConnect:true,
    browserName: 'chrome',
   
    shardTestFiles: true
  },
  
  allScriptsTimeout: 10000,
 
 
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  
  specs: [
    './e2e/features/*.feature'     // Specs here are the cucumber feature files
  ],
  
  restartBrowserBetweenTests: true,
  // cucumber command line options
  cucumberOpts: {
    require: [
      './e2e/specs/*.js', 
    ],  // require step definition files before executing features
    tags: [],                     
    strict: true,                  
    'dry-run': false,             
    compiler: [],                   
  },
  
  onPrepare: function () {
    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
  }
};
