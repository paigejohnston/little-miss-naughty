const w = window.innerWidth
const p = document.querySelector('p')

const getPercentX  = (x) => Math.round(x / w * 360)
const styleEl = document.documentElement.style
const setStyle = styleEl.setProperty.bind(styleEl);

document.addEventListener('mousemove', (e) => {
  const percentX  = getPercentX(e.clientX)
  const gradStart = percentX
  const gradEnd   = (percentX + 120)  % 360

  setStyle('--grad-start', gradStart)
  setStyle('--grad-end', gradEnd)
})
