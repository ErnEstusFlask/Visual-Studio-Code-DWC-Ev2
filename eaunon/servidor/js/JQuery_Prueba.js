$(document).ready(function(){

    var name=document.getElementById("id_name");
    var lastname=document.getElementById("id_lastname");
    var butto=document.getElementById("id_button");

    butto.onclick= function(){
        alert(name.value);
        if(name.value==""){
            $("#id_name").after(" <p id='textocreado'>Rellene el campo por favor.</p>");
        }
    }
    

    

    /*
    .html inserta texto cambiandolo
    .txt igual que html pero no funciona con etiquetas
    .append inserta texto detras
    .prepend inserta texto delante
    .before inserta antes del elemento seleccionado
    .after inserta despues del elemento seleccionado
    */

});