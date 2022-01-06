import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Timestamp: string;
  Devicename: string;
  Description: string;
  Alarmpriority: string;
  Alarmstatus: string;
  Acknowledgestatus: string;
  Alarmvalue: number;
  Alarmunit: number;
  Alerttype: string;
  Actiontaken: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { Timestamp: '2021/08/14 12:08 AM', Devicename: 'Lorem Ipsum', Description: 'Lorem Ipsum', Alarmpriority: 'High' , Alarmstatus: 'Active' , Acknowledgestatus:'Lorem Ipsum', Alarmvalue:11, Alarmunit:30, Alerttype:"Lorem Ipsum",Actiontaken:"Lorem Ipsum" },
  { Timestamp: '2021/08/14 12:08 AM', Devicename: 'Lorem Ipsum', Description: 'Lorem Ipsum', Alarmpriority: 'High' , Alarmstatus: 'Active' , Acknowledgestatus:'Lorem Ipsum', Alarmvalue:11, Alarmunit:30, Alerttype:"Lorem Ipsum",Actiontaken:"Lorem Ipsum" },
  { Timestamp: '2021/08/14 12:08 AM', Devicename: 'Lorem Ipsum', Description: 'Lorem Ipsum', Alarmpriority: 'High' , Alarmstatus: 'Active' , Acknowledgestatus:'Lorem Ipsum', Alarmvalue:11, Alarmunit:30, Alerttype:"Lorem Ipsum",Actiontaken:"Lorem Ipsum" },
  { Timestamp: '2021/08/14 12:08 AM', Devicename: 'Lorem Ipsum', Description: 'Lorem Ipsum', Alarmpriority: 'High' , Alarmstatus: 'Active' , Acknowledgestatus:'Lorem Ipsum', Alarmvalue:11, Alarmunit:30, Alerttype:"Lorem Ipsum",Actiontaken:"Lorem Ipsum" },
  { Timestamp: '2021/08/14 12:08 AM', Devicename: 'Lorem Ipsum', Description: 'Lorem Ipsum', Alarmpriority: 'High' , Alarmstatus: 'Active' , Acknowledgestatus:'Lorem Ipsum', Alarmvalue:11, Alarmunit:30, Alerttype:"Lorem Ipsum",Actiontaken:"Lorem Ipsum" },

];
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  displayedColumns: string[] = [ 'Timestamp', 'Devicename', 'Description', 'Alarmpriority' , 'Alarmstatus', 'Acknowledgestatus', 'Alarmvalue', 'Alarmunit', 'Alerttype', 'Actiontaken'];
  dataSource = ELEMENT_DATA;
  constructor() {

  }

  ngOnInit(): void {
  }

}
