import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AstrologerModel } from 'src/app/models/employee.model';
import { ServiceService } from 'src/app/service.service';



import Swal from 'sweetalert2';



@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
})
export class AccordionsComponent implements OnInit {
  // @ViewChild('closebutton') closebutton;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  formValue!: FormGroup;
  astrologerModelObj: AstrologerModel = new AstrologerModel();
  closeResult: string;
  getDismissReason: any;
  astrologerData !: any;
  modalRef: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  submitData = false;

  //Dropdowns
  // Title: any = ['Mr', 'Mrs']


  constructor(private formbulider: FormBuilder, private modalService: NgbModal, private api: ServiceService) {
  }




  ngOnInit() {

    this.formValue = this.formbulider.group({
      // id: ['', Validators.required],
      // title: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', Validators.required],
      categories: ['', Validators.required],
      gender: ['', Validators.required]
    })
    this.getAllAstrologer();

  }

  clickAddAstrologer() {
    this.formValue.reset();
    this.showAdd = false;
    this.showUpdate = true;
  }


  postAstrologerDetails() {
    // this.astrologerModelObj.id = this.formValue.value.id;
    // this.astrologerModelObj.title = this.formValue.value.title;
    this.astrologerModelObj.name = this.formValue.value.name;
    this.astrologerModelObj.email = this.formValue.value.email;
    this.astrologerModelObj.phone = this.formValue.value.phone;
    this.astrologerModelObj.password = this.formValue.value.password;
    this.astrologerModelObj.categories = this.formValue.value.categories;
    this.astrologerModelObj.gender = this.formValue.value.gender;


    this.api.postAstrologer(this.astrologerModelObj).subscribe(res => {
      console.log(res);
      Swal.fire("Thank You...", 'You Submitted Successfully', 'success')
      // alert("Astrologer Added Successfully") 
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      // this.closebutton.nativeElement.click();
      this.getAllAstrologer();
    },
      err => {
        Swal.fire("Wrong", 'Something went wrong', 'error')
        // alert("Somthing went wrong");
      })
    this.submitData = false;

  }

  getAllAstrologer() {
    this.api.getAstrologer()
      .subscribe(res => {
        this.astrologerData = res;
      })
  }

  deleteAllAstrologer(row: any) {
    if (confirm('Are you Sure to delete Astrologer?'))
      this.api.deleteAstrologer(row.id)
        .subscribe(res => {
          Swal.fire("Deleted", 'You file has been deleted', 'success')
          this.getAllAstrologer();
        })
  }

  onEdit(row: any) {
    this.showAdd = true;
    this.showUpdate = false;
    this.astrologerModelObj.id = row.id;
    // this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['phone'].setValue(row.phone);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['categories'].setValue(row.categories);
    this.formValue.controls['gender'].setValue(row.gender);

  }
  updateAstrologerDetails() {
    // this.astrologerModelObj.id = this.formValue.value.id;
    // this.astrologerModelObj.title = this.formValue.value.title;
    
    this.astrologerModelObj.name = this.formValue.value.name;
    this.astrologerModelObj.email = this.formValue.value.email;
    this.astrologerModelObj.phone = this.formValue.value.phone;
    this.astrologerModelObj.password = this.formValue.value.password;
    this.astrologerModelObj.categories = this.formValue.value.categories;
    this.astrologerModelObj.gender = this.formValue.value.gender;


    this.api.updateAstrologer(this.astrologerModelObj, this.astrologerModelObj.id).subscribe(res => {
      Swal.fire("Updated", 'You file has been updated', 'info')
      // alert("Updated Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllAstrologer();
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

  openCentred(content) {
    this.modalService.open(content, { centered: true });
  }

  onSubmit() {
    this.submitData = true

    if (this.formValue.invalid) {
      return
    }
    alert("Success")
  }



}