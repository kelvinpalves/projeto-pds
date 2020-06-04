import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ImpostoFormComponent, ImpostoListComponent } from "./components";

export const ImpostoRoutes: Routes = [
    {
        path: 'veiculo/editar/:id/imposto',
        component: ImpostoListComponent
    },
    {
        path: 'veiculo/editar/:id/imposto/novo',
        component: ImpostoFormComponent
    },
    {
        path: 'veiculo/editar/:id/imposto/editar/:id',
        component: ImpostoFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(ImpostoRoutes)],
    exports: [RouterModule]
})

export class ImpostoRoutingModule {
}
