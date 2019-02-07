import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import {Persona} from '../Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string;
  password:string;
 

  constructor(private servicioLista: ListaService) { }

  ngOnInit() {
  }
  Autentificar(){
   let persona:Persona;
    let res: Boolean;
    persona= this.servicioLista.Autentificar(this.nombre,this.password);
    if (persona != null)
    {
      if (persona.rol ==="Profesor")
         window.location.href='/profesor';
    }
    else{
      console.log("You are not a profesor!!");
    }
   
  }
  
}
