function carFunction() {
var car;
car = (val) => "These are my favorite car brands: " + val;
}
document.getElementById('displayCar').innerHTML = car ("Honda, Ford, and Nissan");