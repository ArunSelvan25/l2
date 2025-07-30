import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuccessComponet } from '../../../component/order/status/success-componet/success-componet';
import { NavbarComponent } from '../../../component/layout/navbar-component/navbar-component';
import { FooterComponent } from '../../../component/layout/footer-component/footer-component';
import { OrderNotCompletedComponent } from '../../../component/order/status/order-not-completed-component/order-not-completed-component';

@Component({
  selector: 'app-order-placed-status',
  imports: [
    NavbarComponent,
    OrderNotCompletedComponent,
    SuccessComponet,
    FooterComponent

  ],
  templateUrl: './order-placed-status.html',
  styleUrl: './order-placed-status.css'
})
export class OrderPlacedStatus {
  private route = inject(ActivatedRoute);
  status: string | null = null;

  ngOnInit() {
    this.status = this.route.snapshot.paramMap.get('status');
  }
}
