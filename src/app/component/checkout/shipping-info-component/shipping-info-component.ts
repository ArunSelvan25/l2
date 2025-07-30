import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-info-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './shipping-info-component.html',
  styleUrl: './shipping-info-component.css'
})
export class ShippingInfoComponent {
  shippingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shippingForm = this.fb.group({
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: [''],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      sameAsBilling: [true],
    });
  }
}
