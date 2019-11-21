import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  // styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() sumar = new EventEmitter<number>();
  operandoAInput:number;
  operandoBInput:number;
  constructor() { }

  ngOnInit() {
  }

  onSumarNumeros():void{
    let resultado = this.operandoAInput + this.operandoBInput;
    this.sumar.emit(resultado);
  }

}
