var html = document.getElementById("html")
var pag = document.getElementById("pag")

function coordNav(event) {
    document.getElementById("mouse").style.backgroundColor = "rgb(255, 171, 0)";
    document.getElementById("teclado").style.backgroundColor = "rgb(255, 171, 0)";
    var coordenadaX = event.clientX;
    var coordenadaY = event.clientY;
    document.getElementById("nave").innerHTML = "Navegador [" + coordenadaX + "," + coordenadaY + "] ";
}

function coordPag(event) {
    var coordenadaX = event.pageX;
    var coordenadaY = event.pageY;
    document.getElementById("pag").innerHTML = "Pagina [" + coordenadaX + "," + coordenadaY + "] ";
}


function letra(event) {
    document.getElementById("teclado").style.backgroundColor = "#CCE6FF";
    var x = event.which || event.keycode;
    document.getElementById("cod").innerHTML = "Codigo [" + x + "]";
    var y = String.fromCharCode(x);
    document.getElementById("car").innerHTML = "Codigo [" + y + "]";
}

function backM(event) {
    document.getElementById("mouse").style.backgroundColor = "#FFFFCC";
    var coordenadaX = event.clientX;
    var coordenadaY = event.clientY;
    var size = tamanoVentanaNavegador();
    var pos = "";
    if (coordenadaX > (size[0] / 2) && coordenadaY > (size[1] / 2)) {
        pos = " Derecha abajo";
    } else if (coordenadaX < (size[0] / 2) && coordenadaY > (size[1] / 2)) {
        pos = "Izquierda abajo";
    } else if (coordenadaX < (size[0] / 2) && coordenadaY < (size[1] / 2)) {
        pos = "Izquierda arriba";
    } else if (coordenadaX > (size[0] / 2) && coordenadaY < (size[1] / 2)) {
        pos = "Derecha arriba";
    }
    document.getElementById("pos").innerHTML = pos;
}

function tamanoVentanaNavegador() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var size = [w, h];
    return size;
}



onmousemove = coordNav;
html.onmousemove = coordPag;
onkeypress = letra;
onclick = backM;