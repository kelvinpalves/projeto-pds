import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoristaService } from './service';
import { MotoristaFormComponent, MotoristaListComponent } from './components';
import { CommonLocalModule } from '../common';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MotoristaFormComponent, 
    MotoristaListComponent
  ],
  imports: [
    CommonModule,
    CommonLocalModule,
    DataTablesModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MotoristaService
  ]
})
export class MotoristaModule { }
