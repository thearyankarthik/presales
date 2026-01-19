import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lead-creation.component.html',
  styleUrls: ['./lead-creation.component.css']
})
export class LeadCreateComponent {

  leadForm: FormGroup;

  // Temporary static data (later from backend)
  projects = [
    { id: 'P1', name: 'Green Villas' },
    { id: 'P2', name: 'Sky Apartments' },
    { id: 'P3', name: 'Amity Villas' }
  ];

  sources = [
    { id: 'S1', name: 'Website' },
    { id: 'S2', name: 'Google Ads' },
    { id: 'S3', name: 'Facebook' },
    { id: 'S4', name: 'Walk-in' }
  ];

  constructor(private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],
      email: ['', Validators.email],
      alternatePhone: [''],
      project: ['', Validators.required],
      source: ['', Validators.required],
      profession: [''],
      description: ['']
    });
  }

  submitLead() {
    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }

    console.log('Lead Created:', this.leadForm.value);
    alert('Lead created successfully (UI only)');
    this.leadForm.reset();
  }
}
