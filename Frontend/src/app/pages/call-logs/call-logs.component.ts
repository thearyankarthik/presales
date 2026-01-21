import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-call-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-logs.component.html',
  styleUrls: ['./call-logs.component.css']
})
export class CallLogsComponent implements OnInit {

  callLogs: any[] = [];
  loading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('CallLogsComponent INIT');

    this.http.get<any[]>('http://127.0.0.1:5000/api/calls/logs')
      .subscribe({
        next: (data) => {
          console.log('API DATA:', data);
          this.callLogs = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('API ERROR:', err);
          this.error = 'Failed to load call logs';
          this.loading = false;
        },
        complete: () => {
        // SAFETY NET
        this.loading = false;
      }
      });
  }
}
