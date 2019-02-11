$(document).ready(function () {

    var imagenes = document.querySelectorAll("img");
    var exp = document.getElementById("exp")

    for (var i = 0; i < imagenes.length; i++) {
        $(imagenes[i]).bind("click", expand);
    }

    function expand(param) {
        $(exp).html("<img src='images/" + param.target.id + ".svg' class='expImg'></img >");
    }

    /*
    .html inserta texto cambiandolo
    .txt igual que html pero no funciona con etiquetas
    .append() inserta texto detras
    .prepend() inserta texto delante
    .before() inserta antes del elemento seleccionado
    .after() inserta despues del elemento seleccionado
    .remove() elimina
    .replaceWith() cambia el contenido por lo de dentro de los parentesis
    .addClass() añade el nombre de una clase
    .removeClass() elimina una clase del elemento
    .toggleClass() 
    .attr("atributo",valor del atributo a cambiar) 
    .hide()
    .fadeToggle()
    .fadeTo()
    .slideDown()
    .slideUp()
    .slideToggle()
    */

});