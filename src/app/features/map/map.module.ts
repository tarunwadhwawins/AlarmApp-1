import { FormsModule } from '@angular/forms';
import { MapRoutingModule } from './map-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map.component';
// import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    SharedModule,
    MapRoutingModule,
    FormsModule,
    // GoogleMapsModule,
    AgmCoreModule
  ],
  exports: [MapComponent]

})
export class MapModule { }
