$(document).ready(function(){

    var close=document.getElementById("close");
    var but1=document.getElementById("but1");
    var but2=document.getElementById("but2");
    var but3=document.getElementById("but3");
    var but4=document.getElementById("but4");
    
    close.addEventListener("click", cerrar_banner, false);
    
    function cerrar_banner(){
        $("#pop_up").remove();
    }

    but1.addEventListener("click", comprar_articulo1, false);
    but2.addEventListener("click", comprar_articulo2, false);
    but3.addEventListener("click", comprar_articulo3, false);
    but4.addEventListener("click", comprar_articulo4, false);

    function comprar_articulo1(){
        $("#but1").replaceWith("<img src='images/sold.gif'>");
    }
    function comprar_articulo2(){
        $("#but2").replaceWith("<img src='images/sold.gif'>");
    }
    function comprar_articulo3(){
        $("#but3").replaceWith("<img src='images/sold.gif'>");
    }
    function comprar_articulo4(){
        $("#but4").replaceWith("<img src='images/sold.gif'>");
    }



    /*
    .html inserta texto cambiandolo
    .txt igual que html pero no funciona con etiquetas
    .append inserta texto detras
    .prepend inserta texto delante
    .before inserta antes del elemento seleccionado
    .after inserta despues del elemento seleccionado
    .remove elimina
    .remplaceWith cambia el contenido por lo de dentro de los parentesis
    */

});