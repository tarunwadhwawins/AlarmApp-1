import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alarm-log',
  templateUrl: './alarm-log.component.html',
  styleUrls: ['./alarm-log.component.scss']
})
export class AlarmLogComponent implements OnInit {
  displayedColumns: string[] = ['select','priority', 'timestamp', 'name','description' , 'acknowledge' , 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


}
export interface PeriodicElement {
  priority: string;
  timestamp: string;
  name: string;
  status:string;
  ackstatus:string;
  value:string;
  limit:string;
  type:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 1', status:'Locked', ackstatus:'12', value:'345', limit:'unit', type:'type'},
  { priority: 'green', timestamp:'2021/12/27 16:25:25', name: 'Alarm 2', status:'Locked', ackstatus:'35', value:'355', limit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 3', status:'Unlocked', ackstatus:'55', value:'3556', limit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 4', status:'Locked', ackstatus:'45', value:'224', limit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 5', status:'Locked', ackstatus:'355', value:'3656', limit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 6', status:'Unlocked', ackstatus:'355', value:'532', limit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 7', status:'Locked', ackstatus:'22', value:'45', limit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 8', status:'Unlocked', ackstatus:'355', value:'553', limit:'unit', type:'type'},
  { priority: 'green', timestamp: '2021/12/27 16:25:25', name: 'Alarm 9', status:'Locked', ackstatus:'224', value:'335', limit:'unit', type:'type'},
  { priority: 'orange', timestamp: '2021/12/27 16:25:25', name: 'Alarm 10', status:'Unlocked', ackstatus:'453', value:'456', limit:'unit', type:'type'},
];