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

   Incrementar(username:string): Persona[]{
    this.lista.filter(persona => persona.username === username)[0].puntos ++;
    return this.lista;
   }

   SetZeroPuntos(username:string): Persona[]{
    this.lista.filter(persona => persona.username === username)[0].puntos =0;
    return this.lista;
   }


   ClearPuntos(): Persona[]{

    for(var i=0; i<this.lista.length; i++){
      this.lista.filter(persona => persona.username)[i].puntos =0;
    }
    return this.lista;
  
   }

   Eliminar (username:string): Persona[] {
     this.lista= this.lista.filter(persona=>persona.username !==username);
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
  
   OrdenarAlfabeticamente():Persona[]{
    this.lista = this.lista.sort(function (a, b) {
      return a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1;
    }
    );
    
    return this.lista;

  }

  Autentificar(username:string,password:string):Persona{
    let user:Persona[]=[];
    
    user= this.lista.filter(persona=>persona.username === username && persona.password=== password);
    if (user.length===0){
      return null;
    }
    else
      return user[0];
  }

PonPass(username:string, nuevoPass:string): void{

  this.lista.filter(persona=>persona.username===username)[0].password=nuevoPass;
}



DamePersona(username:string):Persona{
  return this.lista.filter(persona=>persona.username===username)[0];
}

StudentDetails(username:string):Persona{
  return this.lista.filter(persona=>persona.username===username)[0];
}

}
