import { generalConf } from './general.conf.js'
export let bsConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    capabilities: process.env.PLATFORM === "android" ? [
        {
            "platformName": "android",
            "appium:deviceName": "Google Pixel 7 Pro",
            "appium:platformVersion": "13.0",
            "appium:automationName": "UiAutomator2",
            "appium:app": "bs://4f013f253103fba319e96bf3a282e58fde19dfb4"
        }
    ] : [
        {
            "platformName": "iOS",
            "appium:deviceName": "iPhone 14 Pro Max",
            "appium:platformVersion": "16",
            "appium:automationName": "XCUITest",
            "appium:app": "bs://29f949a167cc2a1b13daf5823988ab7ad67bb9bd"
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            projectName: "BrowserStack EBAC Ryan",
            buildName: 'browserstack build',
            sessionName: `Test ${process.env.PLATFORM}`
            // debug: true,
            // networkLogs: true
        }
    },
    ...generalConf
}