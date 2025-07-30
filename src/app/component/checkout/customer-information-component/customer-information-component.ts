import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-information-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './customer-information-component.html',
  styleUrl: './customer-information-component.css'
})
export class CustomerInformationComponent {
 customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }
}
