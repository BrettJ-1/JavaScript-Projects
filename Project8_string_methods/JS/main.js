function full_Sentence() { //Using Concat Method//
    var part_1 = "This ";
    var part_2 = "is ";
    var part_3 = "a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //Using Slice Method//
    var Sentence = "Red, Blue, Green, Yellow, Purple, Pink, Orange, Brown, Black, White, Tan";
    var Section = Sentence.slice(11, 16);
    document.getElementById("Slice").innerHTML = Section;
}


function Uppercase_Method() { //Using Uppercase Method//
    var text = "Uppercase Font!";
    let result = text.toUpperCase();
    document.getElementById("Uppercase").innerHTML = result;
}

function Search_Method() { //Using Search Method//

    var lyrics = "Take me down to the Paradise City"
    let position = text.search("Paradise");
    document.getElementById("Search").innerHTML = position;
}

function string_Method() { //Using String Method//
    var X = 545;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //Using Precision Method//
    var X = 12.3456789;
    document.getElementById("Precision").innerHTML = X.toPrecision(3);
}

function Fixed_Method() { //Using Fixed Method//
var number = 1.23456789;
let rounded = number.toFixed();
document.getElementById("Fixed").innerHTML = rounded;
}

function valueOf_Method() { //Using valueOf Method//
var text = "Example Line of Text";
let result = text.valueOf();
document.getElementById("value").innerHTML = result;
}



