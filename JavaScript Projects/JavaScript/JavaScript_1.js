function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal").value;
    var Animal_String = " is a great animal!";
    switch (Animals) {
        case "Cat":
            Animal_Ouput = "Cat" + Animal_String;
        case "Dog":
            Animal_Ouput = "Dog" + Animal_String;
            break;
        case "Elephant":
            Animal_Output = "Elephant" + Animal_String;
            break;
        case "Girraffe":
            Animal_Output = "Girraffe" + Animal_String;
            break;
        case "Lion":
            Animal_Output = "Lion" + Animal_String;
        case "Fish":
            Animal_Output = "Fish" + Animal_String; break;
        default:
            Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

ctx.fillStyle = grd;
ctx.fillRect(0,0,100,50);
