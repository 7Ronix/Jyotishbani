// import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from 'src/app/models/employee.model';
import { ServiceService } from 'src/service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styles: []
})
export class StandardComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  formValue !: FormGroup;
  userModelObj: UserModel = new UserModel();
  userData !: any;
  closeResult: string;
  getDismissReason: any;
  modalRef: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  modalReference: any;
  submitData = false;

  constructor(private formbuilder: FormBuilder, private api: ServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
      lastName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
      dateOfBirth: ['',Validators.required],
      timeOfBirth: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      gender: ['',Validators.required],
      // mobile: ['',[Validators.required, Validators.minLength(10)]]
    })
    this.getAllUser();

  }

  clickAddUser() {
    this.formValue.reset();
    this.showAdd =  false;
    this.showUpdate = true;
  }

  postUserDetails() {
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.dateOfBirth = this.formValue.value.dateOfBirth;
    this.userModelObj.timeOfBirth = this.formValue.value.timeOfBirth;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.gender = this.formValue.value.gender;
    this.userModelObj.mobile = this.formValue.value.mobile;

    this.api.postUser(this.userModelObj)
      .subscribe(res => {
        console.log(res);
        // alert("Employee Added Succefully");
        Swal.fire("Thank You...", 'You Submitted Successfully', 'success')
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllUser();

      },
        err => {
          Swal.fire("Wrong", 'Something went wrong', 'error')
        })
        this.submitData = false;
  }
  // onSave() {
  //   this.closebutton.nativeElement.click();
  // }

  getAllUser() {
    this.api.getUser()
      .subscribe(res => {
        this.userData = res;
      })
  }

  deleteUser(row: any) {
    if (confirm('Are you Sure to delete Userlist?'))
      this.api.deleteUser(row.id)
        .subscribe(res => {
          Swal.fire("Deleted", 'You file has been deleted', 'success')
          this.getAllUser();
        })
  }

  onEdit(row: any) {
    this.showAdd = true;
    this.showUpdate = false;
    
    this.userModelObj.id = row.id;

    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['dateOfBirth'].setValue(row.dateOfBirth);
    this.formValue.controls['timeOfBirth'].setValue(row.timeOfBirth);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['mobile'].setValue(row.mobile);
  }


  updateUserDetails() {
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.dateOfBirth = this.formValue.value.dateOfBirth;
    this.userModelObj.timeOfBirth = this.formValue.value.timeOfBirth;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.gender = this.formValue.value.gender;
    this.userModelObj.mobile = this.formValue.value.mobile;

    this.api.updateUser(this.userModelObj, this.userModelObj.id)
      .subscribe(res => {
        // alert("Updated Sucessfully");
        Swal.fire("Updated", 'You file has been updated', 'info')
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUser();
      })
  }

  open(content) {

    this.submitData = true;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }
  

  // openCentred(content) {
  //   this.modalService.open(content, { centered: true });
  // }



}
