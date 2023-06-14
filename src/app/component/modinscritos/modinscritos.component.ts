import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modinscritos',
  templateUrl: './modinscritos.component.html',
  styleUrls: ['./modinscritos.component.css']
})
export class ModinscritosComponent implements OnInit
{

  constructor(public route:ActivatedRoute)
  {

  }

  ngOnInit(): void {

  }

}
