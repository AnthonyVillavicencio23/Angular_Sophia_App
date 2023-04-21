import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { curso } from '../model/curso';
import { Subject } from 'rxjs';


const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class cursoService
{

  private listacam = new Subject<curso[]>()


  private url=`${base_url}/curso`
  constructor(private http:HttpClient) { }

  list()
  {
    return this.http.get<curso[]>(this.url);
  }

  insert(curso:curso)
  {
    return this.http.post(this.url, curso);
  }
  setList(ListaNew:curso[])
  {
    this.listacam.next(ListaNew);
  }
  getList()
  {
    return this.listacam.asObservable();
  }


  listID(id:number)
  {
    return this.http.get<curso>(`${this.url}/${id}`);
  }

  update(cur: curso)
  {
    return this.http.put(this.url + "/" + cur.id, cur)
  }


}
