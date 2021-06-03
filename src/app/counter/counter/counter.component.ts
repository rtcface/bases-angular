import { templateSourceUrl } from '@angular/compiler';
import { Component } from '@angular/core';
@Component({
    selector: 'app-counter',
    templateUrl:'counter.component.html'
})
export class CounterComponent{
    contador: number = 10;
    title   : string = 'Contador App';
    base    : number = 5;
    sumar(){
      this.contador++;
    }
    restar(){
      this.contador--;
    }
    acumular(value: number){
      this.contador += value;
    } 
}