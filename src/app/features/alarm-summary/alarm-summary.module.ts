import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlarmSummaryRoutingModule } from './alarm-summary-routing.module';
import { AlarmSummaryComponent } from './alarm-summary.component';



@NgModule({
  declarations: [AlarmSummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlarmSummaryRoutingModule
  ],
  exports: [AlarmSummaryComponent]

})
export class AlarmSummaryModule { }
