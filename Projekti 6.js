document.getElementById('pro6').addEventListener('submit', function(e){
    e.preventDefault();

    const lomakeTiedot = {
        etunimi: document.getElementById("enimi").value,
        sukunimi: document.getElementById("snimi").value,
        lahiosite: document.getElementById("address").value,
        postinumero: document.getElementById("Postinumero").value,
        postitoimipaikka: document.getElementById("ptoimipaikka").value,
        puhelinnumero: document.getElementById("pnumero").value,
        email: document.getElementsByName("gmail").value,
        tallennusaika: new Date().toLocaleDateString('fi-FI')
    };


    localStorage.setItem('lomakeTiedot', JSON.stringify(lomakeTiedot));

    naytaViesti('Tiedot tallennettu onnistuneesti!');
    document.getElementById('pro6').reset();
    naytaTallennetutTiedot();
    
});


function naytaViesti(teksti){
    const viestiContainer = document.getElementById('viesti-container');
    viestiContainer.innerHTML = `<div class="viesti onnistui">${teksti}</div>`;

    setTimeout(() =>{
        viestiContainer.innerHTML = '';
    }, 3000);


}


function naytaTallennetutTiedot(){
    const tallennetut = localStorage.getItem('lomakeTiedot');
    const container  = document.getElementById('tallennetut-container');

    if(tallennetut){
        const tiedot = JSON.parse(tallennetut);
        container.innerHTML =  `
           <div class="tallennetut-tiedot">
           <h2>Tallennetut tiedot:</h2>
           <div class="tieto-rivi">
           <span class="tieto-label">Nimi:</span>${tiedot.etunimi} ${tiedot.sukunimi}
           </div>

            <div class="tieto-rivi">
            <span class="tieto-label">Osoite:</span>${tiedot.osoite}
            </div>

            <div class="tieto-rivi">
            <span class="tieto-label">Postitoimipaikka:</span>${tiedot.postitoimipaikka}
            </div>

            <div class="tieto-rivi">
            <span class="tieto-label">Puhelin:</span>${tiedot.puhelin}
            </div>

            <div class="tieto-rivi">
            <span class="tieto-label">Sähköposti:</span>${tiedot.sahkoposti}
            </div>

            <div class="tieto-rivi">
            <span class="tieto-label">Tallennettu:</span>${tiedot.tallennusaika}
            </div>

            <div>
            <button class="poista-btn" onclick="poistaTiedot()">Poista tiedot</button>
            </div>

           </div> 
        
        
        `;
    }

}

function poistaTiedot(){
    if(confirm('Haluatko varmasti poistaa tallennetut tiedot?')){
        localStorage.removeItem('lomakeTiedot');
        document.getElementById('tallennetut-container').innerHTML = '';
        naytaViesti('Tiedot poistettu!');
    }
}

window.addEventListener('load', naytaTallennetutTiedot);