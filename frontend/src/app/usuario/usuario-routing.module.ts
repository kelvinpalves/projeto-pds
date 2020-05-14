import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { UsuarioFormComponent, UsuarioListComponent } from "./components";

export const UsuarioRoutes: Routes = [
    {
        path: 'usuario',
        component: UsuarioListComponent
    },
    {
        path: 'usuario/novo',
        component: UsuarioFormComponent
    },
    {
        path: 'usuario/editar/:id',
        component: UsuarioFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(UsuarioRoutes)],
    exports: [RouterModule]
})

export class UsuarioRoutingModule {
}
