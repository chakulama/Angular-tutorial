import {Persona} from './Persona';

export type User = {
 name:String;
  
}

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
    getpersona(name: String):PersonaGQL;
    allUsers: [User];
    personaGQLs:[PersonaGQL];
    personaGQL(where: PersonaGQLWhereUniqueInput): PersonaGQL;

  }
 export type PersonaGQLWhereUniqueInput= {
    username: String;
    }

  export type Mutation={

    createPersona(data: CreatPersonaInput): [PersonaGQL];
    deletePersona(username:String):[PersonaGQL];
  updatePersona(username: String, data: updatePersona): PersonaGQL;
  updatePersonaGQL(
    data: PersonaGQLUpdateInput,
    where: PersonaGQLWhereUniqueInput ): PersonaGQL;
    deletePersonaGQL(where:PersonaGQLWhereUniqueInput):PersonaGQL;

  }

export type PersonaGQLUpdateInput ={
  username: String
  password: String
  rol: String
  puntos: number
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