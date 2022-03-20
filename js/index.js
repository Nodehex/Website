function setDebugMode(enabled) {
  if (location.hostname) return false
  return enabled
}

let interruptLogging = false;
function debugLog(string, css = '') {
  if (debugMode && !interruptLogging) console.log(`%c${string}`, css)
}

const debugMode = setDebugMode(false)

const bigLogo = document.querySelector("#big-logo")
const smallLogo = document.querySelector("#small-logo")
smallLogo.classList.add("hide")
bigLogo.classList.add("hide")
let firstPageLoad = true

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting || getWidth() <= 992)  { /*show big logo if <992 or intersecting*/
      debugLog('Showing big logo')
      bigLogo.classList.remove("fade-out")
      smallLogo.classList.add("fade-out")
      return
    }
    /*show small logo*/
    debugLog('Showing small logo')
    smallLogo.classList.remove("fade-out")
    bigLogo.classList.add("fade-out")
  })
  if (firstPageLoad) { /*show both logos*/
    smallLogo.classList.remove("hide")
    bigLogo.classList.remove("hide")
  }
})

debugLog('Initializing scripts')
initializeCookies()
initializeLocalization()

observer.observe(document.querySelector(".icon-animation"))