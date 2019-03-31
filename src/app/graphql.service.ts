import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Persona} from './Persona';

import { Apollo } from 'apollo-angular';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import {PersonaGQL,Query,Mutation,CreatPersonaInput,updatePersona} from './types';
@Injectable({
  providedIn: 'root'
})
export class GraphqlService 
{
  plist: Observable<any>;
  private APIUrl="http://127.0.0.1:3000/personas";

  constructor(private http:HttpClient,
    private apollo: Apollo
    ) { }

    getpersona(username:string):Observable<any>
    {
      const query =gql`
      query($name:String!) {
        getpersona(name:$name){
          username
          password
          rol
          puntos
        }
      }
      `
        this.plist = this.apollo.watchQuery<Query>({
        query: query,
        variables:{
          name:username
        }
        
      })
      .valueChanges.pipe(map (result => result.data.getpersona));
      
      //this.plist.forEach(element => {console.log(element) });
     
      return this.plist;
    }
    Mostrar():Observable<Persona[]>
    {
      const query =gql`
      query {
        personas{
          username
          password
          rol
          puntos
        }
      }
      `
        this.plist = this.apollo.watchQuery<Query>({
        query: query
        
      })
      .valueChanges.pipe(map (result => result.data.personas));
      
     // this.plist.forEach(element => {console.log(element) });
     
      return this.plist;
    }
  
    DamePersonaGQL(username:String):Observable<any>
    {
           return this.http.get<Persona>(this.APIUrl+'/'+username);
    }
  DamePersona(username:string):Observable<Persona>{
    return this.http.get<Persona>(this.APIUrl+'/'+username);
  }
  PonPersona(persona:Persona):Observable<any>{
    console.log(persona);
    return this.http.post<any>(this.APIUrl,persona)
  
  }
  
  Incrementar(persona:Persona):Observable<any>{
    
    const mutation =gql`
    mutation($name:String!,$points:Int!) {
      updatePersona(username:$name,data:{puntos:$points}){
        username
        password
        rol
        puntos
      }
    }
    `
      this.plist = this.apollo.mutate<Mutation>({
      mutation: mutation,
      variables:{
        name:persona.username,
        points:persona.puntos++
      }

    })
    .pipe(map (result => result.data.updatePersona));
   
    //this.plist.forEach(element => {console.log(element) });
    console.log("11111111111111")
    
    return this.plist;
   }
  
   Eliminar(username:string):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/'+username)
   }
  
  }
  