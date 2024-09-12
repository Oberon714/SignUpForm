let password = document.querySelector("#password").value;
let confirmpassword = document.querySelector("#2password").value;

let error = document.querySelector("error");

if (password != confirmpassword){
    error.innerHTML = "Passwords do not match"
} else if(password == "" && confirmpassword == ""){
    error.innerHTML = "Passwords cannot be empty"
} else {"welcome boi"}