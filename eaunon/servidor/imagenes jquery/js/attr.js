$(document).ready(function () {

    var imagenes = document.querySelectorAll("img");

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseover", color, false);
    }
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseleave", decolor, false);
    }

    function color(param) {
        if (param.target.id == "meg1_1") {
            $("#meg1_1").attr("src", "images/mega/meg1_1.svg");
        } else if (param.target.id == "meg1_2") {
            $("#meg1_2").attr("src", "images/mega/meg1_2.svg");
        } else if (param.target.id == "meg1_3") {
            $("#meg1_3").attr("src", "images/mega/meg1_3.svg");
        } else if (param.target.id == "meg1_4") {
            $("#meg1_4").attr("src", "images/mega/meg1_4.svg");
        } else if (param.target.id == "meg1_5") {
            $("#meg1_5").attr("src", "images/mega/meg1_5.svg");
        } else if (param.target.id == "meg1_6") {
            $("#meg1_6").attr("src", "images/mega/meg1_6.svg");
        } else if (param.target.id == "meg1_7") {
            $("#meg1_7").attr("src", "images/mega/meg1_7.svg");
        } else if (param.target.id == "meg2_1") {
            $("#meg2_1").attr("src", "images/mega/meg2_1.svg");
        } else if (param.target.id == "meg2_2") {
            $("#meg2_2").attr("src", "images/mega/meg2_2.svg");
        } else if (param.target.id == "meg2_3") {
            $("#meg2_3").attr("src", "images/mega/meg2_3.svg");
        } else if (param.target.id == "meg2_4") {
            $("#meg2_4").attr("src", "images/mega/meg2_4.svg");
        } else if (param.target.id == "meg2_5") {
            $("#meg2_5").attr("src", "images/mega/meg2_5.svg");
        } else if (param.target.id == "meg2_6") {
            $("#meg2_6").attr("src", "images/mega/meg2_6.svg");
        } else if (param.target.id == "meg2_7") {
            $("#meg2_7").attr("src", "images/mega/meg2_7.svg");
        } else if (param.target.id == "meg2_8") {
            $("#meg2_8").attr("src", "images/mega/meg2_8.svg");
        } else if (param.target.id == "meg3_1") {
            $("#meg3_1").attr("src", "images/mega/meg3_1.svg");
        } else if (param.target.id == "meg3_2") {
            $("#meg3_2").attr("src", "images/mega/meg3_2.svg");
        } else if (param.target.id == "meg3_3") {
            $("#meg3_3").attr("src", "images/mega/meg3_3.svg");
        } else if (param.target.id == "meg3_4") {
            $("#meg3_4").attr("src", "images/mega/meg3_4.svg");
        } else if (param.target.id == "meg3_5") {
            $("#meg3_5").attr("src", "images/mega/meg3_5.svg");
        } else if (param.target.id == "meg3_6") {
            $("#meg3_6").attr("src", "images/mega/meg3_6.svg");
        } else if (param.target.id == "meg3_7") {
            $("#meg3_7").attr("src", "images/mega/meg3_7.svg");
        } else if (param.target.id == "meg3_8") {
            $("#meg3_8").attr("src", "images/mega/meg3_8.svg");
        } else if (param.target.id == "meg3_9") {
            $("#meg3_9").attr("src", "images/mega/meg3_9.svg");
        }
    }

    function decolor(param) {
        if (param.target.id == "meg1_1") {
            $("#meg1_1").attr("src", "images/mega/bn/megbn1_1.svg");
        } else if (param.target.id == "meg1_2") {
            $("#meg1_2").attr("src", "images/mega/bn/megbn1_2.svg");
        } else if (param.target.id == "meg1_3") {
            $("#meg1_3").attr("src", "images/mega/bn/megbn1_3.svg");
        } else if (param.target.id == "meg1_4") {
            $("#meg1_4").attr("src", "images/mega/bn/megbn1_4.svg");
        } else if (param.target.id == "meg1_5") {
            $("#meg1_5").attr("src", "images/mega/bn/megbn1_5.svg");
        } else if (param.target.id == "meg1_6") {
            $("#meg1_6").attr("src", "images/mega/bn/megbn1_6.svg");
        } else if (param.target.id == "meg1_7") {
            $("#meg1_7").attr("src", "images/mega/bn/megbn1_7.svg");
        } else if (param.target.id == "meg2_1") {
            $("#meg2_1").attr("src", "images/mega/bn/megbn2_1.svg");
        } else if (param.target.id == "meg2_2") {
            $("#meg2_2").attr("src", "images/mega/bn/megbn2_2.svg");
        } else if (param.target.id == "meg2_3") {
            $("#meg2_3").attr("src", "images/mega/bn/megbn2_3.svg");
        } else if (param.target.id == "meg2_4") {
            $("#meg2_4").attr("src", "images/mega/bn/megbn2_4.svg");
        } else if (param.target.id == "meg2_5") {
            $("#meg2_5").attr("src", "images/mega/bn/megbn2_5.svg");
        } else if (param.target.id == "meg2_6") {
            $("#meg2_6").attr("src", "images/mega/bn/megbn2_6.svg");
        } else if (param.target.id == "meg2_7") {
            $("#meg2_7").attr("src", "images/mega/bn/megbn2_7.svg");
        } else if (param.target.id == "meg2_8") {
            $("#meg2_8").attr("src", "images/mega/bn/megbn2_8.svg");
        } else if (param.target.id == "meg3_1") {
            $("#meg3_1").attr("src", "images/mega/bn/megbn3_1.svg");
        } else if (param.target.id == "meg3_2") {
            $("#meg3_2").attr("src", "images/mega/bn/megbn3_2.svg");
        } else if (param.target.id == "meg3_3") {
            $("#meg3_3").attr("src", "images/mega/bn/megbn3_3.svg");
        } else if (param.target.id == "meg3_4") {
            $("#meg3_4").attr("src", "images/mega/bn/megbn3_4.svg");
        } else if (param.target.id == "meg3_5") {
            $("#meg3_5").attr("src", "images/mega/bn/megbn3_5.svg");
        } else if (param.target.id == "meg3_6") {
            $("#meg3_6").attr("src", "images/mega/bn/megbn3_6.svg");
        } else if (param.target.id == "meg3_7") {
            $("#meg3_7").attr("src", "images/mega/bn/megbn3_7.svg");
        } else if (param.target.id == "meg3_8") {
            $("#meg3_8").attr("src", "images/mega/bn/megbn3_8.svg");
        } else if (param.target.id == "meg3_9") {
            $("#meg3_9").attr("src", "images/mega/bn/megbn3_9.svg");
        }
    }


    var but1 = document.getElementById("but1");
    but1.addEventListener("click", reMega1, false);
    var but2 = document.getElementById("but2");
    but2.addEventListener("click", reMega2, false);
    var but3 = document.getElementById("but3");
    but3.addEventListener("click", reMega3, false);
    var but4 = document.getElementById("but4");
    but4.addEventListener("click", reMega4, false);
    var res = document.getElementById("res");
    res.addEventListener("click", reset, false);

    function reMega1() {
        $(".meg1").removeClass("hide");
        $(".meg2").addClass("hide");
        $(".meg3").addClass("hide");
        $(".meg4").addClass("hide");
        $("#meg1_5").attr("src", "images/mega/meg1_5.svg");
        $("#meg1_1").attr("src", "images/mega/meg1_1.svg");
        $("#meg1_2").attr("src", "images/mega/meg1_2.svg");
        $("#meg1_3").attr("src", "images/mega/meg1_3.svg");
        $("#meg1_4").attr("src", "images/mega/meg1_4.svg");
        $("#meg1_6").attr("src", "images/mega/meg1_6.svg");
    }
    function reMega2() {
        $(".meg2").removeClass("hide");
        $(".meg1").addClass("hide");
        $(".meg3").addClass("hide");
        $(".meg4").addClass("hide");
        $("#meg2_3").attr("src", "images/mega/meg2_3.svg");
        $("#meg2_4").attr("src", "images/mega/meg2_4.svg");
        $("#meg2_5").attr("src", "images/mega/meg2_5.svg");
        $("#meg2_6").attr("src", "images/mega/meg2_6.svg");
        $("#meg2_7").attr("src", "images/mega/meg2_7.svg");
        $("#meg2_2").attr("src", "images/mega/meg2_2.svg");
        $("#meg2_8").attr("src", "images/mega/meg2_8.svg");
    }
    function reMega3() {
        $(".meg3").removeClass("hide");
        $(".meg2").addClass("hide");
        $(".meg1").addClass("hide");
        $(".meg4").addClass("hide");
        $("#meg3_8").attr("src", "images/mega/meg3_8.svg");
        $("#meg3_4").attr("src", "images/mega/meg3_4.svg");
        $("#meg3_5").attr("src", "images/mega/meg3_5.svg");
        $("#meg3_3").attr("src", "images/mega/meg3_3.svg");
        $("#meg3_1").attr("src", "images/mega/meg3_1.svg");
        $("#meg3_2").attr("src", "images/mega/meg3_2.svg");
    }
    function reMega4() {
        $(".meg4").removeClass("hide");
        $(".meg2").addClass("hide");
        $(".meg1").addClass("hide");
        $(".meg3").addClass("hide");
        $("#meg1_7").attr("src", "images/mega/meg1_7.svg");
        $("#meg2_1").attr("src", "images/mega/meg2_1.svg");
        $("#meg3_6").attr("src", "images/mega/meg3_6.svg");
        $("#meg3_7").attr("src", "images/mega/meg3_7.svg");
        $("#meg3_9").attr("src", "images/mega/meg3_9.svg");
    }
    function reset() {
        $(".meg3").removeClass("hide");
        $(".meg2").removeClass("hide");
        $(".meg1").removeClass("hide");
        $("#meg1_1").attr("src", "images/mega/bn/megbn1_1.svg");
        $("#meg1_2").attr("src", "images/mega/bn/megbn1_2.svg");
        $("#meg1_3").attr("src", "images/mega/bn/megbn1_3.svg");
        $("#meg1_4").attr("src", "images/mega/bn/megbn1_4.svg");
        $("#meg1_5").attr("src", "images/mega/bn/megbn1_5.svg");
        $("#meg1_6").attr("src", "images/mega/bn/megbn1_6.svg");
        $("#meg1_7").attr("src", "images/mega/bn/megbn1_7.svg");
        $("#meg2_1").attr("src", "images/mega/bn/megbn2_1.svg");
        $("#meg2_2").attr("src", "images/mega/bn/megbn2_2.svg");
        $("#meg2_3").attr("src", "images/mega/bn/megbn2_3.svg");
        $("#meg2_4").attr("src", "images/mega/bn/megbn2_4.svg");
        $("#meg2_5").attr("src", "images/mega/bn/megbn2_5.svg");
        $("#meg2_6").attr("src", "images/mega/bn/megbn2_6.svg");
        $("#meg2_7").attr("src", "images/mega/bn/megbn2_7.svg");
        $("#meg2_8").attr("src", "images/mega/bn/megbn2_8.svg");
        $("#meg3_1").attr("src", "images/mega/bn/megbn3_1.svg");
        $("#meg3_2").attr("src", "images/mega/bn/megbn3_2.svg");
        $("#meg3_3").attr("src", "images/mega/bn/megbn3_3.svg");
        $("#meg3_4").attr("src", "images/mega/bn/megbn3_4.svg");
        $("#meg3_5").attr("src", "images/mega/bn/megbn3_5.svg");
        $("#meg3_6").attr("src", "images/mega/bn/megbn3_6.svg");
        $("#meg3_7").attr("src", "images/mega/bn/megbn3_7.svg");
        $("#meg3_8").attr("src", "images/mega/bn/megbn3_8.svg");
        $("#meg3_9").attr("src", "images/mega/bn/megbn3_9.svg");
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
    */

});