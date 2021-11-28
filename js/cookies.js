const allowCookiesVar = 'aeonEnableCookies';
const cookiesDialogShownVar = 'aeonCookiesDialogShown';

function initializeCookies() {
  debugLog('Initializing cookies')
  const dialogShown = localStorage.getItem(cookiesDialogShownVar)
  if (JSON.parse(dialogShown) === true) {
    debugLog('Cookies dialog has been shown to user')
    const allowCookies = localStorage.getItem(allowCookiesVar)
    if (JSON.parse(allowCookies) === true) disableCookies(!allowCookies)
  } else {
    debugLog('Showing cookies dialog')
    showDialog()
  }
}

function disableCookies(disable) {
  window['ga-disable-MEASUREMENT_ID'] = disable;
}

function showDialog() {
  document.getElementById('cookies').style.display = 'block';
}

function hideDialog() {
  document.getElementById('cookies').style.display = 'none';
}

function storeCookieUsage(allowCookies) {
  debugLog('Storing cookie preferences')
  localStorage.setItem(allowCookiesVar, allowCookies)
  localStorage.setItem(cookiesDialogShownVar, true)
  disableCookies(!allowCookies)
  hideDialog()
}

function resetCookiePreferences() {
  localStorage.setItem(allowCookiesVar, null)
  localStorage.setItem(cookiesDialogShownVar, false)
}