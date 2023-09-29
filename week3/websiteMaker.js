


//have to wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const latestElement = document.createElement('p');
    latestElement.textContent = 'Hello, world!';
    latestElement.style.color = 'red';
    document.body.appendChild(latestElement);
    document.body.appendChild(counterElement);
});

let rgbCounter = [0, 0, 0];

//update and display a counter every frame
let counter = 0;
let counterElement = document.createElement('p');
counterElement.textContent = "RGB VALUES";


function updateBackground() {
    

    //update the background color

    if(rgbCounter[0] < 255){
        rgbCounter[0]++;
    }
    else if(rgbCounter[1] < 255){
        rgbCounter[1]++;
    }
    else if(rgbCounter[2] < 255){
        rgbCounter[2]++;
    }
    else{
        rgbCounter = [0, 0, 0];
    }
    counterElement.textContent = "RGB: " + rgbCounter[0] + ", " + rgbCounter[1] + ", " + rgbCounter[2] + "";
    document.body.style.backgroundColor = 'rgb(' + rgbCounter[0] + ',' + rgbCounter[1] + ',' + rgbCounter[2] + ')';
    requestAnimationFrame(updateBackground);
}

requestAnimationFrame(updateBackground);
