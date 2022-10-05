var casemorpion;
var nombreCoups = 0;
var victoryplayerone = 0;
var victoryplayertwo = 0;
let joueur1 = "";
let joueur2 = "";

//gère l'affichage des zones au lancement
function affichage(){
    document.getElementById("menuvictoire").style.display = "none"
    document.getElementById("indicjoueur").style.display = "none"
    document.getElementById("gagnant").style.display ="none"
}

//crée un nouveau jeu de morpion
function generateTable() {
    document.getElementById("menu").style.display = "none"
    document.getElementById("menuvictoire").style.display = "block"
    document.getElementById("indicjoueur").style.display = "block"
    document.getElementById("indicjoueur").style.display = "block"
    let taille = prompt("Entrez la taille du morpion:");
    taille = parseInt(taille)
    while(taille < 3 || 8 < taille || !taille){
        taille = prompt("Entrez la taille du morpion (indiquez une taille entre 3 et 8):");
        taille = parseInt(taille)
    }
    while(joueur1 == "" || joueur2 =="" || !joueur1 || !joueur2) {
         joueur1 = prompt("Nom du joueur 1 (veuillez rentrer un nom):");
         joueur2 = prompt("Nom du joueur 2 (veuillez rentrer un nom):");
    }
    document.getElementById("joueur1").innerText = joueur1
    document.getElementById("joueur2").innerText = joueur2


    const tbl = document.createElement("table")
    document.getElementById("divmorpion").appendChild(tbl)
    const tblBody = document.createElement("tbody");


    casemorpion = Array(taille)
    for (let i = 0; i < taille; i++) {

        const row = tbl.insertRow(i)
        casemorpion[i] = Array(taille)

        for (let j = 0; j < taille; j++) {
            const cell = row.insertCell(j)
            casemorpion[i][j] = "t";
            cell.innerHTML = "<input type='button' id='case' onclick='changeCell(this, " + i + ',' + j  + ',' + taille + ")'/>";


        }
    }

    tbl.appendChild(tblBody);
    aQuiLeTour()
    document.getElementById("nul").innerText = ""
    document.getElementById("gagnant").style.display ="none"


}

//gère le changement de la case lors d'un clic sur une des zones du morpion
function changeCell (cellcontent, y, x, taille) {
    if (casemorpion[y][x] === "t") {
    if(nombreCoups%2 == 0){
        signe = 'x';
        casemorpion[y][x] = signe;
        cellcontent.value = signe;
        var mode = document.getElementById("mode")
        mode = mode.options[mode.selectedIndex].text
        conditionVictoireNCase(casemorpion,y,x,taille, mode)

    }else{
        signe = 'o';
        casemorpion[y][x] = signe;
        cellcontent.value = signe;
        var mode = document.getElementById("mode")
        mode = mode.options[mode.selectedIndex].text
        conditionVictoireNCase(casemorpion,y,x,taille, mode)

    }
    }
}

//désigne le joueur qui doit jouer
function aQuiLeTour(){
    if(nombreCoups%2==1) {
        document.getElementById("joueur").innerText = joueur2
    }
    else{
        document.getElementById("joueur").innerText = joueur1
    }
}

//condition de victoire pour le mode normal
function conditionVictoire3Case(casemorpion, y, x, taille){
    const bonX = "xxx";
    const bonY ="ooo";
    let row = [];
    casemorpion[y].forEach(element => (row += element));
    if(row.indexOf(bonX) !== -1 || row.indexOf(bonY) !== -1 ){
        designeVainqueur()
    }
    // if(row.indexOf(bonY) !== -1 ){
    //     console.log("victoire")
    // }

    let col = [];
    casemorpion.forEach(element => (col += element[x]));
    if(col.indexOf(bonX) !== -1 || col.indexOf(bonY) !== -1 ){
        designeVainqueur()
    }


    let diagonale = [];
    if(x===y){
        for( let i = 0; i<taille ; i++){
            diagonale+=casemorpion[i][i]
            if(diagonale.indexOf(bonX) !== -1 || diagonale.indexOf(bonY) !== -1){
                designeVainqueur()
            }
        }
    }

    let reversediagonale = [];
    if (x === taille - (y + 1)) {
        for (let i = 0; i < taille; i++) {
            reversediagonale += casemorpion[i][taille - (i + 1)];
        }
        if (reversediagonale.indexOf(bonX) !== -1 || reversediagonale.indexOf(bonY) !== -1) {
            designeVainqueur()
        }
    }

    if(nombreCoups == taille*taille){
        document.getElementById("nul").innerText = "Match nul"
        document.getElementById("victoirej1").innerText = victoryplayerone
        var table = document.getElementsByTagName("table")
        table[0].parentNode.removeChild(table[0]);
        document.getElementById("menu").style.display = "block"
        document.getElementById("indicjoueur").style.display = "none"
    }
}

