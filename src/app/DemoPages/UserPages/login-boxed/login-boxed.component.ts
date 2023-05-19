import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {

  //   formGroup!: FormGroup;
  //   constructor( private service:ServiceService){}
  //   ngOnInit(): void {
  // this.getForm();
  //   }

  // getForm(){
  //     this.formGroup = new FormGroup({
  //       email:new FormControl('',[Validators.required]),
  //       password: new FormControl('',[Validators.required])

  //     })
  //   }
  //   login(){
  //     if(this.formGroup.valid){
  //       this.service.login(this.formGroup.value).subscribe(result=>{
  //         if(result.status){
  //           console.log(result);
  //           alert("welcome");
  //         }else{
  //           alert("Incorrect Email or Password");
  //           console.log("Error login");
  //         }
  //       })
  //     }
  //   }



  // loginForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) { }

  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }

  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   Process login logic here
  //   const email = this.loginForm.value.email;
  //   const password = this.loginForm.value.password;
  //   Send the data to the server or perform any other necessary action
  //   console.log('Login submitted:', email, password);
  // }
  formGroup!: FormGroup;
  submitted = false;
  constructor(private service: ServiceService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.getForm();
  }

  getForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  }
  onSubmit() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }
    alert("Success");
  }



}
