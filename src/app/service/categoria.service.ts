import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catCita } from '../model/catCita';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private url = `${base_url}/catCita`;
  private listaCambio = new Subject<catCita[]>();
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
    return this.http.put(this.url + '/' + cate.id, cate);
  }
}
