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
        path: 'log',
        loadChildren: () => import('./features/alarm/alarm.module').then((m) => m.AlarmModule),
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
