document.write("1" + 99); //Utilizing Coercion//
document.write(typeof "Place");//Utilizing Type of - String//
document.write(typeof 20);//Utilizing Type of - Number//

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0; //NaN//
}

function NoAN() {
    document.getElementById("Test").innerHTML = isNaN("Not a Number"); //Is Not a Number, displays false//
}

function IsAN() {
    document.getElementById("Test").innerHTML = isNaN('23'); //Is a Number, displays true//
}

document.write(3E417); //displays infinity//

document.write(-3E417); //displays negative infinity//

document.write(9 > 7); //displaying true using boolean logic//

document.write(9 < 7); //displaying false using boolean logic//

console.log(9 + 9 - 2); //performing math operation//

console.log(8 > 9); //displaying false using boolean logic//

document.write(8 == 7); //not equal, returns false//

document.write(8 == 8); //equal, returns true//

X = 100;
Y = 100;
document.write(X === Y); //matching data type and value//

X = 77;
Y = "77";
document.write(X === Y); //different data type, same value//

A = "Apple";
B = "8930";
document.write(A === B); //different data type and value//

A = "Banana";
B = "Banana";
document.write(A === Y); //same data type, different value//

document.write(6 > 1 && 8 > 3); //and operator (both true)//

document.write(2 > 8 && 3 > 1); //and operator (one true/false)//

document.write(7 > 10 || 13 > 3); //or operator (one true)//

document.write(5 > 6 || 8 > 9); //or operator (both false)//

function not_Function() {
    document.getElementById("Not").innerHTML = !(18 > 10); //not operator returns false//
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(6 > 10); //not operator returns true//
}