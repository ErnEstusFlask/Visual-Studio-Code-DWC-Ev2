$(function () {
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
});