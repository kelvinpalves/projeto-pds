import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpostoService } from './service';
import { ImpostoFormComponent, ImpostoListComponent } from './components';
import { CommonLocalModule } from '../../common';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ImpostoFormComponent, 
    ImpostoListComponent
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
    ImpostoService
  ]
})
export class ImpostoModule { }
