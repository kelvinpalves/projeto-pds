import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './service';
import { UsuarioFormComponent, UsuarioListComponent } from './components';
import { CommonLocalModule } from '../common';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsuarioFormComponent, 
    UsuarioListComponent
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
    UsuarioService
  ]
})
export class UsuarioModule { }
