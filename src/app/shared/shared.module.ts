import { MapModalComponent } from './components/map-modal/map-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HeaderFilterComponent } from './components/header-filter/header-filter.component';



@NgModule({
  declarations: [HeaderFilterComponent,MapModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HeaderFilterComponent,
    FormsModule,
    ReactiveFormsModule,
    MapModalComponent
  ]
})
export class SharedModule { }
