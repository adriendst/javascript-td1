function chaineMajuscule(){
    var chaine = window.prompt('Quelle est la chaine ?');
    console.log(chaine)
    while(chaine.toUpperCase() != chaine){
        chaine = window.prompt('La chaine n\'est pas en majuscucle, saississez une chaine en majuscule');
    }
}

chaineMajuscule()

function randomChaineMajuscule(){
    let string = "a";
    let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let x = 0;
    let check = false;
    while (check === false){
        string = "";
        for ( let i = 0; i < 5; i++ ) {
            string += String.fromCharCode(65 + Math.random()*(123-65));
        }
        console.log(string);
        x++;
        if (string.toUpperCase() === string){
            let y = 0;
            let stringSplitted = string.split('');
            for ( let i = 0; i < string.length; i++ ) {
                if(maj.includes(stringSplitted[i])){
                    y++;
                }
                if(y===5){
                    check = true
                }
            }
        }
    }
    console.log(x + " iterations")
}

randomChaineMajuscule()

function chaineVoyelles(){
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    let chaine = "";
    let max = 100;
    for (let i = 0; i < (Math.round(Math.random()*max)+1); i++){
        chaine += voyelles[Math.round(Math.random()*5)];
    }
    console.log(chaine);
}

chaineVoyelles()

function nomPrenom(){
    let nom = prompt("Entrez votre nom");
    let prenom = prompt("Entrez votre prenom (mettre un - pour les prénoms composés)");
    let arrayPrenom = prenom.split('-');
    let nomPrenom = nom.toUpperCase() + " ";
    for (let i=0; i < arrayPrenom.length; i++){
        if (i>0){
            nomPrenom += "-";
        }
        nomPrenom += arrayPrenom[i].charAt(0).toUpperCase() + arrayPrenom[i].slice(1);
    }
    console.log(nomPrenom);
}

nomPrenom()

function chaineCryptee() {
    let chaine = prompt("Entrez la chaine a crypter");
    let arrayChaine = chaine.split('');
    for (let i = 0; i < arrayChaine.length; i++) {
        switch (arrayChaine[i].toUpperCase()) {
            case 'A':
                arrayChaine[i] = 4
                break;
            case 'E':
                arrayChaine[i] = 3
                break;
            case 'G':
                arrayChaine[i] = 6
                break;
            case 'I':
                arrayChaine[i] = 1
                break;
            case 'O':
                arrayChaine[i] = 0
                break;
            case 'S':
                arrayChaine[i] = 5
                break;
            case 'Z':
                arrayChaine[i] = 2
                break;
            default:
                break;
        }
    }
    let chaine2 = "";
    for (let i = 0; i < arrayChaine.length; i++) {
        chaine2 += arrayChaine[i]
    }
    console.log(chaine2)
}
chaineCryptee()

function jazzBundle(){
    let n = 20;
    for(let i=1; i<=n; i++){
        if(i%5===0 && i%3===0){
            console.log("Jazz Bundle")
        }
        else if(i%5===0){
            console.log("Bundle")
        }
        else if(i%3===0){
            console.log("Jazz")
        }
        else{
            console.log(i)
        }
    }
}

jazzBundle()

function jazzBundle2(){
    let n = 20;
    let jazzB;
    for(let i=1; i<=n; i++){
        if(i%5===0 && i%3===0){
            jazzB = "Jazz Bundle"
        }
        else if(i%5===0){
            jazzB = "Bundle"
        }
        else if(i%3===0){
            jazzB = "Jazz"
        }
        else{
            jazzB = i.toString()
        }
        console.log(jazzB)
    }
}

jazzBundle2()