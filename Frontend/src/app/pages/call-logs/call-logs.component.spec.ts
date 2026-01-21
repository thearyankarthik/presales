import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallLogsComponent } from './call-logs.component';

describe('CallLogsComponent', () => {
  let component: CallLogsComponent;
  let fixture: ComponentFixture<CallLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallLogsComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CallLogsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
