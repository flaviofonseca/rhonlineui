import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  salvarFuncionario(body: any): Observable<any> {
    return this.http.post(`${environment.url}/funcionario/`, body);
  }

  excluirFuncionario(id: any): Observable<any> {
    return this.http.delete(`${environment.url}/funcionario/${id}`);
  }

  obterPeloId(id: any): Observable<any> {
    return this.http.get(`${environment.url}/funcionario/${id}`);
  }

  listarTodos(): Observable<any> {
    return this.http.get(`${environment.url}/funcionario`);
  }
}
