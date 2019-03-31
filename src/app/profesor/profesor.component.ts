import { Component, OnInit } from '@angular/core';
import {Persona } from '../Persona';
import {ListaService} from '../lista.service';
import {Location} from '@angular/common';
import {DbServiceService} from '../db-service.service';
import {GraphqlService} from '../graphql.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
lista: Persona []=[];
username :string;
password :string;
rol:string;
puntos:number;
aaa:Persona;
  constructor(private servicioLista :ListaService,
              private location:Location,
              private dbService:DbServiceService,
              private graphqlservice:GraphqlService) { }

  ngOnInit() {
  }
  Mostrar(){
    //this.lista=this.servicioLista.Mostrar();
    //console.log('Voy a pedir');
    //this.dbService.Mostrar().subscribe(lista=> {this.lista=lista;});
    this.graphqlservice.Mostrar().subscribe(lista=> {
      this.lista=lista.filter(li=>li.rol==="Student");
    });
      
  }

  PonPersona(persona:Persona){
   
    //console.log(persona);
   
   // this.dbService.PonPersona(new Persona(this.username,this.password,this.rol,this.puntos)).subscribe(()=>this.Mostrar());
   this.graphqlservice.PonPersona(new Persona(this.username,this.password,this.rol,this.puntos)).subscribe(()=>this.Mostrar());
   console.log("new person added:"+persona.username);

  }

  Incrementar (persona :Persona){
    //this.dbService.Incrementar(persona).subscribe(()=>this.Mostrar());
    console.log("Initial Point:"+persona.puntos) 
    this.graphqlservice.Incrementar(persona).subscribe(()=>this.Mostrar()); 
    console.log("Point added:"+persona.puntos) 
  }

  Eliminar(username:string){
    console.log(username);
    this.dbService.Eliminar(username).subscribe(()=>this.Mostrar());  
    
  }

  SetZeroPuntos (username :string){
    this.lista=this.servicioLista.SetZeroPuntos(username);
  }

  ClearPuntos (){
    this.lista=this.servicioLista.ClearPuntos();
  }

  AddUser(username:string,password:string,rol:string,puntos:number){
    this.lista[this.lista.length+1]= new Persona(username,password,rol,puntos);
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

StudentDetails(username:string)
{ 
  this.aaa=this.servicioLista.StudentDetails(username);
  alert(this.aaa.username + " "+this.aaa.password+" "+this.aaa.puntos);
  
}

}
