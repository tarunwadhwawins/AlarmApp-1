import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
interface summeryOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-alarm-summary',
  templateUrl: './alarm-summary.component.html',
  styleUrls: ['./alarm-summary.component.scss']
})
export class AlarmSummaryComponent implements OnInit {
  value='today'
  summeryList: summeryOption[] = [
    {value: 'today', viewValue: 'Today'},
    {value: '2', viewValue: 'Last 24 Hour'},
    {value: '3', viewValue: 'Yesterday'},
    {value: '4', viewValue: 'Last Week'},
    {value: '5', viewValue: 'Last 7 Day'},
    {value: '6', viewValue: 'Last Month'},
    {value: '7', viewValue: 'Last Year '},

  ];
  displayedColumns1: string[] = ['select','priority', 'timestamp', 'name','status', 'ackstatus', 'value', 'limit', 'type'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  selection1 = new SelectionModel<PeriodicElement1>(true, []);
  constructor() { }

  ngOnInit(): void {
  }

  isAllSelected1() {
    const numSelected = this.selection1.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected === numRows;
  }

  masterToggle1() {
    this.isAllSelected1() ?
        this.selection1.clear() :
        this.dataSource1.data.forEach(row => this.selection1.select(row));
  }

}
export interface PeriodicElement1 {
  priority: string;
  timestamp: string;
  name: string;
  description:string;
  acknowledge:string;
  action:string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 1', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'green', timestamp:'2021/12/27 16:25:25', name: 'Alarm 2', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 3', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 4', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 5', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 6', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 7', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 8', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 9', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 10', description:'Lorem Ipsum', acknowledge:'Lorem Ipsum', action:'Lorem Ipsum'},
];
