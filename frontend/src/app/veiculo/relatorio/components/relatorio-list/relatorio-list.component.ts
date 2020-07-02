import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RelatorioService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Relatorio } from '../../models';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2'

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

  Relatorios: Relatorio[];

  constructor(
    private service: RelatorioService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.Relatorios = [];
    this.montarTabela();
  }

  ngAfterViewInit(): void {
    if (this.dtTrigger) {
      this.dtTrigger.next();
    }
  }

  montarTabela() {
    this.dtOptions = {
      columns: [
        { title: '#', data: 'id' }, 
        { title: 'Custo', data: 'Custo'}, 
        { title: 'Imposto', data: 'imposto'}, 
      ],
    };
  }

  buscar(dataTablesParameters: any, callback) {
    const idVeiculo = this.route.snapshot.paramMap.get('id');
    this.service.buscar(idVeiculo)
    .subscribe(
      data => {
        const response = data;
        
        callback({
          data: response
        });
      },
      err => {
        this.toastr.error("Erro ao carregar a lista de Relatorios.");
      }
    )
  }

  recarregarTabela(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

}
