import { Injectable } from '@angular/core';
import{Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Persona} from './Persona';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  private APIUrl="http://127.0.0.1:3000/personas";
  constructor(private http:HttpClient) { }

  Mostrar():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.APIUrl);
  }


  
DamePersona(nombre:string):Observable<Persona>{
  return this.http.get<Persona>(this.APIUrl+'/'+nombre);
}



}