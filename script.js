var viuEl = document.querySelector("#phpuenig");
var jonEl = document.querySelector("#jonuenig");
var martinEl = document.querySelector("#martinuenig");
var adrianEl = document.querySelector("#fishuenig");

var resultatEl = document.querySelector("#resultat");

var totalEl = document.querySelector("#total");
var viudivEl = document.querySelector("#viudiv");
var jondivEl = document.querySelector("#jondiv");
var martindivEl = document.querySelector("#martindiv");
var adriandivEl = document.querySelector("#adriandiv");

var viublokk = 0;
var jonblokk = 0;
var martinblokk = 0;
var adrianblokk = 0;

var svar = 0;

resultatEl.style.visibility = "hidden";

function submit(){
    svar++;
    viublokk += Number(viuEl.value);
    jonblokk += Number(jonEl.value);
    martinblokk += Number(martinEl.value);
    adrianblokk += Number(adrianEl.value);
}

function vis(){
    resultatEl.style.visibility = "visible";

    totalEl.innerHTML = "Viser resultatet av " + svar + " svar!"

    viudivEl.style.backgroundColor = "blue";
    jondivEl.style.backgroundColor = "yellow";
    martindivEl.style.backgroundColor = "green";
    adriandivEl.style.backgroundColor = "red";

    viudivEl.style.width = (viublokk/svar*100) + "%";
    jondivEl.style.width = (jonblokk/svar*100) + "%";
    martindivEl.style.width = (martinblokk/svar*100) + "%";
    adriandivEl.style.width = (adrianblokk/svar*100) + "%";
}