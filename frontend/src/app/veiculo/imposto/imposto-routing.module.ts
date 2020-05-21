import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ImpostoFormComponent, ImpostoListComponent } from "./components";

export const ImpostoRoutes: Routes = [
    {
        path: 'imposto',
        component: ImpostoListComponent
    },
    {
        path: 'imposto/novo',
        component: ImpostoFormComponent
    },
    {
        path: 'imposto/editar/:id',
        component: ImpostoFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(ImpostoRoutes)],
    exports: [RouterModule]
})

export class ImpostoRoutingModule {
}
