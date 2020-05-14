import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../models';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  form: FormGroup;
  modoAtualizar: boolean;
  idUsuario: string;

  constructor(
    private dataservice: UsuarioService,
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
    let usuario: Usuario = this.form.value;
    
    this.dataservice
      .atualizar(usuario, this.idUsuario)
      .subscribe(
        data => {
          this.toastr.success("Sucesso ao atualizar o usuário.");
          this.router.navigate(['/usuario']);
        },
        err => {
          this.toastr.error("Erro ao atualizar o usuário.");
        }
      );

    return false;
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      confirmacao: ['', [Validators.required]]
    });
  }

  obterDados() {
    this.idUsuario = this.route.snapshot.paramMap.get('id');
    if (this.idUsuario) {
      this.modoAtualizar = true;
      this.dataservice.buscarUsuario(this.idUsuario)
        .subscribe(
          data => {
            const usuario: Usuario = data;
            this.form.get('nome').setValue(usuario.nome);
            this.form.get('login').setValue(usuario.login);
          },
          err => {
            this.toastr.error("Erro ao buscar dados.");
          }
        )
    }
  }

  criar() {
    if (this.form.get('senha').value == this.form.get('confirmacao').value) {
      let usuario: Usuario = this.form.value;

      this.dataservice.criar(usuario)
      .subscribe(
        data => {
          if (data.id) {
            this.toastr.success("Sucesso ao criar usuário: " + data.id);
            this.router.navigate(["/usuario"]);
          } else {
            this.toastr.error("Erro ao salvar o usuário.");
          }
        },
        error => {
          this.toastr.error("Erro ao salvar o usuário.");
        }
      )
    } else {
      this.toastr.error("Senha e confirmação estão diferentes.");
    }
  }

}