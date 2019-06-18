import { Component, OnInit, Input } from '@angular/core';
import { personaModel } from '../../persona.model';
import { PersonasSerivce } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  @Input() persona: personaModel;
  @Input() indice: number;

  constructor(private personasService:PersonasSerivce) { }

  ngOnInit() {
  }
  
  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }
}
