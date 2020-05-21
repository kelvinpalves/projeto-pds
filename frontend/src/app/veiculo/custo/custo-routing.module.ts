import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CustoFormComponent, CustoListComponent } from "./components";

export const CustoRoutes: Routes = [
    {
        path: 'custos',
        component: CustoListComponent
    },
    {
        path: 'custos/novo',
        component: CustoFormComponent
    },
    {
        path: 'custos/editar/:id',
        component: CustoFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(CustoRoutes)],
    exports: [RouterModule]
})

export class CustoRoutingModule {
}
