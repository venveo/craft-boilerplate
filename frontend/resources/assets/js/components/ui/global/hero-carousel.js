import $ from 'jquery'

function init(){

    $('[data-hero-play]').on('click', function(){
        let $vidSrc = $(this).attr('data-video-src'),
            $videotemp = $('[data-modal-video]'),
            $videoframe = $('[data-modal-video]').find('iframe')
        $videoframe.attr('src', $vidSrc)
        $videotemp.addClass('show')
        // Close modal video
        $videotemp.on('click', '#close-modal-video', function(event) {
            event.preventDefault()
            $videotemp.removeClass('show')
        })
    })

}

export default init
