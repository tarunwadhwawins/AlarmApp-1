import { Component, OnInit } from '@angular/core';

interface PriorityList {
  value: string;
  viewValue: string;
}
interface AlarmStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnInit {

  list: PriorityList[] = [
    {value: '1', viewValue: 'Choose Option 1'},
    {value: '2', viewValue: 'Choose Option 2'},
    {value: '3', viewValue: 'Choose Option 3'},
    {value: '4', viewValue: 'Choose Option 4'},
    {value: '5', viewValue: 'Choose Option 5'},

  ];

  alarmlist: AlarmStatus[] = [
    {value: '1', viewValue: 'Choose Option 1'},
    {value: '2', viewValue: 'Choose Option 2'},
    {value: '3', viewValue: 'Choose Option 3'},
    {value: '4', viewValue: 'Choose Option 4'},
    {value: '5', viewValue: 'Choose Option 5'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
