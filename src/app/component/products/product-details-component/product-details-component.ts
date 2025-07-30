import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { FlowbiteService } from '../../../services/flowbite.service';

interface Product {
  name: string;
  description: string;
  images: string[];
  category: string;
  ratingCount: number;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-product-details-component',
  imports: [
    NgClass
  ],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.css'
})
export class ProductDetailsComponent implements OnInit {

  isBrowser = false;
  imagesArray = [
  'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
  'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
  'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170',
  ];

  @Input() _productId!: number;
  @Output() eventToggle = new EventEmitter<any>();

  product: Product = {
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

  constructor(private flowbiteService: FlowbiteService, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (isPlatformBrowser(this.platformId)) {
      this.flowbiteService.loadFlowbite((flowbite) => {
        flowbite.initFlowbite();
      });
    }

    this.product = {
      name: `Product Name ${this._productId}`,
      description: `Detailed description for Product. This includes features, warranty, and specifications.`,
      images: [...this.imagesArray],
      category: 'Electronics',
      ratingCount: 125,
      price: 1499,
      stock: 4,
    };
  }

  

  closeModal() {
    this.eventToggle.emit()
  }

  getExpectedDeliveryDate(): Date {
    const now = new Date();
    now.setDate(now.getDate() + 5);
    return now;
  }
}
