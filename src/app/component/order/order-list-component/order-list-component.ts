import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list-component',
  imports: [
    NgClass,
    DatePipe,
  ],
  templateUrl: './order-list-component.html',
  styleUrl: './order-list-component.css'
})
export class OrderListComponent {
  orders = [
    { id: 'ORD123456', date: new Date(), total: 2599, status: 'completed' },
    { id: 'ORD123457', date: new Date(), total: 1499, status: 'pending' },
    { id: 'ORD123458', date: new Date(), total: 999, status: 'failed' }
  ];

  constructor (public router: Router) {}

  viewOrder(id: string) {
    this.router.navigate(['/order/view']);
  }

  retryPayment(id: string) {
    this.router.navigate(['/checkout'], { queryParams: { orderId: id } });
  }
}
