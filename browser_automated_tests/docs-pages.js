const httpServer = require('http-server');
const PORT = 8000;
const TEST_URL = `http://localhost:${PORT}`;
let server;

const percy = require('@percy/nightwatch');

module.exports = {
    before: function(browser) {
        server = httpServer.createServer({ root: './styleguide' });
        server.listen(PORT);
    },
    after: function(browser) {
        server.close();
        browser.end();
    },
    afterEach: function(browser) {
        browser.execute('window.localStorage.clear()');
    },
    'Capture Components Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-components.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Errors Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-errors.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Forms Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-forms.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Icons Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-icons.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Layout Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-layout.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Menu Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-menus.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Print Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-print.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Table Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-tables.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Typography Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-typography.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    },
    'Capture Utilities Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-utilities.html`)
        .waitForElementVisible('body')
        .percySnapshot();
    }
}