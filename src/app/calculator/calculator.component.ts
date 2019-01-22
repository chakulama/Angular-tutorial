import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numero: number;
  resultado:number;
  constructor() { 
    console.log("Estoy en constructor");
  }

  ngOnInit() {
    console.log("Inicio el componente");
  }
 

  Duplicar(){
    console.log("Voy a duplicar "+ this.numero);
    this.resultado=this.numero*2;
    console.log("Resultado es "+this.resultado);
  }
/*
  Multiply(){
    console.log("Multiplication of "+ this.numero + " and "+this.numero );
    this.resultadoMulti=this.numero1*this.numero2;
    console.log("Resultado es "+this.resultadoMulti);
  }*/

}
