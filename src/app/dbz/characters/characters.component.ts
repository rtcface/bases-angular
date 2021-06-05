import { Component, Input} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'  
})

export class CharactersComponent  {

//  @Input() character: Character[]=[];

get character(){
  return this.dbzServices.charcater;
}

constructor( private dbzServices:DbzService ) {}



}
