var sname = document.getElementById("name")
var email = document.getElementById("email")
var state = document.getElementById("state")
var city = document.getElementById("city")
var address = document.getElementById("address")
var pin = document.getElementById("pin")

var submitBtn = document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault()
    })
    alert("Name:- " + sname.value + "\nEmail:- " + email.value + "\nState:- " + state.value + "\nCity:- " + city.value + "\nAddress:- " + address.value + "\nPincode:- " + pin.value)
    sname.value = ""
    email.value = ""
    state.value = "Please select your State"
    city.value = "Please select your City"
    address.value = ""
    pin.value = ""
});