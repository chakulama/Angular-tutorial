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
 message:string;

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
        
         else{
          window.location.href='./alumno/'+persona.nombre;
        }
    }
    else
    { this.message="userName or Password is Incorrect";
      alert(this.message);
    }
    
   
  }
  
}
