import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  /**
   *
   */
  // get character(): Character[] {
  //   return this.dbzService.character;
  // } 
  //character: Character []=[];
  constructor( private dbzService: DbzService ) { //private dbzService: DbzService
    //this.character = this.dbzService.character;
  }
  // add( event:any ){
  //   event.preventDefault();
  //   console.log(event);
  // }

 

  // changedName( event:any ){
  //   console.log( event.target.value );
  // }

 

  newCharacter: Character = {
    name: 'Maestro Roshi',
    power:1500
    
  }

  // addNewCharacter( character: Character ){
  //   console.log(character);
  //   this.character.push( character );
  // }
  
  

}
