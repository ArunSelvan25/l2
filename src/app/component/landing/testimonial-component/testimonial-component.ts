import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-component',
  imports: [],
  templateUrl: './testimonial-component.html',
  styleUrl: './testimonial-component.css'
})
export class TestimonialComponent {
testimonials = [
    {
      name: 'Aarav Mehta',
      role: 'Verified Buyer',
      quote: 'Absolutely love the product quality and quick delivery. Will shop again!',
      image: 'https://i.pravatar.cc/150?img=32',
      rating: 5
    },
    {
      name: 'Sara Khan',
      role: 'Customer',
      quote: 'Smooth checkout process and great customer service. Highly recommend!',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 4
    },
    {
      name: 'Rahul Sharma',
      role: 'Loyal Shopper',
      quote: 'Stylish, affordable and fast delivery – the perfect combo!',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5
    }
  ];
}
