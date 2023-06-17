import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Videoclase } from '../model/videoClase';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class VideoClaseService
{
  private url = `${base_url}/videoclase`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Videoclase[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Videoclase[]>(this.url);
  }
  insert(videoClase: Videoclase) {
    return this.http.post(this.url, videoClase);
  }

  setList(listaNueva: Videoclase[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id:number)
  {
    return this.http.get<Videoclase>(`${this.url}/${id}`);
  }


  update(aut: Videoclase)
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