import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  obterPessoaPeloCpf(value: any): Observable<any> {
    const params = new HttpParams().set('cpf', value);
    return this.http.get(`${environment.url}/pessoa/pessoaByCpf`, { params });
  }
}
