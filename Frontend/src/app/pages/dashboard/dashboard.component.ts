import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { KpiCardComponent } from '../../shared/kpi-card/kpi-card';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, KpiCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName = 'Varun';

  stats: any[] = [];
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
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Dashboard init started');

    // KPI data
    this.dashboardService.getDashboard('EMP001')
      .subscribe({
        next: (data: any) => {
          console.log('Data received in component:', data);
          this.dashboard = data;
          this.updateStats();
          this.loading = false;
          this.cdr.detectChanges(); // 👈 Force UI update
        },
        error: (err: any) => {
          console.error('Error in component:', err);
          this.error = 'Failed to load data. Status: ' + err.status + ' ' + err.statusText;
          this.loading = false;
          this.cdr.detectChanges(); // 👈 Force UI update
        }
      });

    // Leads table data
    this.dashboardService.getLeads()
      .subscribe({
        next: (data: any) => {
          this.leads = data;
          console.log('Leads:', data);
        },
        error: (err: any) => console.error(err)
      });
  }

  updateStats() {
    this.stats = [
      { label: 'TOTAL LEADS', value: this.dashboard.total_leads, change: '' },
      { label: 'ACTIVE CUSTOMERS', value: this.dashboard.active_customers, change: '' },
      { label: 'PENDING LEADS', value: this.dashboard.pending_leads, change: '' },
      { label: 'SITE VISIT DONE', value: this.dashboard.site_visit_done, change: '' },
      { label: 'DEALS CLOSED', value: this.dashboard.deals_closed, change: '' }
    ];
  }

  onAddProject() {
    console.log('Add New Project clicked');
    this.router.navigate(['/registration']);
  }
}
