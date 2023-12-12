//the location and time variables will be pulled from the form
var city = /* document.getElementById("#""); */ 'Paris';
var tripStart = /* document.getElementById("#""); */ '2024-01-01';
var main = document.querySelector(".main");
var weatherDisplay = document.getElementById("weather-display");

//will add onclick function for "get started" button to bring up form and store the variables from the form in local storage

function getApi() {
    var requestUrl = 'https://api.weatherapi.com/v1/future.json?key=ffd028c4f113423dad624715230812&q=' + city + '&dt=' + tripStart;

    fetch(requestUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var weather = data.forecast.forecastday[0].day;
                displayWeather(weather.maxtemp_f);
                displayWeather(weather.avgtemp_f);
                displayWeather(weather.mintemp_f);
                displayWeather(weather.totalprecip_in);
                console.log(data);
            })
        }
    })
};

getApi();

function displayWeather(future) {
    var forecastItem = document.createElement('div');
    weatherDisplay.appendChild(forecastItem);
    forecastItem.classList = 'enter tailwind classes';
    forecastItem.innerHTML = future;
};

//for the weather values we could make an outline in html that has boxes with text saying "max temp", "average temp", etc and then append each forecast item to its relevant container

function getAdvisor() {
    var requestUrl = 'https://api.content.tripadvisor.com/api/v1/location/search?key=B023F0317F4C4F7FABFEB3113D8B5FD2&searchQuery=' + city + '&language=en';
    var options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(requestUrl, options).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            })
        }
    })
};

getAdvisor();

function displayAdvisor() {

};

displayAdvisor();