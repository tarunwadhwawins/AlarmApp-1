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


  PriorityList = new FormControl();
    options: string[] = ['Choose Option 1', 'Choose Option 2', 'Choose Option 3','Choose Option 4','Choose Option 5'];
  filteredOptions: Observable<string[]>;

  AlarmStatus = new FormControl();
    options1: string[] = ['Choose Option 1', 'Choose Option 2', 'Choose Option 3','Choose Option 4','Choose Option 5'];
  filteredOptions1: Observable<string[]>;


  ngOnInit(): void {
    this.filteredOptions = this.PriorityList.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this.filteredOptions1 = this.AlarmStatus.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value)),
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

}
