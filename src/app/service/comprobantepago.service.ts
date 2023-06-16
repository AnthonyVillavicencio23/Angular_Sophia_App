import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ComprobantePago } from '../model/comprobantepago';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ComprobantepagoService {

  private url = `${base_url}/comprobantepago`
  private listaCambio = new Subject<ComprobantePago[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ComprobantePago[]>(this.url);
  }
  insert(comprobantepago: ComprobantePago) {
    return this.http.post(this.url, comprobantepago);
  }

  setList(listaNueva: ComprobantePago[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
