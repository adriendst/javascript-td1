let city = sessionStorage.getItem('city')
let departement = sessionStorage.getItem('departement')
let a;


function getControle(){
    document.getElementById('departement').innerText = "Département : " + departement
    url = "https://data.economie.gouv.fr/api/records/1.0/search/?dataset=controle_techn&q=&facet=cct_code_dept&facet=code_postal&facet=cct_code_commune&facet=cct_denomination&facet=cat_vehicule_libelle&facet=cat_energie_libelle&facet=prix_visite&facet=prix_contre_visite_min&facet=prix_contre_visite_max&refine.cct_code_dept=" + departement
    if(city){
        url = url + "&refine.cct_code_commune=" + city
        var titreville = document.getElementById('city')
        titreville.innerText="Ville : " + city
    }
    else{
        var cityh1 = document.getElementById('city')
        cityh1.parentNode.removeChild(cityh1)
        console.log("coucou")
    }

    fetch(url, {
        method: 'GET',
    }).then(function (response){
        response.json().then(function (response) {
            data = response.records
            var table = document.getElementById("table")
            console.log(response)

            for(let i = 1; i<data.length+1; i++){
                a = i - 1
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = data[a].fields.cct_denomination;
                cell2.innerHTML = data[a].fields.cct_adresse;
                cell3.innerHTML = data[a].fields.prix_visite + " euros";
            }

        });
    }).catch(function(err){
        console.log("erreur:" + err);
    });


}

getControle()