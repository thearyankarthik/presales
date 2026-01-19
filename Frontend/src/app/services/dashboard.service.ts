import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    getDashboard(empId: string) {
        return of({
            total_leads: 100,
            active_customers: 50,
            pending_leads: 20,
            site_visit_done: 10,
            deals_closed: 5
        });
    }

    getLeads() {
        return of([
            { name: 'Lead 1', status: 'Active' },
            { name: 'Lead 2', status: 'Pending' }
        ]);
    }
}
