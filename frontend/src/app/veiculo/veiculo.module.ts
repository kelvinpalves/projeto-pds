import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoService } from './service';
import { VeiculoFormComponent, VeiculoListComponent } from './components';
import { CommonLocalModule } from '../common';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    VeiculoFormComponent, 
    VeiculoListComponent
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
    VeiculoService
  ]
})
export class VeiculoModule { }
