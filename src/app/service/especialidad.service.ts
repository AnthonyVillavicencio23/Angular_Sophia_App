import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Especialidad[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(especialidad:Especialidad)
  {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, especialidad, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Especialidad>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    }); }


  update(aut: Especialidad)
  {
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, aut, {
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
