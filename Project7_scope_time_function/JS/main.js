var Y = 80;
function Add_numbers_1() {
    document.write(30 + Y + "<br>");
} function Add_numbers_2() {
    document.write(Y + 60); //Created global variable//
}

Add_numbers_1(); 
Add_numbers_2();

function Add_numbers_1() { //Created local variable//
    var X = 10;
    document.write(40 + X + "<br>");
}

function get_Date() { //If hours exceed 18:00 in military time, message will not display//
    if (new Date().getHours() < 18) {
        document.getElementById("Hello").innerHTML = "How is your day?";
    }
}

function Operation() { //Created an "if" statement//
    if (2 < 3) {
        document.getElementById("Greater_Than").innerHTML = "3 is greater than 2";
    }
}

function Age_Function() { //If the variable Age exceeds 21, the message will ask for identification//
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        ID = "Do you have proof of identification?";
    }
    else {
        ID = "You are NOT old enough to purchase alcohol!";
    }
    document.getElementById("Age_Over_21?").innerHTML = ID;
}

function Time_function() { //Depending on the time of day, various messages will display//
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

