var formSubmit = document.querySelector(".formSubmit");


function setValues() {
    var city = document.querySelector(".city").value;
    var tripStart = document.querySelector(".tripStart").value;
    var tripEnd = document.querySelector(".tripEnd").value;
    console.log(city);
    console.log(tripStart);
    console.log(tripEnd);
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("tripStart", JSON.stringify(tripStart));
    localStorage.setItem("tripEnd", JSON.stringify(tripEnd));
};
