import { Component } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
    selector : 'app-personas',
    templateUrl : './personas.component.html',
    // template : '<h1>Listado de personas</h1><app-persona></app-persona><app-persona></app-persona>',
        // template : `<h1>Listado de personas</h1>
        // <app-persona></app-persona>
        // <app-persona></app-persona>
        // <app-persona></app-persona>
        // `
    // styleUrls : ['./personas.component.css']
    styles : [`
       h1{    
           color : blue;
       } 
    `]

})
export class PersonasComponent{
    agregarPersona = false;
    agregarPersonaStatus = "No se ha agregado ninguna persona";
    tituloPersona = "";


    constructor(){
        setTimeout(
            ()=>{
                this.agregarPersona = true;
            }
            ,3000);
    }

    onCrearPersona(){
        this.agregarPersonaStatus = "Persona agregada";
    }
        
    onModificaPersona(){
        this.tituloPersona = (<HTMLInputElement>event.target).value
    }
}