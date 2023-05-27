import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tutor } from '../model/tutor';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class TutorService {
  private url = `${base_url}/tutores`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Tutor[]>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Tutor[]>(this.url);
  }
  insert(tutor: Tutor) {
    return this.http.post(this.url, tutor);
  }
  setList(listaNueva: Tutor[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Tutor>(`${this.url}/${id}`);
  }
  update(aut: Tutor) {
    return this.http.put(this.url + '/' + aut.id, aut);
  }
  //http- HttpClientModule: get-post-put-delete, hacer un cuadro comparativo
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
