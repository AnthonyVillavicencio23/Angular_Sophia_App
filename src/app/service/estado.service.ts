import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estado } from '../model/estado';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private url=`${base_url}/estados`

  private listacam = new Subject<Estado[]>()


  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Estado[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(Listanew:Estado[])
  {
    this.listacam.next(Listanew);
  }
  getList()
  {
    return this.listacam.asObservable();
  }

}
