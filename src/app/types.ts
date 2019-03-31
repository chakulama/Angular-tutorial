import {Persona} from './Persona';
export type PersonaGQL =
{
         username:String;
         password:String;
         rol:String;
         puntos:number;
}  

export type Query ={
    me: PersonaGQL;
    personas(query: String): [PersonaGQL];
    getpersona(name: String):PersonaGQL
   
  }

  export type Mutation={

    createPersona(data: CreatPersonaInput): [PersonaGQL];
  deletePersona(username: String): PersonaGQL
  updatePersona(username: String, data: updatePersona): PersonaGQL

  }
  export type CreatPersonaInput={
    username: String
  password: String
  rol: String
  puntos: number

  }

  export type  updatePersona= {
    username: String
    password: String
    rol: String
    puntos: number
  }