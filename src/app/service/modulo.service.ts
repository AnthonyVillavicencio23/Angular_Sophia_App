import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Modulo[]>(this.url);
  }
  insert(modulo: Modulo) {
    return this.http.post(this.url, modulo);
  }


  setList(listaNueva: Modulo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}