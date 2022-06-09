const report = require("multiple-cucumber-html-reporter");
const cypress = require('cypress');

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: cypress.browser.name,
            version: cypress.browser.majorVersion,
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "Catalina",
        },
    },
});

