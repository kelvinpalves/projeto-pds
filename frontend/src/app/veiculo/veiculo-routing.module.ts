import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { VeiculoFormComponent, VeiculoListComponent, VeiculoMapComponent } from "./components";

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
    {
        path: 'veiculo/mapa/:id',
        component: VeiculoMapComponent        
    }
];

@NgModule({
    imports: [RouterModule.forChild(VeiculoRoutes)],
    exports: [RouterModule]
})

export class VeiculoRoutingModule {
}
