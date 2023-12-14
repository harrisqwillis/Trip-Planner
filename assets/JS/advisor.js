var minTemp = document.getElementById("Min-Temp");
var maxTemp = document.getElementById("Max-Temp");
var condition = document.getElementById("Condition");
var sunset = document.getElementById("Sunset");
var advisorDisplay = document.getElementById("advisorapi");
var city = JSON.parse(localStorage.getItem("city"));
var tripStart = JSON.parse(localStorage.getItem("tripStart"));
var tripEnd = JSON.parse(localStorage.getItem("tripEnd"));

function displayWeather(future, id) {
    var forecastItem = document.createElement('div');
    forecastItem.style.color = "white";
    id.appendChild(forecastItem);
    forecastItem.classList = 'enter tailwind classes';
    forecastItem.innerHTML = future;
}

function getApi() {
    var requestUrl = 'https://api.weatherapi.com/v1/future.json?key=ffd028c4f113423dad624715230812&q=' + city + '&dt=' + tripStart;

    fetch(requestUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var weather = data.forecast.forecastday[0].day;
                displayWeather(weather.maxtemp_f, maxTemp);
                displayWeather(weather.mintemp_f, minTemp);
                displayWeather(weather.condition, condition);
                displayWeather(weather.totalprecip_in);
                console.log(data);
            })
        }
    })
}
getApi();

function getHotels() {
    var requestUrl = 'https://hotels4.p.rapidapi.com/locations/v3/search?q=' + city + '&locale=en_US&langid=1033&siteid=300000001';
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '61aa3457ffmsha49fc9252a0d3dfp15f830jsn1c1837e51518',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
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

getHotels();

function displayHotels() {

};

displayHotels();