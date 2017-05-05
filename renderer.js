// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const element = document.createElement('div')
element.style.width = '200px'
element.style.height = '200px'
element.style.backgroundColor = 'red'
document.body.appendChild(element)
const intersectionObserver = new IntersectionObserver(() => {
  intersectionObserver.disconnect()
})
intersectionObserver.observe(element)
debugger
console.log('!!!!!!!!!!!!!!!!!');
