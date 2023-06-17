import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Tarjeta } from '../model/tarjeta';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  url: string = environment.base + "/tarjeta"
  constructor(private http: HttpClient){}

  getTarjetas(){
    return this.http.get<Tarjeta[]>(this.url);
  }
  getTarjeta(idTarjeta: number){
    return this.http.get<Tarjeta>(this.url + "/" + idTarjeta);
  }
  deleteTarjeta(idTarjeta: number){
    return this.http.delete<Tarjeta>(this.url + "/" + idTarjeta);
  }
  addTarjeta(tarjeta: Tarjeta){
    return this.http.post<Tarjeta>(this.url, tarjeta);
  }
  updateTarjeta(tarjeta: Tarjeta){
    return this.http.put<Tarjeta>(this.url, tarjeta);
  }
}
