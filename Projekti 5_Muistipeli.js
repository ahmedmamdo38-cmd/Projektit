// ========================================
// 1. MUUTTUJAT (tallentavat tietoa)
// ========================================

let ensimmainenKortti = null;  // ✅ Korjattu: oli "enismmainenKortti"
let toinenKortti = null;
let voiKlikata = true;
let loydettyjaPareja = 0;      // ✅ Korjattu: oli "loyddettyjaPareja"
let klikkauskertoja = 0;

let ajastin = null;
let sekunnit = 0;


// ========================================
// 2. LUO PELI
// ========================================

function luo() {
    let korkeus = parseInt(document.getElementById("korkeus").value);
    let leveys = parseInt(document.getElementById("leveys").value);

    // Tarkista että numerot ovat OK
    if (!korkeus || !leveys || korkeus < 1 || leveys < 1) {
        alert("Anna korkeus ja leveys (1-6)!");
        return;
    }

    let korttienMaara = korkeus * leveys;

    if (korttienMaara % 2 !== 0) {
        alert("Korttien määrä pitää olla parillinen!");
        return;
    }

    reset();

    let kortit = luoKorttiLista(korttienMaara);  // ✅ Korjattu: oli "louKorttiLista"

    naytaRivit(korkeus);
    asetaKortit(korkeus, leveys, kortit);
    ajastin = setInterval(paivitaKello, 1000);
}


// ========================================
// 3. LUO KORTTILISTA
// ========================================

function luoKorttiLista(korttienMaara) {  // ✅ Korjattu: oli "louKorttiLista"
    let kortit = [];
    let pareja = korttienMaara / 2;

    // Lisää jokainen numero kahdesti
    for (let i = 1; i <= pareja; i++) {
        kortit.push(i);
        kortit.push(i);
    }

    // Sekoita kortit
    for (let i = kortit.length - 1; i > 0; i--) {
        let satunnainen = Math.floor(Math.random() * (i + 1));

        let valiaikainen = kortit[i];
        kortit[i] = kortit[satunnainen];
        kortit[satunnainen] = valiaikainen;
    }

    return kortit;
}


// ========================================
// 4. NÄYTÄ RIVIT
// ========================================

function naytaRivit(korkeus) {
    for (let i = 1; i <= 6; i++) {
        let rivi = document.getElementById("Rivi" + i);

        if (i <= korkeus) {  // ✅ Korjattu: oli < pitää olla <=
            rivi.style.display = "table-row";
        } else {
            rivi.style.display = "none";
        }
    }
}


// ========================================
// 5. ASETA KORTIT
// ========================================

function asetaKortit(korkeus, leveys, kortit) {
    let korttiNumero = 0;

    for (let rivi = 0; rivi < korkeus; rivi++) {
        for (let sarake = 0; sarake < 6; sarake++) {
            let korttiID = "Kuva" + (rivi * 6 + sarake);
            let kortti = document.getElementById(korttiID);

            if (sarake < leveys) {
                kortti.style.visibility = "visible";
                kortti.src = "Kuvat/kuva0.png";

                kortti.setAttribute("data-arvo", kortit[korttiNumero]);
                kortti.setAttribute("data-loydetty", "ei");

                korttiNumero++;
            } else {
                kortti.style.visibility = "hidden";
            }
        }
    }
}


// ========================================
// 6. KÄÄNNÄ KORTTI
// ========================================

function kaannaKortti(korttiID) {
    if (!voiKlikata) return;

    let kortti = document.getElementById(korttiID);

    let onkoLoydetty = kortti.getAttribute("data-loydetty");
    if (onkoLoydetty === "kylla") return;  // ✅ Korjattu: oli "Kylla" isolla K:lla

    if (ensimmainenKortti && ensimmainenKortti.id === korttiID) return;

    let kortinArvo = kortti.getAttribute("data-arvo");
    kortti.src = "Kuvat/kuva" + kortinArvo + ".png";

    if (ensimmainenKortti === null) {
        ensimmainenKortti = kortti;
    } else {
        toinenKortti = kortti;
        klikkauskertoja++;
        document.getElementById("arvauskset").textContent = "Arvausten määrä: " + klikkauskertoja;
        tarkistaKortit();
    }
}


// ========================================
// 7. TARKISTA KORTIT
// ========================================

function tarkistaKortit() {
    voiKlikata = false;

    let arvo1 = ensimmainenKortti.getAttribute("data-arvo");
    let arvo2 = toinenKortti.getAttribute("data-arvo");

    if (arvo1 === arvo2) {
        // ✅ Korjattu: tänne puuttui koodi!
        ensimmainenKortti.setAttribute("data-loydetty", "kylla");
        toinenKortti.setAttribute("data-loydetty", "kylla");

        loydettyjaPareja++;

        ensimmainenKortti = null;
        toinenKortti = null;
        voiKlikata = true;

        tarkistaVoitto();

    } else {
        setTimeout(function() {
            ensimmainenKortti.src = "Kuvat/kuva0.png";
            toinenKortti.src = "Kuvat/kuva0.png";

            ensimmainenKortti = null;
            toinenKortti = null;
            voiKlikata = true;
        }, 1000);
    }
}


// ========================================
// 8. TARKISTA VOITTO
// ========================================

function tarkistaVoitto() {
    let korkeus = parseInt(document.getElementById("korkeus").value);
    let leveys = parseInt(document.getElementById("leveys").value);
    let kaikkiParit = (korkeus * leveys) / 2;

    if (loydettyjaPareja === kaikkiParit) {
        clearInterval(ajastin);

        setTimeout(function() {
            alert("Onneksi olkoon! Löysit kaikki parit!\n" +
                "Arvauksia: " + klikkauskertoja + "\n" +
                "Aika: " + muutaSekunneiksAjaksi(sekunnit));
        }, 500);
    }
}


// ========================================
// 9. PÄIVITÄ KELLO
// ========================================

function paivitaKello() {
    sekunnit++;

    let teksti = muutaSekunneiksAjaksi(sekunnit);
    document.getElementById("aika").textContent = "Aika: " + teksti;
}


// ========================================
// 10. MUUTA SEKUNNIT AJAKSI
// ========================================

function muutaSekunneiksAjaksi(sekunnit) {
    let tunnit = Math.floor(sekunnit / 3600);
    let minuutit = Math.floor((sekunnit % 3600) / 60);
    let sek = sekunnit % 60;  // ✅ Korjattu: oli & pitää olla %

    if (tunnit < 10) tunnit = "0" + tunnit;
    if (minuutit < 10) minuutit = "0" + minuutit;
    if (sek < 10) sek = "0" + sek;

    return tunnit + ":" + minuutit + ":" + sek;
}


// ========================================
// 11. RESET
// ========================================

function reset() {
    if (ajastin) {
        clearInterval(ajastin);
    }

    ensimmainenKortti = null;
    toinenKortti = null;
    voiKlikata = true;
    loydettyjaPareja = 0;
    klikkauskertoja = 0;
    sekunnit = 0;

    document.getElementById("arvaukset").textContent = "Arvausten määrä: 0";
    document.getElementById("aika").textContent = "Aika: 00:00:00";

    for (let i = 0; i < 36; i++) {
        let kortti = document.getElementById("Kuva" + i);
        if (kortti) {
            kortti.src = "Kuvat/kuva0.png";
            kortti.setAttribute("data-loydetty", "ei");
        }
    }
}