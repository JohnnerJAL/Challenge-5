const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0

setInterval( () => {
  if (load < 100) {
    load++;
    bg.style.filter = `blur(${100-load}px)`;
    loadText.innerText = `${load}%`;
    loadText.style.opacity = `${(100-load)/100}`
  }
}, 30)
   
 