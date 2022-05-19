import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()
export class loginServices {
  token: string;

  constructor(private Router: Router) {}

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token) => {
            this.token = token;
            this.Router.navigate(['/']);
          });
      });
  }
  getIdToken() {
    return this.token;
  }
  isAutenticado() {
    return this.token != null;
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = null;
        this.Router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
