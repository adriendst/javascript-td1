import {getSum41, getMaxEven45, getNumberOfEven42, binarySearch44} from "./array_utils.js";

// getNumbers()
var countelement = 1;
let add = document.getElementById("addelement");
add.addEventListener("click", addElement);

const results = document.getElementById("results");
results.addEventListener("click", getNumbers)




var numbers =[];

export function getNumbers(){
    let index = 0;
    for(let i=1; i<=countelement;i++){
         let number = document.getElementById("inputElement"+i).value
        numbers[index] = number
        index++
    }

     for(let i=0;i<numbers.length;i++){
        numbers[i] = parseInt(numbers[i])

     }
     let nombredichotomique = document.getElementById("elmntrecherche").value
     nombredichotomique = parseInt(nombredichotomique)

    if(!isNaN(numbers[0])) {
        //addition
        let somme = getSum41(numbers)
        document.getElementById("somme").innerText = somme
        //nombre entier pair
        let nombrepair = getNumberOfEven42(numbers)
        document.getElementById("nombrepair").innerText = nombrepair
        //plus grand pair
        let plusgrandpair = getMaxEven45(...numbers)
        if(plusgrandpair === -9007199254740991){
            document.getElementById("plusgrandpair").innerText = "Pas de nombres pairs"
        }else {
            document.getElementById("plusgrandpair").innerText = plusgrandpair
        }
        //recherche dicho

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                var trie = false;
                break;
            } else {
                var trie = true;
            }
        }
        if (trie == true) {
            let dichotomique = binarySearch44(numbers, nombredichotomique)
            document.getElementById("positionelement").innerText = dichotomique
        } else {
            document.getElementById("positionelement").innerText = "Pour effectuer la recherche dichotomique les élements doivent être croissant"
        }
        if(document.getElementById("elmntrecherche").value==""){
            document.getElementById("positionelement").innerText = "Entrez un élément à rechercher"

        }
    }
}

function addElement(){
    document.getElementById("element"+countelement).removeChild(document.getElementById("addelement"))
    countelement++;
    let button =  document.getElementById("elementrecherche")
    let newelement = document.createElement("div")
    newelement.setAttribute("id", "element"+countelement)
    newelement.setAttribute("class", "element")

    newelement.innerHTML = "<label id='element"+countelement+"'> Element " + countelement +"</label>" + " " +
        "<input id='inputElement"+countelement+"'>" + " " +
        "<button id='addelement'>+</button>"
    document.getElementById("menu").insertBefore(newelement,button)
    changeButton()
}

function changeButton(){
    add = document.getElementById("addelement");
    add.addEventListener("click", addElement);

}