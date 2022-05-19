import { loginServices } from './login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginServices: loginServices) {}

  ngOnInit(): void {}
  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginServices.login(email, password);
  }
}
