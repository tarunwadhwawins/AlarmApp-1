import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HeaderFilterComponent } from './components/header-filter/header-filter.component';



@NgModule({
  declarations: [HeaderFilterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HeaderFilterComponent,
    FormsModule
  ]
})
export class SharedModule { }
