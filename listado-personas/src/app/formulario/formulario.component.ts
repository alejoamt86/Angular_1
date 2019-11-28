import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import {LoggingService} from '../LoggingService.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers : [LoggingService] //servicio local solo para los componentes que tengan esta instancia
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  // nombreInput:string;
  // apellidoInput:string;
  @ViewChild('nombreInput', {static: false}) nombreInput: ElementRef;
  @ViewChild('apellidoInput', {static: false}) apellidoInput: ElementRef; 

  constructor(private loggingService:LoggingService) { }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
    this.loggingService.enviarMensajeAConsola('Enviamos personas'+ persona1.nombre + " apellido " + persona1.apellido  );
    this.personaCreada.emit(persona1);
  }

}
