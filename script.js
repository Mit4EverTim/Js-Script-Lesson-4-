var mycontact = {
    name: "Mit",
    age: "13",
    email: "mit@gmail.com",
};

var myname = document.getElementById("name");
var age = document.getElementById("age");
var email = document.getElementById("email");

myname.textContent = mycontact.name;
age.textContent = mycontact["age"];
email.textContent = mycontact.email;
