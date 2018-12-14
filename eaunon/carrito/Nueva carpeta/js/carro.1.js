$(function () {
    var articulos=document.querySelectorAll(".item");
    for (var index = 0; index<articulos.length; index++) {
        articulos[index].addEventListener("dblclick", añadir, false);   
    }
});
function añadir(num){
    var stock=$("#"+this.id).children(".stock").text().split(" ");
    if(stock[1]>0){
        var $delete = $('<a href="" class="delete"></a>');
        $("#"+this.id).children(".stock").text("Stock "+(stock[1]-1).toString());
        stock[1]=stock[1]-1;
        $('#citem').val(parseInt($('#citem').val())+1);
        var precio=$("#"+this.id).children(".price").text().split(" ");
        $("#cprice").val(parseInt($("#cprice").val())+parseInt(precio[0])+" €");
        $("#"+this.id).clone().prependTo("#cart_items");
        $("#cart_items").find("#"+this.id).attr("id", "c"+this.id);
        $("#cart_items").find("#c"+this.id).addClass("icart");
        $('#cart_items').find("#c"+this.id).children(".stock").hide();
        $('#cart_items #c'+this.id).css("cursor", "default");
        $('#cart_items #c'+this.id).children('#c'+this.id).css("cursor", "default");
        $('#cart_items').children('#c'+this.id).first().prepend($delete);
    }
    if(stock[1]==0){
        $("#" + this.id).children(".stock").addClass("agotado");
    }
    $delete.click(function(e){
    e.preventDefault();
    var item=($(this).parent().get(0));
    item=($(item).children(".title").text().trim());
    var articulos=document.querySelectorAll("#item_container .item");
    for (var index = 0; index<articulos.length; index++) {
        if($(articulos[index]).children(".title").text().trim()==item){
            stock=$(articulos[index]).children(".stock").text().split(" ");
            $(articulos[index]).children(".stock").text("Stock "+(parseInt(stock[1])+1).toString());
            $('#citem').val(parseInt($('#citem').val())-1);
            $('#cprice').val(parseInt($('#cprice').val())-parseInt($(articulos[index]).children(".price").text())+" €");
            $(articulos[index]).children(".stock").removeClass("agotado");
        }
    }
    $(this).parent().remove();
});
}