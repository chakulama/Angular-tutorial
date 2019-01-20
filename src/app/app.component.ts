import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTutorial';
  numero:number;
  numero1:number;
  numero2:number;
  resultado:number;
  resultadoMulti:number;

  Duplicar(){
    console.log("Voy a duplicar "+ this.numero);
    this.resultado=this.numero*2;
    console.log("Resultado es "+this.resultado);
  }

  Multiply(){
    console.log("Multiplication of "+ this.numero + " and "+this.numero );
    this.resultadoMulti=this.numero1*this.numero2;
    console.log("Resultado es "+this.resultadoMulti);
  }
}
