import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { personaModel } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasSerivce } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  //@Output() personaCreada = new EventEmitter<personaModel>();

  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;
  //@ViewChild('nombreInput')nombreInput: ElementRef;
  //@ViewChild('apellidoInput')apellidoInput: ElementRef;

  constructor(private loggingService:LoggingService,
              private personasService:PersonasSerivce,
              private router: Router,
              private route: ActivatedRoute) {
    this.personasService.saludar.subscribe(
      (inidce:number)=> alert("el indice es: "+inidce)
    );
  }

  ngOnInit() {
    //recoge el parametro desde el id que esta asociado en el app-routing
    this.index = this.route.snapshot.params['id'];
    //recoge el parametro [queryParams] del html
    this.modoEdicion= +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion!=null && this.modoEdicion === 1){
      let persona: personaModel= this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido
    }
  }
  
  onGuardarPersona(){
    let persona1 = new personaModel(this.nombreInput,this.apellidoInput);
    if(this.modoEdicion!=null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index,persona1);
    }else{
      this.personasService.agregarPersona(persona1);
    }
    
    this.router.navigate(['personas']);
    //this.loggingService.enviarMensajeAConsola("enviamos persona: "+persona1.nombre +" "+persona1.apellido);
    //this.personaCreada.emit(persona1);
  }

  eliminarPersona(){
    if(this.index !=null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);  
  }
}
