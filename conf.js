exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'firefox'
    },
    // capabilities: {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         args: ["--headless","--windows-size=800,600"]
    //     }
    // },
    onPrepare: () => {
        console.log("Protractor Part 1 Testing:");
    },
    
    params: {
        values: {
          first: 1,
          second: 2,
          result: 3
        }
    }
}