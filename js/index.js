function setDebugMode(enabled) {
  if (location.hostname) return false
  return enabled
}

function debugLog(string) {
  if (debugMode) console.log(string)
}

const debugMode = setDebugMode(false)

let element = document.getElementById("service-tabs")
let instance = M.Tabs.init(element)

const bigLogo = document.querySelector("#big-logo")
const smallLogo = document.querySelector("#small-logo")
smallLogo.classList.add("hide")
bigLogo.classList.add("hide")
let firstPageLoad = true

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bigLogo.classList.remove("fade-out")
      smallLogo.classList.add("fade-out")
      return
    }
    smallLogo.classList.remove("fade-out")
    bigLogo.classList.add("fade-out")
  })
  if (firstPageLoad) {
    smallLogo.classList.remove("hide")
    bigLogo.classList.remove("hide")
  }
})

initializeLocalization()

observer.observe(document.querySelector(".icon-animation"))
