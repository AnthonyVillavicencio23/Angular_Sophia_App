import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { curso } from '../model/curso';
import { Subject } from 'rxjs';


const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class cursoService
{

  private listacam = new Subject<curso[]>()

  private confirmarEliminacion = new Subject<Boolean>()


  private url=`${base_url}/curso`
  constructor(private http:HttpClient) { }

  list()
  {
    let token = sessionStorage.getItem("token");
    return this.http.get<curso[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(curso:curso)
  {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, curso, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(ListaNew:curso[])
  {
    this.listacam.next(ListaNew);
  }
  getList()
  {
    return this.listacam.asObservable();
  }


  listID(id:number)
  {
    let token = sessionStorage.getItem("token");
    return this.http.get<curso>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(cur: curso)
  {
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, cur, {
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
