import {morpioncomplet} from './morpioncomplet.js';

export class morpionsimple extends morpioncomplet {

    // getGrille() {
    //     return super.getGrille();
    // }

    constructor(taille) {
        super(taille)
    }


    //fonction mode Simple [METIER]
    aGagne3ParmiN(symbole, y, x) {
        const aTrouver = symbole.repeat(3);

        // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
        let ligne = '';
        this.getGrille()[y].forEach(element => (ligne += element));
        if (ligne.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
        let col = '';
        this.getGrille().forEach(element => (col += element[x]));
        if (col.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné diagonale
        if (x === y) {
            let diagonale = '';
            for (let lc = 0; lc < this.getTaille(); lc++) {
                diagonale += this.getGrille()[lc][lc];
            }
            if (diagonale.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === this.getTaille() - (y + 1)) {
            let inverse = '';
            for (let lc = 0; lc < this.getTaille(); lc++) {
                inverse += this.getGrille()[lc][this.getTaille() - (lc + 1)];
            }
            if (inverse.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        return false;
    }

}