import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioService } from './service';
import { RelatorioListComponent } from './components';
import { CommonLocalModule } from '../../common';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RelatorioListComponent
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
    RelatorioService
  ]
})
export class RelatorioModule { }
