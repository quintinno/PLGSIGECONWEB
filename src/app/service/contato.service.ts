import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContatoModel } from '../model/contato-model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private URL_API_USUARIO = "http://localhost:9090/contato";

  constructor( private httpClient: HttpClient ) { }

  recuperarContato() : Observable<ContatoModel[]> {
    return this.httpClient.get<ContatoModel[]>(`${this.URL_API_USUARIO}`);
  }

  cadastrarContato(contato: ContatoModel) : Observable<Object> {
    return this.httpClient.post(`${this.URL_API_USUARIO}`, contato);
  }

  recuperarContatoPorId(id: number) : Observable<ContatoModel> {
    return this.httpClient.get<ContatoModel>(`${this.URL_API_USUARIO}/${id}`);
  }

  atualizarContato(id: number, contato: ContatoModel) : Observable<Object> {
    return this.httpClient.put(`${this.URL_API_USUARIO}/${id}`, contato);
  }

  removerContato(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.URL_API_USUARIO}/${id}`);
  }

}
