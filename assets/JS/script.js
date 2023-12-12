//the location and time variables will be pulled from the form
/* var city = document.querySelector(".city"); */ /* "Paris"; */
/* var tripStart = document.querySelector(".tripStart"); */ /* '2024-01-01'; */
/* var tripEnd = document.querySelector(".tripEnd"); */ /* '2024-01-10'; */
var formSubmit = document.querySelector(".formSubmit");
var main = document.querySelector(".main");
var weatherDisplay = document.getElementById("weather-display");


function setValues() {
    var city = /* document.querySelector(".city").value; */ "Paris";
    var tripStart = /* document.querySelector(".tripStart").value; */ "2024-01-01";
    var tripEnd = /* document.querySelector(".tripEnd").value; */ "2024-01-10";
    console.log(city);
    console.log(tripStart);
    console.log(tripEnd);
    function getApi() {
        var requestUrl = 'https://api.weatherapi.com/v1/future.json?key=ffd028c4f113423dad624715230812&q=' + city + '&dt=' + tripStart;
      
        fetch(requestUrl).then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var weather = data.forecast.forecastday[0].day;
                    /* displayWeather(weather.maxtemp_f);
                    displayWeather(weather.avgtemp_f);
                    displayWeather(weather.mintemp_f);
                    displayWeather(weather.totalprecip_in); */
                    localStorage.setItem("max_temp", JSON.stringify(weather.maxtemp_f));
                    localStorage.setItem("min_temp", JSON.stringify(weather.mintemp_f));
                    localStorage.setItem("avg_temp", JSON.stringify(weather.avgtemp_f));
                    localStorage.setItem("condition", JSON.stringify(weather.condition.icon));
                    console.log(data);
                })
            }
          })
    }
    getApi();
};

//will add onclick function for form's submit button to store the variables from the form in local storage




function displayWeather(future) {
    var forecastItem = document.createElement('div');
    weatherDisplay.appendChild(forecastItem);
    forecastItem.classList = 'enter tailwind classes';
    forecastItem.innerHTML = future;
}
//for the weather values we could make an outline in html that has boxes with text saying "max temp", "average temp", etc and then append each forecast item to its relevant container