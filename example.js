

var progress = require('./')(10)
var style = document.createElement('style')
style.textContent = 
  '.hyperprogress__liquid { height: 1px; background: blue;}\n'
//+ '.hyperprogress__bar { width: 100%; background: white;}\n'

document.head.appendChild(style)
document.body.appendChild(progress)

var steps = [
  'check forcast',
  'tidy galley',
  'secure tender',
  'hank sails',
  'raise mainsail',
  'raise anchor',
  'man helm',
  'set mainsail',
  'raise jib',
  'set jib sheets'
]

;(function next () {
  setTimeout(function () {
    progress.next(steps.shift()); next()
    if(!steps.length) return
  }, Math.random() * 100)
})()







