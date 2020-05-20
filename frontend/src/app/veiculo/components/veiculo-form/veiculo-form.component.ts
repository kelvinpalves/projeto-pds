import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Veiculo } from '../../models';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {
  form: FormGroup;
  modoAtualizar: boolean;
  idVeiculo: string;

  constructor(
    private dataservice: VeiculoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.modoAtualizar = false;
    this.gerarForm();
    this.obterDados();
  }

  atualizar() {
    let veiculo: Veiculo = this.form.value;
    
    this.dataservice
      .atualizar(veiculo, this.idVeiculo)
      .subscribe(
        data => {
          this.toastr.success("Sucesso ao atualizar o veículo.");
          this.router.navigate(['/veiculo']);
        },
        err => {
          this.toastr.error("Erro ao atualizar o veículo.");
        }
      );

    return false;
  }

  gerarForm() {
    this.form = this.fb.group({
      placa: ['', [Validators.required]],
      chassi: ['', [Validators.required]],
      ranavan: ['', [Validators.required]],
      anoModelo: ['', [Validators.required]],
      anoFabricacao: ['', [Validators.required]]
    });
  }

  obterDados() {
    this.idVeiculo = this.route.snapshot.paramMap.get('id');
    if (this.idVeiculo) {
      this.modoAtualizar = true;
      this.dataservice.buscarVeiculo(this.idVeiculo)
        .subscribe(
          data => {
            const veiculo: Veiculo = data;
            this.form.get('placa').setValue(veiculo.placa);
            this.form.get('chassi').setValue(veiculo.chassi);
            this.form.get('ranavan').setValue(veiculo.ranavan);
            this.form.get('anoModelo').setValue(veiculo.anoModelo);
            this.form.get('anoFabricacao').setValue(veiculo.anoFabricacao);
          },
          err => {
            this.toastr.error("Erro ao buscar dados.");
          }
        )
    }
  }

  criar() {
    let veiculo: Veiculo = this.form.value;

    this.dataservice.criar(veiculo)
    .subscribe(
      data => {
        if (data.id) {
          this.toastr.success("Sucesso ao criar veículo: " + data.id);
          this.router.navigate(["/veiculo"]);
        } else {
          this.toastr.error("Erro ao salvar o veículo.");
        }
      },
      error => {
        this.toastr.error("Erro ao salvar o veículo.");
      }
    )
  }

}