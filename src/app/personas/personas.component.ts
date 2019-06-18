import { Component, OnInit } from '@angular/core';
import { personaModel } from '../persona.model';
import { PersonasSerivce } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: personaModel[]=[];
  
  constructor(private personasService:PersonasSerivce,
              private router: Router){}
  
  ngOnInit(): void{
    this.personasService.obtenerPersonas()
      .subscribe(
        (resp: personaModel[])=>{
          this.personas = resp;
          this.personasService.setPersonas(resp);
          console.log(this.personas + " recuperadas")
        }
      )
      
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }
}
