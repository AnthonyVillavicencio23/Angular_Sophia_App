import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Evaluacion } from '../model/evaluacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  private url=`${base_url}/evaluacion`
  private listaCambio = new Subject<Evaluacion[]>()

  constructor(private http:HttpClient) { }

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Evaluacion[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(evaluacion: Evaluacion) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, evaluacion, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: Evaluacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
