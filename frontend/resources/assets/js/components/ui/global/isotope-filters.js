import Isotope from 'isotope-layout/dist/isotope.pkgd'
import $ from 'jquery'
import bridget from 'jquery-bridget'
import _ from 'lodash'

bridget('isotope', Isotope, $)

const UI = {
    $productList: $('#filtered-products'),
    $iso: null,
    $materialSelect: $("#select-material")
}

let filters = {
    material: '*',
    modular: false
}

function init() {
    if (!UI.$productList) {
        return
    }

    UI.$iso = UI.$productList.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.filtered-product',
        getSortData: {
            weight: function(itemElem) {
                let searchMaterial = filters.material.replace('.', '')
                if (searchMaterial === '*') {
                    return null
                }
                let classes = itemElem.className.split(/\s+/);
                classes = _.filter(classes, function(item) {
                    return (item.startsWith('material-') || item.startsWith('.material-'))
                })
                let index = _.indexOf(classes, searchMaterial)
                if (index >= 0) {
                    return index * -1
                } else {
                    return null
                }
            },
            name: '.product-name',
        },
        sortBy: ['weight', 'name'],
        sortAscending: {
            name: true,
            weight: false
        }
    });

    UI.$materialSelect.change(function() {
        let filterValue = '*';
        if (this.value) {
            filterValue = '.' + this.value;
        }
        filters.material = filterValue

        updateFilters()
    });

    $("#check-modular").change(function() {
        filters.modular = $(this).is(":checked");
        updateFilters()
    });

    function updateFilters() {
        let filterString = "";

        if (filters.modular) {
            filterString += '.product-modular'
        }
        if (filters.material !== '*') {
            filterString += filters.material
        }
        if (!filterString) {
            filterString = '*'
        }

        UI.$iso.isotope({
            filter: filterString
        }).isotope('updateSortData').isotope({
            sortBy: ['weight', 'name']
        })

        $(filterString).find('img[data-srcset], img[data-src]').lazyLoadXT()
    }
};

export default init;
