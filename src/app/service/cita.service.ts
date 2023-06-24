import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { Cita } from '../model/cita';
import { CitaCatDTO } from '../model/CitaCatDTO';
import { CitaPsicoDTO } from '../model/CitaPsicoDTO';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private url = `${base_url}/citas`
  private listaCambio = new Subject<Cita[]>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Cita[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(cita: Cita) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cita, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: Cita[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  getCountPsicologoByCat(): Observable<CitaCatDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<CitaCatDTO[]>(`${this.url}/citas-count`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getCountCitaByPsico():Observable<CitaPsicoDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<CitaPsicoDTO[]>(`${this.url}/citas-count-psicologo`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
