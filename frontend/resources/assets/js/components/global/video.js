import $ from 'jquery'

function youtubePlay(){
    let videos = document.querySelectorAll('[data-video]')

    if( videos.length !== 0 ) {
        $(document).ready(function(){
            var tag = document.createElement('script')
            tag.src = 'https://www.youtube.com/iframe_api'
            var firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        })

        window.addEventListener('load', function() {
            let player
            $(videos).each(function() {
                const $id = $(this).find('iframe').attr('id')
                player = new YT.Player($id, {
                    playerVars: {
                        rel: 0,
                        showinfo: 0,
                        playsinline: 1
                    },
                    events: {
                        // 'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                })
            })

            function onPlayerStateChange(event) {
                let targetVidId = event.target.a.id

                if (event.data === YT.PlayerState.BUFFERING) {
                    $(videos).each(function(){
                        if( $(this).attr('data-video') === targetVidId ) {
                            $(this).find('.video-thumb').addClass('video-thumb--buffering')
                        }
                    })
                }

                if (event.data === YT.PlayerState.PLAYING) {
                    $(videos).each(function(){
                        if( $(this).attr('data-video') === targetVidId ) {
                            $(this).find('.video-thumb').removeClass('video-thumb--buffering').addClass('visually-hidden')
                        }
                    })
                }

                if (event.data === YT.PlayerState.PAUSED) {
                    $(videos).each(function(){
                        if( $(this).attr('data-video') === targetVidId ) {
                            $(this).find('.video-thumb').removeClass('visually-hidden video-thumb--buffering').addClass('video-thumb--paused')
                        }
                    })
                }

                if (event.data === YT.PlayerState.ENDED) {
                    $(videos).each(function(){
                        if( $(this).attr('data-video') === targetVidId ) {
                            $(this).find('.video-thumb').removeClass('visually-hidden')
                        }
                    })
                }
            }

            $('[data-video]').on('touchstart click', function(e) {
                e.preventDefault()
            })

        })
    }
}

function init(){
    youtubePlay()
}

export default init
