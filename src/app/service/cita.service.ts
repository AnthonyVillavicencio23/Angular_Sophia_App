import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cita } from '../model/cita';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private url = `${base_url}/citas`
  private listaCambio = new Subject<Cita[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Cita[]>(this.url);
  }
  insert(cita: Cita) {
    return this.http.post(this.url, cita);
  }
  setList(listaNueva: Cita[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
