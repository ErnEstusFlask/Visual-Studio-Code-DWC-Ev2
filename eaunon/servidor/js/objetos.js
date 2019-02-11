var aInt = new Array();
for(var i=0;i<100;i++){
    aInt[i]=parseInt(Math.random()*100);
    
}
aInt.sort();
var cont=0;
document.write("<table border=1>");
for(var i=0;i<10&&cont<100;i++){
    document.write("<tr>");
    for(var u=0;u<10&&cont<100;u++){
        document.write("<td>"+aInt[cont]+"</td>");
        cont++;
    }
    document.write("</tr>");
}
document.write("</table");
