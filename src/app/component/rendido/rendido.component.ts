import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendido',
  templateUrl: './rendido.component.html',
  styleUrls: ['./rendido.component.css']
})
export class RendidoComponent implements OnInit{

  constructor(public route:ActivatedRoute){

  }

  ngOnInit(): void {

  }
}
