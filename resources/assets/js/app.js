import $ from 'jquery'
import whatInput from 'what-input'
import * as components from './components'

// Make sure our icon font gets compiled
import './fonts/app.font'

window.$ = $
window.jQuery = $

const setupPages = (function() {
    components.siteUI()
    components.cartPage()
})()

import './lib/foundation-explicit-pieces'

const mainInit = (function() {
    setupPages
})()

function Main() {
    this.init = function () {
        $(document).ready(mainInit)
        $(document).foundation()
    }
    return {
        init: this.init
    }
}

const main = new Main()
main.init()
