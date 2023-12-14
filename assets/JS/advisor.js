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


var displayAdvisor = function (hotels) {
    if (hotels.length === 0) {
        advisorDisplay.textContent = 'No hotel listings found.';
      return;
    }
  
    for (var i = 0; i < hotels.length; i++) {
      var hotelName = hotels[i].name;
  
      var hotelEl = document.createElement('a');
      hotelEl.classList = 'list-item flex-row justify-space-between align-center';
      hotelEl.setAttribute('href', './single-repo.html?repo=' + hotelName);
  
      var titleEl = document.createElement('span');
      titleEl.textContent = hotelName;
  
      hotelEl.appendChild(titleEl);
  
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
  
      hotelEl.appendChild(statusEl);
  
      hotelContainerEl.appendChild(hotelEl);
    }
};
