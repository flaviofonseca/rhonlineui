import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  salvarCargo(body: any): Observable<any> {
    return this.http.post(`${environment.url}/cargo`, body);
  }

  excluirCargo(id: any): Observable<any> {
    return this.http.delete(`${environment.url}/cargo/${id}`);
  }

  obterPeloId(id: any): Observable<any> {
    return this.http.get(`${environment.url}/cargo/${id}`);
  }

  listarTodos(): Observable<any> {
    return this.http.get(`${environment.url}/cargo`);
  }

  obterPeloTermo(term): Observable<any> {
    const params = new HttpParams().set('termo', term);
    return this.http.get(`${environment.url}/cargo/obterPeloTermo`, { params });
  }
}
