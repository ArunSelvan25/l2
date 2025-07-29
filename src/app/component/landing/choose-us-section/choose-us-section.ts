import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us-section',
  imports: [],
  templateUrl: './choose-us-section.html',
  styleUrl: './choose-us-section.css'
})
export class ChooseUsSection {
features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Enjoy fast and free delivery on all orders without any hidden costs.'
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: 'Not satisfied? Return it within 14 days with no questions asked.'
    },
    {
      icon: '🔒',
      title: 'Secure Checkout',
      description: 'Your information is protected with advanced SSL encryption.'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'We’re here to help anytime via live chat, email, or phone.'
    },
  ];
}
