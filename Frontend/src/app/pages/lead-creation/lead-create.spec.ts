import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCreateComponent } from './lead-create';

describe('LeadCreateComponent', () => {
  let component: LeadCreateComponent;
  let fixture: ComponentFixture<LeadCreateComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
