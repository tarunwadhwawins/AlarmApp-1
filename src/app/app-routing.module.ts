import { MapModule } from './features/map/map.module';

import { NavigationComponent } from './core/components/navigation/navigation.component';
// global imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// local imports
const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'report',
        loadChildren: () => import('./features/reports/report.module').then((m) => m.ReportsModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },

      {
        path: 'alarm',
        loadChildren: () => import('./features/alarm-summary/alarm-summary.module').then((m) => m.AlarmSummaryModule),
      },

      {
        path: 'log',
        loadChildren: () => import('./features/alarm-log/alarm-log.module').then((m) => m.AlarmLogModule),
      },
      {
        path: 'map',
        loadChildren: () => import('./features/map/map.module').then((m) => m.MapModule),
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
