import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/employee.model';
import { PaymentsComponent } from '../../../../Dashboards/reports/payments/payments.component'
@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.sass']
})
export class PaymentListComponent implements OnInit {

  payments: Payment[] = [];

  constructor(private PaymentsComponent: PaymentsComponent) { }

  ngOnInit(): void {
    this.payments = this.PaymentsComponent.getPayments();
  }
}
