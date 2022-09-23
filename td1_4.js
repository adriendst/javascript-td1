function tabAddAlgo(){
    tab = [14, 4 ,8];
    let sum = 0;

    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    console.log(sum);
}


// tabAddAlgo()

function tabAddProgFonctionelle(){
    tab = [14, 4 ,8];
    let sum = 0;
    tab.forEach(element => sum += element);
    console.log(sum);
}

// tabAddProgFonctionelle()


function tabEntierPair(){
    let pair = 0;
    tab = [3, 4 ,5,9,2,4]
    for (let i = 0; i < tab.length; i++) {
        if (tab[i]%2==0){
            pair++;
        }

    }
    console.log(pair)
}

// tabEntierPair()

function sortTab(){
    function merge(left, right){
        let tab = [];
        let l = 0;
        let r = 0;
        while (l < left.length && r < right.length){
            if (left[l] < right[r]){
                tab.push(left[l++]);
            } else {
                tab.push(right[r++]);
            }
        }
        return tab.concat(left.slice(l)).concat(right.slice(r));
    }

    function sortTab(tab){
        if (tab.length < 2) {
            return tab;
        }
        let mid = Math.floor(tab.length / 2);
        let right = tab.slice(mid);
        let left = tab.slice(0, mid);
        let all = merge(sortTab(left), sortTab(right));
        all.unshift(0, tab.length);
        tab.splice.apply(tab, all);
        return tab;
    }

    let tab1 = [2, 9, 45, 5];
    let tab2 = [7, 56, 1, 0];
    let sortedTab1 = sortTab(tab1);
    let sortedTab2 = sortTab(tab2);
    let tab3 = [...sortedTab1, ...sortedTab2];
    let sortedTab3 = sortTab(tab3);

    console.log(sortedTab3);
}

// sortTab()

function rechercheDichotomique(){
    function merge(left, right){
        let tab = [];
        let l = 0;
        let r = 0;
        while (l < left.length && r < right.length){
            if (left[l] < right[r]){
                tab.push(left[l++]);
            } else {
                tab.push(right[r++]);
            }
        }
        return tab.concat(left.slice(l)).concat(right.slice(r));
    }

    function sortTab(tab){
        if (tab.length < 2) {
            return tab;
        }
        let mid = Math.floor(tab.length / 2);
        let right = tab.slice(mid);
        let left = tab.slice(0, mid);
        let all = merge(sortTab(left), sortTab(right));
        all.unshift(0, tab.length);
        tab.splice.apply(tab, all);
        return tab;
    }

    function dichotomie(tab, val){
        let a = 0;
        let b = tab.length - 1;
        while(a<=b){
            let mid = Math.floor((a+b)/2);
            if (tab[mid] === val){
                return mid;
            }
            else if (tab[mid] < val){
                a = mid + 1;
            }
            else{
                b = mid -1;
            }
        }
        return -1;
    }

    let tab1 = [5, 12, 7, 65];
    let sortedTab1 = sortTab(tab1);
    console.log(sortedTab1);
    console.log(dichotomie(sortedTab1, 12));

}


// rechercheDichotomique()


function plusGrandPair(...valeurs){
    pair = [];
    for (let i = 0; i < valeurs.length; i++)
        if(valeurs[i] % 2 == 0){
            pair.push(valeurs[i])
        }
    console.log(Math.max.apply( Math, pair ))
}

// plusGrandPair(6, 4, 7, 8, 15,27, 24)