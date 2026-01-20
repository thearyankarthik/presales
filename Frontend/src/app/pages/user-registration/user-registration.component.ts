import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-registration',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './user-registration.component.html',
    styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {
    registrationForm!: FormGroup;
    selectedFile: File | null = null;
    selectedFileName: string = '';
    fileError: string = '';

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.registrationForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            userType: ['', Validators.required],
            gender: ['', Validators.required],
            mobileCountryCode: ['+91', Validators.required],
            mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
            emergencyCountryCode: ['+91', Validators.required],
            emergencyNumber: ['', [Validators.required, Validators.minLength(10)]],
            nationality: ['', Validators.required],
            dob: ['', Validators.required],
            aadharNumber: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
            passportNumber: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]]
        });
    }

    onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                this.fileError = 'Only PDF, JPG, JPEG, and PNG files are allowed.';
                this.selectedFile = null;
                this.selectedFileName = '';
            } else {
                this.fileError = '';
                this.selectedFile = file;
                this.selectedFileName = file.name;
            }
        }
    }

    isFieldInvalid(fieldName: string): boolean {
        const field = this.registrationForm.get(fieldName);
        return field ? (field.invalid && (field.dirty || field.touched)) : false;
    }

    onlyNumbers(event: any): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    onSubmit(): void {
        if (this.registrationForm.valid && this.selectedFile) {
            console.log('Form Submitted successfully', this.registrationForm.value);
            console.log('Selected File:', this.selectedFile);

            // Show success message (simulation)
            alert('Registration Successful! Redirecting to login page...');

            // Redirect to login
            this.router.navigate(['/login']);
        } else {
            this.markFormGroupTouched(this.registrationForm);
        }
    }

    private markFormGroupTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if ((control as any).controls) {
                this.markFormGroupTouched(control as FormGroup);
            }
        });
    }
}
