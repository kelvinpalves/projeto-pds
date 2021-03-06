import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ImpostoService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Imposto } from '../../models';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-imposto-list',
  templateUrl: './imposto-list.component.html',
  styleUrls: ['./imposto-list.component.css']
})
export class ImpostoListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  dtOptions: DataTables.Settings = {};

  impostos: Imposto[];

  constructor(
    private service: ImpostoService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.impostos = [];
    this.montarTabela();
  }

  ngAfterViewInit(): void {
    if (this.dtTrigger) {
      this.dtTrigger.next();
    }
  }

  irParaEditar(data) {
    const imposto: Imposto = data;
    const idVeiculo = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['veiculo/editar/' + idVeiculo + '/imposto/editar/' + imposto.id]);
  }

  montarTabela() {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this.buscar(dataTablesParameters, callback);
      },
      columns: [
        { title: '#', data: 'id' }, 
        { title: 'Valor', data: 'valor', render: (d1) => {
          return "R$ " + d1 + ",00";
        }}, 
        { title: 'Data de pagamento', data: 'dataPagamento', render: (d1) => {
          let dataPagamento = new Date(d1);

          let dia:any = dataPagamento.getDate();
          dia = dia < 10 ? ("0" + dia) : dia;

          let mes: any = (dataPagamento.getMonth() + 1);
          mes = mes < 10 ? ("0" + mes) : mes;

          return dia + "/" + mes + "/" + dataPagamento.getFullYear();
        }}, 
        {
          data: 'id', searchable: false, orderable: false, title: "Ações", name: 'id', className: 'text-center ', render: (d1, d2, data) => {
            return `
            <button class="btn btn-primary editar" style="padding: 8px; padding-top: 0px; padding-bottom: 0px;" ><i class="fa fa-edit"></i></button>
            <button class="btn btn-danger remover" (click)="remover()" style="padding: 8px; padding-top: 0px; padding-bottom: 0px;"><i class="fa fa-trash"></i></button>
          `;
          }
        }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        this.rowCallback(row, data, index);
      }
    };
  }

  rowCallback(row: Node, data: any[] | Object, index: number) {
    $('.remover', row).unbind('click');
    $('.remover', row).bind('click', () => {
      this.remover(data);
    });

    $('.editar', row).unbind('click');
    $('.editar', row).bind('click', () => {
      this.irParaEditar(data);
    });

    return row;
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
        this.toastr.error("Erro ao carregar a lista de veículos.");
      }
    )
  }

  recarregarTabela(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  remover(data) {
    const imposto: Imposto = data;

    Swal.fire({
      title: 'Você tem certeza?',
      text: "Ao aceitar, o imposto " + imposto.id + " será removido!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, remover!'
    }).then((result) => {
      if (result.value) {
        this.service.remover(imposto.id)
          .subscribe(
            data => {
              this.toastr.success("Sucesso ao remover o imposto.");
              // this.buscar();
              this.recarregarTabela();
            },
            err => {
              this.toastr.error("Erro ao remover o imposto.");
            }
          )
      }
    })
  }

}
