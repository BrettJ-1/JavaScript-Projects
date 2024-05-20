function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Ballot_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to enter in elections!" : "Select a Candidate:";
    document.getElementById("Ballot").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color, Interior) { //Creating Object Constructors//
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    this.Vehicle_Keyword = Interior;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red", "Cloth"); //Creating Keywords//
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black", "Cloth");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard", "Cloth");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + "with a" + Vehicle_Keyword + "interior";
} //Code won't function properly due to Reserved Keyword under Vehicle_Keyword, but when removed will//

function Oceans(west, east, north, south) { //Creating Object Constructors//
    this.Pacific = west;
    this.Atlantic = east;
    this.Arctic = north;
    this.Indian = south;

    // this.Southern = function() { 
    // return this.Pacific + " " + this.Atlantic;
    //   };
}

const myOcean = new Oceans("Blue", "Wavy", "Cold", "Test"); //returning text from this.Southern function//
function OceanFunction() {
    document.getElementById("Oceans").innerHTML = myOcean.Pacific + " is better than the " + " " + myOcean.Atlantic;
}



function count_Function() { //Using Nested Function to Count//
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 12;
        function Minus_8() { Starting_point -= 8; }
        Minus_8();
        return Starting_point;
    }
}

