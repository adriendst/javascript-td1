
//article 0
let firsth2 = document.createElement("h2");
firsth2.innerHTML = "Article 0 - Disqualification";
let firstarticle = document.createElement("p")
firstarticle.innerHTML = "Interdit de doubler sous peine de disqualification"
let body =document.querySelector("body");
body.insertBefore(firstarticle, body.firstChild)
body.insertBefore(firsth2, body.firstChild)

let h2 =document.querySelectorAll("h2");


function articleTitleToUpper(){
    let h2length =document.querySelectorAll("h2").length
    for(let i=0; i<h2length; i++) {
        let h2 = document.getElementsByTagName("h2")[i];
        let h2string = h2.innerText;
        let goodstring = h2string.toUpperCase()
        document.getElementsByTagName("h2")[i].innerText=goodstring
    }
}
articleTitleToUpper()

function replaceArticleNumber(){
    let h2length =document.querySelectorAll("h2").length
    for(let i=0; i<h2length; i++){
        let h2 =document.getElementsByTagName("h2")[i];
        let h2string = h2.innerText;
        let number = h2string.slice(8,10)
        let title = h2string.slice(10)
        title = title.trim()
        let article = h2string.slice(0,7)
        number = number.trim()
        number = parseInt(number)
        number = number +1
        let goodstring2 = article+ " " + number +" "+ title
        document.getElementsByTagName("h2")[i].innerText=goodstring2


    }
}

replaceArticleNumber()

function colorArticle(){
    let h2length =document.querySelectorAll("h2").length

    for(let i=0; i<h2length; i++) {
        if(i%2!==0) {
            let element =document.getElementsByTagName("h2")[i];
            let sibling= element.nextElementSibling
            document.getElementsByTagName("h2")[i].style.backgroundColor = "blue"
            while(sibling.tagName !=="H2"){
                if(sibling.nextElementSibling==null){
                    break
                }
                sibling.style.backgroundColor ="blue"
                sibling= sibling.nextElementSibling
            }


        }


    }
}
colorArticle()

function reverseDate(){
    let ullength =document.querySelectorAll("ul").length

    ullength = parseInt(ullength) - 1
    console.log(ullength)
    let dates=[]
    for(let i=0; i<ullength; i++) {
        if (i % 2 == 0) {
            element = document.getElementsByTagName("ul")[i]
            // sibling= element.nextElementSibling
            // console.log(sibling)
            dates.push(element)



        }
    }



    dates.reverse()
    console.log(dates)

    let count=0;
    for(let i=0; i<ullength; i++) {
        if (i % 2 == 0) {
            element = document.getElementsByTagName("ul")[i]
            element.innerHTML = dates[count].innerHTML
            console.log(element)
            count++




        }
    }

}



reverseDate()