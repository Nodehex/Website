window.addEventListener('scroll', e => {
  resizeHeader(window.scrollY / window.innerHeight)
});

const resizeHeader = (scrollYPart) => {
  console.log(scrollYPart)
  if (scrollYPart > 1) {
    document.querySelectorAll('nav ul a, nav, nav .nav-wrapper i, nav a.sidenav-trigger, nav a.sidenav-trigger i')
      .forEach(element => {
        console.log(element)
        element.classList.add('scrolled')
      });
  } else {
    document.querySelectorAll('nav ul a, nav, nav .nav-wrapper i, nav a.sidenav-trigger, nav a.sidenav-trigger i')
      .forEach(element => {
        element.classList.remove('scrolled')
      });
  }
}