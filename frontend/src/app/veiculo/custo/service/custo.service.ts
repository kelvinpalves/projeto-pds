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

  buscar(): Observable<any> {
    return this.http.get(env.baseApiUrl + 'custo', this.httpUtils.headers());
  }

  buscarCusto(id): Observable<any> {
    return this.http.get(env.baseApiUrl + 'custo/' + id, this.httpUtils.headers());
  }

  criar(custo: Custo): Observable<any> {
    return this.http.post(env.baseApiUrl + 'custo', custo, this.httpUtils.headers());
  }

  atualizar(custo: Custo, id): Observable<any> {
    return this.http.put(env.baseApiUrl + 'custo/' + id, custo, this.httpUtils.headers());
  }

  remover(id): Observable<any> {
    return this.http.delete(env.baseApiUrl + 'custo/' + id, this.httpUtils.headers());
  }

}
