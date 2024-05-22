function get_Date() { //If hours exceed 18:00 in military time, message will not display//
    if (new Date().getHours() < 18) {
        document.getElementById("Hello").innerHTML = "How is your day?";
    }
}