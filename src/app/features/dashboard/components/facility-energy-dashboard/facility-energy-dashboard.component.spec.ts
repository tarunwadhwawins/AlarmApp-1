import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityEnergyDashboardComponent } from './facility-energy-dashboard.component';

describe('FacilityEnergyDashboardComponent', () => {
  let component: FacilityEnergyDashboardComponent;
  let fixture: ComponentFixture<FacilityEnergyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityEnergyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityEnergyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
