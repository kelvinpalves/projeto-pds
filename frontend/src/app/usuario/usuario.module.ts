import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';



@NgModule({
  declarations: [UsuarioComponent, FormComponent, ListComponent, UsuarioFormComponent, UsuarioListComponent],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