//renvoie un string en fonction de la taille du jeu permettant de vérifier si une condition de victoire est remplie ou non pour le mode complet
function getBonStringX(taille){
    var bonX = "";
    for(i=0;i<taille;i++){
        bonX += "x"
    }
    return bonX;
}
function getBonStringY(taille){
    var bonY = "";
    for(i=0;i<taille;i++){
        bonY += "o"
    }
    return bonY;
}

//condition de victoire pour le mode complet
function conditionVictoireNCase(casemorpion,y,x,taille,mode){
    nombreCoups++


    aQuiLeTour()

    if(mode == "Normal"){
        conditionVictoire3Case(casemorpion, y, x, taille)
    }else {

        var bonString = [];
        bonString[0] = getBonStringX(taille)
        bonString[1] = getBonStringY(taille)

        let row = [];
        casemorpion[y].forEach(element => (row += element));
        if (row.indexOf(bonString[0]) !== -1 || row.indexOf(bonString[1]) !== -1) {
            designeVainqueur()
        }

        let col = [];
        casemorpion.forEach(element => (col += element[x]));
        if (col.indexOf(bonString[0]) !== -1 || col.indexOf(bonString[1]) !== -1) {
            designeVainqueur()
        }

        let diagonale = [];
        if (x === y) {
            for (let i = 0; i < taille; i++) {
                diagonale += casemorpion[i][i]

                if (diagonale.indexOf(bonString[0]) !== -1 || diagonale.indexOf(bonString[1]) !== -1) {
                    designeVainqueur()
                }
            }
        }

        let reversediagonale = [];
        if (x === taille - (y + 1)) {
            for (let i = 0; i < taille; i++) {
                reversediagonale += casemorpion[i][taille - (i + 1)];
            }
            if (reversediagonale.indexOf(bonString[0]) !== -1 || reversediagonale.indexOf(bonString[1]) !== -1) {
                designeVainqueur()
            }
        }
    }
    if(nombreCoups == taille*taille){
        document.getElementById("nul").innerText = "Match nul"
        document.getElementById("victoirej1").innerText = victoryplayerone
        var table = document.getElementsByTagName("table")
        table[0].parentNode.removeChild(table[0]);
        document.getElementById("menu").style.display = "block"
        document.getElementById("indicjoueur").style.display = "none"
    }

}




// désigne le vainqueur en fonction du nombre de coups joué
function designeVainqueur(){
    if(nombreCoups%2===1){
        victoryplayerone++
        document.getElementById("victoirej1").innerText = victoryplayerone + " -"
        var table = document.getElementsByTagName("table")
        table[0].parentNode.removeChild(table[0]);
        document.getElementById("gagnant").style.display ="block"
        document.getElementById("joueurgagnant").innerText = joueur1
        nombreCoups = 1;
    }else{
        victoryplayertwo++
        document.getElementById("victoirej2").innerText = victoryplayertwo
        var table = document.getElementsByTagName("table")
        table[0].parentNode.removeChild(table[0]);
        document.getElementById("gagnant").style.display ="block"
        document.getElementById("joueurgagnant").innerText = joueur2
        nombreCoups = 0;
    }
    document.getElementById("menu").style.display = "block"
    document.getElementById("indicjoueur").style.display = "none"
}