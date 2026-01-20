import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private apiUrl = 'http://localhost:5000/api';

    constructor(private http: HttpClient) { }

    getDashboard(empId: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/dashboard`, {
            params: { emp_id: empId }
        });
    }

    getLeads(): Observable<any> {
        return this.http.get(`${this.apiUrl}/leads`);
    }
}
