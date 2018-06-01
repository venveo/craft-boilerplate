import Headroom from 'headroom.js'

function init(){
    // grab an element
    var header = document.querySelector('header')
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(header,{
        'offset': 0,
        'tolerance': 0,
    })
    // initialise
    headroom.init()
}

export default init
