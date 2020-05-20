import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotoristaService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Motorista } from '../../models';

@Component({
  selector: 'app-motorista-form',
  templateUrl: './motorista-form.component.html',
  styleUrls: ['./motorista-form.component.css']
})
export class MotoristaFormComponent implements OnInit {
  form: FormGroup;
  modoAtualizar: boolean;
  idMotorista: string;

  constructor(
    private dataservice: MotoristaService,
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
    let motorista: Motorista = this.form.value;
    
    this.dataservice
      .atualizar(motorista, this.idMotorista)
      .subscribe(
        data => {
          this.toastr.success("Sucesso ao atualizar o motorista.");
          this.router.navigate(['/motorista']);
        },
        err => {
          this.toastr.error("Erro ao atualizar o motorista.");
        }
      );

    return false;
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      contato: ['', [Validators.required]],
      dataAdmissao: ['', [Validators.required]],
      matricula: ['', [Validators.required]]
    });
  }

  obterDados() {
    this.idMotorista = this.route.snapshot.paramMap.get('id');
    if (this.idMotorista) {
      this.modoAtualizar = true;
      this.dataservice.buscarMotorista(this.idMotorista)
        .subscribe(
          data => {
            const motorista: Motorista = data;
            this.form.get('nome').setValue(motorista.nome);
            this.form.get('contato').setValue(motorista.contato);
            this.form.get('dataAdmissao').setValue(motorista.dataAdmissao);
            this.form.get('matricula').setValue(motorista.matricula);
          },
          err => {
            this.toastr.error("Erro ao buscar dados.");
          }
        )
    }
  }

  criar() {
    let motorista: Motorista = this.form.value;

    this.dataservice.criar(motorista)
    .subscribe(
      data => {
        if (data.id) {
          this.toastr.success("Sucesso ao criar motorista: " + data.id);
          this.router.navigate(["/motorista"]);
        } else {
          this.toastr.error("Erro ao salvar o motorista.");
        }
      },
      error => {
        this.toastr.error("Erro ao salvar o motorista.");
      }
    )
  }
}