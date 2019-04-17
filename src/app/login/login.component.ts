import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Persona } from '../Persona';
import { DbServiceService } from '../db-service.service';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { PersonaGQL, Query } from '../types';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: string;
  plist: Observable<any>;

  constructor(private servicioLista: ListaService,
    private dbService: DbServiceService,
    private grapqlservive: GraphqlService

  ) { }

  ngOnInit() {
  }

  Autentificar2() {
    this.grapqlservive.getpersona(this.username).subscribe(
      persona => {
        if (persona != undefined)
          console.log(persona.username)
        else
          window.alert("username incorrect")

      });

  }

  test() {
    console.log("aaaaaa function"); 
    this.grapqlservive.test();
  }

  Login() {

    this.grapqlservive.getpersona(this.username).subscribe(
      persona => {

        if (persona != undefined) {

          if (persona.rol === "professor") {
            window.location.href = '/profesor';
            console.log()
          }

          else {
            console.log("Log in " + persona.username);
            window.location.href = './alumno/' + persona.username;

          }
        }
        else
          window.alert("username incorrect")

      }

    );

  }
  Autentificar() {
    this.dbService.DamePersona(this.username).subscribe(
      persona => {
        if (persona != null) {
          if (persona.rol === "Profesor") { window.location.href = '/profesor'; }

          else {
            window.location.href = './alumno/' + persona.username;
            console.log("Log in " + persona.username);

          }
        }

      });
  }

}
