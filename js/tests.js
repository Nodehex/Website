let testResults = {failed: 0, success: 0, failedTests: []};
let currentTest = '';
let preTestFn = () => {};
let testFunctions = [];

function test(description, testFn) {
    currentTest = description
    debugLog(`Testing: ${description}`)
    preTestFn()
    testFn()
}

function beforeEach(prepareFn) {
    preTestFn = prepareFn
}

function expect(value, expected) {
    if (value === expected) {
        testResults.success++
    } else {
        testResults.failed++;
        testResults.failedTests.push({description: `Failed ${currentTest}`, result: `Expected ${value} to equal ${expected}`, stack: new Error().stack})
    }
}

function testModule(description, testFn, verbose = false) {
    testFunctions.push(() => {
        if (!debugMode) return
        interruptLogging = !verbose
        testResults = {failed: 0, success: 0, failedTests: []};
        currentTest = '';
        preTestFn = () => {};
        testFn()
        interruptLogging = false
        printTestResults(description)
    })
}

testModule('Cookies', () =>{
    beforeEach(() => {
        resetCookiePreferences()
        deleteAllCookies()
    });

    test('Cookies to only be allowed when preferences are set', () => {
        expect(isCookiesAllowed(), false)
        storeCookieUsage(true)
        expect(isCookiesAllowed(), true)
    });

    test('Cookie saving to be queued until cookies are allowed', () => {
        attemptSaveCookie('test', 'text') // try to save the cookie
        expect(retrieveCookie('test'), null) // it shouldn't be saved, no cookies are allowed
        expect(desiredCookies.length, 1) // it's in the quuee
        storeCookieUsage(true) // allow cookies
        expect(retrieveCookie('test'), 'text') // now that they're allowed, it's saved
        expect(desiredCookies.length, 0) // the queue is cleared
    })

    test('The google analytics variable to be set to false when cookies are disabled', () => {
        expect(window['ga-disable-MEASUREMENT_ID'], true)
        storeCookieUsage(true)
        expect(window['ga-disable-MEASUREMENT_ID'], false)
    })

    deleteAllCookies()
})

testModule('searchParams', () => {
    test('Test search params', () => {
        clearSearchParams();
        expect(getSearchParams().get('test'), null)
        setSearchParam('test', 'value')
        expect(getSearchParams().get('test'), 'value')
        setSearchParam('test', 'newValue')
        expect(getSearchParams().get('test'), 'newValue')
    })
})

testModule('i18n', () => {
    beforeEach(() => {
        deleteAllCookies()
        clearSearchParams()
    })

    const validateLanguage = () => {
        const svcTitle = document.querySelector('[i18n=services_title]').innerText
        switch (svcTitle) {
            case 'SERVICES': return 'en';
            case 'TJÄNSTER': return 'se';
        }
        return `UNKNOWN LANG: ${svcTitle}`
    }

    test('The language defaults to English', () => {
        initializeLocalization()
        expect(validateLanguage(), 'en')
    })
    test('The language gets set from url', () => {
        setSearchParam('lang', 'se')
        initializeLocalization()
        expect(validateLanguage(), 'se')
    })
    test('The language gets set from cookies', () => {
        storeCookieUsage(true)
        attemptSaveCookie('lang', 'se')
        initializeLocalization()
        expect(validateLanguage(), 'se')
        attemptSaveCookie('lang', 'en')
        initializeLocalization()
        expect(validateLanguage(), 'en')
    })
    test('Search param has priority over cookies', () => {
        setSearchParam('lang', 'se')
        attemptSaveCookie('lang', 'en')
        initializeLocalization()
        expect(currentLanguage, 'se')
    })
    test('Can cycle through the language with the buttons', () => {
        initializeLocalization()
        expect(validateLanguage(), 'en')
        localizeButtonClick('se')
        expect(validateLanguage(), 'se')
        localizeButtonClick('en')
        expect(validateLanguage(), 'en')
        localizeButtonClick('se')
        expect(validateLanguage(), 'se')
        localizeButtonClick('en')
        expect(validateLanguage(), 'en')
    })
    resetCookiePreferences()
})

function printTestResults(module) {
    const generalColor = (testResults.failed === 0) ? '#24590c' : '#69130d'
    debugLog(`Tests completed for ${module}.`, `background: ${generalColor}; color: white; font-weight: bold`)
    debugLog(`${testResults.failed} out of ${testResults.failed + testResults.success} failed`, `background: ${generalColor}; color: white`)
    testResults.failedTests.forEach((t) => {
        debugLog(t.description, 'background: #69130d; color: white')
        debugLog(t.result, 'background: #69130d; color: white; font-weight: bold')
        debugLog(t.stack)
    })
}

function runTests() {
    testFunctions.forEach(fn => fn())
}