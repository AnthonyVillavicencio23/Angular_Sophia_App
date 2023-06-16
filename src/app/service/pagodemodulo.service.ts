import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { PagoDeModulo } from '../model/pagodemodulo';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PagodemoduloService {

  private url = `${base_url}/pagodemodulo`
  private listaCambio = new Subject<PagoDeModulo[]>()

  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<PagoDeModulo[]>(this.url);
  }
  insert(pagodemodulo: PagoDeModulo) {
    return this.http.post(this.url, pagodemodulo);
  }

  setList(listaNueva: PagoDeModulo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<PagoDeModulo>(`${this.url}/${id}`);
  }
  update(aut: PagoDeModulo) {
    return this.http.put(this.url, aut);
  }


  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

}
