import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment'
import { HttpUtilService } from '../../common';
import { Veiculo } from '../models';

@Injectable()
export class VeiculoService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  buscar(): Observable<any> {
    return this.http.get(env.baseApiUrl + 'veiculo', this.httpUtils.headers());
  }

  buscarVeiculo(id): Observable<any> {
    return this.http.get(env.baseApiUrl + 'veiculo/' + id, this.httpUtils.headers());
  }

  criar(veiculo: Veiculo): Observable<any> {
    return this.http.post(env.baseApiUrl + 'veiculo', veiculo, this.httpUtils.headers());
  }

  atualizar(veiculo: Veiculo, id): Observable<any> {
    return this.http.put(env.baseApiUrl + 'veiculo/' + id, veiculo, this.httpUtils.headers());
  }

  remover(id): Observable<any> {
    return this.http.delete(env.baseApiUrl + 'veiculo/' + id, this.httpUtils.headers());
  }

}
