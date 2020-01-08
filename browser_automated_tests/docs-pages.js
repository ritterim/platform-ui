const httpServer = require('http-server');
const PORT = 8000;
const TEST_URL = `http://localhost:${PORT}`;
let server;

const percy = require('@percy/nightwatch');

async function waitForDocumentReady(timeoutMs = 5000) {
    function returnWhenReady()  {
        return new Promise((resolve, reject) => {
            let checkTimeout = setTimeout(() => reject(`Timed out after ${timeoutMs}`), timeoutMs);
        
            if(document.readyState.toLowerCase() === 'complete') {
                // If assets load really quick, we might already be in a complete state
                clearTimeout(checkTimeout);
                resolve(document.readyState);
            }
            
            document.addEventListener('readystatechange', (event) => {
            if(document.readyState.toLowerCase() === 'complete') {
                clearTimeout(checkTimeout);
                resolve(document.readyState);
            }
            });
        })
    }

    return await returnWhenReady()
        .then(resp => resp)
        .catch(err => { 
            throw err
        });
}

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
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Errors Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-errors.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Forms Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-forms.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Icons Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-icons.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Layout Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-layout.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Menu Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-menus.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Print Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-print.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Table Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-tables.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Typography Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-typography.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    },
    'Capture Utilities Page': function(browser) {
        browser
        .url(`${TEST_URL}/section-utilities.html`)
        .execute(waitForDocumentReady)
        .percySnapshot();
    }
}