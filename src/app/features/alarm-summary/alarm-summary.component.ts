import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-summary',
  templateUrl: './alarm-summary.component.html',
  styleUrls: ['./alarm-summary.component.scss']
})
export class AlarmSummaryComponent implements OnInit {
  displayedColumns: string[] = ['select','priority', 'timestamp', 'name','status', 'ackstatus', 'value', 'unit', 'type'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  priority: string;
  timestamp: string;
  name: string;
  status:string;
  ackstatus:string;
  value:string;
  unit:string;
  type:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 1', status:'Locked', ackstatus:'12', value:'345', unit:'unit', type:'type'},
  { priority: 'green', timestamp:'2021/12/27 16:25:25', name: 'Alarm 2', status:'Locked', ackstatus:'35', value:'355', unit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 3', status:'Unlocked', ackstatus:'55', value:'3556', unit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 4', status:'Locked', ackstatus:'45', value:'224', unit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 5', status:'Locked', ackstatus:'355', value:'3656', unit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 6', status:'Unlocked', ackstatus:'355', value:'532', unit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 7', status:'Locked', ackstatus:'22', value:'45', unit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 8', status:'Unlocked', ackstatus:'355', value:'553', unit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 9', status:'Locked', ackstatus:'224', value:'335', unit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 10', status:'Unlocked', ackstatus:'453', value:'456', unit:'unit', type:'type'},
];