import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { persona } from '../persona.modul';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  titulo = ' formulario personas';
  personas: persona[] = [];

  constructor(
    private PersonasService: PersonasService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.PersonasService.obtenerPersonas().subscribe((personas: persona[]) => {
      this.personas = personas;
      this.PersonasService.setpersonas(this.personas);
    });
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
