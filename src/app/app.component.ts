import { loginServices } from './login/login.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = ' formulario personas';

  constructor(private loginServices: loginServices) {}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtr7a_BJbtF7dKJHyT5dyi2_bVniK6Dvk',
      authDomain: 'listado-persona-79ba9.firebaseapp.com',
    });
  }

  isAutenticado() {
    return this.loginServices.isAutenticado();
  }

  salir() {
    this.loginServices.logout();
  }
}
