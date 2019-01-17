$(function () {
    /*
        Realización de un juego de un puzzle con ayuda de lo visto en clase. 

        ⦁    No se podrá utilizar las etiquetas <avg> ni <canvas>.

        ⦁    En el archivo .html únicamente estarán:

            1.    los botones

            2.    las etiquetas del reloj 

            3.    las etiquetas del contador de movimientos.

        ⦁     El recorte de las imágenes se podrá realizar con alguna herramienta online.

        Aparición de una tabla de 4x4 al pulsar un botón, gestionada por javascript.

        Los trozos de imágenes deben aparecer ordenados en cada una de las celdas haciendo uso de javascript y JQuery.

        Los trozos de imágenes tienen que ser de 95px X 95px

        Los trozos de imágenes deben aparecer desordenados aleatoriamente en cada una de las celdas haciendo uso de javascript y jquery.

        Cuando comienza el juego, una de las casillas no deberá contener imagen o si la contiene esta será del color de fondo  y no tiene que ser necesariamente la misma en todos los inicios (ni la misma imagen ni la misma posición en la tabla).

        Al pulsar sobre cada una de las imágenes, estas tienen que devolver el identificador de la imagen, del sitio en el que están y del sitio al que tienen que ir.(eventualmente para posteriormente poder trabajar con ello)

        Al pulsar sobre una imagen, esta tiene que desaparecer dejando el hueco y aparecer en el hueco que estaba vacío.

        Realización de un cronómetro que al pulsar sobre la tecla de Jugar se inicie el contador mostrándonos los minutos y segundos transcurridos.

        Solamente las imágenes que tienen un lado en común con el hueco vacío podrán ser desplazadas a ese hueco, el resto no.

        Cuando se pulse una imagen que no puede ser desplazada al hueco vacío debe haber un cambio de estilo que nos haga entender que esa imagen no puede ser movida, reestableciéndose al cabo de los segundos al estado anterior.

        Incluiremos un contador de movimientos que solamente funcione cuando se haya hecho un movimiento correcto.

        Añadiremos 4 botones en los que el usuario podrá elegir 4 imágenes o temáticas diferentes. Cuando se pulse estos botones, el tiempo del reloj se parará. (Al pulsar el botón de inicio de juego esta imagen se desordenará para poder jugar). Uno de ellos tiene que ser fácil de resolver, con números, indicando la posición en la que debe estar(para su fácil corrección).

        Añadiremos una función de ayuda, donde daremos la opción de gastar un comodín al usuario que le permita desplazar una imagen aunque esta no sea adyacente. (Por ejemplo: al hacer doble click en una imagen si el contador de comodines sigue en 1, te permite hacer el cambio, si no, te indica que no es posible).

        Incluiremos una imagen en miniatura a modo ejemplo del puzzle que estamos realizando. Habrá un botón para que el usuario oculte la ayuda o la muestre cuando lo desee.

        Cuando completamos el juego porque todas las imágenes están en su lugar correspondiente, debe pararse el tiempo y bloquearse los movimientos del juego.

        Aparecerá una pantalla emergente que debe indicarnos cuánto tiempo hemos tardado y los movimientos que hemos realizado, felicitándonos por haberlo conseguido.

        Comentamos TODO el código javascript explicando qué hace cada línea.

        Comprobar que en la consola no aparecen mensajes de error. Si es así, hay que corregirlos.

        Comprobar que, con distintos navegadores, la página se ejecuta correctamente.

        Solucionar, delante del profesor, el juego en menos de 500 pasos.
    */
    var first = true;

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    $("#content").append('<table id="tablPuzz"></table>');
    $("#generator").on("click", function gene() {
        if (first == true) {
            var pos = ["1_1", "1_2", "1_3", "1_4", "2_1", "2_2", "2_3", "2_4", "3_1", "3_2", "3_3", "3_4", "4_1", "4_2", "4_3", "4_4",];
            shuffle(pos);
            var count = 1;
            for (var i = 1; i < 5; i++) {
                $("#tablPuzz").append('<tr id="row' + i + '"></tr>');
                for (var u = 1; u < 5; u++) {
                    if (u == 4 && i == 4) {
                        $("#row" + i).append('<td id="cell' + i + '_' + u + '"><img src="img/N.png" id="c' + pos[count - 1] + '"></td>');
                    } else {
                        $("#row" + i).append('<td id="cell' + i + '_' + u + '"><img src="img/W-' + pos[count - 1] + '.png" id="c' + pos[count - 1] + '"></td>');
                    }
                    count++;
                }
            }
            first = false;
        } else {
            var pos = ["1_1", "1_2", "1_3", "1_4", "2_1", "2_2", "2_3", "2_4", "3_1", "3_2", "3_3", "3_4", "4_1", "4_2", "4_3", "4_4",];
            shuffle(pos);
            var count = 1;
            for (var i = 1; i < 5; i++) {
                for (var u = 1; u < 5; u++) {
                    if (u == 4 && i == 4) {
                        $("#cell" + i + "_" + u + " img").attr("src", "img/N.png");
                        $("#cell" + i + "_" + u + " img").attr("id", 'c' + pos[count - 1] + '');
                    } else {
                        $("#cell" + i + "_" + u + " img").attr("src", "img/W-" + pos[count - 1] + ".png");
                        $("#cell" + i + "_" + u + " img").attr("id", 'c' + pos[count - 1] + '');
                    }
                    count++;
                }
            }
        }
        var images = document.querySelectorAll("img");
        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener("click", replaceIM, false);
        }

        function replaceIM() {
            var ids = [this.id, $(this.id).parent().attr("id")];
            alert(ids);
        }
    });

});