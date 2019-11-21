import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  resultado:number;

  onSumar(resultado:number):void{
    this.resultado = resultado;
  }

}
