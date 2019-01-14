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

    /*
        $(".item").each("dblclick", comprar_articulo, false);
    */

    function comprar_articulo() {
        var itId = ("#" + this.id);
        if ($(itId).children(".stock").text() != "Stock 0") {
            var stock = $(itId).children(".stock").text();
            stock = stock.split(" ");
            stock = parseInt(stock[1]) - 1;
            $(itId).children(".stock").text("Stock " + stock);
            var $delete = $('<a class="delete"></a>');
            var contIt = parseInt($("#citem").val());
            $("#citem").attr("value", contIt + 1);
            if (stock == 0) {
                $(itId).children(".stock").addClass("agotado");
            }
            var price = $(itId).children(".price").text();
            price = price.split(" ");
            price = parseInt(price[0]);
            var contPric = parseInt($("#cprice").val());
            $("#cprice").attr("value", contPric + price + " €");
            $(itId).clone().prependTo("#cart_items").attr("id", "c" + this.id).attr("class", "icart").children(".stock").hide();
            $(".icart").children().andSelf().css("cursor", "default");

            var pId = "#c" + this.id;
            $(pId).prepend($delete);

            $delete.on("click", function () {
                $(itId).children(".stock").removeClass("agotado");
                var stockY = $(itId).children(".stock").text();
                stockY = stockY.split(" ");
                stockY = parseInt(stockY[1]);
                $(itId).children(".stock").text("Stock " + (parseInt(stockY) + 1));
                $(pId).remove();
                var itemsC = document.querySelectorAll(".icart");
                var totIt = itemsC.length;

                $("#citem").attr("value", totIt);

                var reprice = $(itId).children(".price").text();
                reprice = reprice.split(" ");
                reprice = parseInt(reprice[0]);
                var recontPric = parseInt($("#cprice").val());
                $("#cprice").attr("value", recontPric - reprice + " €");
            });

            $("btn_clear").clicks(function () {
                alert("asdas");
                btnVac.trigger("click", function () {
                    $(itId).children(".stock").removeClass("agotado");
                    var stockY = $(itId).children(".stock").text();
                    stockY = stockY.split(" ");
                    stockY = parseInt(stockY[1]);
                    $(itId).children(".stock").text("Stock " + (parseInt(stockY) + 1));
                    $(pId).remove();
                    var itemsC = document.querySelectorAll(".icart");
                    var totIt = itemsC.length;

                    $("#citem").attr("value", totIt);

                    var reprice = $(itId).children(".price").text();
                    reprice = reprice.split(" ");
                    reprice = parseInt(reprice[0]);
                    var recontPric = parseInt($("#cprice").val());
                    $("#cprice").attr("value", recontPric - reprice + " €");
                });
            });
        }
    }

});