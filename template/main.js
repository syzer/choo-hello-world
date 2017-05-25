// import choo's template helper
const html = require('choo/html')
const animal = require('./animal.js')
const swal = require('sweetalert2')

// export module
module.exports = function (state) {
  const type = state.animals.type
  const x = state.animals.x
  const y = state.animals.y

  swal({
    title: 'Just a WIP',
    html: $('<div>')
    .addClass('some-class')
    .text('jQuery is everywhere.'),
    animation: false,
    customClass: 'animated tada'
  })


  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
        ${state.animals.map(animal)}
      </div>
    </div>
  `

  // add new animal to state
  function add (event) {
    const x = event.offsetX - 20
    const y = event.offsetY - 10

    const obj = { x: x, y: y }
    emit('addAnimal', obj)
  }
}