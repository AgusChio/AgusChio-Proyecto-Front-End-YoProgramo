import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URL = 'https://backe-end-portafolio.onrender.com/api/persona'

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.URL}/todasPersonas`);
  }

  public editarPersona(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.URL}/actualizar/${id}`, persona);
  }
}
