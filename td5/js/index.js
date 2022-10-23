document.getElementById("communediv").style.display = "none"
document.getElementById("popultationdiv").style.display = "none"
document.getElementById("routetothirdpage").style.display = "none"
let departement;
let city;

urldepartement = 'https://geo.api.gouv.fr/departements'
async function getDepartement(urldepartement){
    const response = await fetch(urldepartement,{
        method : 'GET',
    }).catch(function(error){
        console.log("problème fetch : " + error.message)
    });
    const json = await response.json();
    console.log(json)

    for(var i in json){
        var op = document.createElement('option');
        let display = json[i].code + " - " + json[i].nom;
        op.text=display;
        op.value=json[i].code;
        document.getElementById('departement').appendChild(op);
    }
}

function recupDepartement(){
    var e = document.getElementById("departement")
    departement = e.options[e.selectedIndex].text
    departement = departement.slice(5).trim()
    sessionStorage.setItem("departement", departement)
    console.log('departement changer')
}

getDepartement(urldepartement)

function execute(){
    recupDepartement();
    getCommune();
}

document.getElementById("departement").onchange = execute

async function getCommune(){
    document.getElementById("routetothirdpage").style.display = "block"
    document.getElementById("communediv").style.display = "block"
    var e = document.getElementById("departement")
    departementselected = e.value
    departement = e.options[e.selectedIndex].text
    departement = departement.slice(5).trim()
    sessionStorage.clear()
    sessionStorage.setItem("departement", departement)

    selectcommune =  document.getElementById('commune')
    optionslength = document.getElementById('commune').options.length
    console.log(optionslength)
    if(optionslength !== 0){
        document.getElementById('commune').options.length=0;

    }

    const response = await fetch('https://geo.api.gouv.fr/departements/' + departementselected +'/communes',{
        method :'GET'
    }).catch(function(error){
        console.log("probleme fetch :" + error.message)
    })
    const json = await response.json();

    var op = document.createElement('option');
    op.text="--Selectionnez une comumune--"
    document.getElementById('commune').appendChild(op);
    for(var i in json){
        var op = document.createElement('option');
        op.text=json[i].nom;
        op.value=json[i].code;
        document.getElementById('commune').appendChild(op);
    }

}

document.getElementById("commune").onchange = getPopulation;

async function getPopulation(){
    var e = document.getElementById("commune")
    communeselected = e.value
    city = e.options[e.selectedIndex].text

    const response = await fetch('https://geo.api.gouv.fr/communes?code='+ communeselected + '&fields=code,nom,population',{
        method :'GET'
    }).catch(function(error){
        console.log("probleme fetch :" + error.message)
    })
    const json = await response.json();
    document.getElementById("population").innerText = "La population de " + json[0].nom + " est de " + json[0].population + " habitants"
    getWeather(json[0].nom)
    sessionStorage.setItem("city", city)

}

async function getWeather(city){
    apikey = 'a1b827d180af2c1d43ed9dc890143152'

    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey +"&units=metric&lang=fr",{
        method :'GET'
    }).catch(function(error){
        console.log("probleme fetch :" + error.message)
    })
    const json = await response.json();
    console.log(json)
    sessionStorage.setItem("temperature", json.main.temp)
    sessionStorage.setItem("ressentie", json.main.feels_like)
    sessionStorage.setItem("minimale", json.main.temp_min)
    sessionStorage.setItem("maximale", json.main.temp_max)
    sessionStorage.setItem("weather", json.weather[0].description)
    sessionStorage.setItem("pourcentage humidite", json.main.humidity)
    document.getElementById("popultationdiv").style.display = "block"
}


// function getControle(city){
//     console.log(city)
//     console.log(departement)
//
//     fetch("https://data.economie.gouv.fr/api/records/1.0/search/?dataset=controle_techn&q=&facet=cct_code_dept&facet=code_postal&facet=cct_code_commune&facet=cct_denomination&facet=cat_vehicule_libelle&facet=cat_energie_libelle&facet=prix_visite&facet=prix_contre_visite_min&facet=prix_contre_visite_max&refine.cct_code_dept=" + departement + "&refine.cct_code_commune=" + city, {
//         method: 'GET',
//     }).then(function (response){
//         response.json().then(function (response) {
//             // response.forEach(function (element) {
//             //     let opt = document.createElement('option');
//             //     opt.value = element['code'];
//             //     opt.innerHTML = element['nom'];
//             //     com_select.appendChild(opt);
//             // });
//             console.log(response)
//             sessionStorage.setItem("records", response.records)
//         });
//     }).catch(function(err){
//         console.log("erreur:" + err);
//     });
//
//
// }

