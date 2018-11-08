import Headroom from 'headroom.js'

function init(){
    let header = document.querySelector('header')
    // construct an instance of Headroom, passing the element
    let headroom  = new Headroom(header,{
        'offset': 205,
        'tolerance': 5,
    })
    // initialise
    headroom.init()
}

export default init
