

$(document).ready(function() {
    $("p").click(function(){
        $(this).css("background-color", "yellow");
      });
});


function appendText() {
    $("body").append("This is some new text.");
  }