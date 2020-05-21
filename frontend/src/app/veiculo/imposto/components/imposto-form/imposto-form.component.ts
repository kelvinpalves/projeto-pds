import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImpostoService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Imposto } from '../../models';

@Component({
  selector: 'app-imposto-form',
  templateUrl: './imposto-form.component.html',
  styleUrls: ['./imposto-form.component.css']
})
export class ImpostoFormComponent implements OnInit {
  form: FormGroup;
  modoAtualizar: boolean;
  idImposto: string;

  constructor(
    private dataservice: ImpostoService,
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
    let imposto: Imposto = this.form.value;
    
    this.dataservice
      .atualizar(imposto, this.idImposto)
      .subscribe(
        data => {
          this.toastr.success("Sucesso ao atualizar o imposto.");
          this.router.navigate(['/imposto']);
        },
        err => {
          this.toastr.error("Erro ao atualizar o imposto.");
        }
      );

    return false;
  }

  gerarForm() {
    this.form = this.fb.group({
      valor: ['', [Validators.required]],
      dataPagamento: ['', [Validators.required]],
    });
  }

  obterDados() {
    this.idImposto = this.route.snapshot.paramMap.get('id');
    if (this.idImposto) {
      this.modoAtualizar = true;
      this.dataservice.buscarImposto(this.idImposto)
        .subscribe(
          data => {
            const imposto: Imposto = data;
            this.form.get('valor').setValue(imposto.valor);
            this.form.get('dataPagamento').setValue(imposto.dataPagamento);
          },
          err => {
            this.toastr.error("Erro ao buscar dados.");
          }
        )
    }
  }

  criar() {
    let imposto: Imposto = this.form.value;

    this.dataservice.criar(imposto)
    .subscribe(
      data => {
        if (data.id) {
          this.toastr.success("Sucesso ao criar imposto: " + data.id);
          this.router.navigate(["/imposto"]);
        } else {
          this.toastr.error("Erro ao salvar o imposto.");
        }
      },
      error => {
        this.toastr.error("Erro ao salvar o imposto.");
      }
    )
  }

}