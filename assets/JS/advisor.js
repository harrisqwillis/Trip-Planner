var minTemp = document.getElementById("Min-Temp");
var maxTemp = document.getElementById("Max-Temp");
var condition = document.getElementById("Condition");
var sunset = document.getElementById("Sunset");
var hotelContainerEl = document.querySelector(".hotels");
var city = JSON.parse(localStorage.getItem("city"));
var tripStart = JSON.parse(localStorage.getItem("tripStart"));
var tripEnd = JSON.parse(localStorage.getItem("tripEnd"));

var addresses = [
    "123 Main Street",
    "591 Broadway Avenue",
    "2056 Flower Road",
    "5002 Apple Street",
    "212 Height Boulevard",
    "622 Earth Way",
    "119 Marcelo Street",
    "2466 MacBeth Avenue",
    "552 Montgue Avenue",
    "1577 Friar Way",
]

function displayWeather(future, id) {
    id.innerHTML = future;
}

function displayWeatherIcon(future, id) {
    id.innerHTML = `<img src="https:${future}"></img>`;
}

function getApi() {
    var requestUrl = 'https://api.weatherapi.com/v1/future.json?key=ffd028c4f113423dad624715230812&q=' + city + '&dt=' + tripStart;

    fetch(requestUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var weather = data.forecast.forecastday[0].day;
                displayWeather(weather.maxtemp_f, maxTemp);
                displayWeather(weather.mintemp_f, minTemp);
                displayWeatherIcon(weather.condition.icon, condition);
                displayWeather(data.forecast.forecastday[0].astro.sunset, sunset);
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
                var hotels = data.sr;
                console.log(data.sr[0].regionNames.fullName);
                displayHotels(hotels);
            })
        }
    })
        .catch(err => console.error(err));
};

getHotels();

function displayHotels(array) {
    if (array.length === 0) {
        hotelContainerEl.textContent = 'No hotel listings found.';
      return;
    }
  
    for (var i = 0; i < array.length; i++) {
      var hotelName = array[i].regionNames.fullName;
  
      var hotelEl = document.createElement('a');
  
      var titleEl = document.createElement('span');
      titleEl.innerHTML = `<br>${hotelName}`;
  
      hotelEl.appendChild(titleEl);
      hotelEl.style.color = "blue";
  
      hotelContainerEl.appendChild(hotelEl);

      var addressEl = document.createElement('span');
      var address = addresses[Math.floor(Math.random()*addresses.length)];
      addressEl.innerHTML = `<br>${address}`;
      addressEl.style.color = "blue";
      hotelContainerEl.appendChild(addressEl);

      

      hotelContainerEl.style.backgroundColor = "white";
      hotelContainerEl.style.display = "block";
    }
};