import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment'
import { HttpUtilService } from '../../../common';
import { Relatorio } from '../models';

@Injectable()
export class RelatorioService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  buscar(relatorio): Observable<any> {
    return this.http.post(env.baseApiUrl + 'relatorio', relatorio, this.httpUtils.headers());
  }

}
