import { FormControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class ArticlesValidators {

    static etrePositif(maValeur: FormControl): ValidationResult{
        console.log("etrePositif appelé..");
        if(maValeur.value <= 0){
            return{"etrePositif" : true}
        }
        return null;

    }




    // static etreMineur(control: FormControl): ValidationResult {
    //     console.log('PersonneValidators etreMineur() appelée ...');
    //     const maDate = new Date(control.value);
    //     maDate.setFullYear(maDate.getFullYear() + 18);
    //     if (maDate > new Date()) {
    //         console.log('Etre mineur ok');
    //         return { "etreMineur": true };
    //     }
    //     return null;
    // }
}