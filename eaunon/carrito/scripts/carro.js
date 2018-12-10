$(function () {

    /*
    $(".item").css({ "background-color": "#cecece" });
    $("#cart_items").css({ "border": "4px solid black" });
    $(".item").children("label").css({ "text-decoration": "underline" });
    $("#cart_container").find("button").css({ "color": "red" });
    $(".item").children("label").next("label").andSelf().css({ "color": "white" });
    $(":contains(€)").css({ "color": "green" });
    $("input").css({ "color": "green" });
    $("div:empty").css({ "background-color": "yellow" });
    $(".item").first().css({ "background-color": "red" });
    $(".item").last().css({ "background-color": "red" });

    $("img[src*='camiseta']").css({ "border": "2px solid" });
    //El border lo añado para que se vea el color del mismo
    $("img[src*='camiseta']").css({ "border-color": "green" });
    */

    var items = document.querySelectorAll(".item");
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("dblclick", comprar_articulo, false);
    }

    function comprar_articulo() {
        if ($("#" + this.id).children(".stock").text() != "Stock 0") {
            var stock = $("#" + this.id).children(".stock").text();
            stock = stock.split(" ");
            stock = parseInt(stock[1]) - 1;
            $("#" + this.id).children(".stock").text("Stock " + stock);
            if (stock == 0) {
                $("#" + this.id).children(".stock").addClass("agotado");
            } else {
                var contIt = parseInt($("#citem").val());
                $("#citem").attr("value", contIt + 1);

                var price = $("#" + this.id).children(".price").text();
                price = price.split(" ");
                price = parseInt(price[0]);
                var contPric = parseInt($("#cprice").val());
                $("#cprice").attr("value", contPric + price + " €");
            }

        }
    }
});