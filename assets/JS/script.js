var city = /* document.getElementById(#); */ 'Paris';
var tripStart = /* document.getElementById(#); */ '2023-01-01';
var main = document.querySelector(".main");

function getApi() {
    var requestUrl = 'https://api.weatherapi.com/v1/future.json?key=ffd028c4f113423dad624715230812&q=' + city + '&dt=' + tripStart;
  
    fetch(requestUrl)
      .then(function (response) {
        console.log(response);
        main.appendChild(response);
        return response.json();
      })
  }

getApi();

function displayWeather() {

}