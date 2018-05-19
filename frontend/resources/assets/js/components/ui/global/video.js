function youtubePlay(){

  // Video Play Toggle for youtube iframe
  // ---

  function YTiframeAPI() {
      var tag = document.createElement('script');
      tag.id = 'iframe-sewrew';
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function onYouTubeIframeAPIReady(id) {
      var player = new YT.Player(id, {
          events: {
              'onReady': onPlayerReady
          }
      });
  }

  function onPlayerReady(e) {
      e.target.playVideo();
  }

  $('[data-video]').on('click', function () {
      var $vid;
      $(this).find('.video-thumb').addClass('visually-hidden');
      $vid = $(this).find('iframe').attr('id');
      YTiframeAPI();
      $(this).delay(350).queue(function () {
          onYouTubeIframeAPIReady($vid);
      });
  });

}

function init(){
  youtubePlay()
};

export default init;
