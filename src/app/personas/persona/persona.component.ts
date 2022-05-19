import { PersonasService } from '../../personas.service';
import { persona } from '../../persona.modul';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  @Input() persona: persona;
  @Input() i: number;
  constructor(private PersonasService: PersonasService) {}

  emitirsaludo() {
    console.log(this.persona);
    this.PersonasService.saludar.emit(this.persona);
  }
}
