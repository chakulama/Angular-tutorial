import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string;
  password:string;
 

  constructor(private servicioLista: ListaService) { }

  ngOnInit() {
  }
  Autentificar(){
    let res: Boolean;
    res= this.servicioLista.Autentificar(this.nombre,this.password);
    console.log(res);
  }

}
