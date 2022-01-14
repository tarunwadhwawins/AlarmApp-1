import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnInit {

  constructor() { }

  customerControl = new FormControl();
    options: string[] = ['Klevon', 'Aafreen', 'Addison','Lucas','Amelia','Mathias','Marie','Leon','Julia','Maximilian'];
  filteredOptions: Observable<string[]>;

  countryControl = new FormControl();
    options1: string[] = ['Afghanistan', 'Japan', 'China','Australia','Bahamas','Brazil','Colombia','India'];
  filteredOptions1: Observable<string[]>;

  stateControl = new FormControl();
    options2: string[] = ['State 1', 'State 2', 'State 3','State 4','State 5','State 6','State 7','State 8'];
  filteredOptions2: Observable<string[]>;

  ipRangeControl = new FormControl();
    options3: string[] = ['192.168.43.2', '192.168.48.1', '192.168.47.5','192.168.53.2','192.168.91.4','192.168.83.6','192.168.76.1'];
  filteredOptions3: Observable<string[]>;


  ngOnInit(): void {
    this.filteredOptions = this.customerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this.filteredOptions1 = this.countryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value)),
    );

    this.filteredOptions2 = this.stateControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value)),
    );
    this.filteredOptions3 = this.ipRangeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter3(value)),
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
   }
   private _filter1(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options1.filter(option => option.toLowerCase().includes(filterValue));
   }
   private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options2.filter(option => option.toLowerCase().includes(filterValue));
   }
   private _filter3(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options3.filter(option => option.toLowerCase().includes(filterValue));
   }

}
