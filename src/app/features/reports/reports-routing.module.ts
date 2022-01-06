import { NgModule } from '@angular/core';


import { ReportsComponent } from './reports.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ReportsComponent },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class ReportsRoutingModule { }
