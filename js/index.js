window.addEventListener('scroll', e => {
  resizeHeader(window.scrollY / window.innerHeight)
});

var el = document.getElementById('service-tabs')
var instance = M.Tabs.init(el)

