import { Component } from '@angular/core';
import {Persona} from './persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listado de personas';
  personas: Persona[] = [new Persona('Juan','Perez'), new Persona("Laura","lola")];

  constructor(private loggingService: LoggingService){}

  onPersonaAgregada(persona: Persona){
    this.loggingService.enviarMensajeAConsola("Padre Agregamos nueva persona:" + persona.nombre);
    this.personas.push(persona);
  }


}
