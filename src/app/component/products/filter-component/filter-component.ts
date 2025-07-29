import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  imports: [
    NgClass,
  ],
  templateUrl: './filter-component.html',
  styleUrl: './filter-component.css'
})
export class FilterComponent {
  sidebarOpen = false;

  filters = [
    {
      title: 'Category',
      open: true,
      options: ['Shoes', 'Apparel', 'Accessories'],
    },
    {
      title: 'Brand',
      open: false,
      options: ['Nike', 'Adidas', 'Puma'],
    },
    {
      title: 'Price Range',
      open: false,
      options: ['Under ₹1000', '₹1000 – ₹5000', '₹5000+'],
    },
  ];

  toggleFilter(filter: any) {
    filter.open = !filter.open;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  applyFilters() {
    // your filter logic
  }

  resetFilters() {
    // reset logic
  }
}
