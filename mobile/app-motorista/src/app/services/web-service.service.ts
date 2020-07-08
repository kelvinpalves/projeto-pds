import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  //hardCodado
  token: string = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NTAyMTEyN30.hVJiMhmQJzR3LmmFKu3p9Yr1rKzWHqRzYfd_j_dCltrKgq78DVv1HSXffTxGeH8bgH-OYr9y9M1uY8zTNHJG6g'
  
  constructor(
    private http: HttpClient, 
  ) { }

  saveLocalization(localization){
    const body = {
      veiculo: '1',
      motorista: '1',
      latitude: localization.latitude,
      longitude: localization.longitude,
      velocidade: localization.speed,
      dataHoraEvento: this.getDate()
    }
    return this.http.post(`${environment.apiUrl}/rota/novo-ponto`, body, this.headers())
  }

  fetchLocalizations(){
    const body = {
      veiculo: '1',
      inicio: '1900-01-01',
      fim: this.getDate()
    }
    return this.http.post(`${environment.apiUrl}/rota/listar-pontos`, body, this.headers())
  }


  headers() {
    let httpHeaders = new HttpHeaders();
    return {
      headers: httpHeaders.set(
        'Authorization', `Bearer ${this.token}`
      )
    }
  }

  private getDate(){
    let today = new Date()
    return `${today.getFullYear()}-0${today.getMonth()+1}-0${today.getDate()}`    
  }
}
