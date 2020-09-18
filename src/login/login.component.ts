import { Component } from '@angular/core';
import {  FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup;
  constructor(private readonly fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.getRawValue());
    } else {
      alert("Invalid form");
    }
  }

}