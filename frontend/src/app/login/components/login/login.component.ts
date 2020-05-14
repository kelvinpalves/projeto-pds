import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services';
import { Login } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = this.fb.group({
      username: ['admin', [Validators.required]],
      password: ['password', [Validators.required]]
    });
  }

  logar() {
    const login: Login = this.form.value;

    this.service.logar(login)
    .subscribe(
      data => {
        localStorage['token'] = data.token;
      },
      err => {
        delete localStorage['token'];
      }
    )
  }

}
