import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

interface SelectLanguage {
  value: string;
  viewValue: string;

}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})


export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {

  readonly availableLanguages: any[]= [{name: '日本語', value: 'Japanese'}, {name: 'English', value: 'English'}]
  value='Eng'

  language: SelectLanguage[] = [
    {value: 'Eng', viewValue: 'English'},
    {value: 'Jap', viewValue: 'Japanese'},
    {value: 'Chin', viewValue: 'Chinese'},
  ];

  isLoggedIn: boolean = false;
  collapsed: boolean = false;
  // hasNestedMenu: boolean = false;

  isDashboard: boolean = false;
  isReport: boolean;
  isDashboardsClicked: boolean = false;

  notificationCount: number = 0;
  notifications = [];

  @ViewChild('menu') menu;



  showLogo: boolean = true;

  constructor(
    public cd: ChangeDetectorRef,
    ) {}

  ngOnInit() {
  }



  ngAfterViewInit() {
  }



  ngOnDestroy() {

  }


}
