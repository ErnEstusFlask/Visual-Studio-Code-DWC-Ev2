$(function () {
    $("#loader1").on("click", function () {
        $("#dumper").load("page1.html");
    });
    $("#loader2").on("click", function () {
        $("#dumper").load("page2.html");
    });
    $("#loader3").on("click", function () {
        $("#dumper").load("page3.html");
    });

    $('#formAjax').submit(function (e) {
        e.preventDefault();
        var data = {
            dni: $('#dni').val()
        }
        $.get('usuarios.php', data, dev_data).fail(function (jqXHR, textStatus, errorThrow) {
            alert('Actualmente no disponemos de este servicio.\nDisculpe las molestias.');
        });
    });
    function dev_data(param) {
        $('#dumper').html('Dni: ' + param.dni);
    }
});