import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './Data.service';
import { LoggingService } from './LogginServices.service';
import { persona } from './persona.modul';

@Injectable()
export class PersonasService {
  personas: persona[] = [];

  constructor(
    private LoggingService: LoggingService,
    private DataServices: DataServices
  ) {}

  saludar = new EventEmitter<persona>();

  setpersonas(personas: persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    console.log(this.DataServices.cargarPersoans());
    return this.DataServices.cargarPersoans();
  }

  insertarPersona(persona: persona) {
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.DataServices.guardarPersona(this.personas);
  }

  verificarPersona(index: number) {
    let persona: persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: persona) {
    let personam = this.personas[index];
    personam.nombre = persona.nombre;
    personam.apellido = persona.apellido;
    this.DataServices.modificarPersona(index, persona);
  }

  eliminarpersonas(index: number) {
    this.personas.splice(index, 1);
    this.DataServices.eliminarPersonas(index);
    this.actualizarpersonas();
  }

  actualizarpersonas() {
    if (this.personas != null) {
      this.DataServices.guardarPersona(this.personas);
    }
  }
}
