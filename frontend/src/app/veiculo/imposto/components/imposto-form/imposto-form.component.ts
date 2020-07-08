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
  idVeiculo: string;
  imageSrc: string = '';

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

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

  atualizar() {
    let imposto: Imposto = this.form.value;
    imposto.documento = this.imageSrc;
    this.dataservice
      .atualizar(imposto, this.idVeiculo)
      .subscribe(
        data => {
          this.toastr.success("Sucesso ao atualizar o imposto.");
          console.log(this.router.navigate(['/veiculo/editar/' + this.idVeiculo + '/imposto']));
        },
        err => {
          this.toastr.error("Erro ao atualizar o imposto.");
        }
      );

    return false;
  }

  gerarForm() {
    this.form = this.fb.group({
      documento: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      dataPagamento: ['', [Validators.required]],
    });
  }

  obterDados() {
    this.idVeiculo = this.route.snapshot.url[2].toString();
    let url = this.route.snapshot.url.pop();
    if (Number.isInteger(parseInt(url.path))) {
      this.idImposto = this.route.snapshot.paramMap.get('id');
    }
    if (this.idImposto) {
      this.modoAtualizar = true;
      this.dataservice.buscarImposto(this.idImposto)
        .subscribe(
          data => {
            const imposto: Imposto = data;
            this.imageSrc = imposto.documento;
            this.form.get('valor').setValue(imposto.valor);


            let dataPagamento = new Date(imposto.dataPagamento);
            console.log(dataPagamento);

            this.form.get('dataPagamento').setValue(dataPagamento.toISOString().substring(0,10));
          },
          err => {
            this.toastr.error("Erro ao buscar dados.");
          }
        )
    }
  }

  criar() {
    let imposto: Imposto = this.form.value;
    imposto.documento = this.imageSrc;
    this.dataservice.criar(this.idVeiculo, imposto)
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