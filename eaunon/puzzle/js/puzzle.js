$(function () {
    /*
        Realización de un juego de un puzzle con ayuda de lo visto en clase. 

        ⦁    No se podrá utilizar las etiquetas <avg> ni <canvas>.

        ⦁    En el archivo .html únicamente estarán:

            1.    los botones

            2.    las etiquetas del reloj 

            3.    las etiquetas del contador de movimientos.

        ⦁     El recorte de las imágenes se podrá realizar con alguna herramienta online.

        -Aparición de una tabla de 4x4 al pulsar un botón, gestionada por javascript.

        -Los trozos de imágenes deben aparecer ordenados en cada una de las celdas haciendo uso de javascript y JQuery.

        -Los trozos de imágenes tienen que ser de 95px X 95px

        -Los trozos de imágenes deben aparecer desordenados aleatoriamente en cada una de las celdas haciendo uso de javascript y jquery.

        -Cuando comienza el juego, una de las casillas no deberá contener imagen o si la contiene esta será del color de fondo  y no tiene que ser necesariamente la misma en todos los inicios (ni la misma imagen ni la misma posición en la tabla).

        -Al pulsar sobre cada una de las imágenes, estas tienen que devolver el identificador de la imagen, del sitio en el que están y del sitio al que tienen que ir.(eventualmente para posteriormente poder trabajar con ello)

        -Al pulsar sobre una imagen, esta tiene que desaparecer dejando el hueco y aparecer en el hueco que estaba vacío.

        -<0>-Realización de un cronómetro que al pulsar sobre la tecla de Jugar se inicie el contador mostrándonos los minutos y segundos transcurridos.

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

    var first = true; //creo una variable que determine si es la primera vez que ejecuto el codigo

    function shuffle(a) {//inicio una funcion que me permite desordenar arrays
        var j, x, i;//creo varaibles para la funcion
        for (i = a.length - 1; i > 0; i--) {//creo un bucle for para que recorra el array
            j = Math.floor(Math.random() * (i + 1));//genero un indice atleatorio y lo almaceno en j
            x = a[i];//almaceno el valor i del array a en x
            a[i] = a[j];//almaceno en i el valor que jay en el indice j
            a[j] = x;//pongo en el indice j el valor que almacene previamente en x
        }
        return a;//devuelvo el array desordenado
    }

    var h = 0;//inicializo una variable para las horas
    var m = 0;//inicializo una variable para los minutos
    var s = 0;//inicializo una variable para los segundos
    var ms = 0;//inicializo una variable para los milisegundos

    function timeRestart() {//creo una variable para reiniciar el contador
        clearInterval(tim);//elimino el intervalo previo
        h = 0;//reseteo a 0 las horas
        m = 0;//reseteo a 0 los minutos
        s = 0;//reseteo a 0 los segundos
        ms = 0;//reseteo a 0 los milisegundos
        var tim = setInterval(function () { //establezco un intervalo que ejecute una funcion
            if (ms == 100) {//creo una condicion que se ejecuta cuando los milisegundos llegan a 100
                s++;//incremento los segundos
                ms = 0;//reinicio los milisegundos a 0
            }
            if (s == 60) {//creo una condicion que se ejecuta cuando los segundos llegan a 60
                m++;//incremento los minutos
                s = 0;//reinicio los segundos a 0
            }
            if (m == 60) {//creo una condicion que se ejecuta cuando los minutos llegan a 60
                h++;//incremento las horas
                m = 0;//reinicio los minutos a 0
            }
            $('.timer').text(h + ":" + m + ":" + s + ":" + ms);//muestro en pantalla las horas minutos segundos y milisegundos en el div de etiqueta timer
            ms++;//incremento los milisegundos
        }, 10);//cierro el setInterval y le digo que se ejecute cada 10 milisegundos
    }

    $("#content").append('<table id="tablPuzz"></table>');//creo una tabla en el div con la id content
    $("#generator").on("click", function gene() {//establezco una funcion que se ejecuto cuando haga click en el botton de id generator
        if (first == true) {//creo una condicion que filtre si es la primera vez que se ejecuta el codigo

            timeRestart();//llamo a la funcion que inicia el contador

            var pos = ["1_1", "1_2", "1_3", "1_4", "2_1", "2_2", "2_3", "2_4", "3_1", "3_2", "3_3", "3_4", "4_1", "4_2", "4_3", "4_4",];//creo un array con las posiciones de las imagenes
            shuffle(pos);//llamo a la funcion que desordena el array
            var count = 1;//inicio una variable para usarla como contador
            for (var i = 1; i < 5; i++) {//inicio un bucle para generar las filas de la tabla
                $("#tablPuzz").append('<tr id="row' + i + '"></tr>');//creo la fila de la tabla
                for (var u = 1; u < 5; u++) {//inicio un bucle para generar las columnas de la tabla
                    if (u == 4 && i == 4) {//creo una condicion para la ultima posicion de la tabla
                        $("#row" + i).append('<td id="cell' + i + '_' + u + '"><img src="img/N.png" id="c' + pos[count - 1] + '" class="empt"></td>');//remplazo la ultima posicion de la tabla por una imagen neutra y le añado la clase empt
                    } else {//para el resto de posiciones
                        $("#row" + i).append('<td id="cell' + i + '_' + u + '"><img src="img/W-' + pos[count - 1] + '.png" id="c' + pos[count - 1] + '"></td>');//relleno la tabla con las imagenes pasandole como src una imagen del array desordenado y guardo en la id del td la posicion y en la id de la imagen la posicion en la que deberia estar la imagen
                    }
                    count++;//incremento el contador
                }
            }
            var images = document.querySelectorAll("img");//selecciono las imagenes creadas en un array
            for (var i = 0; i < images.length; i++) {//creo un bucle que recorra el array de imagenes
                images[i].addEventListener("click", replaceIM, false);//añado un addeventlistener por cada imagen
            }
            first = false;//pongo la variable que me indica si es la primera vez que ejecuto el codigo a false
        } else {//si no es la primera vez que ejecuto el codigo

            timeRestart();//reinicio el contador

            var pos = ["1_1", "1_2", "1_3", "1_4", "2_1", "2_2", "2_3", "2_4", "3_1", "3_2", "3_3", "3_4", "4_1", "4_2", "4_3", "4_4",];//creo un array con las posiciones de las imagenes
            shuffle(pos);//llamo a la funcion que desordena el array
            var count = 1;//inicio una variable para usarla como contador
            $(".empt").removeClass("empt");//vacio todas las posiciones vacias de la clase empt para evitar errores
            for (var i = 1; i < 5; i++) {//inicio un bucle para randomizar las columnas de la tabla
                for (var u = 1; u < 5; u++) {//inicio un bucle para randomizar las filas de la tabla
                    if (u == 4 && i == 4) {//creo una condicion para la ultima posicion de la tabla
                        $("#cell" + i + "_" + u + " img").attr("src", "img/N.png");//remplazo el src de imagen por la imagen neutra
                        $("#cell" + i + "_" + u + " img").attr("id", 'c' + pos[count - 1] + '');//le asigno la id correspondiente
                        $("#cell" + i + "_" + u + " img").attr("class", 'empt');//le añado la clase empt
                    } else {//para el resto de posiciones
                        $("#cell" + i + "_" + u + " img").attr("src", "img/W-" + pos[count - 1] + ".png");//remplazo la tabla con las imagenes randomizadas
                        $("#cell" + i + "_" + u + " img").attr("id", 'c' + pos[count - 1] + '');//les asigno la id correspondiente
                    }
                    count++;//incremento el contador
                }
            }
        }

        function replaceIM() {//creo una funcion que permite remplazar imagenes como el puzzle requiere
            var pId = $("#" + this.id).parent().attr("id");
            var id = this.id;
            var empId = $(".empt").attr("id");
            var arPos = id.split('')
            var posit = arPos[1] + arPos[2] + arPos[3];

            var ids = [pId, id];
            //alert(ids);
            //alert(posit);

            $("#" + id).addClass("temp");

            $(".empt").attr("src", "img/W-" + posit + ".png");
            $(".empt").attr("id", id);
            $(".empt").removeClass("empt");

            $(".temp").attr("src", "img/N.png");
            $(".temp").addClass("empt");
            $(".temp").attr("id", empId);

            $(".temp").removeClass("temp");
            /*
            $("#" + id).attr("src", "img/N.png");
            $(".empt").attr("src", "img/W-" + posit + ".png");
            $(".empt").removeClass("empt");
            $("#" + id).addClass("empt");
            $("#" + id).attr("id", empId);
            $(".empt").attr("id", id);*/
        }
    });

});