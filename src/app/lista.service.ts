import { Injectable } from '@angular/core';
import { Persona} from './Persona';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  lista:Persona [] =[];
  constructor() {
    this.lista[0]=new Persona("Binod","AAA","Student",0);
    this.lista[1]=new Persona("Sabin","BBB","Student",0);
    this.lista[2]=new Persona("Yelan","CCC","Student",0);
    this.lista[3]=new Persona("Bishal","DDD","Student",0);
    this.lista[4] =new Persona("Miguel","EEE","Profesor",0);
    
   }

   Mostrar():Persona[]{
     return this.lista;
   }

   Incrementar(nombre:string): Persona[]{
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
    return this.lista;
   }

   SetZeroPuntos(nombre:string): Persona[]{
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos =0;
    return this.lista;
   }


   ClearPuntos(): Persona[]{

    for(var i=0; i<this.lista.length; i++){
      this.lista.filter(persona => persona.nombre)[i].puntos =0;
    }
    return this.lista;
  
   }

   Eliminar (nombre:string): Persona[] {
     this.lista= this.lista.filter(persona=>persona.nombre !==nombre);
     return this.lista;
   }

   OrdenarPuntos():Persona[]{
     this.lista= this.lista.sort(
       function (obj1,obj2){
         return obj1.puntos - obj2.puntos;
       }
     );
     return this.lista;
   }

   PonPersona(persona:Persona):Persona []{
     this.lista.push(persona)
     return this.lista;
   }
  
}