var rowNumber = 20;
var colNumber = 20;

var cellWidth = ($("#gridArea").width()) / colNumber;
var cellHeight = ($("#gridArea").height()) / rowNumber;
$(document).ready(function() {
    console.log("cell width is" + cellWidth);
    console.log("cell height is" + cellHeight);



    CreateTable();

    $("button").click(function() {
        $("tr").remove();
        CreateTable();
    });
});

function CreateTable() {
    for (var i = 0; i < rowNumber; i++) {
        $("table").append("<tr id=" + i + "></tr>");
        for (var j = 0; j < colNumber; j++) {
            $("tr#" + i + "").append("<td><div class='cell' style='position:relative;width:" +
                cellWidth + "px;height:" + cellHeight + "px;background-color:'blue'></td>");
        }
    }
    HoverCells();
}

function HoverCells() {
    $(".cell").mouseenter(function() {

        if ($(this).css("opacity") === "1") {
            $(this).css("background-color", "#D3D3D3");
        }
        var op = $(this).css("opacity");
        $(this).css("opacity", op - 0.1);


    });

}
