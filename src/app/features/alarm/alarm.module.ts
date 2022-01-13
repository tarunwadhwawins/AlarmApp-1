import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlarmRoutingModule } from './alarm-routing';
import { AlarmSummaryComponent } from './components/alarm-summary/alarm-summary.component';
import { AlarmLogComponent } from './components/alarm-log/alarm-log.component';
import { AlarmComponent } from './alarm.component';



@NgModule({
  declarations: [AlarmComponent,AlarmLogComponent, AlarmSummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlarmRoutingModule
  ],
  exports: [AlarmComponent]

})
export class AlarmModule { }
