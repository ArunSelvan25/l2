import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary-component',
  imports: [
    NgClass
  ],
  templateUrl: './order-summary-component.html',
  styleUrl: './order-summary-component.css'
})
export class OrderSummaryComponent {

  expandedIndex: number | null = null;

  selectedProducts = [
    {
      name: 'Bluetooth Speaker',
      image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
      price: 100,
      quantity: 2,
      variant: 'Black',
      description: 'Compact speaker with powerful bass.',
      sku: 'SPK-001'
    },
    {
      name: 'Wireless Mouse',
      image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
      price: 250,
      quantity: 1,
      variant: 'Grey',
      description: 'Ergonomic mouse with silent clicks.',
      sku: 'MSE-009'
    }
  ];

  toggleItem(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  get subtotal() {
    return this.selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }

  get tax() {
    return Math.round(this.subtotal * 0.1); // e.g., 10%
  }

  get shippingFee() {
    return this.subtotal > 2000 ? 0 : 150;
  }

  get total() {
    return this.subtotal + this.tax + this.shippingFee;
  }
}
