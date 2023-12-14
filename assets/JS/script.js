var formSubmit = document.querySelector(".formSubmit");


function setValues() {
    var cityInput = document.querySelector(".city1").value;
    var city = cityInput.split(" ").join("%20");
    var tripStart = document.querySelector(".tripStart1").value;
    var tripEnd = document.querySelector(".tripEnd1").value;
    console.log(city);
    console.log(tripStart);
    console.log(tripEnd);
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("tripStart", JSON.stringify(tripStart));
    localStorage.setItem("tripEnd", JSON.stringify(tripEnd));
};
