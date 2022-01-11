import { Component, OnInit } from '@angular/core';
// import { MouseEvent } from '@agm/core';
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
 }

 interface SelectCountry {
  value: string;
  viewValue: string;
}
interface SelectState {
  value: string;
  viewValue: string;
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


 country: SelectCountry[] = [
  {value: 'Jap', viewValue: 'Japan'},
  {value: 'Chi', viewValue: 'China'},
  {value: 'Af', viewValue: 'Afghanistan'},
  {value: 'Aus', viewValue: 'Australia'},
  {value: 'Bah', viewValue: 'Bahamas'},
  {value: 'Bra', viewValue: 'Brazil'},
  {value: 'Col', viewValue: 'Colombia'},
  {value: 'Ind', viewValue: 'India'},

];
state: SelectState[] = [
  {value: '1', viewValue: 'state 1'},
  {value: '2', viewValue: 'state 2'},
  {value: '3', viewValue: 'state 3'},
  {value: '4', viewValue: 'state 4'},
  {value: '5', viewValue: 'state 5'},
  {value: '6', viewValue: 'state 6'},
];

}


