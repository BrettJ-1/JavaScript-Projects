function multiplication() {
    var Simple_Math = 5 * 5;
    document.getElementById("Math").innerHTML = "5 x 5 = " //Multiplying Two Numbers//
        + Simple_Math;
}

function division() {
    var Simple_Math = 5 / 5;
    document.getElementById("Math").innerHTML = "5 / 5 = " //Dividing Two Numbers//
        + Simple_Math;
}

function addition() {
    var Simple_Math = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 =" //Adding Two Numbers//
        + Simple_Math;
}

function subtraction() {
    var Simple_Math = 5 - 5;
    document.getElementById("Math").innerHTML = "5 - 5 =" //Subtracting Two Numbers//
        + Simple_Math;
}

function More_Math() {
    var Simple_Math = (2 + 3) * 5 / 4 - 1;
    document.getElementById("Math").innerHTML = "2 plus 3, multiplied by 5, divided in quarters and then subtracted by 4 minus 1" + Simple_Math; //Order of Operations//
}

function Modulus_Operator() {
    var Simple_Math = 30 & 3;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + Simple_Math; //Retreiving Modulus Number//
}

function Negation_Operator () {
    var x = 8;
    document.getElementById ("Math").innerHTML = -x; //Retrieving Negation Operator//
}

var X = 7;
X++;
document.write(X); //Using Increment//

var Y = 4;
Y--;
document.write(Y); //Using Decrement//

window.alert (Math.random () * 999); //Alert Window with Random Number through 999//

document.getElementById("Round").innerHTML = Math.round(8.8); //Rounding a Number Up//