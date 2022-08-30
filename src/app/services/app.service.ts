import { Municipio } from './../models/municipio';
import { Estado } from './../models/estado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlEstado: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  findAllEstado(): Observable<Estado[]> {
    return this.http.get<any[]>(urlEstado);
  }

  findAllMunicipio(uf: number): Observable<Municipio[]> {
    return this.http.get<any[]>(`${urlEstado}/${uf}/municipios`);
  }
}
