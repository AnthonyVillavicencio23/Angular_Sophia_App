import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pruebaevaluacion',
  templateUrl: './pruebaevaluacion.component.html',
  styleUrls: ['./pruebaevaluacion.component.css']
})
export class PruebaevaluacionComponent implements OnInit{

  constructor(public route:ActivatedRoute){

  }

  ngOnInit(): void {

  }
}
