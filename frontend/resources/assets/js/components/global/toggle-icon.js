import $ from 'jquery'

function init(){

    let $layouts = $('[data-site-layouts]')
    let $search = $('.hs-input').find('input[type="search"]')

    $('[data-trigger-icon]').on('click', function () {
        let $dVal = $(this).attr('data-trigger-icon')
        $layouts.toggleClass($dVal)
        if($dVal === 'active-search' && $layouts.hasClass('active-search') ) {
            $search.focus()
        }
    })
}

export default init
