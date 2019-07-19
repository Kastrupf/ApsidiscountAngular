import { Categorie } from './Categorie';
import { Constructeur } from './Constructeur';

export class Article {

    constructor(public id: number,
        public designation: string,
        public constructeur: Constructeur,
        public content: string,
        public dateMiseEnLigne: Date,
        public image: string,
        public categorie: Categorie,
        public stock: number,
        public prix: number) {
    }


}