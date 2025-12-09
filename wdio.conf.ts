export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: ['./test/specs/**/*.ts'],

    services: [
        ['browserstack', { browserstackLocal: false }]
    ],

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel 7',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',

        'appium:app': process.env.BROWSERSTACK_APP_ID,

        'bstack:options': {
            projectName: 'Meu Projeto Mobile',
            buildName: 'Build 1',
            sessionName: 'Teste App Android'
        }
    }],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    reporters: [
        'spec',
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
  }]
]
};
