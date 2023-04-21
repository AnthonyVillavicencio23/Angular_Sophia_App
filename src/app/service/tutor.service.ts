import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tutor } from '../model/tutor';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class TutorService {
private url=`${base_url}/Tutores`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Tutor[]>(this.url);
  }
}
