import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlarmLogComponent } from './alarm-log.component';
import { AlarmLogRoutingModule } from './alarm-log-routing';



@NgModule({
  declarations: [AlarmLogComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlarmLogRoutingModule
  ],
  exports: [AlarmLogComponent]

})
export class AlarmLogModule { }
