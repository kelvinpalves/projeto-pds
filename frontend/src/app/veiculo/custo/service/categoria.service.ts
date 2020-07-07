import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment'
import { HttpUtilService } from '../../../common';

@Injectable()
export class CategoriaService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  
  buscarCombo(): Observable<any> {
    return this.http.get(env.baseApiUrl + 'categoria/combo', this.httpUtils.headers());
  }

}
