let element = document.getElementById("service-tabs")
let instance = M.Tabs.init(element)

const bigLogo = document.querySelector(".brand-logo")
const smallLogo = document.querySelector(".small-brand-logo")
const navBar = document.getElementsByTagName("nav")[0]

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bigLogo.classList.remove("fade-out")
      smallLogo.classList.add("fade-out")
      navBar.classList.remove("tan")
      return
    }

    smallLogo.classList.remove("fade-out")
    bigLogo.classList.add("fade-out")
    navBar.classList.add("tan")
  })
})

observer.observe(document.querySelector(".wrap"))