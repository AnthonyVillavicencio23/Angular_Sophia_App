import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<catCita[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(catcita: catCita) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, catcita, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva: catCita[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<catCita>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(cate: catCita) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, cate, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setconfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
