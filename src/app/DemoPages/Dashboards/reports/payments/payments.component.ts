import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/employee.model';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.sass']
})
export class PaymentsComponent implements OnInit {
  private payments: Payment[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  
  getPayments(): Payment[] {
    return this.payments;
  }

  addPayment(payment: Payment): void {
    this.payments.push(payment);
  }

  updatePayment(payment: Payment): void {
    const index = this.payments.findIndex(p => p.id === payment.id);
    if (index !== -1) {
      this.payments[index] = payment;
    }
  }

  deletePayment(payment: Payment): void {
    const index = this.payments.findIndex(p => p.id === payment.id);
    if (index !== -1) {
      this.payments.splice(index, 1);
    }
  }

}

