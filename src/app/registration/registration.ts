import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = signal(false);
  selectedFiles = signal<File[]>([]);

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      project_id: ['', [Validators.required]],
      project_name: ['', [Validators.required]],
      project_type: [''],
      location: [''],
      address_line_1: [''],
      city: [''],
      state: [''],
      pincode: ['', [Validators.pattern('^[0-9]{6}$')]],
      total_area: [0, [Validators.min(0)]],
      number_of_units: [0, [Validators.min(0)]],
      rera_number: [''],
      status: ['Pending'],
      bank_name: [''],
      account_number: [''],
      branch_name: [''],
      ifsc_code: [''],
      owner_name: [''],
      remarks: [''],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registrationForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFiles.set(Array.from(event.target.files));
    }
  }

  onSubmit() {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      console.log('Files:', this.selectedFiles());
      this.submitted.set(true);
      // Reset after a delay for visual feedback
      setTimeout(() => this.submitted.set(false), 3000);
    } else {
      console.log('Form is invalid');
    }
  }
}
