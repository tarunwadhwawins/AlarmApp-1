import { FormsModule } from '@angular/forms';
import { MapRoutingModule } from './map-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
// import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    SharedModule,
    MapRoutingModule,
    FormsModule,
    GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   // please get your own API key here:
    //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    // })
  ],
  exports: [MapComponent]

})
export class MapModule { }
