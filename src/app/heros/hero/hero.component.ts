import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'    
})
export class HeroComponen{
    name: string = 'IronMan';
    old : number = 45; 

    get nombreCapitalizado(): string{
        return this.name.toUpperCase();
    }

    getName(): string{
        return `${ this.name } - ${ this.old }`;
    }

    changeName(): void{
        this.name = 'SpiderMan';

    }

    changeOld(): void {
        this.old = 18;
    }

} 