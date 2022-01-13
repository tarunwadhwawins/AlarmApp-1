import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets,RadialChartOptions } from 'chart.js';
import { Label,Color, MultiDataSet } from 'ng2-charts';
import { SingleDataSet,  monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-facility-energy-dashboard',
  templateUrl: './facility-energy-dashboard.component.html',
  styleUrls: ['./facility-energy-dashboard.component.scss']
})
export class FacilityEnergyDashboardComponent implements OnInit {

  
  public number: number = 1000;
  public observable: Observable<boolean>;
  private observer: Observer<boolean>;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Building 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Building 2' }
  ];

  //  line chart
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Building 1' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & {  }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Building 1'], ['Building 2'], 'Building 3'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

    // odometer
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer);

    // Trigger odometer after 2s
    setTimeout(() => this.observer.next(true), 2000);
  }

 // Doughnut
 public doughnutChartLabels: Label[] = ['Building 1', 'Building 2', 'Building 3'];
 public doughnutChartData: MultiDataSet = [
   [350, 450, 100],
   [50, 150, 120],
   [250, 130, 70],
 ];
 public doughnutChartType: ChartType = 'doughnut';

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5', 'Site 6', 'Site 7'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Building 1' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Building 2' }
  ];
  public radarChartType: ChartType = 'radar';

   // PolarArea
   public polarAreaChartLabels: Label[] = ['Building 1', 'Building 2', 'Building 3'];
   public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
   public polarAreaLegend = true;

   public polarAreaChartType: ChartType = 'polarArea';
    // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  ngOnInit() {
  }
  // odometer
  public config = {
    animation: 'count',
    format: '(,ddd).dd',
    // theme: 'minima',
    value: 50,
    auto: true,
}
}
