function count_To_Ten() { //Created While Loop//
    var Digit = " ";
    var X = 100;
    while (X > 50) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function text_length() { //Utilized Length Property//
    let text = "Party";
    let length = text.length;
    document.getElementById("textLength").innerHTML = length;
}

var Sports = ["Football", "Baseball", "Basketball", "Soccer", "Hockey", "Golf", "Tennis", "Bowling", "Boxing"]; //Created For Loop//
var Content = " ";
var A;
function Sports_List() {
    for (A = 0; A < Sports.length; A++) {
        Content += Sports[A] + "<br>";
    }
    document.getElementById("List_of_Sports").innerHTML = Content;
}

function dog_pics() { //Created an array//
    var Dog_Picture = [];
    Dog_Picture[0] = "Barking";
    Dog_Picture[1] = "Growling";
    Dog_Picture[2] = "Playing";
    Dog_Picture[3] = "Sleeping";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[2] + ".";
}

{
    let Y = 55; //Utilized let keyword//
    document.write("<br>" + Y);
}

function DigitsofPI() { //Utilized return statement//
    return Math.PI;
}
document.getElementById("PI").innerHTML = DigitsofPI();

let Pokemon = { //Created an object with properties and a method//
    Generation: "1st Generation",
    Color: "yellow",
    Type: "electric",
    Description: "mouse",
    Evolves: "evolves",
    description: function () {
        return "The Pokemon is a " + this.Generation + " " + this.Color + " " + this.Type + " " + this.Description + " that " + this.Evolves;
    }
}
document.getElementById("Pokemon_description").innerHTML = Pokemon.description();

let text = ""; //Utilized break statement//
for (let x = 15; x > 5; x--) {
    if (x === 5) { break; }
    text += "The number is " + x + "<br>";
}
document.getElementById("Break").innerHTML = text;

let number = ""; //Utilized continue statement//
for (let x = 15; x > 4; x--) {
    if (x === 7) { continue; }
    number += "The number is " + x + "<br>";
}
document.getElementById("Continue").innerHTML = number;

