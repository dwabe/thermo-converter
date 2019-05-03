'use strict';


var temperatureC;
var output = document.getElementById('temperature-output');
var converterCelsButton = document.getElementById('converter-button');


var log = function(text){
  output.innerHTML = '<br>' + (text) + '<br>' + output.innerHTML;
}
var celsConverter = function(temperatureC){
  if (isNaN(temperatureC)) {
    log('Please give a valid number!');
  } else {
    log('Temperature in Fahrenheit degrees is ' + (temperatureC * 1.8 + 32));
  }
}
var weatherAdvice = function(temperatureC){
  if (temperatureC < 0) {
    log('Cold. Only for Eskimo. Stay in bed.');
  } else if (temperatureC > 35) {
    log('Hot. You need aircondition.');
  } else if (temperatureC >= 0 && temperatureC <= 35) {
   log('You will survive. Do what you want.');
  } else {
   log('Please give a valid number!');
  }
}

log('Click the button to convert temperature C -> F!');

converterCelsButton.addEventListener('click', function(){
  temperatureC = window.prompt('Temperature in Celsius degrees?');
  celsConverter(temperatureC);
  weatherAdvice(temperatureC);
});



var temperatureF
var output2 = document.getElementById('temperature-output-2');
var converterFahrbutton = document.getElementById('converter-button-2');


var log2 = function(text){
  output2.innerHTML = '<br>' + (text) + '<br>' + output2.innerHTML;
}
var fahrConverter = function(temperatureF){
  if (isNaN(temperatureF)) {
    log2('Please give a valid number!');
  } else {
    log2('Temperature in Celsius degrees is ' + ((temperatureF - 32) / 1.8));
  }
}
var weatherAdvice = function(temperatureF){
  if (isNaN(temperatureF)) {
    log2('Please give a valid number!');
  } else if (temperatureF < 32) {
    log2('Cold. Only for Eskimo. Stay in bed.');
  } else if (temperatureF > 95) {
    log2('Hot. You need aircondition.');
  } else {
    log2('You will survive. Do what you want.');
  }
}

log2('Click the button to convert temperature F -> C!'); 

converterFahrbutton.addEventListener('click', function(){
  temperatureF = window.prompt('Temperature in Fahrenheit degrees?');
  fahrConverter(temperatureF);
  weatheradvice(temperatureF);
});
