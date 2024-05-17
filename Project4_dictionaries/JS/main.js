function my_Dictionary(){
    var Animal = {
    Species: "Cat",
    Color: "White",
    Breed: "Calico",
    Age: 2,
    Sound: "Meow!" //Specifications//
};
delete Animal.Sound; //Deleted "Meow!" Output//
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}