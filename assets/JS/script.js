var formSubmit = document.querySelector(".formSubmit");

//takes user input from the form and stores it to the browser
function setValues() {
    var cityInput = document.querySelector(".city").value;
    var city = cityInput.split(" ").join("%20");
    var tripStartInput = document.querySelector(".tripStart").value;
    var tripStart = tripStartInput.split("/").reverse().join("-");
    var tripEnd = document.querySelector(".tripEnd").value;
    console.log(city);
    console.log(tripStart);
    console.log(tripEnd);
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("tripStart", JSON.stringify(tripStart));
    localStorage.setItem("tripEnd", JSON.stringify(tripEnd));
};
