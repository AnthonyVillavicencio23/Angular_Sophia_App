import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Psicologo } from '../model/psicologo';
import { Subject } from 'rxjs';
import { curso } from '../model/curso';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class PsicologoService
{
private url= `${base_url}/psicologos`
private confirmarEliminacion = new Subject<Boolean>()
private listaCambio = new Subject<Psicologo[]>()

  constructor(private http:HttpClient) { }
  list()
  {
    return this.http.get<Psicologo[]>(this.url);
  }
  insert(psicologo:Psicologo)
  {
    return this.http.post(this.url, psicologo);
  }

  setList(ListaNueva:Psicologo[])
  {
    this.listaCambio.next(ListaNueva);
  }
  getList()
  {
    return this.listaCambio.asObservable();
  }

  listID(id:number)
  {
    return this.http.get<Psicologo>(`${this.url}/${id}`);
  }


  update(aut: Psicologo)
  {
    return this.http.put(this.url + "/" + aut.id, aut)
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
