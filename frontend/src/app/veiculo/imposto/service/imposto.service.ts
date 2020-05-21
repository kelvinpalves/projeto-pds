import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment'
import { HttpUtilService } from '../../../common';
import { Imposto } from '../models';

@Injectable()
export class ImpostoService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  buscar(id): Observable<any> {
    return this.http.get(env.baseApiUrl + 'imposto/veiculo' + id, this.httpUtils.headers());
  }

  buscarImposto(id): Observable<any> {
    return this.http.get(env.baseApiUrl + 'imposto/' + id, this.httpUtils.headers());
  }

  criar(id, imposto: Imposto): Observable<any> {
    return this.http.post(env.baseApiUrl + 'imposto/veiculo' + id, imposto, this.httpUtils.headers());
  }

  atualizar(imposto: Imposto, id): Observable<any> {
    return this.http.put(env.baseApiUrl + 'imposto/' + id, imposto, this.httpUtils.headers());
  }

  remover(id): Observable<any> {
    return this.http.delete(env.baseApiUrl + 'imposto/' + id, this.httpUtils.headers());
  }

}
