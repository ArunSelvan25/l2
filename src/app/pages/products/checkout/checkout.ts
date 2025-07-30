import { Component } from '@angular/core';
import { NavbarComponent } from '../../../component/layout/navbar-component/navbar-component';
import { FooterComponent } from '../../../component/layout/footer-component/footer-component';
import { OrderSummaryComponent } from '../../../component/checkout/order-summary-component/order-summary-component';
import { CustomerInformationComponent } from '../../../component/checkout/customer-information-component/customer-information-component';
import { ShippingInfoComponent } from '../../../component/checkout/shipping-info-component/shipping-info-component';
import { PaymentInfoComponent } from '../../../component/checkout/payment-info-component/payment-info-component';

@Component({
  selector: 'app-checkout',
  imports: [
    NavbarComponent,
    OrderSummaryComponent,
    CustomerInformationComponent,
    ShippingInfoComponent,
    PaymentInfoComponent,
    FooterComponent
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

}
