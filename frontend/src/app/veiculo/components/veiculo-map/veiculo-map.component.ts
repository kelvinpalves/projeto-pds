import { Component, OnInit } from '@angular/core';
import { RotaService } from '../../service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-veiculo-map',
  templateUrl: './veiculo-map.component.html',
  styleUrls: ['./veiculo-map.component.css']
})
export class VeiculoMapComponent implements OnInit {
  
  latitudeScs: number = -29.717119;
  longitudeScs: number = -52.428162;
  zoom: number = 14
  coordenadas: Array<Object>;
  idVeiculo: string;

  constructor(
    private dataService: RotaService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
   }

  ngOnInit(): void {
    this.idVeiculo = this.route.snapshot.paramMap.get('id')
    let rota = {
      id: this.idVeiculo,
      inicio: new Date('1900-01-01'),
      fim: new Date(Date.now()) 
    }
    this.buscarRotas(rota)
  }

  buscarRotas(rota){
    this.dataService
    .buscar(rota)
    .subscribe(
      data => {
        this.coordenadas = data.map(rota => {
          return {
            longitude: rota.longitude,
            latitude: rota.latitude
          }
        })
      },
      error => {
        this.toastr.error("Error ao buscar as rotas.");
      }
    )
  }

  buscarRotasPorData(){
    //Pegar os valores de inicio e fim através do form
    let rota = {
      id: this.idVeiculo,
      inicio: '',
      fim: ''
    }
    this.buscarRotas(rota)
  }
}
