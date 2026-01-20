import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = signal(false);
  selectedFiles = signal<File[]>([]);

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {
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

      this.projectService.registerProject(this.registrationForm.value).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.submitted.set(true);
          // Success feedback and navigate back or reset
          setTimeout(() => {
            this.submitted.set(false);
            this.router.navigate(['/']); // Go back to dashboard after success
          }, 3000);
        },
        error: (err) => {
          console.error('Error registering project:', err);
          alert('Failed to register project. Please check if the backend is running.');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
