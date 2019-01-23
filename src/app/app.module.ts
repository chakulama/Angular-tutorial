import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PersonaComponent } from './persona/persona.component';
import { ProfesorComponent } from './profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PersonaComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
