import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Modulos_Sugeridos } from '../model/modulos_sugeridos';
import { moduloService } from './modulo.service';


const base_url = environment.base


@Injectable({
  providedIn: 'root'
})
export class ModuloSugeridoService {

  private url = `${base_url}/modulos_sugeridos`
  private listaCambio = new Subject<Modulos_Sugeridos[]>()
  private confirmarEliminacion = new Subject<Boolean>()


  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Modulos_Sugeridos[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(mod_sugerido: Modulos_Sugeridos) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, mod_sugerido, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Modulos_Sugeridos[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id:number)
  {
    let token = sessionStorage.getItem("token");
    return this.http.get<Modulos_Sugeridos>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(modsuge: Modulos_Sugeridos)
  {
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, modsuge, {
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




