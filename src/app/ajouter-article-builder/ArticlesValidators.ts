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


}