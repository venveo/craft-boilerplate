import $ from 'jquery'

function init() {
    let $readmore = $('[data-readmore]')
    $readmore.each((idx, item) => {
        initReadMore(item)
    })
}

function initReadMore(item) {
    updateLink(item)
}

function updateLink(item) {
    const active = $(item).data('readmore-active')
    let link = '<a href="#">&nbsp;See More</a>'
    if (active) {
        link = '<a href="#">&nbsp;See Less</a>'
    }

    const $link = $(link)

    $(item).append($link)
    $('body').on('click', '[data-readmore] a', (e) => {
        e.preventDefault()
        const $parent = $(e.target).parent()
        const active = $parent.data('readmore-active')
        const text = $parent.data('readmore')

        $link.remove()
        $parent.data('readmore', $parent.text())
        $parent.text(text)
        $parent.data('readmore-active', !active)
        $('body').off(e)
        updateLink(item)
    })
}

export default init
