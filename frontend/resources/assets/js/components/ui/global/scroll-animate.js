function scrollTriggerAnimation(){
  // On-scroll and on-view trigger animation
  if( $('[data-animate]').length ) {
    $('[data-animate]').each(function () {
      var inview = new Waypoint.Inview({
        element: this,
        enter: function(direction) {
          $(this.element).addClass('show');
        }
      });
    });
  }
}

function init() {
  // scrollTriggerAnimation();
}

export default init;
