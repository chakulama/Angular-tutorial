import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import {Persona} from '../Persona';
import {DbServiceService} from '../db-service.service';
import { Apollo } from 'apollo-angular';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import {PersonaGQL,Query} from '../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string;
  password:string;
 message:string;
 plist: Observable<any>;

  constructor(private servicioLista: ListaService,
              private dbService:DbServiceService
              
                     ) { }

                     ngOnInit() {
                      } 

 Autentificar2(){
this.dbService.test(this.nombre).subscribe(
  persona=> {
    if (persona!=undefined)
       console.log (persona.username)
     else
     window.alert("username incorrect")  

    });

                      }
  Login(){
   
    this.dbService.test(this.nombre).subscribe(
      persona=> 
      {
        
        if (persona != undefined)
        {
         
          if (persona.rol ==="Profesor")
            { window.location.href='/profesor';}
                                                                   
          else{
            console.log("Log in "+persona.username );
              window.location.href='./alumno/'+persona.username;
              
            }
        }
        else
        window.alert("username incorrect") 
         
      } 
         
          );
   
  }
  Autentificar()
  {
    this.dbService.DamePersona(this.nombre).subscribe(
                                                  persona=> {
                                                    if (persona != null)
                                                    {
                                                      if (persona.rol ==="Profesor")
                                                        { window.location.href='/profesor';}
                                                                                                               
                                                      else{
                                                          window.location.href='./alumno/'+persona.nombre;
                                                          console.log("Log in "+persona.nombre );
                                                          
                                                        }
                                                    }
                                                   
                                                      } );
   }
    
}
