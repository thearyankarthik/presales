import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-call-logs',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './call-logs.html',
  styleUrls: ['./call-logs.css']
})
export class CallLogs implements OnInit {

  callLogs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/call-logs')
      .subscribe({
        next: data => this.callLogs = data,
        error: err => console.error(err)
      });
  }
}
