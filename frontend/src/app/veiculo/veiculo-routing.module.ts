import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { VeiculoFormComponent, VeiculoListComponent } from "./components";

export const VeiculoRoutes: Routes = [
    {
        path: 'veiculo',
        component: VeiculoListComponent
    },
    {
        path: 'veiculo/novo',
        component: VeiculoFormComponent
    },
    {
        path: 'veiculo/editar/:id',
        component: VeiculoFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(VeiculoRoutes)],
    exports: [RouterModule]
})

export class VeiculoRoutingModule {
}
