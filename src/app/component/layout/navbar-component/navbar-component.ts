import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [
    NgClass
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;
  isStickyNavbar: boolean = false;
  
  constructor (public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access static data defined in route
    this.isStickyNavbar = this.route.snapshot.data['isStickyNavbar'];
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  gotoHome() {    
    this.router.navigate(['']);
  }

  gotoProducts() {
    this.router.navigate(['/products']);
  }
}
