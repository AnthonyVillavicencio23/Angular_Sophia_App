import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Psicologo } from '../model/psicologo';
import { Subject,Observable } from 'rxjs';
import { EspecialidadPsicologoDTO } from '../model/EspecialidadPsicologoDTO';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Psicologo[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(psicologo:Psicologo)
  {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, psicologo, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Psicologo>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }


  update(aut: Psicologo)
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

  getContarPsicologoByEspecialidad(): Observable<EspecialidadPsicologoDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<EspecialidadPsicologoDTO[]>(`${this.url}/psicologos-count`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getContar_mayor_Especialidad(): Observable<EspecialidadPsicologoDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<EspecialidadPsicologoDTO[]>(`${this.url}/especialidades-count`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
