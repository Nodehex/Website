function getSearchParams() {
  return new URLSearchParams(document.location.search)
}

function setSearchParam(key, value) {
  const params = getSearchParams()
  params.set(key, value)
  window.location.search = params
  debugLog('setting search params', params)
}