$(document).ready(function () {
    /*
        var cell1_1 = document.getElementById("cell1_1");
        var cell1_2 = document.getElementById("cell1_2");
        var cell1_3 = document.getElementById("cell1_3");
        var cell1_4 = document.getElementById("cell1_4");
        var cell1_5 = document.getElementById("cell1_5");
    
        var cell2_1 = document.getElementById("cell2_1");
        var cell2_2 = document.getElementById("cell2_2");
        var cell2_3 = document.getElementById("cell2_3");
        var cell2_4 = document.getElementById("cell2_4");
        var cell2_5 = document.getElementById("cell2_5");
    
        var cell3_1 = document.getElementById("cell3_1");
        var cell3_2 = document.getElementById("cell3_2");
        var cell3_3 = document.getElementById("cell3_3");
        var cell3_4 = document.getElementById("cell3_4");
        var cell3_5 = document.getElementById("cell3_5");
    
        var cell4_1 = document.getElementById("cell4_1");
        var cell4_2 = document.getElementById("cell4_2");
        var cell4_3 = document.getElementById("cell4_3");
        var cell4_4 = document.getElementById("cell4_4");
        var cell4_5 = document.getElementById("cell4_5");
    
        var cell5_1 = document.getElementById("cell5_1");
        var cell5_2 = document.getElementById("cell5_2");
        var cell5_3 = document.getElementById("cell5_3");
        var cell5_4 = document.getElementById("cell5_4");
        var cell5_5 = document.getElementById("cell5_5");
    */
    var cells = document.querySelectorAll("td");


    var emptyCell = "cell5_5";

    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", rellena, false);
    }

    function rellena(cell) {
        emptyCell.replaceWith(cell.target.id);
    }

});