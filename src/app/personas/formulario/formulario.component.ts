import { persona } from './../../persona.modul';
import { PersonasService } from '../../personas.service';
import { LoggingService } from '../../LogginServices.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService],
})
export class FormularioComponent implements OnInit {
  Anombre: string = '';
  Aapellido: string = '';
  index: number;
  parametromod: number;

  constructor(
    private PersonasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.PersonasService.saludar.subscribe(
      (persona: persona) => (
        (this.Aapellido = persona.apellido),
        (this.Anombre = persona.nombre),
        alert(`aqui esta la persona ${this.Anombre}`)
      )
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.parametromod = +this.route.snapshot.queryParams['parametromodificar'];
    if (this.parametromod === 1) {
      let persona = this.PersonasService.verificarPersona(this.index);
      this.Anombre = persona.nombre;
      this.Aapellido = persona.apellido;
    }
  }

  onGuardarPersona() {
    let personaA = new persona(this.Anombre, this.Aapellido);
    if (this.parametromod === 1) {
      this.PersonasService.modificarPersona(this.index, personaA);
    } else {
      this.PersonasService.insertarPersona(personaA);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.parametromod === 1) {
      this.PersonasService.eliminarpersonas(this.index);
    }
    this.router.navigate(['/personas']);
  }
}
