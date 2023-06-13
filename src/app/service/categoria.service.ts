import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catCita } from '../model/catCita';
import { Subject } from 'rxjs';
import { Estado } from '../model/estado';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private url = `${base_url}/Catcitas`;
  private listaCambio = new Subject<catCita[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<catCita[]>(this.url);
  }
  insert(catcita: catCita) {
    return this.http.post(this.url, catcita);
  }

  setList(ListaNueva: catCita[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<catCita>(`${this.url}/${id}`);
  }
  update(cate: catCita) {
    return this.http.put(this.url, cate);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setconfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
