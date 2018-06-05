import $ from 'jquery'

// Function for footer mobile
function footerAccordionMobile(){
    $('.footer-link-col').on('click', function(){
        $(this).toggleClass('active')
    })
}

function init(){
    footerAccordionMobile()
}

export default init
