import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustoService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Custo } from '../../models';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-custo-form',
  templateUrl: './custo-form.component.html',
  styleUrls: ['./custo-form.component.css']
})
export class CustoFormComponent implements OnInit {
  form: FormGroup;
  modoAtualizar: boolean;
  idCusto: string;
  idVeiculo: string;

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
      .atualizar(this.idVeiculo, custo)
      .subscribe(
        data => {
          this.toastr.success("Sucesso ao atualizar o veículo.");
          this.router.navigate(['/veiculo/editar/' + this.idVeiculo + '/custo']);
        },
        err => {
          this.toastr.error("Erro ao atualizar o veículo.");
        }
      );

    return false;
  }

  gerarForm() {
    this.form = this.fb.group({
      valor: ['', [Validators.required]],
      categoriaCusto: ['', [Validators.required]],
    });
  }

  obterDados() {
    this.idVeiculo = this.route.snapshot.url[2].toString();
    let idCusto = this.route.snapshot.url.pop();
    if (Number.isInteger(parseInt(idCusto.path))) {
      this.idCusto = this.route.snapshot.paramMap.get('id');
    }
    if (this.idCusto) {
      this.modoAtualizar = true;
      this.dataservice.buscarCusto(this.idCusto)
        .subscribe(
          data => {
            const custo: Custo = data;
            this.form.get('valor').setValue(custo.valor);
            this.form.get('categoriaCusto').setValue(custo.categoriaCusto);
          },
          err => {
            this.toastr.error("Erro ao buscar dados.");
          }
        )
    }
  }

  criar() {
    let custo: Custo = this.form.value;

    this.dataservice.criar(this.idVeiculo, custo)
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