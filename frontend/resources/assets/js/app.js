import * as components from './components'
import './lib/foundation.plugins'

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
        $(document).foundation()
    }
    return {
        init: this.init
    }
}

const main = new Main()
main.init()
