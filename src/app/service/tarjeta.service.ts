import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Tarjeta } from '../model/tarjeta';
import { TarjetaTutorDTO } from '../model/tarjetaTutorDTO';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private listacam = new Subject<Tarjeta[]>()
  url: string = environment.base + "/tarjeta"
  constructor(private http: HttpClient){}

  getTarjetas(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Tarjeta[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(ListaNew:Tarjeta[])
  {
    this.listacam.next(ListaNew);
  }
  getList()
  {
    return this.listacam.asObservable();
  }
  getTarjeta(idTarjeta: number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Tarjeta>(`${this.url}/${idTarjeta}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  deleteTarjeta(idTarjeta: number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${idTarjeta}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  addTarjeta(tarjeta: Tarjeta){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, tarjeta, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  updateTarjeta(tarjeta: Tarjeta){
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, tarjeta, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
  getCantidadTarjetasCredito(){
    let token = sessionStorage.getItem("token");
   return this.http.get(this.url + "/countTarjetasDebito", {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
  getCantidadTarjetasPorTutor(){
    let token = sessionStorage.getItem("token");
   return this.http.get<TarjetaTutorDTO[]>(this.url + "/cantidadTarjetasPorTutor", {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
}

