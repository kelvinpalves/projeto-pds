import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustoService } from './service';
import { CustoFormComponent, CustoListComponent } from './components';
import { CommonLocalModule } from '../../common';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustoFormComponent, 
    CustoListComponent
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
    CustoService
  ]
})
export class CustoModule { }
