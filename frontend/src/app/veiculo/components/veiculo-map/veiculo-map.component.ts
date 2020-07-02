import { Component, OnInit } from '@angular/core';
import { RotaService } from '../../service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiculo-map',
  templateUrl: './veiculo-map.component.html',
  styleUrls: ['./veiculo-map.component.css']
})
export class VeiculoMapComponent implements OnInit {

  form: FormGroup;
  latitudeScs: number = -29.717119;
  longitudeScs: number = -52.428162;
  zoom: number = 14
  coordenadas: Array<Object>;
  idVeiculo: string;

  constructor(
    private dataService: RotaService,
    private fb: FormBuilder,
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
    this.gerarForm()
  }

  gerarForm() {
    this.form = this.fb.group({
      dataInicio: ['', [Validators.required]],
      dataFim: ['', [Validators.required]]
    });
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
      inicio: this.form.get('dataInicio').value,
      fim: this.form.get('dataFim').value
    }
    this.buscarRotas(rota)
  }
}
