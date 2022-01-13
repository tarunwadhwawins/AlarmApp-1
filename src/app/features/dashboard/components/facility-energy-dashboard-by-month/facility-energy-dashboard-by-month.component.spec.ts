import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityEnergyDashboardByMonthComponent } from './facility-energy-dashboard-by-month.component';

describe('FacilityEnergyDashboardByMonthComponent', () => {
  let component: FacilityEnergyDashboardByMonthComponent;
  let fixture: ComponentFixture<FacilityEnergyDashboardByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityEnergyDashboardByMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityEnergyDashboardByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
