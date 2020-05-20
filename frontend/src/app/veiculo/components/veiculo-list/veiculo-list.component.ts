import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VeiculoService } from '../../service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Veiculo } from '../../models';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  dtOptions: DataTables.Settings = {};

  veiculos: Veiculo[];

  constructor(
    private service: VeiculoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.veiculos = [];
    this.montarTabela();
  }

  ngAfterViewInit(): void {
    if (this.dtTrigger) {
      this.dtTrigger.next();
    }
  }

  irParaEditar(data) {
    const veiculo: Veiculo = data;
    this.router.navigate(['/veiculo/editar/' + veiculo.id]);
  }

  montarTabela() {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this.buscar(dataTablesParameters, callback);
      },
      columns: [
        { title: '#', data: 'id' }, 
        { title: 'Placa', data: 'placa'}, 
        { title: 'Chassi', data: 'chassi'},
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
    this.service.buscar()
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
    const veiculo: Veiculo = data;

    Swal.fire({
      title: 'Você tem certeza?',
      text: "Ao aceitar, o veículo " + veiculo.placa + " será removido!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, remover!'
    }).then((result) => {
      if (result.value) {
        this.service.remover(veiculo.id)
          .subscribe(
            data => {
              this.toastr.success("Sucesso ao remover o veículo.");
              // this.buscar();
              this.recarregarTabela();
            },
            err => {
              this.toastr.error("Erro ao remover o veículo.");
            }
          )
      }
    })
  }

}
