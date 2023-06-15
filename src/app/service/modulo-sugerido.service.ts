import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Modulos_Sugeridos } from '../model/modulos_sugeridos';


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
    return this.http.get<Modulos_Sugeridos[]>(this.url);
  }
  insert(mod_sugerido: Modulos_Sugeridos) {
    return this.http.post(this.url, mod_sugerido);
  }

  setList(listaNueva: Modulos_Sugeridos[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id:number)
  {
    return this.http.get<Modulos_Sugeridos>(`${this.url}/${id}`);
  }

  update(modsuge: Modulos_Sugeridos)
  {
    return this.http.put(this.url, modsuge);
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




