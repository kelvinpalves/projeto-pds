import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { MotoristaFormComponent, MotoristaListComponent } from "./components";

export const MotoristaRoutes: Routes = [
    {
        path: 'motorista',
        component: MotoristaListComponent
    },
    {
        path: 'motorista/novo',
        component: MotoristaFormComponent
    },
    {
        path: 'motorista/editar/:id',
        component: MotoristaFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(MotoristaRoutes)],
    exports: [RouterModule]
})

export class MotoristaRoutingModule {
}
