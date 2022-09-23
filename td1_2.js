function HelloWorld(){
    console.log("Hello World");
}

HelloWorld();


function showTypes(){

    function getType(variable){
        console.log(typeof variable)
    }

    let tab = [ , 'blabla', "blabla", `blabla ${x}`, 9, 2.5, true, undefined, null, [1,2,3], new Array(), {}, {"promo":"lpwmce", "nb":25}, new Date(), function (){alert('toto')}, 42n]

    for (let i=0; i < tab.length; i++){
        x = tab[i]
        getType(x)
    }

    var x
}

showTypes()



function conversion(){
    let number = 12.5;
    console.log('A PARTIR DU NUMBER')
    console.log(number, typeof number )
    console.log(parseInt(number))
    console.log(Number.parseInt(number))
    console.log(parseFloat(number))
    console.log(Number.parseFloat(number))
    console.log(Number(number))
    console.log(Math.floor(number))
    console.log(Math.ceil(number))
    console.log(Math.round(number))
    number = number.toString();
    console.log('A PARTIR DUNE CHAINE')
    console.log(number, typeof number)
    console.log(parseInt(number))
    console.log(Number.parseInt(number))
    console.log(parseFloat(number))
    console.log(Number.parseFloat(number))
    console.log(Number(number))
    console.log(Math.floor(number))
    console.log(Math.ceil(number))
    console.log(Math.round(number))

}

// conversion()


function equality(){
    let b=false;
    let n=0;
    let s='0';
    let tab = [];
    let o = {};

    let tab2 = [b, n, s, tab, o];
    let tab21 = tab2;
    console.log(tab2)

    for(let i = 0; i<tab2.length; i++){
        console.log("comparaison ==")
        for(let j = 0; j<tab21.length; j++){
            console.log("comparaison '==' de " + tab2[i] + " et de " + tab21[j] )
            console.log(tab2[i] == tab21[j]);
        }
        console.log("comparaison ===")
        for(let j = 0; j<tab21.length; j++){
            console.log("comparaison '===' de " + tab2[i] + " et de " + tab21[j] )
            console.log(tab2[i] === tab21[j]);
        }
    }

}

// equality()



