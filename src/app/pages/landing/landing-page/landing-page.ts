import { Component } from '@angular/core';
import { NavbarComponent } from '../../../component/layout/navbar-component/navbar-component';
import { BannerComponent } from '../../../component/landing/banner-component/banner-component';
import { FeaturedProducts } from '../../../component/landing/featured-products/featured-products';
import { FooterComponent } from '../../../component/layout/footer-component/footer-component';
import { TestimonialComponent } from '../../../component/landing/testimonial-component/testimonial-component';
import { ChooseUsSection } from '../../../component/landing/choose-us-section/choose-us-section';
import { NewsLetterComponent } from '../../../component/landing/news-letter-component/news-letter-component';
import { BrandStoryComponent } from '../../../component/landing/brand-story-component/brand-story-component';
import { ReferFriendComponent } from '../../../component/landing/refer-friend-component/refer-friend-component';
import { PricingComponent } from '../../../component/landing/pricing-component/pricing-component';

@Component({
  selector: 'app-landing-page',
  imports: [
    NavbarComponent,
    BannerComponent,
    FeaturedProducts,
    TestimonialComponent,
    ChooseUsSection,
    NewsLetterComponent,
    BrandStoryComponent,
    ReferFriendComponent,
    PricingComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
}
