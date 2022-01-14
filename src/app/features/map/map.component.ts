import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MapModalComponent } from 'src/app/shared/components/map-modal/map-modal.component';
// import { MouseEvent } from '@agm/core';
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
 }


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;


 ngOnInit(): void {

 }




 constructor(public dialog: MatDialog){}

 clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
  this.dialog.open(MapModalComponent, {
    data: {
      animal: 'panda',
    },
  });
}

mapClicked($event: any) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: true
  });

}

markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);

}
markers: marker[] = [
  {
    lat: 51.673858,
    lng: 7.815982,
    label: 'A',
    draggable: true
  },
  {
    lat: 51.373858,
    lng: 7.215982,
    label: 'B',
    draggable: false
  },
  {
    lat: 51.723858,
    lng: 7.895982,
    label: 'C',
    draggable: true
  }
]




}


