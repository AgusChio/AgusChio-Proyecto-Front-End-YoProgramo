import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';
import { ApplicationExperiencia } from 'src/app/models/application-experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http : HttpClient) { }
  private URL = 'https://backe-end-portafolio.onrender.com/api/servicios'

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.URL}/todosServicios`);
  }

  public listaPorId(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.URL}/${id}`);
  }

  public save(experiencias : Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.URL}/agregar`, experiencias);
  }

  public update(id: number, experiencias :  ApplicationExperiencia): Observable<any> {
    console.log(experiencias);
    console.log(id);
    return this.http.put<any>(`${this.URL}/actualizar/${id}`, experiencias);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
