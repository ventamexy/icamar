document.addEventListener("DOMContentLoaded", function() {

    // Indexando elementos - listas
    let lstGroup = document.querySelectorAll(".list-group");
    lstGroup.forEach( (element, index_ul, array) => {
        let array_ul_li = array[index_ul].childNodes;
        for (let index_li = 0; index_li < array_ul_li.length; index_li++) {
            array_ul_li[index_li].dataset.index = index_li;
        }
    });    

});

// --- Items seleccionados menú.
$(document).on("click", ".list-group li", function() {
    
    // Items ul seleccionado.
    let array_ul_li = $(this)[0].parentNode.childNodes;

    // Quitar clase item activo.
    for(let index = 0; index < array_ul_li.length; index++) {
        let item = array_ul_li[index];
        item.classList.remove("item-ul-activo");
    }

    // --- Marcando elemento seleccionado.
    let index_li = $(this).data("index");
    array_ul_li[index_li].classList.add("item-ul-activo");

});