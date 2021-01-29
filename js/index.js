window.addEventListener('scroll', e => {
  resizeHeader(window.scrollY / window.innerHeight)
});

var el = document.getElementById('service-tabs')
var instance = M.Tabs.init(el)

const resizeHeader = (scrollYPart) => {
  console.log(scrollYPart)
  return;
  if (scrollYPart > 0.9) {
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