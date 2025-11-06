// Arpoo numeron 1-10 väliltä 
var oikeaNumero = Math.floor(Math.random() * 10) + 1;
var arvauksia = 0;
var maxArvaukset = 3;

function arvauspeli(){
    var pelaajanArvaus = document.getElementById('arvaus').value;
    pelaajanArvaus =Number(pelaajanArvaus);
    arvauksia = arvauksia + 1;
    if(pelaajanArvaus === oikeaNumero){
        document.getElementById('v3').innerHTML = "Oikein! Numero oli " + oikeaNumero;
        document.getElementById('button').disabled = true;
    }
    else if(arvauksia >= maxArvaukset){
        document.getElementById('v3').innerHTML = " Peli loppui! Oikea numero oli " + oikeaNumero;
        document.getElementById('button').disabled = true;
    }

    else{
        if (pelaajanArvaus < oikeaNumero){
            document.getElementById('v3').innerHTML = "Liian pieni! Arvaa uudestaan.";
        } else{
            document.getElementById('v3').innerHTML = " Liian suuri! Arvaa uudestaan.";
        }
    }
    document.getElementById('v1').innerHTML  = "Arvausten lukumäärä; " + arvauksia;
    document.getElementById('v1').innerHTML = "Arvatut numerot: " + arvatutNumerot.join("")

}
