import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { PruebaEvaluacion} from '../model/pruebaevaluacion';

@Injectable({
  providedIn: 'root'
})
export class PruebaevaluacionService {
  private listacam = new Subject<PruebaEvaluacion[]>()
  url: string = environment.base + "/pruebaevaluacion"
  constructor(private http: HttpClient) {}

  getPruebaEvaluaciones(){
    let token = sessionStorage.getItem("token");
    return this.http.get<PruebaEvaluacion[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(ListaNew:PruebaEvaluacion[])
  {
    this.listacam.next(ListaNew);
  }
  getList()
  {
    return this.listacam.asObservable();
  }
  getPruebaEvaluacion(idPruebaEvaluacion: number){
    let token = sessionStorage.getItem("token");
    return this.http.get<PruebaEvaluacion>(`${this.url}/${idPruebaEvaluacion}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  deletePruebaEvaluacion(idPruebaEvaluacion: number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${idPruebaEvaluacion}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addPruebaEvaluacion(pruebaevaluacion: PruebaEvaluacion){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, pruebaevaluacion, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  updatePruebaEvaluacion(pruebaevaluacion: PruebaEvaluacion){
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, pruebaevaluacion, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
}
