import { Component } from '@angular/core';
import { FilterComponent } from '../../../component/products/filter-component/filter-component';
import { ProductListingComponent } from '../../../component/products/product-listing-component/product-listing-component';
import { NavbarComponent } from '../../../component/layout/navbar-component/navbar-component';
import { FooterComponent } from '../../../component/layout/footer-component/footer-component';

@Component({
  selector: 'app-product-listing',
  imports: [
    NavbarComponent,
    ProductListingComponent,
    FilterComponent,
    FooterComponent
  ],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css'
})
export class ProductListing {

}
