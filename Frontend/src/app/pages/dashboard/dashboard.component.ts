import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../../shared/kpi-card/kpi-card';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, KpiCardComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  userName = 'Varun';

  dashboard: any = {
    total_leads: -1,
    active_customers: -1,
    pending_leads: -1,
    site_visit_done: -1,
    deals_closed: -1
  };

  error: string | null = null;
  loading: boolean = true;

  leads: any[] = []; // 👈 REQUIRED for Leads UI

  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('Dashboard init started');

    // KPI data
    this.dashboardService.getDashboard('EMP001')
      .subscribe({
        next: (data) => {
          console.log('Data received in component:', data);
          this.dashboard = data;
          this.loading = false;
          this.cdr.detectChanges(); // 👈 Force UI update
        },
        error: (err) => {
          console.error('Error in component:', err);
          this.error = 'Failed to load data. Status: ' + err.status + ' ' + err.statusText;
          this.loading = false;
          this.cdr.detectChanges(); // 👈 Force UI update
        }
      });

    // Leads table data
    this.dashboardService.getLeads()
      .subscribe({
        next: (data) => {
          this.leads = data;
          console.log('Leads:', data);
        },
        error: (err) => console.error(err)
      });
  }

  onAddProject() {
    console.log('Add New Project clicked');
    // Future implementation: Open registration form
  }
}
