import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoService } from './service';
import { VeiculoFormComponent, VeiculoListComponent } from './components';
import { CommonLocalModule } from '../common';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VeiculoMapComponent } from './components/veiculo-map/veiculo-map.component';
import { AgmCoreModule } from '@agm/core';
import { environment} from '../../environments/environment';
@NgModule({
  declarations: [
    VeiculoFormComponent, 
    VeiculoListComponent, VeiculoMapComponent
  ],
  imports: [
    CommonModule,
    CommonLocalModule,
    DataTablesModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    })
  ],
  providers: [
    VeiculoService
  ]
})
export class VeiculoModule { }
