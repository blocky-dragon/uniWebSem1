//make counter increase over time
var counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById("counter").innerHTML = counter;


}


// on site open run function
window.onload = function() {
    console.log("loaded");
    increaseCounter();
    setInterval(increaseCounter, 1000);
}

function changeColour() {
    document.getElementsByClassName("colourChanger")[0].style.background = generateRandomColor();
}


function generateRandomColor(){
    return("rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}