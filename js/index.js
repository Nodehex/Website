let element = document.getElementById("service-tabs")
let instance = M.Tabs.init(element)

const bigLogo = document.querySelector(".brand-logo")
const smallLogo = document.querySelector(".small-brand-logo")
smallLogo.classList.add("hide")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bigLogo.classList.remove("fade-out")
      smallLogo.classList.add("fade-out")
      smallLogo.classList.remove("hide")
      return
    }

    smallLogo.classList.remove("fade-out")
    bigLogo.classList.add("fade-out")
  })
})

observer.observe(document.querySelector(".wrap"))