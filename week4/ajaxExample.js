

var oldDisplayText = '';


window.onload = function(){
    console.log("Page Loaded")
    var oldDisplayText = document.getElementById("displayText").innerHTML;
    pageButton = document.getElementById("pageButton");
    pageButton.onClick = buttonPressed();

}


function fetchOldText(){
    oldDisplayText = document.getElementById("displayText").innerHTML;
}


function buttonPressed(){
    fetchOldText();

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("displayText").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "firstTextExample.txt");
    xhttp.send();
}