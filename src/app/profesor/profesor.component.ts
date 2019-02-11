import { Component, OnInit } from '@angular/core';
import {Persona } from '../Persona';
import {ListaService} from '../lista.service';
import {Location} from '@angular/common';
import {DbServiceService} from '../db-service.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
lista: Persona []=[];
nombre :string;
password :string;
rol:string;
puntos:number;
aaa:Persona;
  constructor(private servicioLista :ListaService,
              private location:Location,
              private dbService:DbServiceService) { }

  ngOnInit() {
  }
  Mostrar(){
    //this.lista=this.servicioLista.Mostrar();
    console.log('Voy a pedir');
    this.dbService.Mostrar().subscribe(lista=> {this.lista=lista;
      console.log(this.lista)});
    
  }

  PonPersona(persona:Persona){
   
    //console.log(persona);
   
    this.dbService.PonPersona(new Persona(this.nombre,this.password,this.rol,this.puntos)).subscribe(()=>this.Mostrar());
    console.log("new person added:"+persona.nombre);

  }

  Incrementar (persona :Persona){
    this.dbService.Incrementar(persona).subscribe(()=>this.Mostrar()); 
    console.log("Point added:"+persona.puntos) 
  }


  Eliminar(nombre:string){
    console.log(nombre);
    this.dbService.Eliminar(nombre).subscribe(()=>this.Mostrar());  
    
  }





  SetZeroPuntos (nombre :string){
    this.lista=this.servicioLista.SetZeroPuntos(nombre);
  }


  ClearPuntos (){
    this.lista=this.servicioLista.ClearPuntos();
  }


  AddUser(nombre:string,password:string,rol:string,puntos:number){
    this.lista[this.lista.length+1]= new Persona(nombre,password,rol,puntos);
  }

  
  OrdenarPuntos(){
    this.lista=this.servicioLista.OrdenarPuntos();
  }
  

  OrdenarAlfabeticamente(){
    this.lista=this.servicioLista.OrdenarAlfabeticamente();
    
  }
 
Goback(){
  console.log('Go back');
  this.location.back();
}

StudentDetails(nombre:string)
{ 
  this.aaa=this.servicioLista.StudentDetails(nombre);
  alert(this.aaa.nombre + " "+this.aaa.password+" "+this.aaa.puntos);
  
}


}
