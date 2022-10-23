let commune = sessionStorage.getItem('city')
let temperature = sessionStorage.getItem('temperature')
let ressentie = sessionStorage.getItem('ressentie')
let maximale = sessionStorage.getItem('maximale')
let minimale = sessionStorage.getItem('minimale')
let humidite = sessionStorage.getItem('pourcentage humidite')
let weather = sessionStorage.getItem('weather')


document.getElementById('commune').innerText = commune
document.getElementById('temperature').innerText = "La température actuelle est de : " + temperature
document.getElementById('ressentie').innerText = "La température ressentie est de : " + ressentie
document.getElementById('maximale').innerText = "La température maximale est de : " + maximale
document.getElementById('minimale').innerText = "La température minimale est de " + minimale
document.getElementById('humidite').innerText = "L'humidité est de : " + humidite + "%"
document.getElementById('weather').innerText = "La temps est : " + weather