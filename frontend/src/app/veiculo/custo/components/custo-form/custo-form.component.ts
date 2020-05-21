import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustoService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Custo } from '../../models';

@Component({
  selector: 'app-custo-form',
  templateUrl: './custo-form.component.html',
  styleUrls: ['./custo-form.component.css']
})
export class CustoFormComponent implements OnInit {
  form: FormGroup;
  modoAtualizar: boolean;
  idCusto: string;

  constructor(
    private dataservice: CustoService,
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
    let custo: Custo = this.form.value;
    
    this.dataservice
      .atualizar(custo, this.idCusto)
      .subscribe(
        data => {
          this.toastr.success("Sucesso ao atualizar o veículo.");
          this.router.navigate(['/custo']);
        },
        err => {
          this.toastr.error("Erro ao atualizar o veículo.");
        }
      );

    return false;
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      chassi: ['', [Validators.required]],
      renavan: ['', [Validators.required]],
      anoModelo: ['', [Validators.required]],
      anoFabricacao: ['', [Validators.required]]
    });
  }

  obterDados() {
    this.idCusto = this.route.snapshot.paramMap.get('id');
    if (this.idCusto) {
      this.modoAtualizar = true;
      this.dataservice.buscarCusto(this.idCusto)
        .subscribe(
          data => {
            const custo: Custo = data;
            this.form.get('placa').setValue(custo.placa);
            this.form.get('nome').setValue(custo.nome);
            this.form.get('chassi').setValue(custo.chassi);
            this.form.get('renavan').setValue(custo.renavan);
            this.form.get('anoModelo').setValue(custo.anoModelo);
            this.form.get('anoFabricacao').setValue(custo.anoFabricacao);
          },
          err => {
            this.toastr.error("Erro ao buscar dados.");
          }
        )
    }
  }

  criar() {
    let custo: Custo = this.form.value;

    this.dataservice.criar(custo)
    .subscribe(
      data => {
        if (data.id) {
          this.toastr.success("Sucesso ao criar veículo: " + data.id);
          this.router.navigate(["/custo"]);
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