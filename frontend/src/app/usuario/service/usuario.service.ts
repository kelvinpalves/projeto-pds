import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment'
import { HttpUtilService } from '../../common';
import { Usuario } from '../models';

@Injectable()
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  buscar(): Observable<any> {
    return this.http.get(env.baseApiUrl + 'usuario', this.httpUtils.headers());
  }

  buscarUsuario(id): Observable<any> {
    return this.http.get(env.baseApiUrl + 'usuario/' + id, this.httpUtils.headers());
  }

  criar(usuario: Usuario): Observable<any> {
    return this.http.post(env.baseApiUrl + 'usuario', usuario, this.httpUtils.headers());
  }

  atualizar(usuario: Usuario, id): Observable<any> {
    return this.http.put(env.baseApiUrl + 'usuario/' + id, usuario, this.httpUtils.headers());
  }

  remover(id): Observable<any> {
    return this.http.delete(env.baseApiUrl + 'usuario/' + id, this.httpUtils.headers());
  }

}
