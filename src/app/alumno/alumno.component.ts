import { Component, OnInit } from '@angular/core';
import {Persona} from '../Persona';
import {ListaService} from '../lista.service';
import {ActivatedRoute} from '@angular/router';
import {Location } from '@angular/common';
import {DbServiceService} from '../db-service.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno :Persona;
  nuevoPass:string;
  constructor(private servicioLista: ListaService,
          private route:ActivatedRoute,
          private location:Location, private dbService:DbServiceService) { }

  ngOnInit() {
    this.alumno=new Persona('BL','ppp','Student',0);
    const username = this.route.snapshot.paramMap.get('username');
    //this.alumno= this.servicioLista.DamePersona(username);
    this.dbService.DamePersona(username).subscribe(alumno=>{this.alumno = alumno;
    console.log(this.alumno)})
  }


  Cambia(){
    this.servicioLista.PonPass(this.alumno.username,this.nuevoPass)
  }

  goBack()
  {
    console.log('Go back');
    this.location.back();
  }
}
