import { Component } from '@angular/core';
import { OrderListComponent } from '../../../component/order/order-list-component/order-list-component';
import { NavbarComponent } from '../../../component/layout/navbar-component/navbar-component';
import { FooterComponent } from '../../../component/layout/footer-component/footer-component';

@Component({
  selector: 'app-orders',
  imports: [
    NavbarComponent,
    OrderListComponent,
    FooterComponent
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

}
