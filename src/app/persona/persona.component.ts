import { Component, OnInit } from '@angular/core';
import {Persona }from '../Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona;
  profesor:Persona;
  constructor() { }

  ngOnInit() {
  }
  Mostrar(){
    console.log('In Mostrar Function');
    this.persona = new Persona('Binod','2468','Student',10);
    this.profesor=new Persona('Valero','2468','Profesor',10);

   
  }

}
