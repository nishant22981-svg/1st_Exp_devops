function submitForm()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if( name && email && phone)
    {
        document.getElementById("confirmation").innerText = "Thank You,"+name+"for registering with email "+email+"and phone no "+phone;
        console.log("Registeration details :",name);
        console.log("Registeration details :",email);
        console.log("Registeration details :",phone);
    }else alert("Enter the fields");
}