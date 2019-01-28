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

    var form = document.getElementById("formA");
    var fAge = form.age;
    var fDni = form.dni;
    var fLett = form.lett;
    var fTl = form.tl;
    var fMail = form.mail;
    var fMail2 = form.mail2;


    form.addEventListener("submit", check);


    function check(param) {
        if (fDni.value != "") {
            var dni = fDni.value + fLett.value;
            var checkDni = /^\d{8}[a-zA-Z]$/;
            var n;
            var l;
            var letter;

            if (checkDni.test(dni) == true) {
                n = dni.substr(0, dni.length - 1);
                l = dni.substr(dni.length - 1, 1);
                n = n % 23;
                letter = 'TRWAGMYFPDXBNJZSQVHLCKE';//---
                letter = letter.substring(n, n + 1);
                if (letter != l.toUpperCase()) {
                    alert('ERROR: La letra del DNI no se corresponde');
                    param.preventDefault();
                } else {
                    return true;
                }
            } else {
                alert('DNI erróneo');
                param.preventDefault();
                return false;
            }
        }
        if (fAge.value != "" || fAge.value < 100 || fAge.value > 18) {
            if (isNaN(fAge.value)) {
                alert("Inserte un formato númerico valido");
                param.preventDefault();
            }
        }
        if (fTl.value != "") {
            if (isNaN(fTl.value) || fTl.value.length != 9) {
                alert("Inserte un teléfono válido");
                param.preventDefault();
            }
        }

        if (fMail.value != "") {
            if (fMail.value != fMail2.value) {
                alert("Los correos no coinciden");
                param.preventDefault();

            } else {
                var cont = fMail.value;
                if (cont.includes("@")) {

                } else {
                    alert("Inserte un correo válido");
                    param.preventDefault();
                }

            }
        }

    }

    $("#provincia").change(function () {
        var prov = $(this).val();
        if (prov == "Alicante") {
            $("#localidad").attr("disabled", false);
            $("#localidad").text("");
            $("#localidad").append("<option value='Benferri'>Benferri</option><option value='Alcoi'>Alcoi</option><option value='Benidorm'>Benidorm</option>");
        } else if (prov == "Castellón") {
            $("#localidad").attr("disabled", false);
            $("#localidad").text("");
            $("#localidad").append("<option value='Jerica'>Jerica</option><option value='Villa-real'>Villa-real</option><option value='Betxí'>Betxí</option>");
        } else if (prov == "Valencia") {
            $("#localidad").attr("disabled", false);
            $("#localidad").text("");
            $("#localidad").append("<option value='Catarrotja'>Catarrotja</option><option value='Albal'>Albal</option><option value='Massanassa'>Massanassa</option>");
        } else if (prov == "elige") {
            $("#localidad").attr("disabled", true);
            $("#localidad").text("");
        }
    });

    if (oCorreo.value != oCorreo2.value) {
        oCorreo2.focus();
    }

});