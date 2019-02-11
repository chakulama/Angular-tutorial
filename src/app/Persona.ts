export class Persona{
    nombre:string;
    password:string;
    rol:string;
    puntos:number;
    

    constructor(  nombre:string,password:string,rol:string,puntos:number){
        this.nombre=nombre;
        this.password=password;
        this.rol=rol;
        this.puntos=puntos;
    }

  
}