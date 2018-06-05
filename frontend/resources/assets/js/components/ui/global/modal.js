import $ from 'jquery'

// Downloads Modal Function
function downloadsModal() {
    var $modalTrigger = $('[data-download-show]')
    if( $modalTrigger === 0 ) return
    $('[data-download-show]').on('click', function(){
        var $modal = $('.modal-downloads')
        $modal.closest('.modal-downloads').addClass('show')
        // Close modal video
        $modal.on('click', '#close-modal-downloads', function(event) {
            event.preventDefault()
            $modal.removeClass('show')
        })
    })
}

function init(){
    downloadsModal()
}

export default init
