import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import {Persona} from '../Persona';
import {DbServiceService} from '../db-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string;
  password:string;
 message:string;

  constructor(private servicioLista: ListaService,
              private dbService:DbServiceService) { }

  ngOnInit() {
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
