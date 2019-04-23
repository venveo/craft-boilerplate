// See: https://idangero.us/swiper/api/#custom-build
import { Swiper, Keyboard, Navigation, Pagination, Controller, History, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Lazy, A11y } from 'swiper/dist/js/swiper.esm'
// Use modules
Swiper.use([ Keyboard, Navigation, Pagination, Controller, History, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Lazy, A11y ])

function init(){
    if (document.querySelector('[data-swiper-blockquote]') ) {
        new Swiper('[data-swiper-blockquote]', {
            autoplay: {
                delay: 5000,
            },
            speed: 500,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        })
    }
}

export default init
