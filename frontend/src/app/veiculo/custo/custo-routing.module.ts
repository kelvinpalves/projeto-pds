import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CustoFormComponent, CustoListComponent } from "./components";

export const CustoRoutes: Routes = [
    {
        path: 'custo',
        component: CustoListComponent
    },
    {
        path: 'custo/novo',
        component: CustoFormComponent
    },
    {
        path: 'custo/editar/:id',
        component: CustoFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(CustoRoutes)],
    exports: [RouterModule]
})

export class CustoRoutingModule {
}
