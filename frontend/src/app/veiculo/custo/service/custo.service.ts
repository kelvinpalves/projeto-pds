import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment'
import { HttpUtilService } from '../../../common';
import { Custo } from '../models';

@Injectable()
export class CustoService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  buscar(veiculoId): Observable<any> {
    return this.http.get(env.baseApiUrl + 'custo/veiculo/' + veiculoId, this.httpUtils.headers());
  }

  buscarCusto(id): Observable<any> {
    return this.http.get(env.baseApiUrl + 'custo/' + id, this.httpUtils.headers());
  }

  criar(idVeiculo, custo: Custo): Observable<any> {
    return this.http.post(env.baseApiUrl + 'custo/veiculo/' + idVeiculo, custo, this.httpUtils.headers());
  }

  atualizar(idVeiculo, custo: Custo): Observable<any> {
    return this.http.put(env.baseApiUrl + 'custo/' + idVeiculo, custo, this.httpUtils.headers());
  }

  remover(id): Observable<any> {
    return this.http.delete(env.baseApiUrl + 'custo/' + id, this.httpUtils.headers());
  }

}
