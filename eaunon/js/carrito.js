$(document).ready(function () {

    var cont = document.getElementById("cont");
    cont.addEventListener("click", incrementa, false);
    var contad = $("#cont").html();
    contad = parseInt(contad);

    function incrementa() {
        contad++;
        $("a").html(contad);
    }

});