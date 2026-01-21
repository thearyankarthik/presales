import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private router: Router) { }

    onLogin(event: Event) {
        event.preventDefault();
        console.log('Bypassing login, navigating to dashboard...');
        this.router.navigate(['/dashboard']);
    }
}
