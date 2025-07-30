import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-info-component',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './payment-info-component.html',
  styleUrl: './payment-info-component.css'
})
export class PaymentInfoComponent {
 paymentMethod = 'card';

  paymentMethods = [
    { id: 'card', label: 'Credit / Debit Card' },
    { id: 'upi', label: 'UPI / Net Banking' },
    { id: 'wallet', label: 'Wallets (Paytm, GPay)' },
    { id: 'cod', label: 'Cash on Delivery' },
  ];
}
