import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PersonaComponent } from './persona/persona.component';
import { ProfesorComponent } from './profesor/profesor.component';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PersonaComponent,
    ProfesorComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
