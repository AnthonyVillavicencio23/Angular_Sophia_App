import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Modulos_Inscritos } from '../model/modulos_inscritos';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ModuloInscritoService {

  private url = `${base_url}/modulos_inscritos`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Modulos_Inscritos[]>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Modulos_Inscritos[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(mod_inscrito: Modulos_Inscritos) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, mod_inscrito, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Modulos_Inscritos[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id:number)
  {
    let token = sessionStorage.getItem("token");
    return this.http.get<Modulos_Inscritos>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(modinscri: Modulos_Inscritos)
  {
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, modinscri, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

}







