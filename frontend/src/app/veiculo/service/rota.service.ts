import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment'
import { HttpUtilService } from '../../common';
import { ListarRota } from '../models';

@Injectable()
export class RotaService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  buscar(rota: ListarRota): Observable<any> {
    return this.http.post(env.baseApiUrl + 'rota/listar-pontos', rota, this.httpUtils.headers());
  }
 
}
