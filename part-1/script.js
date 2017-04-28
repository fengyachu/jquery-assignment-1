// Do your work in this file.
$("<div>").addClass("view").appendTo(document.body)
$("<div>").addClass("grass").appendTo(".view")
$("<div>").addClass("sun").appendTo(".view")

var i = 0
while (i < 6) {
    $("<div>").addClass("ray-" + i)
    .appendTo(".sun");
    i++;
}

$("<div>").addClass("mountain").appendTo(".view")
$("<div>").addClass("mountain-top").appendTo(".mountain")

var i=0
do{
    $("<div>").addClass("mountain-cap-" + i)
    .appendTo(".mountain-top");
    i++;
}while(i < 4)
