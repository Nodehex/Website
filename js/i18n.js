function generateEnglishTable() {
  const i18nElements = Array.from(document.querySelectorAll('[i18n]'))
  const englishTable = i18nElements.reduce((table, element) => {
    const stringName = element.getAttribute('i18n')
    if (stringName) {
      table[stringName] = element.innerText
    }
    return table
  }, {})
  stringTables.en = englishTable
}

function highlightUnlocalized() {
  const elementsWithText = findElementsWithText()
  debugLog(`${elementsWithText.length} elements found that might contain text`)
  elementsWithText.forEach(el => {
    if (!el.getAttribute('i18n')) {
      el.style.backgroundColor = '#F00'
    }
  })
}

function findElementsWithText() {
  const elements = Array.from(document.querySelectorAll('body *:not(svg)'))
  const withText = elements.filter(el => el.textContent !== '')
  const noChildElements = withText.filter(el => !hasChildElementsWithText(el))
  const noEmptyElements = noChildElements.filter(el => el.innerText !== '')
  return noEmptyElements
}

function hasChildElementsWithText(element) {
  const childElements = Array.from(element.querySelectorAll("*"))
  for (const childElement of childElements) {
    if (childElement.innerText) return true
  }
  return false
}

function localizeButtonClick(language) {
  localizePage(language)
  setSearchParam('lang', language)
}

function localizePage(language) {
  if (!stringTables.uk) generateEnglishTable()
  debugLog(`Starting localization with language ${language}`)
  if (debugMode) highlightUnlocalized()
  toggleLocaleButtons(language)
  const stringTable = stringTables[language]
  if (stringTable) {
    debugLog('Stringtable found', stringTable)
    applyStringTable(stringTable) ? debugLog('Stringtable applied') : debugLog('No translateable strings found')
  } else {
    debugLog('No stringtable found')
  }
}

function toggleLocaleButtons(language) {
  document.querySelectorAll(".locale-btn").forEach(el => el.hidden = false)
  document.querySelectorAll(`#locale-btn-${language}`).forEach(el => el.hidden = true)
}

function applyStringTable(stringTable) {
  const i18nElements = Array.from(document.querySelectorAll('[i18n]'))
  if (i18nElements.length === 0) return false

  const { converted, failed } = i18nElements.reduce((acc, element) => {
    return localizeElement(stringTable, element) ?
      { converted: acc.converted++, ...acc } :
      { failure: acc.failed++, ...acc }
  }, { converted: 0, failed: 0 })

  debugLog(`i18n completed, ${converted} out of ${i18nElements.length} converted, ${failed} elements could not be converted`)

  return true
}

function localizeElement(stringTable, element) {
  const stringName = element.getAttribute('i18n')
  debugLog(`Localizing element with string name ${stringName}`)
  if (stringTable[stringName]) {
    element.innerHTML = stringTable[stringName]
    return true
  }
  return false
}

function initializeLocalization() {
  generateEnglishTable()
  const params = getSearchParams()
  if (params.has('lang')) {
    localizePage(params.get('lang'))
  }
}