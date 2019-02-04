$(function () {

    var tim;//creo una variable en la que almacenare el setinterval
    var win = false;//creo una variable que determine si el puzzle ha sido completado
    var first = true; //creo una variable que determine si es la primera vez que ejecuto el codigo
    var set = false;//creo una variable que indique si el interval esta creado
    var completed = ["no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no"];//creo un array que indique si cada imagen esta en posicion correcta

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
        set = true;//indico que el intervalo ha sido creado
        h = 0;//reseteo a 0 las horas
        m = 0;//reseteo a 0 los minutos
        s = 0;//reseteo a 0 los segundos
        ms = 0;//reseteo a 0 los milisegundos
        tim = setInterval(function () { //establezco un intervalo que ejecute una funcion
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

    var moves = 0;//creo una variable que indique el numero de movimientos
    var comod = 1;//creo una variable que indique el numero de comodines
    var CurrentPuzzle = "";//creo una variable que guarde el puzzle seleccionado

    function adyacente(x, y, eX, eY) {//creo una funcion que determine si una celda es adyacente a otra

        if (x == eX && y == eY - 1) {//si la posicion x coincide y la posicion y se diferencia de 1
            return true;//devuelvo true
        }

        if (x == eX && eY == y - 1) {//si la posicion x coincide y la posicion y se diferencia de 1
            return true;//devuelvo true
        }
        if (y == eY && x == eX - 1) {//si la posicion y coincide y la posicion x se diferencia de 1
            return true;//devuelvo true
        }
        if (y == eY && eX == x - 1) {//si la posicion y coincide y la posicion x se diferencia de 1
            return true;//devuelvo true
        }
        return false;//devuelvo false

    }

    $("#help").on("click", function helper() {//creo una funcion para mostrar/ocultar la ayuda del puzzle
        var letter = $("#cell1_1 img").attr("src");//almaceno el src de una imagen de la tabla
        letter = letter.split('');//lo transformo en un array
        letter = letter[4];//almaceno el caracter deseado
        if (first == true) {//si es la primera vez que ejecuto el codigo
            $('<img id="helpImg" src="img/' + letter + '.png">').insertAfter('#showTable');//inserto la imagen de ayuda
            first = false;//cambio la variable a false para indicar que ya no es la primera vez que ejecuto el codigo
        } else {//si no
            $("#helpImg").attr("src", 'img/' + letter + '.png');//cambio el atributo por la imagen del puzzle actual
            $("#helpImg").toggleClass("hider");//le hago un toggle para que pueda mostrar/ocultar la imagen
        }
    });

    $("#pause").on("click", function timePause() {//creo una variable para pausar el contador
        if (set == true) {//si el interval esta creado
            clearInterval(tim);//elimino el intervalo
            $("#tablPuzz").hide();//escondo la tabla para que el jugador no haga trampas
            win = true;//hago creer que el puzzle ha sido completado para que mientras esta pausado no se puedan realizar movimientos
            set = false;//indico que el intervalo se ha eliminado
        } else {//si no
            tim = setInterval(function () { //establezco un intervalo que ejecute una funcion
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
            set = true;//indico que el intervalo se ha creado
            win = false;//hago creer que el puzzle no ha sido completado para que puedar retomar el juego
            $("#tablPuzz").show();//vuelvo a mostrar la tabla
        }
    });

    $("#help").hide();//escondo el boton de ayuda

    $("#pause").hide();//escondo el boton de pausa

    $("#content").append('<table id="showTable"><tr><th>Nivel 1</th><th>Nivel 2</th></tr><tr><td><img id="W" class="show" src="img/W.png"></td><td><img id="Q" class="show" src="img/Q.png"></td><tr><th>Nivel 3</th><th>Nivel 4</th></tr></tr><tr><td><img id="D" class="show" src="img/D.png"></td><td><img id="K" class="show" src="img/K.png"></td></tr></table>');//añado la tabla para seleccionar los puzzles

    $("#content").append('<table id="tablPuzz"></table>');//creo una tabla en el div con la id content

    $("#generator").on("click", function gene() {//establezco una funcion que se ejecuto cuando haga click en el botton de id generator
        //if (first == true) {//creo una condicion que filtre si es la primera vez que se ejecuta el codigo
        $("#showTable").append('<tr><th colspan="2" border="1px solid black">Pulsa en las imagenes para elegir el puzzle</th></tr>');//añado indicaciones a la tabla que selecciona el puzzle
        //timeRestart();//llamo a la funcion que inicia el contador
        //moves = 0;
        $('.moves').text("Movimientos: " + moves);//Muestro los movimientos por pantalla
        var pos = ["1_1", "1_2", "1_3", "1_4", "2_1", "2_2", "2_3", "2_4", "3_1", "3_2", "3_3", "3_4", "4_1", "4_2", "4_3", "4_4",];//creo un array con las posiciones de las imagenes
        shuffle(pos);//llamo a la funcion que desordena el array
        var count = 1;//inicio una variable para usarla como contador
        for (var i = 1; i < 5; i++) {//inicio un bucle para generar las filas de la tabla
            $("#tablPuzz").append('<tr id="row' + i + '"></tr>');//creo la fila de la tabla
            for (var u = 1; u < 5; u++) {//inicio un bucle para generar las columnas de la tabla
                $("#row" + i).append('<th id="cell' + i + '_' + u + '"><img src="img/N.png" id="c' + pos[count - 1] + '" class="empt"></td>');//remplazo la ultima posicion de la tabla por una imagen neutra y le añado la clase empt
                count++;//incremento el contador
            }
        }
        var showImg = document.querySelectorAll("td img");//selecciono las imagenes que esten dentro de un td en un array
        for (var i = 0; i < showImg.length; i++) {//creo un bucle que recorra el array de imagenes
            showImg[i].addEventListener("click", setPuzzle, false);//añado un addeventlistener por cada imagen
        }

        var images = document.querySelectorAll("th img");//selecciono las imagenes que esten dentro de un th  creadas en un array
        for (var i = 0; i < images.length; i++) {//creo un bucle que recorra el array de imagenes
            images[i].addEventListener("click", replaceIM, false);//añado un addeventlistener por cada imagen
            images[i].addEventListener("dblclick", como, false);//añado un addeventlistener por cada imagen
        }
        $("#generator").hide();//oculto el boton que genera la tabla

        function regenerateTable(param) {//creo una funcion que genera la tabla con el puzzle indicado
            if (win == false) {//si el juego no ha sido completado
                $("#helpImg").addClass("hider");//escondo la imagen de ayuda en caso de que se muestre
                timeRestart();//reinicio el contador
                moves = 0;//reinicio el contador de movimientos a 0
                comod = 1;//reinicio el contador de comodines a 3
                $("#help").show();//muestro el boton de ayuda
                $("#pause").show();//muestro el boton de pausa
                $('.moves').text("Movimientos: " + moves);//reinicio los movimientos
                $('.comodin').text("Comodin: " + comod + " (Para gastar un comodin haz dobleclik en la imagen deseada)");//reinicio los comodines
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
                            $("#cell" + i + "_" + u + " img").attr("src", "img/" + param + "-" + pos[count - 1] + ".png");//remplazo la tabla con las imagenes randomizadas
                            $("#cell" + i + "_" + u + " img").attr("id", 'c' + pos[count - 1] + '');//les asigno la id correspondiente
                        }
                        count++;//incremento el contador
                    }
                }
            }
        }

        function setPuzzle() {//creo una funcion para que sepa que puzzle he seleccionado
            var selec = $("#" + this.id).attr("src");//almaceno el src de una imagen de la tabla
            var arselec = selec.split('');//lo transformo en un array
            var lett = arselec[4];//almaceno el caracter deseado
            if (lett == "W") {//si el caracter equivale a W
                CurrentPuzzle = "W";//almaceno la W
            } else if (lett == "K") {//si el caracter equivale a K
                CurrentPuzzle = "K";//almaceno la K
            } else if (lett == "D") {//si el caracter equivale a D
                CurrentPuzzle = "D";//almaceno la D
            } else if (lett == "Q") {//si el caracter equivale a Q
                CurrentPuzzle = "Q";//almaceno la Q
            }
            regenerateTable(CurrentPuzzle);//llamo a la funcion que genera la tabla indicandole el puzzle correspondiente
        }

        function compruebaCompletado() {//creo una funcion que compruebe si el puzzle se ha completado
            var contComp = 0;//creo un contador para que recorra la tabla
            for (var u = 1; u < 5; u++) {//creo un bucle que recorra las filas
                for (var w = 1; w < 5; w++) {//creo un bucle que recorra las columnas
                    var cellID = $("#c" + u + "_" + w).parent().attr("id");//almaceno la id del padre de la imagen
                    cellID = cellID.split('');//la transformo en un array
                    cellID = cellID[4] + cellID[5] + cellID[6];//almaceno los caracteres que indican la posicion
                    var imgID = $("#c" + u + "_" + w).attr("id");//almaceno al id de la imagen
                    imgID = imgID.split('');//la transformo en un array
                    imgID = imgID[1] + imgID[2] + imgID[3];//almaceno los caracteres que indican la posicion
                    if (cellID == imgID) {//si la id de la celda y la id de la imagen coinciden
                        completed[contComp] = "yes";//le indico que esa celda esta en la posicion correcta al array de posiciones
                    } else {//si no
                        completed[contComp] = "no";//le indico que no esta en la posicion correcta
                    }
                    contComp++;//incremento el contador
                }
            }
            if (completed[0] == "yes" && completed[1] == "yes" && completed[2] == "yes" && completed[3] == "yes" && completed[4] == "yes" && completed[5] == "yes" && completed[6] == "yes" && completed[7] == "yes" && completed[8] == "yes" && completed[9] == "yes" && completed[10] == "yes" && completed[11] == "yes" && completed[12] == "yes" && completed[13] == "yes" && completed[14] == "yes" && completed[15] == "yes") {//creo una condicion que compruebe si todas las posiciones estan bien
                clearInterval(tim);//limpio el intervalo
                win = true;//pongo la variable que indica si he ganado a true
                alert("Enhorabuena, has copmpletado el puzzle en " + moves + " movimientos.\nY has tardado: " + h + " horas, " + m + " minutos y " + s + " segundos");//hago un alert indicando el resultado
            }
        }

        function como() {//creo una funcion para gestionar los comodines
            if (win == false) {//si el puzzle no se ha resuelto
                if ($("#" + this.id).attr("class") != "empt") {//si hago dobleclick sobre la celda y no es la celda vacia
                    if (comod != 0) {//si los comodines llegan a 0
                        var id = this.id;//almaceno la id
                        var empId = $(".empt").attr("id");//almaceno la id del padre
                        var arPos = id.split('');//lo almaceno en forma de array
                        var posit = arPos[1] + arPos[2] + arPos[3];//guardo los caracteres que me indican la posicion

                        $("#" + id).addClass("temp");//añado una clase temporal a la imagen seleccionada

                        $(".empt").attr("src", "img/" + CurrentPuzzle + "-" + posit + ".png");//le remplazo el src por el de la imagen deseada
                        $(".empt").attr("id", id);//le cambio la id
                        $(".empt").removeClass("empt");//le quito la clase que indica que esta vacio

                        $(".temp").attr("src", "img/N.png");//le remplazo el src por el de la imagen deseada
                        $(".temp").addClass("empt");//le añado la clase que indica que esta vacio
                        $(".temp").attr("id", empId);//le cambio la id

                        $(".temp").removeClass("temp");//elimino la clase temp de quien la tenga
                        moves++;//incremento los movimientos
                        $('.moves').text("Movimientos: " + moves);//actualizo los movimientos
                        comod--;//resto un comodin
                        $('.comodin').text("Comodin: " + comod);//actualizo el comodin

                        compruebaCompletado();//llamo a la funciona para comprobar si se ha completado el puzzle

                    } else {//si no
                        alert("No te quedan comodines");//aviso de que no qeudan comodines
                    }
                }
            }
        }

        function replaceIM() {//creo una funcion que permite remplazar imagenes como el puzzle requiere
            if (win == false) {//si el puzzle no se ha resuelto
                var pId = $("#" + this.id).parent().attr("id");//almaceno la id del padre
                var id = this.id;//almaceno la id
                var empId = $(".empt").attr("id");//almaceno la id de la celda vacia
                var empPPId = $(".empt").parent().attr("id");//almaceno la id del padre de la celda vacia

                var arPPos = pId.split('');//convierto la id del padre de la imagen en array
                var xPId = arPPos[6];//alamceno la coordenada x
                var yPId = arPPos[4];//alamceno la coordenada y

                var arPEmPos = empPPId.split('');//convierto la id del padre de la celda vacia en array
                var xEmPId = arPEmPos[6];//alamceno la coordenada x
                var yEmPId = arPEmPos[4];//alamceno la coordenada y

                var arPos = id.split('');//convierto la id de la imagen en array
                var posit = arPos[1] + arPos[2] + arPos[3];//guardo los caracteres que me indican la posicion

                if (adyacente(xPId, yPId, xEmPId, yEmPId) == true) {//llamo la funcion que me indica si una celda es adyacente a otra segun sus coordenadas
                    $("#" + id).addClass("temp");//añado una clase temporal a la imagen seleccionada

                    $(".empt").attr("src", "img/" + CurrentPuzzle + "-" + posit + ".png");//le remplazo el src por el de la imagen deseada
                    $(".empt").attr("id", id);//le cambio la id
                    $(".empt").removeClass("empt");//le quito la clase que indica que esta vacio

                    $(".temp").attr("src", "img/N.png");//le remplazo el src por el de la imagen deseada
                    $(".temp").addClass("empt");//le añado la clase que indica que esta vacio
                    $(".temp").attr("id", empId);//le cambio la id

                    $(".temp").removeClass("temp");//elimino la clase temp de quien la tenga
                    moves++;//incremento los movimientos
                    $('.moves').text("Movimientos: " + moves);//actualizo los movimientos
                } else {//si no
                    $("#" + id).fadeOut(150);//añado un efecto de fadeOut para indicar que la imagen no puede ser deplazada
                    $("#" + id).fadeIn(150);//añado un efecto de fadeIn para indicar que la imagen no puede ser deplazada
                }
                compruebaCompletado();//compruebo si el puzzle se ha completado
            }
        }
    });

});