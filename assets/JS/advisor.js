var weatherDisplay = document.getElementById("weather-display");
var advisorDisplay = document.getElementById("advisorapi");
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
    var referrerUrl = 'https://harrisqwillis.github.io/';
    var requestUrl = 'https://api.content.tripadvisor.com/api/v1/location/search?key=B023F0317F4C4F7FABFEB3113D8B5FD2&searchQuery=' + city + '&language=en';
    const options = {method: 'GET', headers: {
        'Accept': 'application/json',
        'Referrer': referrerUrl,
        // You can add other headers if needed
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    }};

    fetch(requestUrl, options).then(function (response) {
        if(response.ok) {
            response.json().then(function (data) {
                console.log(data);
            })
        }
    })
};

/* getAdvisor(); */

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

/* displayAdvisor(); */

/* function getLocation() {
    const url = 'https://hotels-com-provider.p.rapidapi.com/v2/regions?query=Paris&domain=FR&locale=en_GB';
    const options = {
	    method: 'GET',
	    headers: {
	    	'X-RapidAPI-Key': 'e050e601f5mshd6ba0bc64bca023p1834b8jsncc4ca940033d',
	    	'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	    }
};
try {
	const response = fetch(url, options);
	const result = response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}; */

function getLocation() {
    const url = 'https://hotels4.p.rapidapi.com/locations/v3/search?q=Paris&locale=en_US&langid=1033&siteid=300000001';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e050e601f5mshd6ba0bc64bca023p1834b8jsncc4ca940033d',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    fetch(url, options).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            })
        }
      })
};

getLocation();