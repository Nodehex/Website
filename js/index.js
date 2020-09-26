window.addEventListener('scroll', e => {
  const scrollYCap = 200
  const scrollYCapped = Math.min(window.scrollY, scrollYCap)
  const scrollYPart = scrollYCapped / scrollYCap
  resizeHeader(scrollYPart)
});

const resizeHeader = (scrollYPart) => {
  console.log(scrollYPart)
  const barHeight = 150 - 75 * scrollYPart
  const logoIconTop = 35 - 22.5 * scrollYPart
  const logoMarginTop = 50 - 37.5 * scrollYPart
  const iconHeight = 80 - scrollYPart * 30
  document.querySelector(".brand-logo img").style["margin-top"] = `${logoMarginTop}px`
  document.querySelector(".icon-fixed-small img").style.height = `${iconHeight}px`
  document.querySelector(".icon-fixed-small").style.top = `${logoIconTop}px`
  document.querySelectorAll('nav, nav .nav-wrapper i, nav a.sidenav-trigger, nav a.sidenav-trigger i')
    .forEach(element => {
      element.style.height = `${barHeight}px`
      element.style["line-height"] = `${barHeight}px`
    });
  document.querySelectorAll('nav svg')
    .forEach(element => element.setAttribute("height", `${barHeight}px`));
}
