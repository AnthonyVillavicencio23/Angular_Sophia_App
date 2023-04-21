import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class cursoComponent implements OnInit
{

  constructor(public route:ActivatedRoute)
  {

  }

  ngOnInit(): void
  {

  }
}


