function tyhjenna(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    

}

function laheta(){
    let name = document.getElementById("name").value;
    if(name.length < 5)
    {
        document.getElementById("vastaus").innerHTML = "Anna vähintään 5-merkkinen nimi";
    }

    let email = document.getElementById("email").value;
    if(email.length < 10)
    {
        document.getElementById("vastaus2").innerHTML = "Pitää olla @gmail.com";
    }

    
    let password = document.getElementById("password").value;
    if(password.length < 6)
    {
        document.getElementById("vastaus3").innerHTML = "Anna vähintaään 6-merkkinen salasana";
    }
}