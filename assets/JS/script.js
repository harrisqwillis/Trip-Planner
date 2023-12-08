var city = /* document.getElementById(#); */ 'Paris';
var tripStart = /* document.getElementById(#); */ '2024-01-01';
var main = document.querySelector(".main");

function getApi() {
    var requestUrl = 'https://api.weatherapi.com/v1/future.json?key=ffd028c4f113423dad624715230812&q=' + city + '&dt=' + tripStart;
  
    fetch(requestUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayWeather(data);
            })
        }
            console.log(response);
            /* return response.json(); */
      })
  }

getApi();

function displayWeather() {
    var weatherContainer = document.createElement('div');
    weatherContainer.classList = 'enter tailwind classes';

}