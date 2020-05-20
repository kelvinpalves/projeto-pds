import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment'
import { HttpUtilService } from '../../common';
import { Motorista } from '../models';

@Injectable()
export class MotoristaService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  buscar(): Observable<any> {
    return this.http.get(env.baseApiUrl + 'motorista', this.httpUtils.headers());
  }

  buscarMotorista(id): Observable<any> {
    return this.http.get(env.baseApiUrl + 'motorista/' + id, this.httpUtils.headers());
  }

  criar(motorista: Motorista): Observable<any> {
    return this.http.post(env.baseApiUrl + 'motorista', motorista, this.httpUtils.headers());
  }

  atualizar(motorista: Motorista, id): Observable<any> {
    return this.http.put(env.baseApiUrl + 'motorista/' + id, motorista, this.httpUtils.headers());
  }

  remover(id): Observable<any> {
    return this.http.delete(env.baseApiUrl + 'motorista/' + id, this.httpUtils.headers());
  }

}
