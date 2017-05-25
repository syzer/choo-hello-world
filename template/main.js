// import choo's template helper
const html = require('choo/html')
const animal = require('./animal.js')


// export module
module.exports = function (state) {
  const type = state.animals.type
  const x = state.animals.x
  const y = state.animals.y

  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
        ${state.animals.map(animal)}
      </div>
    </div>
  `
}