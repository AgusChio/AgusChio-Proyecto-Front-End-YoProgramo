import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hys } from '../models/hys';
import { ApplicationSkills } from '../models/application-skills';

@Injectable({
  providedIn: 'root'
})
export class HysService {


  constructor(private http: HttpClient) { }

  private URL = 'https://backe-end-portafolio.onrender.com/api/skills';

  public getSkills(): Observable<Hys[]> {
    return this.http.get<Hys[]>(`${this.URL}/todasSkills`);
  }

  public listaPorId(id: number): Observable<Hys> {
    return this.http.get<Hys>(`${this.URL}/${id}`);
  }

  public create(hys: ApplicationSkills): Observable<ApplicationSkills> {
    return this.http.post<ApplicationSkills>(`${this.URL}/agregar`, hys);
  }

  public update(id: number, hys: ApplicationSkills): Observable<any> {
    return this.http.put<any>(`${this.URL}/actualizar/${id}`, hys);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
