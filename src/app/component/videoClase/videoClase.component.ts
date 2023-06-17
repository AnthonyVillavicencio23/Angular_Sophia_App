import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './videoClase.component.html',
  styleUrls: ['./videoClase.component.css']
})
export class VideoClaseComponent implements OnInit
{

  constructor(public route:ActivatedRoute)
  {

  }

  ngOnInit(): void {

  }

}