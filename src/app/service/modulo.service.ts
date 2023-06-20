import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Modulo } from '../model/modulo';

const base_url = environment.base


@Injectable({
  providedIn: 'root'
})
export class moduloService
{

  private url = `${base_url}/modulo`
  private listaCambio = new Subject<Modulo[]>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Modulo[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(modulo: Modulo) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, modulo, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }


  setList(listaNueva: Modulo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
