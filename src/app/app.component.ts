import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  title = 'demoCrud';

  curso: any [];

  constructor(private http: HttpClient)
  {
    this.curso= [];

    http.get<any>(`http://localhost:3000`).subscribe(response=> {
      this.curso= response.results;
    }

    )
  }

}



