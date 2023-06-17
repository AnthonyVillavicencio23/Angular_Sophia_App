import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Rendido} from '../model/rendido';

@Injectable({
  providedIn: 'root'
})
export class RendidoService {
  url: string = environment.base + "/rendido"
  constructor(private http: HttpClient) {}

  getRendidos(){
    return this.http.get<Rendido[]>(this.url);
  }
  getRendido(idRendido: number){
    return this.http.get<Rendido>(this.url + "/" + idRendido);
  }
  deleteRendido(idRendido: number){
    return this.http.delete<Rendido>(this.url + "/" + idRendido);
  }
  addRendido(rendido: Rendido){
    return this.http.post<Rendido>(this.url, rendido);
  }
  updateRendido(rendido: Rendido){
    return this.http.put<Rendido>(this.url, rendido);
  }
}
