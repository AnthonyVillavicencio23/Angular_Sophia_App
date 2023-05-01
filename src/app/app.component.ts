import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const http = require("http");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  title = 'demoCrud';
  constructor(private http: HttpClient) {}


  ngOnInit() {
    const url = 'http://localhost:3000/';

    this.http.get<any[]>(url).subscribe((data) => {

    });
  }

}



