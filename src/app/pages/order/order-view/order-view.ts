import { Component } from '@angular/core';
import { NavbarComponent } from '../../../component/layout/navbar-component/navbar-component';
import { OverViewComponent } from '../../../component/order/over-view-component/over-view-component';
import { FooterComponent } from '../../../component/layout/footer-component/footer-component';

@Component({
  selector: 'app-order-view',
  imports: [
        NavbarComponent,
        OverViewComponent,
        FooterComponent
  ],
  templateUrl: './order-view.html',
  styleUrl: './order-view.css'
})
export class OrderView {

}
