import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RelatorioListComponent } from "./components";

export const RelatorioRoutes: Routes = [
    {
        path: 'veiculo/:id/relatorio',
        component: RelatorioListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(RelatorioRoutes)],
    exports: [RouterModule]
})

export class RelatorioRoutingModule {
}
