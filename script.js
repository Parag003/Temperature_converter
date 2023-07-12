let celsius = document.getElementById("celsius");// get document 
let fahrenheit = document.getElementById("fahrenheit");

function celsToFarh(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farhToCels(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));

}