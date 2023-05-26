import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';
import { ApplicationProyectos } from '../models/application-proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http : HttpClient) { }

  private URL = 'https://backe-end-portafolio.onrender.com/api/proyectos'

  public getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.URL}/todosProyectos`);
  }

  public listaPorId(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(`${this.URL}/${id}`);
  }

  public create(proyecto : ApplicationProyectos): Observable<ApplicationProyectos> {
    return this.http.post<ApplicationProyectos>(`${this.URL}/agregar`, proyecto);
  }

  public update(id: number, proyecto : ApplicationProyectos): Observable<any> {
    return this.http.put<any>(`${this.URL}/actualizar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
