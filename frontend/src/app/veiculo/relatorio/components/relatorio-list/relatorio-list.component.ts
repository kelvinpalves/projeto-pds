import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RelatorioService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Relatorio } from '../../models';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-Relatorio-list',
  templateUrl: './relatorio-list.component.html',
  styleUrls: ['./relatorio-list.component.css']
})
export class RelatorioListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  dtOptions: DataTables.Settings = {};
  idVeiculo: string;
  form: FormGroup;
  relatorios: Relatorio[];

  constructor(
    private dataService: RelatorioService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.relatorios = [];
    this.montarTabela();
    this.idVeiculo = this.route.snapshot.paramMap.get('id')
    let params = {
      id: this.idVeiculo,
      inicio: new Date('1900-01-01'),
      fim: new Date(Date.now()) 
    }
    this.buscarRelatorios(params)
    this.gerarForm()
  }

  ngAfterViewInit(): void {
    if (this.dtTrigger) {
      this.dtTrigger.next();
    }
  }

  gerarForm() {
    this.form = this.fb.group({
      dataInicio: ['', [Validators.required]],
      dataFim: ['', [Validators.required]]
    });
  }

  montarTabela() {
    this.dtOptions = {
      columns: [
        { title: '#', data: 'id' }, 
        { title: 'Tipo', data: 'tipo'}, 
        { title: 'Valor', data: 'valor'}, 
      ],
    };
  }

  buscarRelatorios(params){
    this.dataService
    .buscar(params)
    .subscribe(
      data => {
        this.relatorios = data.map(params => {
          return {
            tipo: params.tipo,
            valor: params.valor
          }
        })
      },
      error => {
        this.toastr.error("Error ao buscar os relatorios.");
      }
    )
  }

  buscarRelatoriosPorData(){
    //Pegar os valores de inicio e fim através do form
    let params = {
      id: this.idVeiculo,
      inicio: this.form.get('dataInicio').value,
      fim: this.form.get('dataFim').value
    }
    this.buscarRelatorios(params)
  }

  recarregarTabela(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

}
