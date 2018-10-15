import $ from 'jquery'
// require('waypoints/lib/noframework.waypoints')
// require('waypoints/lib/shortcuts/inview')

function scrollTriggerAnimation(){
    window.addEventListener('load', function(){
        // On-scroll and on-view trigger animation
        if( $('[data-animate]').length ) {
            $('[data-animate]').each(function () {
                new Waypoint.Inview({
                    element: this,
                    enter: function() {
                        $(this.element).addClass('show').removeAttr('data-animate')
                    }
                })
            })
        }
    })
}

function init() {
    // scrollTriggerAnimation()
}

export default init
