import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent { 

  heros: string [] = ['Hulk','IronMan','SpiderMan','AntMan','Thor'];
  heroDeleted: string = ''; 
  deleteHero(): void {
    console.log('borrado heroe');
     this.heroDeleted = this.heros.pop() || '';       
  }

}
