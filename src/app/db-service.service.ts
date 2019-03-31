import { Injectable ,OnInit} from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Persona} from './Persona';

import { Apollo } from 'apollo-angular';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import {PersonaGQL,Query} from './types';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  plist: Observable<any>;
  
  private APIUrl="http://127.0.0.1:3000/personas";
  constructor(private http:HttpClient,
    private apollo: Apollo
    ) { }
    
    test(username:string):Observable<any>
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

  Mostrar():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.APIUrl);
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
  persona.puntos++;
  
  return this.http.put<any>(this.APIUrl+'/'+persona.username,persona)
 }

 Eliminar(username:string):Observable<any>{
  return this.http.delete<any>(this.APIUrl+'/'+username)
 }

}
