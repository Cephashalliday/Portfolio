let myform = document.querySelector("CYNCEP WEB FORM");
let Firstname = null;
let Lastname = null;
let Email = null;
let Password = null;
let gender = null;

myform.onsubmit = function(e){
    e.preventDefault();
    //console.log("SUBMITTED");
    Firstname = document.querySelector("Firstname").Value;
    Lastname = document.querySelector("Lastname").Value;
    Email = document.querySelector("Email").Value;
    Password = document.querySelector("Password").Value;
    gender = document.querySelector("gender").Value;

    alert("Firstname=" + Firstname + "Lastname=" + Lastname + "Email=" + Email+"Password"+Password+"Gender"+gender)
}