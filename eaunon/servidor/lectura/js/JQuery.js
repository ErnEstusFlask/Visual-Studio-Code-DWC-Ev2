$(document).ready(function () {


    //Banner
    var close = document.getElementById("close");
    close.addEventListener("click", cerrar_banner, false);

    function cerrar_banner() {
        $("#pop_up").remove();
    }


    //Tienda
    var imagenes = document.querySelectorAll("#tablaImg .img");
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", comprar_articulo, false);
    }

    function comprar_articulo(param) {
        if (param.target.id == "but1") {
            $("#but1").replaceWith("<img src='images/sold.gif'>");
        } else if (param.target.id == "but2") {
            $("#but2").replaceWith("<img src='images/sold.gif'>");
        } else if (param.target.id == "but3") {
            $("#but3").replaceWith("<img src='images/sold.gif'>");
        } else if (param.target.id == "but4") {
            $("#but4").replaceWith("<img src='images/sold.gif'>");
        }
    }

    //Botones
    butCom.addEventListener("click", resaltarL1, false);
    function resaltarL1() {
        $(".link1").addClass("resaltar");
        $(".link2").removeClass("resaltar");
        $(".link6").removeClass("resaltar");
    }
    butTools.addEventListener("click", resaltarL2, false);
    function resaltarL2() {
        $(".link2").addClass("resaltar");
        $(".link1").removeClass("resaltar");
        $(".link6").removeClass("resaltar");
    }
    butBrow.addEventListener("click", resaltarL6, false);
    function resaltarL6() {
        $(".link6").addClass("resaltar");
        $(".link2").removeClass("resaltar");
        $(".link1").removeClass("resaltar");
    }
    butTog.addEventListener("click", togAll, false);
    function togAll() {
        $(".link2").toggleClass("resaltar");
        $(".link1").toggleClass("resaltar");
        $(".link6").toggleClass("resaltar");
    }
    butClear.addEventListener("click", clearAll, false);
    function clearAll() {
        $(".link2").removeClass("resaltar");
        $(".link1").removeClass("resaltar");
        $(".link6").removeClass("resaltar");
    }
    butCorr.addEventListener("click", corrAll, false);
    function corrAll() {
        $(".link2").addClass("resaltar");
        $(".link1").addClass("resaltar");
        $(".link6").addClass("resaltar");
    }
    radCom.addEventListener("click", resaltarL3, false);
    function resaltarL3() {
        $(".link3").addClass("resaltar");
        $(".link4").removeClass("resaltar");
        $(".link5").removeClass("resaltar");
    }
    radTool.addEventListener("click", resaltarL4, false);
    function resaltarL4() {
        $(".link4").addClass("resaltar");
        $(".link3").removeClass("resaltar");
        $(".link5").removeClass("resaltar");
    }
    radBrow.addEventListener("click", resaltarL5, false);
    function resaltarL5() {
        $(".link5").addClass("resaltar");
        $(".link3").removeClass("resaltar");
        $(".link4").removeClass("resaltar");
    }
    //Target
    var botones = document.querySelectorAll("#tableTar th");
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", cambia_tamano, false);
    }

    function cambia_tamano(param) {
        var currentSize1 = $("#text1").css("font-size");
        var currentSize2 = $("#text2").css("font-size");
        var currentSize3 = $("#text3").css("font-size");

        currentSize1 = parseInt(currentSize1);
        currentSize2 = parseInt(currentSize2);
        currentSize3 = parseInt(currentSize3);
        if (param.target.id == "butAmp1") {
            $("#text1").css({ "font-size": currentSize1 + 2 });
        } else if (param.target.id == "butRed1") {
            $("#text1").css({ "font-size": currentSize1 - 2 });
        } else if (param.target.id == "butAmp2") {
            $("#text2").css({ "font-size": currentSize2 + 2 });
        } else if (param.target.id == "butRed2") {
            $("#text2").css({ "font-size": currentSize2 - 2 });
        } else if (param.target.id == "butAmp3") {
            $("#text3").css({ "font-size": currentSize3 + 2 });
        } else if (param.target.id == "butRed3") {
            $("#text3").css({ "font-size": currentSize3 - 2 });
        }
    }






    /*
    .html inserta texto cambiandolo
    .txt igual que html pero no funciona con etiquetas
    .append() inserta texto detras
    .prepend() inserta texto delante
    .before() inserta antes del elemento seleccionado
    .after() inserta despues del elemento seleccionado
    .remove() elimina
    .remplaceWith() cambia el contenido por lo de dentro de los parentesis
    .addClass() añade el nombre de una clase
    .removeClass() elimina una clase del elemento
    .toggleClass() 
    */

});