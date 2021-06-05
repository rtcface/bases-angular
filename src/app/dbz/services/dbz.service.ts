import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _character: Character [] = [
        { 
            name: 'Goku',
            power: 18000
        },
        { 
            name: 'Vegueta',
            power: 9000
        }        
    ];
    
    get charcater(): Character[] {
        return [...this._character];
    }
    constructor() {
        //console.log('Servicion Inicializdo');      
    }

    addCharacter(character: Character){
        this._character.push(character);
    }
    
}