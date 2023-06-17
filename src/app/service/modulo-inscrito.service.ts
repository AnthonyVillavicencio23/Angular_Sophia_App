import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Modulos_Inscritos[]>(this.url);
  }
  insert(mod_inscrito: Modulos_Inscritos) {
    return this.http.post(this.url, mod_inscrito);
  }

  setList(listaNueva: Modulos_Inscritos[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id:number)
  {
    return this.http.get<Modulos_Inscritos>(`${this.url}/${id}`);
  }

  update(modinscri: Modulos_Inscritos)
  {
    return this.http.put(this.url, modinscri);
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







