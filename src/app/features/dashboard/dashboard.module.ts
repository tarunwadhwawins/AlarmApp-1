
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from 'ng2-charts';
import { Ng9OdometerModule } from 'ng9-odometer';
import { FacilityEnergyDashboardComponent } from './components/facility-energy-dashboard/facility-energy-dashboard.component';
import { FacilityEnergyDashboardByMonthComponent } from './components/facility-energy-dashboard-by-month/facility-energy-dashboard-by-month.component';

@NgModule({
  declarations: [DashboardComponent, FacilityEnergyDashboardComponent, FacilityEnergyDashboardByMonthComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ChartsModule,
    Ng9OdometerModule
  ],
  exports: [DashboardComponent]

})
export class DashboardModule { }
