function heroContentFade() {

  var $hero = $('.hero--animate-text');
  if( $hero ) {
    $(window).on('scroll', function () {
      var $bannerOverlay = $hero.find('.hero-text');
      var $range = 200;
      var $scrollTop = $(this).scrollTop(),
          $height = $bannerOverlay.outerHeight(),
          $offset = $height / 2,
          $calc = 1 - ($scrollTop - $offset + $range) / $range;
      $bannerOverlay.css({ 'opacity': $calc });
      if ($calc > '1') {
        $bannerOverlay.css({ 'opacity': 1 });
      } else if ( $calc < '0' ) {
        $bannerOverlay.css({ 'opacity': 0 });
      }
    });
  }

}

function init(){
  heroContentFade()
};

export default init;
