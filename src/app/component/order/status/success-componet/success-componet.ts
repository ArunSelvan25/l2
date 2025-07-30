import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-componet',
  imports: [],
  templateUrl: './success-componet.html',
  styleUrl: './success-componet.css'
})
export class SuccessComponet {
  constructor (public router: Router) {}
  gotoHome() {
    this.router.navigate(['']);
  }
}
