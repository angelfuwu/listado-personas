import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaModel } from './persona.model';
import { PersonaComponent } from './personas/persona/persona.component';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
    constructor(private httpCliente: HttpClient,private loginService:LoginService) { }
    token = this.loginService.getIdToken();

    cargarPersonas() {
        
        return this.httpCliente.get('https://listado-personas-b2135.firebaseio.com/datos.json?auth=' + this.token);
    }

    guardarPersonas(personas: personaModel[]) {
        this.httpCliente.put('https://listado-personas-b2135.firebaseio.com/datos.json?auth='+this.token, personas)
            .subscribe(
                response => { console.log("resultado de guardar Personas" + response) },
                error => { console.log("error al guardar Personas" + error) }
            )

    }

    modificarPersona(index: number, persona: personaModel) {
        let url: string;
        url = 'https://listado-personas-b2135.firebaseio.com/datos/' + index + '.json?auth='+ this.token;
        this.httpCliente.put(url, persona).subscribe(
            response => console.log("resultado modificar persona" + response),
            error => console.log("error de modificar:" + error)
        )
    }

    eliminarPersona(index:number){
        let url: string;
        url = 'https://listado-personas-b2135.firebaseio.com/datos/' + index + '.json?=auth'+ this.token;
        this.httpCliente.delete(url).subscribe(
            response => console.log("resultado eliminar persona:" + response),
            error => console.log("error de eliminar:" + error)
        )
    }
}