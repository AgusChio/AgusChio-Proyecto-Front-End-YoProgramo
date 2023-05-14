import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreMi } from '../models/sobre-mi';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService {

  constructor(private http : HttpClient) { }

  private URL = 'https://backe-end-portafolio.onrender.com/api/sobreMi'

  public getSobreMi(): Observable<SobreMi[]> {
    return this.http.get<SobreMi[]>(`${this.URL}/todoSobreMi`);
  }

  public listaPorId(id: number): Observable<SobreMi> {
    return this.http.get<SobreMi>(`${this.URL}/${id}`);
  }

  public save(sobreMi : SobreMi): Observable<SobreMi> {
    return this.http.post<SobreMi>(`${this.URL}/agregar`, sobreMi);
  }

  public update(id: number, sobreMi : SobreMi): Observable<any> {
    return this.http.put<any>(`${this.URL}/actualizar/${id}`, sobreMi);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }

}
