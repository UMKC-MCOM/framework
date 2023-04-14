import '/src/scss/styles.scss'
import '/src/scss/print.scss'
// import '/src/scss/wysiwyg.scss'
import '/src/js/tables.js'
import '/node_modules/tocbot/dist/tocbot.min.js'
import '/node_modules/@glidejs/glide/dist/glide.min.js'
import '/src/js/toc.js'
import '/src/js/toggles.js'
import '/src/js/quotes.js'
import '/src/js/video.js'

window.addEventListener('load', function () {
  new Glide('.glide').mount()
})

// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector('#counter'))
