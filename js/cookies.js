const allowCookiesVar = 'aeonEnableCookies';
let desiredCookies = [];

function initializeCookies() {
  debugLog('Initializing cookies')
  if (!isCookiesAllowed()) {
    debugLog('Showing cookies dialog')
    deleteAllCookies()
    disableGoogleCookies()
    showDialog()
  } else {
    debugLog('Cookies are allowed')
  }
}

function showDialog() {
  document.getElementById('cookies').style.display = 'block';
}

function hideDialog() {
  document.getElementById('cookies').style.display = 'none';
}

function disableGoogleCookies() {
  debugLog('Disabling google metrics')
  window['ga-disable-MEASUREMENT_ID'] = true;
}

function enableGoogleCookies() {
  debugLog('Enabling google metrics')
  window['ga-disable-MEASUREMENT_ID'] = false;
}

function storeCookieUsage(cookiesAllowed) {
  debugLog(`Storing cookie preferences - cookies set to ${cookiesAllowed}`)
  attemptSaveCookie(allowCookiesVar, cookiesAllowed, cookiesAllowed)
  if (cookiesAllowed) {
    debugLog('Processing cookie queue')
    desiredCookies.forEach((cookie) => attemptSaveCookie(cookie.key, cookie.value))
    desiredCookies = []
    enableGoogleCookies()
  }
  hideDialog()
}

function resetCookiePreferences() {
  localStorage.setItem(allowCookiesVar, null)
  disableGoogleCookies()
}

function isCookiesAllowed() {
  const allowCookies = localStorage.getItem(allowCookiesVar)
  return (JSON.parse(allowCookies) === true)
}

function attemptSaveCookie(key, value, force = false) {
  if (isCookiesAllowed() || force) {
    debugLog(`Saving cookie ${key} with value ${value}`)
    localStorage.setItem(key, value)
  } else {
    debugLog(`Waiting to save ${key}: ${value} until cookies are allowed`)
    desiredCookies.push({key, value})
  }
}

function retrieveCookie(key) {
  return localStorage.getItem(key)
}

function deleteAllCookies() {
  localStorage.clear()
}