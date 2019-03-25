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