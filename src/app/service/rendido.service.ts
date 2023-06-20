import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Rendido} from '../model/rendido';

@Injectable({
  providedIn: 'root'
})
export class RendidoService {
  private listacam = new Subject<Rendido[]>()
  url: string = environment.base + "/rendido"
  constructor(private http: HttpClient) {}

  getRendidos(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Rendido[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(ListaNew:Rendido[])
  {
    this.listacam.next(ListaNew);
  }
  getList()
  {
    return this.listacam.asObservable();
  }
  getRendido(idRendido: number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Rendido>(`${this.url}/${idRendido}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  deleteRendido(idRendido: number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${idRendido}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addRendido(rendido: Rendido){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, rendido, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  updateRendido(rendido: Rendido){
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, rendido, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
}
