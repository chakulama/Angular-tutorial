export class Persona{
    username:string;
    password:string;
    rol:string;
    puntos:number;
    
    constructor(  username:string,password:string,rol:string,puntos:number){
        this.username=username;
        this.password=password;
        this.rol=rol;
        this.puntos=puntos;
    }

}