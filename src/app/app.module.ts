import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerosModule } from './heros/heros.module';
import { CounterModule } from './counter/counter.mudule';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HerosModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
