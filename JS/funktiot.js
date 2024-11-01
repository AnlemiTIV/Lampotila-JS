
var lukuGlobal;
//tyhjennetään input kenttä ja radio painikkeiden valinnat sivun uudelleenladatessa
window.onload = function() {

    lukuGlobal = ""

    document.getElementById("annettuArvo").value = "";
    
    var ele = document.getElementsByName("decimaali");
    
    for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
}

//asettaa default vaihtoehdon selectoriin sivun uudelleenladatessa
var temp = "Fahrenheit -> Celcius";
var mySelect = document.getElementById('selection');

for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == temp) {
        mySelect.selectedIndex = j;
        break;
    }
}

//hankitaan dropdown select:in valittu kohta ja sen id

function onChanger() {

    lukuGlobal = document.getElementById("annettuArvo").value;

    var regex=/^[0-9]+$/; //jos ei ole numero

    breakme: if (lukuGlobal == ""){
        alert("syötä vain numeroita");
        document.getElementById("annettuArvo").value = ""
        return
    }
    else if (isNaN(lukuGlobal) == false){
        break breakme;
    }
    else if(!lukuGlobal.match(regex)){
        
        alert("syötä vain numeroita");
        document.getElementById("annettuArvo").value = ""
        return
    }

    muuttujaTieto()

}

//tällä funktiolla poimitaan valittu vaihtoehto selectorista, minkä mukaan suoritetaan oikea kaava/lasku

function muuttujaTieto(){
    
    var ddl = document.getElementById("selection");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
    
    if (selectedValue == "Fahrenheit -> Celcius"){
        lukuGlobal = (lukuGlobal - 32) / 1.8;
    }
        
    else if (selectedValue == "Celcius -> Fahrenheit"){
        lukuGlobal = (lukuGlobal * 1.8) + 32;
    }

    //console.log(lukuGlobal)
    //console.log("testaus rivillä 70 kun kaava suoritettu")

    decimaaliFunktio()
}

//supistetaan saadut tiedot tiettyyn muotoon mutta ainoastaan jos joku radio painikkeista
//on valittu, muussa tapauksessa tässä funktiossa ei tehdä mitään

function decimaaliFunktio(){

    if (document.getElementById("oneDecimal").checked){

        lukuGlobal = lukuGlobal.toFixed(1);

    } 
    else if (document.getElementById("twoDecimal").checked){

        lukuGlobal = lukuGlobal.toFixed(2);

    }
    else if (document.getElementById("threeDecimal").checked){

        lukuGlobal = lukuGlobal.toFixed(3);

    }

    console.log("tulostetaan demo osioon alkuperäinen")
    console.log(lukuGlobal)

    document.getElementById("demo").innerHTML = lukuGlobal;

    if (lukuGlobal < -273.15){

        console.log("lisäys arvon pienemmyydestä toteutui jos < -273.15")
        document.getElementById("demo").innerHTML += "<br><br><b>*Syöttämä luku on pienempi kuin absoluuttinen nollapiste -273,15*</b>";
        //console.log(lukuGlobal)
        //console.log("Boolean kohdan jälkeen")
    }

}