// Do your work in this file.
var i = 0;

for (; ;) {

    if (i > 196) break;
    console.log(i);
    if (i % 2 == 0) {
            $("<div>").addClass("box type-1").appendTo(document.body);
    } else {$("<div>").addClass("box type-2").appendTo(document.body)};
    i++;
}

$(".box").click(function() {
  $(this).toggleClass("clicked");
  }
);
