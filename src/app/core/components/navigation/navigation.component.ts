import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {

  readonly availableLanguages: any[]= [{name: '日本語', value: 'Japanese'}, {name: 'English', value: 'English'}]


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
