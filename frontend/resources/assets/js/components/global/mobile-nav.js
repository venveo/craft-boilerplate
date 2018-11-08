import $ from 'jquery'
import { OffCanvas } from '../../lib/foundation.plugins'

let mobileNav = document.querySelector('[data-mobile-nav]')
let header = document.querySelector('header')

// initialise offcanvas for mobile nav
new OffCanvas( $(mobileNav) )

// MobileNav Opened
function mobileNavOpen () {
    $(mobileNav).on('opened.zf.offcanvas', function() {
        header.classList.add('site-header--pushed-right')
    })
}

// MobileNav Closed
function mobileNavClosed () {
    $(mobileNav).on('closed.zf.offcanvas', function() {
        header.classList.remove('site-header--pushed-right')
    })
}

function init() {
    if(mobileNav) {
        mobileNavOpen()
        mobileNavClosed()
    }
}

export default init
