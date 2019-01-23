import { Component, OnInit } from '@angular/core';
import {Persona } from '../Persona';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
lista: Persona []=[];
  constructor() { }
p4:Persona;
  ngOnInit() {
  }
  Mostrar(){
    this.lista[0]=new Persona("Binod","AAA","Student",0);
    this.lista[1]=new Persona("Sabin","BBB","Student",0);
    this.lista[2]=new Persona("Yelan","CCC","Student",0);
    this.lista[3]=new Persona("Bishal","DDD","Student",0);
    this.p4 =new Persona("Miguel","EEE","Profesor",0);
    this.lista.push(this.p4);
  }
  Incrementar (nombre :string){
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
  }


  EliminarPuntos (nombre :string){
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos --;
  }
  AddUser(nombre:string,pass:string,rol:string,puntos:number){
    this.lista[this.lista.length+1]= new Persona(nombre,pass,rol,puntos);
  }

}
