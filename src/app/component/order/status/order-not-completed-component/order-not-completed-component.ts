import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-not-completed-component',
  imports: [],
  templateUrl: './order-not-completed-component.html',
  styleUrl: './order-not-completed-component.css'
})
export class OrderNotCompletedComponent {
  constructor (public router: Router) {}
  gotoHome() {
    this.router.navigate(['']);
  }
}
