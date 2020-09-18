import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup;
  constructor() { 
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    });
  }

  onSubmit(name:string, pwd:string) {
    console.warn(name, pwd);
  }

}