var peelCorner = 'right-bottom' // 'left-top' or 'right-top' or 'left-bottom' or 'right-bottom'
var peelClass = 'copyright-peel'
var peelBg = 'https://saveyourinternet.today/peel/bg_de.svg'
var peelBgBottom = 'https://saveyourinternet.today/peel/bg-bottom_de.svg'

var peel = document.createElement('div')
peel.className = peelClass
peel.addEventListener('click', function() {
  var currentWidth = parseInt(window.getComputedStyle(peel).getPropertyValue('width'))
  if (currentWidth === (peelWidth * 2)) {
    var win = window.open('https://saveyourinternet.today', '_blank')
    win.focus()
  }
})

peel.innerHTML = `
<div class="${peelClass}-bg"></div>
<div class="${peelClass}-content"></div>
`

var peelStyle = document.createElement('style')

var peelSettings = { deg: '0', sideX: 'left', sideY: 'top' }
if (peelCorner === 'right-top') peelSettings = { deg: '90', sideX: 'right', sideY: 'top' }
if (peelCorner === 'left-bottom') peelSettings = { deg: '270', sideX: 'left', sideY: 'bottom' }
if (peelCorner === 'right-bottom') peelSettings = { deg: '180', sideX: 'right', sideY: 'bottom' }

peelStyle.innerHTML = `
.${peelClass} {
  position: fixed;
  ${peelSettings.sideX}: 0;
  ${peelSettings.sideY}: 0;
  transform: rotate(${peelSettings.deg}deg);
  width: 10rem;
  height: 10rem;
  transition: all .5s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 10000;
  cursor: pointer;
}

.${peelClass}:hover, .${peelClass}:active {
  width: 20rem;
  height: 20rem;
}

.${peelClass}-bg {
  background: linear-gradient( 135deg, transparent, transparent 45%, #ddd 50%, #aaa 50%, #bbb 56%, #ccc 62%, #f3f3f3 80%, #fff 100% );
  z-index: 10002;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
}

.${peelClass}-content {
  background: url('${peelSettings.sideY === 'bottom' ? peelBgBottom : peelBg}') white;
  position: relative;
  left: 0;
  top: -100%;
  width: 20rem;
  height: 20rem;
  padding: 0;
  margin: 0;
  color: black;
  overflow: hidden;
  z-index: 10001;
}
`

document.querySelector('body').appendChild(peel)
document.querySelector('head').appendChild(peelStyle)

var peelWidth = parseInt(window.getComputedStyle(peel).getPropertyValue('width'))
