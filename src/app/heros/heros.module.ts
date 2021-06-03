import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponen } from './hero/hero.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroComponen,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]

})
export class HerosModule{

}