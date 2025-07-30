import { Component, Inject, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductDetailsComponent } from '../product-details-component/product-details-component';

@Component({
  selector: 'app-product-listing-component',
  imports: [
    ProductDetailsComponent
  ],
  templateUrl: './product-listing-component.html',
  styleUrl: './product-listing-component.css'
})

export class ProductListingComponent implements AfterViewInit, OnInit {
  allProducts = Array.from({ length: 10 }, (_, i) => i); // total available
  products: number[] = []; // only visible ones
  batchSize = 10;
  currentIndex = 0;
  openProductDetails = false;
  selectedProductId: any;

  private observer!: IntersectionObserver;

  @ViewChild('loadMoreTrigger', { static: false }) loadMoreTrigger!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.products = this.allProducts.slice(0, this.batchSize);
      this.currentIndex = this.batchSize;
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupInfiniteScroll();
    }
  }

  setupInfiniteScroll() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.loadMoreProducts();
        }
      },
      { rootMargin: '10px' }
    );

    if (this.loadMoreTrigger?.nativeElement) {
      this.observer.observe(this.loadMoreTrigger.nativeElement);
    }
  }

  loadMoreProducts() {
    if (this.currentIndex >= this.allProducts.length) return;

    const nextBatch = this.allProducts.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.products = [...this.products, ...nextBatch];
    this.currentIndex += this.batchSize;
  }

  productDetailsToggle(i: any) {
    if (typeof i != 'number') {
      this.selectedProductId = null;
    } else {
      this.selectedProductId = this.products[i] + 1;
    }
    this.openProductDetails = !this.openProductDetails;
  }
}
