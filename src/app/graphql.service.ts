import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './Persona';

import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { PersonaGQL, Query, Mutation, CreatPersonaInput, updatePersona, User } from './types';
@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  plist: Observable<any>;
  private APIUrl = "http://127.0.0.1:3000/personas";

  constructor(private http: HttpClient,
    private apollo: Apollo
  ) { }

  test() {
    console.log("graphql test");
    const testquery = gql`
    {
      personaGQL(where:{username:"Binod"})
  {
    username
    password
    rol
    puntos
  }
}
      `
    this.plist = this.apollo.watchQuery<any>({
      query: testquery
    })
      .valueChanges.pipe(map(result => result.data.personaGQL));

    this.plist.forEach(element => { console.log(element) });

  }

  getpersona(username: string): Observable<any> {
    console.log("getpersonaaaa function");
    const query = gql`
      query($name:String!) 
      {
        personaGQL(where:{username:$name})
            {
              username
              password
              rol
              puntos
            }
        }
      
      `
    this.plist = this.apollo.watchQuery<Query>({
      query: query,
      variables: {
        name: username
      }

    })
      .valueChanges.pipe(map(result => result.data.personaGQL));

    this.plist.forEach(element => { console.log(element) });

    return this.plist;
  }
  Mostrar(): Observable<Persona[]> {
    const query = gql`
      query {
        personaGQLs{
         username
         rol
         puntos
  }
      }
      `
    this.plist = this.apollo.watchQuery<Query>({
      query: query

    })
      .valueChanges.pipe(map(result => result.data.personaGQLs));

    this.plist.forEach(element => { console.log(element) });

    return this.plist;
  }

  ClearPuntos() {

  }

  DamePersonaGQL(username: String): Observable<any> {
    return this.http.get<Persona>(this.APIUrl + '/' + username);
  }
  DamePersona(username: string): Observable<Persona> {
    return this.http.get<Persona>(this.APIUrl + '/' + username);
  }
  PonPersona(persona: Persona): Observable<any> {
    console.log(persona);

    return this.http.post<any>(this.APIUrl, persona)

  }

  Incrementar(persona: Persona): Observable<any> {
    persona.puntos =persona.puntos +1
    const mutation = gql`
    mutation($name:String!,$points:Int!) {
       updatePersonaGQL(data:{puntos:$points},where:{username:$name})
       {
        username
        rol
        puntos
      }
    }
    `
    this.plist = this.apollo.mutate<Mutation>({
      mutation: mutation,
      variables: {
        name: persona.username,
        points: persona.puntos
      }

    })
      .pipe(map(result => result.data.updatePersonaGQL));

    //this.plist.forEach(element => {console.log(element) });
    
    return this.plist;
  }

  Eliminar(username: string): Observable <any> {
    const mutation = gql`
    mutation($name:String!) {
      deletePersonaGQL(where:{username:$name}){
        username
        rol
      }
    }
    `
    this.plist = this.apollo.mutate<Mutation>({
      mutation: mutation,
      variables: {
        name: username
      }

    })
      .pipe(map(result => result.data.deletePersonaGQL));

    this.plist.forEach(element => {console.log(element) });   
    return this.plist;
  }

}