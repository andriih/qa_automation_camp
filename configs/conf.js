exports.config = {
  SELENIUM_PROMISE_MANAGER: 0,
  directConnect: false,
  framework: "jasmine",
  allScriptsTimeout: 450000,
  getPageTimeout: 30000,
  specs: ["../test_specs/*.js"],
 
  capabilities: {
    browserName: "chrome"
  }

};
