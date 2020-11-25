import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  obterPeloTermo(term): Observable<any> {
    const params = new HttpParams().set('termo', term);
    return this.http.get(`${environment.url}/cidade/obterPeloTermo`, { params });
  }
}
