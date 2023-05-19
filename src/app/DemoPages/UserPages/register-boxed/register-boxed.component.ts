import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-boxed',
  templateUrl: './register-boxed.component.html',
  styles: []
})
export class RegisterBoxedComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // email: ['', [Validators.required, Validators.email]],
      // name:['', [Validators.required, Validators.name]],
      // password: ['', Validators.required]
      email:['',[Validators.required,Validators.email]],
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
  }
  
 
  // get email() {
  //   return this.registrationForm.get('email');
  // }
 
  // get password() {
  //   return this.registrationForm.get('password');
  // }
 
  onSubmit() {
    this.submitted = true
    
    if(this.registerForm.invalid){
      return
    }
    alert("Success")
  }
  

}
