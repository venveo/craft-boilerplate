import $ from 'jquery'
import * as components from './components'
import './lib/foundation.plugins'
import './fonts/app.font'

// Do you need these? Probably.
// import 'custom-event-polyfill'
// import 'url-polyfill'

window.$ = $
window.jQuery = $

const setupPages = (function() {
    components.globalJS()
    components.pagesJS()
})()

const mainInit = (function() {
    setupPages
})()

function Main() {
    this.init = function() {
        $(document).ready(mainInit)
    }
    return {
        init: this.init
    }
}

const main = new Main()
main.init()
