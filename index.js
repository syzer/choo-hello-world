// import choo from 'choo'
const choo = require('choo')

const html = require('choo/html')

// import template
const main = require('./template/main.js')

// initialize choo
const app = choo()

app.use(function(state, emitter) {
  // initialize state
  state.animals = [
    { type: 'lion', x: 100, y: 100 },
    { type: 'lion', x: 200, y: 100 }
  ]

  // add animal
  emitter.on('addAnimal', function () {
    const obj = { type: 'lion', x: 200, y: 100 }
    state.animals.push(obj)

    emitter.emit('render')
  })
})

// create a route
app.route('/', main)

// start app
app.mount('div')