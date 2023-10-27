//function that checks the password lengths and if they match. Will alert user with problem or success message
function checkpass(){
    firstPass = document.getElementById("first").value;
    secondPass = document.getElementById("second").value;
    if (firstPass.length < 8){
        alert("The length of the first password is less than 8 letters!");
    }
    else if (secondPass.length < 8){
        alert("The length of the second password is less than 8 letters!");
    }
    else if (firstPass == secondPass){
        alert("Everything is good!");
    }
    else{
        alert("Two Passwords don't match");
    }
}