import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../model/especialidad';
import { Subject } from 'rxjs';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class EspecialidadService
{
private url= `${base_url}/especialidades`
private confirmarEliminacion = new Subject<Boolean>()
private listaCambio = new Subject<Especialidad[]>()

  constructor(private http:HttpClient) { }
  list()
  {
    return this.http.get<Especialidad[]>(this.url);
  }
  insert(especialidad:Especialidad)
  {
    return this.http.post(this.url, especialidad);
  }

  setList(ListaNueva:Especialidad[])
  {
    this.listaCambio.next(ListaNueva);
  }
  getList()
  {
    return this.listaCambio.asObservable();
  }

  listID(id:number)
  {
    return this.http.get<Especialidad>(`${this.url}/${id}`);
  }


  update(aut: Especialidad)
  {
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