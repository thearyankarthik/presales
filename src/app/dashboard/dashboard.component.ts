import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    stats = [
        { label: 'Total Revenue', value: '$45,231.89', change: '+20.1% from last month' },
        { label: 'Subscriptions', value: '+2350', change: '+180.1% from last month' },
        { label: 'Sales', value: '+12,234', change: '+19% from last month' },
        { label: 'Active Now', value: '+573', change: '+201 since last hour' }
    ];
}
