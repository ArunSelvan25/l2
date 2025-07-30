import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-over-view-component',
  imports: [
    NgClass,
    DatePipe,
    TitleCasePipe
  ],
  templateUrl: './over-view-component.html',
  styleUrl: './over-view-component.css'
})
export class OverViewComponent {
order = {
    id: 'ODR789456',
    date: new Date(),
    status: 'completed', // or 'pending', 'failed'
    subtotal: 1200,
    shipping: 50,
    tax: 100,
    total: 1350,
    paymentMode: 'upi',
    paymentStatus: 'Paid',
    shippingAddress: {
      name: 'John Doe',
      line1: '123 Main Street',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zip: '600001',
      phone: '9876543210',
    },
    items: [
      {
        name: 'Wireless Headphones',
        quantity: 1,
        price: 800,
        image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
      },
      {
        name: 'Smart Watch',
        quantity: 1,
        price: 400,
        image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
      },
    ],
  };

  downloadInvoice(orderId: string) {
    console.log('Download invoice for', orderId);
  }

  retryPayment(orderId: string) {
    console.log('Retry payment for', orderId);
  }
}
