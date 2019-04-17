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
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AlumnoComponent } from './alumno/alumno.component'; 
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PersonaComponent,
    ProfesorComponent,
    LoginComponent,
    AlumnoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    AppRoutingModule,
    
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri1='http://localhost:4000/'
    const uri2=' http://localhost:60000/simple/v1/cjuh6o1qt00040111s5hw8fro'
const uri3='http://localhost:4466/'
    apollo.create({
      link: httpLink.create({uri: uri3}),
      cache: new InMemoryCache()
    });
  }

 }
