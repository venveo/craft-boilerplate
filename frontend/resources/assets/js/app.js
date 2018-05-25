import $ from 'jquery'
import * as components from './components'
//import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces'
import './fonts/app.font'

window.$ = $
window.jQuery = $

const setupPages = (function() {
    components.siteUI()
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
