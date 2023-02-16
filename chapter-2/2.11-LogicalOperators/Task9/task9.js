
let login = prompt("Who's there?", "");

if(login === "Admin"){
    let password = prompt("Password?", "");

    if(password === null || password === "") {
        alert("Canceled");
    } else if(password === "TheMaster") {
        alert("Welcome!");
    } else{
        alert("Wrong password");
    }
} else if(login === null || login === "") {
    alert("Canceled");
} else{
    alert("I don't know you");
}