function getSearchParams() {
  return new URLSearchParams(location.hash.replace('#', ''))
}

function setSearchParam(key, value) {
  const params = getSearchParams()
  params.set(key, value)
  window.location.hash = params
  debugLog('Setting search params', params)
}

function clearSearchParams() {
  window.location.hash = '';
  debugLog('Clearing search params')
}