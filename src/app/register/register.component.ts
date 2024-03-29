import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string = '';
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
      // Validators.pattern('^[a-z]{3-10}$')
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(16),
      Validators.max(80),
    ]),
  });


  constructor(private _AuthService:AuthService , private _Router:Router) {}

  submitRegisterForm(registerForm: FormGroup) {
    this._AuthService.register(registerForm.value).subscribe((response)=>{

      if(response.message == 'success')
      {
        this._Router.navigate(['/login'])
      }
      else
      {
        this.error = response.errors.email.message
      }

    })
  }

  ngOnInit(): void {}
}
