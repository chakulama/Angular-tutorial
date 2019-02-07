import { Component, OnInit } from '@angular/core';
import {Persona} from '../Persona';
import {ListaService} from '../lista.service';
import {ActivatedRoute} from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno :Persona;
  nuevoPass:string;
  constructor(private servicioLista: ListaService) { }

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
  }


  Cambia(){
    this.servicioLista.PonPass(this.alumno.nombre,this.nuevoPass)
  }
}