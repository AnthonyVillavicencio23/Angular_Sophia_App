import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modsugeridos',
  templateUrl: './modsugeridos.component.html',
  styleUrls: ['./modsugeridos.component.css']
})
export class ModsugeridosComponent implements OnInit
{

  constructor(public route:ActivatedRoute)
  {

  }

  ngOnInit(): void {

  }

}
