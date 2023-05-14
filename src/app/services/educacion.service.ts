import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http : HttpClient) { }

  private URL = 'https://backe-end-portafolio.onrender.com/api/educacion'


  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.URL}/todasEducaciones`);
  }

  public listaPorId(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.URL}/${id}`);
  }

  public save(educaciones : Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.URL}/agregar`, educaciones);
  }

  public update(id: number, educaciones : Educacion): Observable<any> {
    return this.http.put<any>(`${this.URL}/actualizar/${id}`, educaciones);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
