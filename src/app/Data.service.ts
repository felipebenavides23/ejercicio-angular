import { loginServices } from './login/login.service';
import { persona } from './persona.modul';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler';

@Injectable()
export class DataServices {
  constructor(
    private httpCliente: HttpClient,
    private loginServices: loginServices
  ) {}

  cargarPersoans() {
    const token = this.loginServices.getIdToken();
    return this.httpCliente.get(
      'https://listado-persona-79ba9-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }

  // guardar persoans
  guardarPersona(personas: persona[]) {
    const token = this.loginServices.getIdToken();
    this.httpCliente
      .put(
        'https://listado-persona-79ba9-default-rtdb.firebaseio.com/datos.json?auth=' +
          token,
        personas
      )
      .subscribe(
        (response) => {
          console.log(
            `sea guardado la informacion de forma corresta ${response}`
          );
        },
        (error) => {
          console.log(
            `ha ocurrido un error al momento de la conexion a la base de datos ${error}`
          );
        }
      );
  }

  modificarPersona(index: number, persona: persona) {
    const token = this.loginServices.getIdToken();
    let url: string;
    url = `https://listado-persona-79ba9-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    console.log(url);
    this.httpCliente.put(url, persona).subscribe(
      (response) => console.log(`modificacion exitosa ${response}`),
      (error) => {
        `error la modificar ${error}`;
      }
    );
  }

  eliminarPersonas(index: number) {
    const token = this.loginServices.getIdToken();
    let url: string;
    url = `https://listado-persona-79ba9-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    console.log(url);
    this.httpCliente.delete(url).subscribe(
      (response) => console.log(`modificacion exitosa ${response}`),
      (error) => {
        `error la modificar ${error}`;
      }
    );
  }
}
