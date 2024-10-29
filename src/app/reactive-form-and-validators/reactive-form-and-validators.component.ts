import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, FormsModule, Validators } from '@angular/forms'
import{ReactiveFormsModule}from '@angular/forms'
import{CommonModule}from '@angular/common'
@Component({
  selector: 'app-reactive-form-and-validators',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form-and-validators.component.html',
  styleUrl: './reactive-form-and-validators.component.css'
})
export class ReactiveFormAndValidatorsComponent {
  
  LoginForm = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]+$')]),
    Password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  userlogin()
  {
    console.warn(this.LoginForm.value)
  }
  get user()
  {
    return this.LoginForm.get('user')
  }
  get password()
  {
    return this.LoginForm.get('Password')
  }
}
