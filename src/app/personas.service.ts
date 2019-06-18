import { personaModel } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

@Injectable()

export class PersonasSerivce{
    personas: personaModel[]=[];
    
    saludar = new EventEmitter<number>();
    
    constructor(private loggingService:LoggingService,
                private dataService: DataServices
    ){}
    
    setPersonas(personas:personaModel[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas()
    }

    agregarPersona(persona:personaModel){
        this.loggingService.enviarMensajeAConsola("agregamos persona: "+persona.nombre);
        if(this.personas == null){
            this.personas =[];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas)
    }

    encontrarPersona(indice:number){
        let persona: personaModel = this.personas[indice];
        return persona;
    }

    modificarPersona(indice:number,persona:personaModel){
        let persona1 = this.personas[indice];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataService.modificarPersona(indice,persona);
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(index);
        this.recargarPersonas()
    }

    recargarPersonas(){
        if(this.personas != null){
            this.dataService.guardarPersonas(this.personas);
        }
    }
}