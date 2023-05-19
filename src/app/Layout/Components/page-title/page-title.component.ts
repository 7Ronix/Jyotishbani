import {Component, Input,TemplateRef} from '@angular/core';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {

  faStar = faStar;
  faPlus = faPlus;

  @Input() heading;
  @Input() subheading;
  @Input() icon;
  closeResult: string;
  getDismissReason: any;
  modalRef:any;

constructor(private modalService: NgbModal){

}

   
open(content) {
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

openCentred(content) {
  this.modalService.open(content, {centered: true});
}




}
