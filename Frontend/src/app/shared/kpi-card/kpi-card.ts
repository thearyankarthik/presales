import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-kpi-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="kpi-card">
      <div class="label">{{label}}</div>
      <div class="value">{{value}}</div>
    </div>
  `,
    styles: [`
    .kpi-card {
      background: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      min-height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      border: 1px solid #f0f0f0;
    }
    .label {
      color: #8b95a5;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      text-transform: uppercase;
    }
    .value {
      color: #1a1a1a;
      font-size: 32px;
      font-weight: 700;
      line-height: 1;
    }
  `]
})
export class KpiCardComponent {
    @Input() label: string = '';
    @Input() value: string | number = '';
}
