import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FlowbiteService } from '../../../services/flowbite.service';
@Component({
  selector: 'app-product-details-component',
  imports: [
  ],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.css'
})
export class ProductDetailsComponent implements OnInit {

  imagesArray = [
  'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
  'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
  'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
  ];

  constructor(private flowbiteService: FlowbiteService, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.flowbiteService.loadFlowbite((flowbite) => {
        flowbite.initFlowbite();
      });
    }
  }

  product = {
    name: `Product Name`,
    description: `Detailed description for Product. This includes features, warranty, and specifications.`,
    images: [
      'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
      'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
      'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
    ],
    category: 'Electronics',
    ratingCount: 125,
    price: 1499,
    stock: 4,
  };

  selectedProduct: any = null;

  openModal(product: any) {
    this.selectedProduct = this.product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  getExpectedDeliveryDate(): Date {
    const now = new Date();
    now.setDate(now.getDate() + 5); // 5 days from now
    return now;
  }
}
