import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { PruebaEvaluacion} from '../model/pruebaevaluacion';

@Injectable({
  providedIn: 'root'
})
export class PruebaevaluacionService {
  url: string = environment.base + "/pruebaevaluacion"
  constructor(private http: HttpClient) {}

  getPruebaEvaluaciones(){
    return this.http.get<PruebaEvaluacion[]>(this.url);
  }
  getPruebaEvaluacion(idPruebaEvaluacion: number){
    return this.http.get<PruebaEvaluacion>(this.url + "/" + idPruebaEvaluacion);
  }
  deletePruebaEvaluacion(idPruebaEvaluacion: number){
    return this.http.delete<PruebaEvaluacion>(this.url + "/" + idPruebaEvaluacion);
  }
  addPruebaEvaluacion(pruebaevaluacion: PruebaEvaluacion){
    return this.http.post<PruebaEvaluacion>(this.url, pruebaevaluacion);
  }
  updatePruebaEvaluacion(pruebaevaluacion: PruebaEvaluacion){
    return this.http.put<PruebaEvaluacion>(this.url, pruebaevaluacion);
  }
}
