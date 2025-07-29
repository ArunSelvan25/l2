import { Component } from '@angular/core';
import { FilterComponent } from '../../../component/products/filter-component/filter-component';
import { ProductListingComponent } from '../../../component/products/product-listing-component/product-listing-component';
import { NavbarComponent } from '../../../component/layout/navbar-component/navbar-component';

@Component({
  selector: 'app-product-listing',
  imports: [
    NavbarComponent,
    ProductListingComponent,
    FilterComponent
  ],
  templateUrl: './product-listing.html',
  styleUrl: './product-listing.css'
})
export class ProductListing {

}
