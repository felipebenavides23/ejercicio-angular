import { loginServices } from './login.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardian implements CanActivate {
  constructor(private loginServices: loginServices, private Router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginServices.isAutenticado()) {
      return true;
    } else {
      this.Router.navigate(['login']);
      return false;
    }
  }
}
