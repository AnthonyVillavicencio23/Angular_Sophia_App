import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Evaluacion } from '../model/evaluacion';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Evaluacion[]>(this.url);
  }
  insert(evaluacion: Evaluacion) {
    return this.http.post(this.url, evaluacion);
  }
  setList(listaNueva: Evaluacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
