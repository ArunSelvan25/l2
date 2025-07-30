import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-component',
  imports: [],
  templateUrl: './banner-component.html',
  styleUrl: './banner-component.css'
})
export class BannerComponent {

  constructor (public router: Router) {}

  gotoProducts() {
    this.router.navigate(['/products']);
  }
}
