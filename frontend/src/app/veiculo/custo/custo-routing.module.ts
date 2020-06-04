import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CustoFormComponent, CustoListComponent } from "./components";

export const CustoRoutes: Routes = [
    {
        path: 'veiculo/editar/:id/custo',
        component: CustoListComponent
    },
    {
        path: 'veiculo/editar/:id/custo/novo',
        component: CustoFormComponent
    },
    {
        path: 'veiculo/editar/:id/custo/editar/:id',
        component: CustoFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(CustoRoutes)],
    exports: [RouterModule]
})

export class CustoRoutingModule {
}
