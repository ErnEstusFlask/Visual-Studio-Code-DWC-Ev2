var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

var but1 = document.getElementById("but1");
var but2 = document.getElementById("but2");
var but3 = document.getElementById("but3");


but1.onclick = function(e){
    alert("Click en boton 1");
}

but2.onmouseover = function(e){
    text2.value="Raton encima de boton 2"
}
but2.onmouseout = function(e){
    text2.value="";
}

but3.onclick = function(e){
    var rand=Math.floor(Math.random() * 3);
    switch(rand){
        case 0:
        document.getElementById("color").style.backgroundColor="white";
        break;

        case 1:
        document.getElementById("color").style.backgroundColor="black";
        break;

        case 2:
        document.getElementById("color").style.backgroundColor="crimson";
        break;
    }
}

but4.ondblclick = function(e){
    alert("Doblelick en boton 3");
}