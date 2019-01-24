$(function () {
    /*
    
    Realiza una página que contenga un formulario de inscripción como el que figura en la imagen (no hace falta que sea idéntico).
    
    En este se comprobará los datos obligatorios (con *) al abandonar el foco, marcándo los bordes en rojo en caso de estar vacio.
    Cuando se pulse al botón "enviar" se comprobará (si el campo esta cumplimentado) que el DNI corresponde con la letra.
    Cuando se pierda el foco del teléfono, se comprobará que el teléfono es correcto (tiene 9 cifras).
    Se comprobará que el correo electrónico se escribió correctamente
    cuando pierda el foco del segundo campo, que en los dos campos se escribió igual.
    Cuando se envie el formulario que el correo lleva una @.
    Al seleccionar la Provincia (Alicante, Castellón, Valencia) se mostrarán las localidades correspondientes en la select localidad.(Si seleccionamos Valencia que aparezcan Requena, Quart de Poblet, Alboraia, etc. Si seleccionamos Castellón, que aparezca Villareal, Oropesa y Peñiscola, por ejemplo). 
    Debe haber un botón que hace que el formulario se reinicie.
    En el caso de que esté todo correcto, en la barra de direcciones tendrán que aparecer los datos enviados, pero si hay algún error de cumplimentación NO.*/

    var text = document.querySelectorAll(".obl")

    for (var i = 0; i < text.length; i++) {
        text[i].addEventListener("blur", function () {
            alert("gfasd");
            $("#" + this.id).attr("border", "solid 1px red");
        });
    }

    $("#provincia").change(function () {
        alert($(this).val());
    })


});