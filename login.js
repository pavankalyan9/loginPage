let usernames = [{
    usercode: "usercode1",
    password: "Abc@123"
},{
    usercode: "usercode2",
    password: "Abc@123"
},
{
    usercode: "usercode3",
    password: "Abc@123"
}
]
function myFunction(){
    
    var usernames=document.forms["myForm"]["Uname"].value;
    var password = document.forms["myForm"]["Pass"].value;
    if(usernames=="usercode1" && password=="Abc@123"){
        window.location.href="welcome.html"
    }
    else if (usernames=="usercode2" && password=="Abc@123"){
        window.location.href="welcome.html"
    }
    else if (usernames=="usercode3" && password=="Abc@123"){
        window.location.href="welcome.html"
    }
    
    else {
        alert("Invalid Username or Password")
    }
}