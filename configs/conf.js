exports.config = {
  SELENIUM_PROMISE_MANAGER: 0,
  directConnect: false,
  framework: "jasmine",
  allScriptsTimeout: 60000,
  getPageTimeout: 45000,
  specs: ["../test_specs/*.js"],
 
  capabilities: {
    browserName: "chrome"
  }

};
