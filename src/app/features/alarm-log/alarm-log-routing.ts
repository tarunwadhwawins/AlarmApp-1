import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AlarmLogComponent } from './alarm-log.component';

const routes: Routes = [
    { path: '', component: AlarmLogComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  
})
export class AlarmLogRoutingModule { }
