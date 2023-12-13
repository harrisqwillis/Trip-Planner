var weatherDisplay = document.getElementById("weather-display");
var city = JSON.parse(localStorage.getItem("city"));
var tripStart = JSON.parse(localStorage.getItem("tripStart"));
var tripEnd = JSON.parse(localStorage.getItem("tripEnd"));

function displayWeather(future) {
    var forecastItem = document.createElement('div');
    forecastItem.style.color = "white";
    weatherDisplay.appendChild(forecastItem);
    forecastItem.classList = 'enter tailwind classes';
    forecastItem.innerHTML = future;
}

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
}
getApi();

function getAdvisor() {
    var requestUrl = 'https://api.content.tripadvisor.com/api/v1/location/search?key=B023F0317F4C4F7FABFEB3113D8B5FD2&searchQuery=' + city + '&language=en';
    var options = {
        method: 'GET',
        // mode: 'no-cors',
        headers: { accept: 'application/json' }
    };

    fetch(requestUrl, options).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            })
        }
    })
        .catch(err => console.error(err));
};

getAdvisor();

function displayAdvisor() {

};

displayAdvisor();